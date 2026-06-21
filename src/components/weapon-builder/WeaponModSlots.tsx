import { useEffect, useMemo, useRef, useState } from "react";
import type { MouseEvent } from "react";
import type { ItemEntry, ItemModSubcategory } from "../../lib/items";
import { itemModSubcategoryLabels } from "../../lib/items";
import type { WeaponBuildSelection } from "../../utils/weapons/weaponBuilder";
import {
  getCompatibleModsForSlot,
  getWeaponModSlots,
} from "../../utils/weapons/weaponBuilder";
import ModTooltip from "./ModTooltip";

type WeaponModSlotsProps = {
  weapon: ItemEntry;
  items: ItemEntry[];
  selection: WeaponBuildSelection;
  onChange: (slot: ItemModSubcategory, mod: ItemEntry | null) => void;
};

type TooltipPosition = {
  x: number;
  y: number;
};

const REMOVE_ALL_HOLD_MS = 1000;

function getSlotLabel(slot: ItemModSubcategory) {
  return itemModSubcategoryLabels[slot] ?? slot;
}

function getSlotShortLabel(slot: ItemModSubcategory) {
  if (slot.includes("magazine")) return "MAG";
  if (slot.includes("optic")) return "OPTIC";
  if (slot.includes("barrel")) return "BARREL";
  if (slot.includes("dampener")) return "DAMP";
  if (slot.includes("array")) return "ARRAY";
  if (slot.includes("shield")) return "SHIELD";
  if (slot.includes("chip")) return "CHIP";
  if (slot.includes("generator")) return "GEN";

  return getSlotLabel(slot).toUpperCase();
}

function getModSummary(mod: ItemEntry) {
  return mod.effect ?? mod.description ?? "Compatible weapon upgrade.";
}

function getRarityClass(item: ItemEntry | null) {
  return item?.rarity ? `rarity-${item.rarity}` : "";
}

export default function WeaponModSlots({
  weapon,
  items,
  selection,
  onChange,
}: WeaponModSlotsProps) {
  const slots = useMemo(() => getWeaponModSlots(weapon), [weapon]);

  const [activeSlot, setActiveSlot] = useState<ItemModSubcategory | null>(
    slots[0] ?? null
  );

  const [hoveredMod, setHoveredMod] = useState<ItemEntry | null>(null);

  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({
    x: 0,
    y: 0,
  });

  const [isHoldingRemove, setIsHoldingRemove] = useState(false);

  const removeAllTimerRef = useRef<number | null>(null);
  const removeAllTriggeredRef = useRef(false);

  useEffect(() => {
    setActiveSlot(slots[0] ?? null);
    setHoveredMod(null);
  }, [weapon.id, slots]);

  useEffect(() => {
    return () => {
      if (removeAllTimerRef.current !== null) {
        window.clearTimeout(removeAllTimerRef.current);
      }
    };
  }, []);

  const activeMods = useMemo(() => {
    if (!activeSlot) return [];

    return getCompatibleModsForSlot(weapon, activeSlot, items);
  }, [weapon, activeSlot, items]);

  const activeMod = activeSlot ? selection[activeSlot] ?? null : null;

  const handleModHover = (
    event: MouseEvent<HTMLButtonElement>,
    mod: ItemEntry
  ) => {
    setHoveredMod(mod);

    setTooltipPosition({
      x: Math.min(event.clientX + 42, window.innerWidth - 500),
      y: Math.max(24, Math.min(event.clientY - 120, window.innerHeight - 560)),
    });
  };

  const clearRemoveAllTimer = () => {
    if (removeAllTimerRef.current !== null) {
      window.clearTimeout(removeAllTimerRef.current);
      removeAllTimerRef.current = null;
    }

    setIsHoldingRemove(false);
  };

  const removeAllMods = () => {
    slots.forEach((slot) => {
      onChange(slot, null);
    });

    setHoveredMod(null);
  };

  const handleRemovePointerDown = () => {
    removeAllTriggeredRef.current = false;
    setIsHoldingRemove(true);

    removeAllTimerRef.current = window.setTimeout(() => {
      removeAllTriggeredRef.current = true;
      removeAllMods();
      clearRemoveAllTimer();
    }, REMOVE_ALL_HOLD_MS);
  };

  const handleRemovePointerUp = () => {
    clearRemoveAllTimer();
  };

  const handleRemoveClick = () => {
    if (!activeSlot) return;

    if (removeAllTriggeredRef.current) {
      removeAllTriggeredRef.current = false;
      return;
    }

    onChange(activeSlot, null);
    setHoveredMod(null);
  };

  if (!slots.length) {
    return (
      <section className="weaponBuilder__modDock weaponBuilder__modDock--empty">
        <div className="weaponBuilder__modDockHead">
          <h2>Mods</h2>
          <span>Locked</span>
        </div>

        <p className="weaponBuilder__empty">
          This weapon has no configurable mod slots.
        </p>
      </section>
    );
  }

  return (
    <section className="weaponBuilder__modDock">
      <div className="weaponBuilder__modDockHead">
        <div>
          <span className="weaponBuilder__eyebrow">Installed upgrades</span>
          <h2>Mods</h2>
        </div>

        <strong>
          {Object.values(selection).filter(Boolean).length}/{slots.length}
        </strong>
      </div>

      <div className="weaponBuilder__modSlotsBar" role="tablist">
        {slots.map((slot) => {
          const selectedMod = selection[slot] ?? null;
          const compatibleMods = getCompatibleModsForSlot(weapon, slot, items);
          const isActive = activeSlot === slot;

          return (
            <button
              key={slot}
              type="button"
              role="tab"
              aria-selected={isActive}
              title={getSlotLabel(slot)}
              className={`weaponBuilder__modSlotCard ${getRarityClass(
                selectedMod
              )} ${isActive ? "is-active" : ""} ${
                selectedMod ? "has-mod" : ""
              }`}
              onClick={() => setActiveSlot(slot)}
              onMouseMove={(event) => {
                if (selectedMod) handleModHover(event, selectedMod);
              }}
              onMouseLeave={() => setHoveredMod(null)}
            >
              <span className="weaponBuilder__modSlotType">
                {getSlotShortLabel(slot)}
              </span>

              <div className="weaponBuilder__modSlotIcon">
                {selectedMod?.icon ? (
                  <img src={selectedMod.icon} alt="" />
                ) : (
                  <span>+</span>
                )}
              </div>

              <small>
                {selectedMod
                  ? selectedMod.rarity
                  : `${compatibleMods.length} mods`}
              </small>
            </button>
          );
        })}
      </div>

      {activeSlot ? (
        <div className="weaponBuilder__modInspect">
          <div className="weaponBuilder__modInspectTop">
            <div>
              <span>{getSlotLabel(activeSlot)}</span>
              <strong>{activeMod ? activeMod.name : "Empty Slot"}</strong>
            </div>

            {activeMod ? (
              <button
                type="button"
                className={`weaponBuilder__removeModButton ${
                  isHoldingRemove ? "is-holding" : ""
                }`}
                onPointerDown={handleRemovePointerDown}
                onPointerUp={handleRemovePointerUp}
                onPointerLeave={handleRemovePointerUp}
                onPointerCancel={handleRemovePointerUp}
                onClick={handleRemoveClick}
                title="Click: remove current mod. Hold 3 seconds: remove all mods."
              >
                <span className="weaponBuilder__removeModLabel">
                  Remove mod
                </span>

                <span className="weaponBuilder__removeModProgress" />
              </button>
            ) : null}
          </div>

          <div className="weaponBuilder__modChoiceGrid">
            <button
              type="button"
              className={`weaponBuilder__modChoiceCard ${
                !activeMod ? "is-selected" : ""
              }`}
              onClick={() => {
                onChange(activeSlot, null);
                setHoveredMod(null);
              }}
            >
              <div className="weaponBuilder__modChoiceVisual">
                <span>+</span>
              </div>

              <div className="weaponBuilder__modChoiceContent">
                <strong>Empty Slot</strong>
                <small>None</small>
                <p>No upgrade installed in this slot.</p>
              </div>
            </button>

            {activeMods.map((mod) => {
              const isSelected = activeMod?.id === mod.id;

              return (
                <button
                  key={mod.id}
                  type="button"
                  className={`weaponBuilder__modChoiceCard rarity-${
                    mod.rarity
                  } ${isSelected ? "is-selected" : ""}`}
                  onClick={() => onChange(activeSlot, mod)}
                  onMouseMove={(event) => handleModHover(event, mod)}
                  onMouseLeave={() => setHoveredMod(null)}
                >
                  <div className="weaponBuilder__modChoiceVisual">
                    {mod.icon ? <img src={mod.icon} alt="" /> : <span>+</span>}
                  </div>

                  <div className="weaponBuilder__modChoiceContent">
                    <strong>{mod.name}</strong>
                    <small>{mod.rarity}</small>
                    <p>{getModSummary(mod)}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ) : null}

      {hoveredMod ? (
        <div
          className="weaponBuilder__modTooltipMount"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
          }}
        >
          <ModTooltip mod={hoveredMod} />
        </div>
      ) : null}
    </section>
  );
}
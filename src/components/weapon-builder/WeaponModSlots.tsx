import type { ItemEntry, ItemModSubcategory } from "../../lib/items";
import { itemModSubcategoryLabels } from "../../lib/items";
import type { WeaponBuildSelection } from "../../utils/weapons/weaponBuilder";
import {
  getCompatibleModsForSlot,
  getWeaponModSlots,
} from "../../utils/weapons/weaponBuilder";

type WeaponModSlotsProps = {
  weapon: ItemEntry;
  items: ItemEntry[];
  selection: WeaponBuildSelection;
  onChange: (slot: ItemModSubcategory, mod: ItemEntry | null) => void;
};

export default function WeaponModSlots({
  weapon,
  items,
  selection,
  onChange,
}: WeaponModSlotsProps) {
  const slots = getWeaponModSlots(weapon);

  if (!slots.length) {
    return (
      <section className="weaponBuilder__section">
        <h2>Mod Slots</h2>

        <p className="weaponBuilder__empty">
          This weapon has no configurable mod slots.
        </p>
      </section>
    );
  }

  return (
    <section className="weaponBuilder__section">
      <div className="weaponBuilder__sectionHead">
        <div>
          <span className="weaponBuilder__eyebrow">
            Compatible upgrades
          </span>

          <h2>Mod Slots</h2>
        </div>

        <strong>{slots.length}</strong>
      </div>

      <div className="weaponBuilder__slots">
        {slots.map((slot) => {
          const compatibleMods = getCompatibleModsForSlot(
            weapon,
            slot,
            items
          );

          const selectedMod = selection[slot] ?? null;

          return (
            <article
              key={slot}
              className={`weaponBuilder__slot ${
                selectedMod ? "has-mod" : ""
              }`}
            >
              <div className="weaponBuilder__slotHead">
                <div>
                  <span className="weaponBuilder__slotLabel">
                    {itemModSubcategoryLabels[slot] ?? slot}
                  </span>

                  <strong>
                    {selectedMod ? selectedMod.name : "Empty"}
                  </strong>
                </div>

                <span className="weaponBuilder__slotCount">
                  {compatibleMods.length}
                </span>
              </div>

              <select
                value={selectedMod?.id ?? ""}
                onChange={(event) => {
                  const mod =
                    compatibleMods.find(
                      (item) => item.id === event.target.value
                    ) ?? null;

                  onChange(slot, mod);
                }}
              >
                <option value="">Empty Slot</option>

                {compatibleMods.map((mod) => (
                  <option key={mod.id} value={mod.id}>
                    {mod.name}
                  </option>
                ))}
              </select>

              {selectedMod ? (
                <div className="weaponBuilder__selectedMod">
                  {selectedMod.icon ? (
                    <img src={selectedMod.icon} alt="" />
                  ) : null}

                  <div>
                    <strong>{selectedMod.name}</strong>

                    {selectedMod.description ? (
                      <p>{selectedMod.description}</p>
                    ) : null}
                  </div>
                </div>
              ) : (
                <p className="weaponBuilder__slotHint">
                  Select a compatible mod for this slot.
                </p>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
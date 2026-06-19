import { useMemo, useState } from "react";
import type { MouseEvent } from "react";
import type { ItemEntry } from "../../lib/items";
import WeaponTooltip from "./WeaponTooltip";

type WeaponSelectorProps = {
  weapons: ItemEntry[];
  selectedWeapon: ItemEntry | null;
  onSelectWeapon: (weapon: ItemEntry) => void;
};

type TooltipPosition = {
  x: number;
  y: number;
};

function sortWeapons(weapons: ItemEntry[]) {
  return [...weapons].sort((a, b) => {
    const aIsPrestige = a.rarity === "prestige";
    const bIsPrestige = b.rarity === "prestige";

    if (aIsPrestige !== bIsPrestige) {
      return aIsPrestige ? 1 : -1;
    }

    return a.name.localeCompare(b.name);
  });
}

export default function WeaponSelector({
  weapons,
  selectedWeapon,
  onSelectWeapon,
}: WeaponSelectorProps) {
  const [search, setSearch] = useState("");
  const [hoveredWeapon, setHoveredWeapon] = useState<ItemEntry | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition>({
    x: 0,
    y: 0,
  });

  const filteredWeapons = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return sortWeapons(weapons).filter((weapon) => {
      if (!normalizedSearch) return true;

      return [
        weapon.name,
        weapon.effect,
        weapon.rarity,
        weapon.description,
        ...(weapon.tags ?? []),
      ]
        .filter(Boolean)
        .some((value) =>
          String(value).toLowerCase().includes(normalizedSearch)
        );
    });
  }, [weapons, search]);

  const handleMouseMove = (
    event: MouseEvent<HTMLDivElement>,
    weapon: ItemEntry
  ) => {
    setHoveredWeapon(weapon);

    setTooltipPosition({
      x: Math.min(event.clientX + 48, window.innerWidth - 460),
      y: Math.max(24, Math.min(event.clientY - 80, window.innerHeight - 620)),
    });
  };

  return (
    <section className="weaponBuilder__section weaponBuilder__selectorPanel">
      <h2>Weapon</h2>

      <div className="weaponBuilder__search">
        <input
          type="search"
          value={search}
          placeholder="Search weapon..."
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="weaponBuilder__weaponGrid">
        {filteredWeapons.map((weapon) => (
          <div
            key={weapon.id}
            className="weaponBuilder__weaponCardWrap"
            onMouseMove={(event) => handleMouseMove(event, weapon)}
            onMouseLeave={() => setHoveredWeapon(null)}
          >
            <button
              type="button"
              className={`weaponBuilder__weaponCard ${
                selectedWeapon?.id === weapon.id ? "is-active" : ""
              }`}
              onClick={() => onSelectWeapon(weapon)}
            >
              {weapon.icon ? <img src={weapon.icon} alt="" /> : null}

              <div>
                <span>{weapon.name}</span>
                <small>{weapon.rarity}</small>
              </div>
            </button>
          </div>
        ))}
      </div>

      {hoveredWeapon ? (
        <div
          className="weaponBuilder__weaponTooltipMount"
          style={{
            left: tooltipPosition.x,
            top: tooltipPosition.y,
          }}
        >
          <WeaponTooltip weapon={hoveredWeapon} />
        </div>
      ) : null}
    </section>
  );
}
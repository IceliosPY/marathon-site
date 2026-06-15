import type { ItemEntry } from "../../lib/items";

type WeaponSelectorProps = {
  weapons: ItemEntry[];
  selectedWeapon: ItemEntry | null;
  onSelectWeapon: (weapon: ItemEntry) => void;
};

export default function WeaponSelector({
  weapons,
  selectedWeapon,
  onSelectWeapon,
}: WeaponSelectorProps) {
  return (
    <section className="weaponBuilder__section">
      <h2>Weapon</h2>

      <div className="weaponBuilder__weaponGrid">
        {weapons.map((weapon) => (
          <button
            key={weapon.id}
            type="button"
            className={`weaponBuilder__weaponCard ${
              selectedWeapon?.id === weapon.id ? "is-active" : ""
            }`}
            onClick={() => onSelectWeapon(weapon)}
          >
            {weapon.icon ? <img src={weapon.icon} alt="" /> : null}

            <span>{weapon.name}</span>
            <small>{weapon.rarity}</small>
          </button>
        ))}
      </div>
    </section>
  );
}
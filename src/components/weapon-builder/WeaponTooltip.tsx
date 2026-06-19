import type { ItemEntry, ItemModSubcategory } from "../../lib/items";
import { itemModSubcategoryLabels } from "../../lib/items";
import { getWeaponModSlots } from "../../utils/weapons/weaponBuilder";

type WeaponTooltipProps = {
  weapon: ItemEntry;
};

function getImage(weapon: ItemEntry) {
  return weapon.icon ?? weapon.image ?? weapon.render;
}

function formatStatValue(value: number | string, unit?: string) {
  return `${value}${unit ?? ""}`;
}

function getMainStats(weapon: ItemEntry) {
  const stats: { label: string; value: string | number; unit?: string }[] = [];

  for (const stat of weapon.stats ?? []) {
    if (stat.details?.length) {
      for (const detail of stat.details) {
        stats.push({
          label: detail.label,
          value: detail.value,
        });
      }
    } else {
      stats.push({
        label: stat.label,
        value: stat.value,
        unit: stat.unit,
      });
    }
  }

  return stats;
}

function getSlotLabel(slot: ItemModSubcategory) {
  return itemModSubcategoryLabels[slot] ?? slot;
}

export default function WeaponTooltip({ weapon }: WeaponTooltipProps) {
  const image = getImage(weapon);
  const stats = getMainStats(weapon);
  const slots = getWeaponModSlots(weapon);

  return (
    <div className="weaponTooltip">
      <div className="weaponTooltip__corner weaponTooltip__corner--tl" />
      <div className="weaponTooltip__corner weaponTooltip__corner--tr" />
      <div className="weaponTooltip__corner weaponTooltip__corner--bl" />
      <div className="weaponTooltip__corner weaponTooltip__corner--br" />

      <div className="weaponTooltip__dots">
        <div className="weaponTooltip__content">
          <div className="weaponTooltip__header">
            <span>⌁</span>
            <strong>Weapon</strong>
          </div>

          <div className="weaponTooltip__body">
            <div className="weaponTooltip__identity">
              {image ? <img src={image} alt="" /> : null}

              <div>
                <h3>{weapon.name}</h3>
                <p>
                  {weapon.rarity} • {weapon.effect ?? weapon.category}
                </p>
              </div>
            </div>

            {weapon.description ? (
              <>
                <div className="weaponTooltip__divider" />
                <p className="weaponTooltip__description">
                  {weapon.description}
                </p>
              </>
            ) : null}

            <div className="weaponTooltip__divider" />

            <div className="weaponTooltip__stats">
              {stats.map((stat) => (
                <div key={`${stat.label}-${stat.value}`}>
                  <span>{stat.label}</span>
                  <strong>{formatStatValue(stat.value, stat.unit)}</strong>
                </div>
              ))}
            </div>

            <div className="weaponTooltip__divider" />

            <div className="weaponTooltip__slots">
              <span>Mod Slots</span>

              <div>
                {slots.length ? (
                  slots.map((slot) => (
                    <strong key={slot}>{getSlotLabel(slot)}</strong>
                  ))
                ) : (
                  <strong>Locked</strong>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
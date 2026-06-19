import type { ItemEntry } from "../../lib/items";

type ModTooltipProps = {
  mod: ItemEntry;
};

export default function ModTooltip({
  mod,
}: ModTooltipProps) {
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
            <strong>MOD</strong>
          </div>

          <div className="weaponTooltip__body">

            <div className="weaponTooltip__identity">
              {mod.icon && (
                <img src={mod.icon} alt="" />
              )}

              <div>
                <h3>{mod.name}</h3>

                <p>
                  {mod.rarity}
                  {mod.modSubcategory
                    ? ` • ${mod.modSubcategory}`
                    : ""}
                </p>
              </div>
            </div>

            {mod.description && (
              <>
                <div className="weaponTooltip__divider" />
                <p className="weaponTooltip__description">
                  {mod.description}
                </p>
              </>
            )}

            {mod.effect && (
              <>
                <div className="weaponTooltip__divider" />
                <p className="weaponTooltip__description">
                  {mod.effect}
                </p>
              </>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}
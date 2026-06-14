import type { CSSProperties } from "react";
import type { ItemEntry } from "../../lib/items";

function formatStatValue(value: number | string, unit?: string) {
  return `${value}${unit ?? ""}`;
}

export default function ItemStatsBlock({
  stats,
}: {
  stats: NonNullable<ItemEntry["stats"]>;
}) {
  return (
    <div className="itemInspect__stats">
      {stats.map((stat) => {
        const hasModifier =
          typeof stat.modifier === "number" && stat.modifier !== 0;

        const max = stat.max ?? 100;

        const visibleValue = hasModifier
          ? Math.abs(stat.modifier ?? 0)
          : stat.value;

        const percent = Math.min(100, (visibleValue / max) * 100);

        const isNegative = hasModifier && (stat.modifier ?? 0) < 0;
        const isPositive = hasModifier && (stat.modifier ?? 0) > 0;

        return (
          <div
            key={stat.label}
            className={`itemInspect__stat ${
              isNegative
                ? "is-negative"
                : isPositive
                ? "is-positive"
                : "is-neutral"
            }`}
            style={
              {
                "--stat-modifier": `${percent}%`,
              } as CSSProperties
            }
          >
            <div className="itemInspect__statTop">
              <span className="itemInspect__statName">
                {stat.label}
              </span>

              <strong className="itemInspect__statValue">
                <em>
                  {hasModifier
                    ? (stat.modifier ?? 0) > 0
                      ? `+${stat.modifier}${stat.unit ?? ""}`
                      : `${stat.modifier}${stat.unit ?? ""}`
                    : formatStatValue(
                        stat.value,
                        stat.unit
                      )}
                </em>
              </strong>
            </div>

            <div className="itemInspect__statBar">
              <span className="itemInspect__statBonus" />
            </div>

            {stat.details?.length ? (
              <div className="itemInspect__statDetails">
                {stat.details.map((detail) => (
                  <div
                    key={detail.label}
                    className="itemInspect__statDetail"
                  >
                    <span>{detail.label}</span>
                    <strong>{detail.value}</strong>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
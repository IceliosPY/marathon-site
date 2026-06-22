import { useState } from "react";
import type {
  BuilderStat,
  BuilderSpecialEffect,
} from "../../utils/weapons/weaponBuilder";

type BuilderStatsPanelProps = {
  stats: BuilderStat[];
  effects: BuilderSpecialEffect[];
  buildValue: number;
};

function formatValue(value: number, unit?: string) {
  return `${value}${unit ?? ""}`;
}

function formatModifier(value: number, unit?: string) {
  if (value === 0) return "No change";
  return value > 0 ? `+${value}${unit ?? ""}` : `${value}${unit ?? ""}`;
}

function getMaxValue(stat: BuilderStat) {
  if (stat.unit === "%") return 100;
  if (stat.unit === "X") return 6;
  if (stat.unit === "M") return 140;
  if (stat.unit === " RPM") return 900;
  if (stat.unit === "°") return 8;
  if (stat.unit === "S") return 8;

  return Math.max(100, stat.baseValue, stat.finalValue);
}

function getPercent(value: number, max: number) {
  return Math.max(0, Math.min((Math.abs(value) / max) * 100, 100));
}

function getChangeClass(modifier: number) {
  if (modifier > 0) return "is-positive";
  if (modifier < 0) return "is-negative";
  return "";
}

function getEffectRarityClass(effect: BuilderSpecialEffect) {
  return `rarity-${effect.rarity ?? "standard"}`;
}

function formatEffectRarity(effect: BuilderSpecialEffect) {
  if (!effect.rarity) return "Standard";

  return (
    effect.rarity.charAt(0).toUpperCase() +
    effect.rarity.slice(1)
  );
}

export default function BuilderStatsPanel({
  stats,
  effects,
  buildValue,
}: BuilderStatsPanelProps) {
  const [activeTab, setActiveTab] = useState<"stats" | "effects">(
    "stats"
  );

  const formattedBuildValue =
    buildValue.toLocaleString();

  return (
    <section className="weaponBuilder__section weaponBuilder__statsPanel">
      <div className="weaponBuilder__buildValue">
        <span>BUILD VALUE</span>

        <strong>{formattedBuildValue}</strong>
      </div>

      <div className="weaponBuilder__tabs">
        <button
          type="button"
          className={`weaponBuilder__tab ${
            activeTab === "stats" ? "is-active" : ""
          }`}
          onClick={() => setActiveTab("stats")}
        >
          Stats
        </button>

        <button
          type="button"
          className={`weaponBuilder__tab ${
            activeTab === "effects" ? "is-active" : ""
          }`}
          onClick={() => setActiveTab("effects")}
        >
          Effects ({effects.length})
        </button>
      </div>

      <div className="weaponBuilder__tabContent">
        {activeTab === "stats" ? (
          <div className="weaponBuilder__stats">
            {stats.map((stat) => {
              const max = getMaxValue(stat);

              const basePercent = getPercent(
                stat.baseValue,
                max
              );

              const finalPercent = getPercent(
                stat.finalValue,
                max
              );

              const hasChange =
                stat.modifier !== 0;

              const changeClass =
                getChangeClass(stat.modifier);

              return (
                <div
                  key={stat.label}
                  className={`weaponBuilder__statBlock ${
                    hasChange ? "has-change" : ""
                  }`}
                >
                  <div className="weaponBuilder__statTop">
                    <span className="weaponBuilder__statName">
                      {stat.label}
                    </span>

                    <span className="weaponBuilder__statBase">
                      {formatValue(
                        stat.baseValue,
                        stat.unit
                      )}
                    </span>

                    <strong className={changeClass}>
                      {hasChange
                        ? formatModifier(
                            stat.modifier,
                            stat.unit
                          )
                        : "—"}
                    </strong>

                    <strong className="weaponBuilder__statFinal">
                      {formatValue(
                        stat.finalValue,
                        stat.unit
                      )}
                    </strong>
                  </div>

                  <div className="weaponBuilder__barCompare">
                    <div className="weaponBuilder__barLine">
                      <span
                        className="weaponBuilder__barBase"
                        style={{
                          width: `${basePercent}%`,
                        }}
                      />
                    </div>

                    <div className="weaponBuilder__barLine">
                      <span
                        className={`weaponBuilder__barFinal ${changeClass}`}
                        style={{
                          width: `${finalPercent}%`,
                        }}
                      />
                    </div>
                  </div>

                  {hasChange ? (
                    <>
                      <p
                        className={`weaponBuilder__statDelta ${changeClass}`}
                      >
                        {formatModifier(
                          stat.modifier,
                          stat.unit
                        )}{" "}
                        {stat.label}
                      </p>

                      {stat.modifiers &&
                      stat.modifiers.length > 0 ? (
                        <div className="weaponBuilder__statTooltip">
                          <div className="weaponBuilder__statTooltipTitle">
                            Modified by
                          </div>

                          {stat.modifiers.map(
                            (modifier) => (
                              <div
                                key={`${stat.label}-${modifier.sourceName}`}
                                className="weaponBuilder__statTooltipEntry"
                              >
                                <span>
                                  {modifier.sourceName}
                                </span>

                                <strong
                                  className={
                                    modifier.value > 0
                                      ? "is-positive"
                                      : modifier.value < 0
                                      ? "is-negative"
                                      : ""
                                  }
                                >
                                  {formatModifier(
                                    modifier.value,
                                    stat.unit
                                  )}
                                </strong>
                              </div>
                            )
                          )}
                        </div>
                      ) : null}
                    </>
                  ) : null}
                </div>
              );
            })}
          </div>
        ) : effects.length > 0 ? (
          <div className="weaponBuilder__effectsList">
            {effects.map((effect) => (
              <article
                key={`${effect.sourceName}-${effect.name}`}
                className={`weaponBuilder__effectCard ${getEffectRarityClass(
                  effect
                )}`}
              >
                <strong>{effect.name}</strong>

                <span>
                  {effect.sourceName} •{" "}
                  {formatEffectRarity(effect)}
                </span>

                <p>{effect.description}</p>
              </article>
            ))}
          </div>
        ) : (
          <div className="weaponBuilder__emptyEffects">
            No active effects.
          </div>
        )}
      </div>
    </section>
  );
}
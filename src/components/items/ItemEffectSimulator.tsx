import { useState } from "react";
import type {
  ItemEntry,
  ItemPossibleEffect,
} from "../../lib/items";

const BLOODTHIRSTY_VALUE_PER_KILL_RATE = 0.25;

function computeEnduringValue(
  baseValue: number,
  extractions: number,
  firstExtractionBonusRate: number,
  firstExtractionLimit: number,
  laterExtractionBonusRate: number
) {
  const firstTier = Math.min(extractions, firstExtractionLimit);
  const secondTier = Math.max(extractions - firstExtractionLimit, 0);

  return Math.round(
    baseValue +
      baseValue * firstExtractionBonusRate * firstTier +
      baseValue * laterExtractionBonusRate * secondTier
  );
}

export default function ItemEffectSimulator({
  item,
  effect,
}: {
  item: ItemEntry;
  effect: ItemPossibleEffect;
}) {
  const simulation = effect.simulation;

  const [extractions, setExtractions] = useState(
    simulation?.type === "enduring"
      ? simulation.defaultExtractions ?? 1
      : 1
  );

  const [kills, setKills] = useState(
    simulation?.type === "kills-scaling"
      ? simulation.defaultKills ?? 0
      : 0
  );

  if (!simulation) {
    return (
      <article className="itemInspect__effectRoll">
        <div className="itemInspect__effectRollHead">
          <strong>{effect.label}</strong>
        </div>

        <p>{effect.description}</p>
      </article>
    );
  }

  if (simulation.type === "enduring") {
    const baseValue = item.sellPrice ?? 0;
    const maxExtractions = simulation.maxExtractions ?? 10;

    const simulatedValue = computeEnduringValue(
      baseValue,
      extractions,
      simulation.firstExtractionBonusRate,
      simulation.firstExtractionLimit,
      simulation.laterExtractionBonusRate
    );

    const gain = simulatedValue - baseValue;

    return (
      <article className="itemInspect__effectRoll effect-enduring">
        <div className="itemInspect__effectRollHead">
          <strong>{effect.label}</strong>
          <span>{extractions} extracts</span>
        </div>

        <p>{effect.description}</p>

        <div className="itemInspect__effectControls">
          <button
            type="button"
            onClick={() =>
              setExtractions((value) => Math.max(0, value - 1))
            }
          >
            -
          </button>

          <input
            type="number"
            min={0}
            max={maxExtractions}
            value={extractions}
            onChange={(event) => {
              const value = Number(event.target.value);
              setExtractions(
                Math.max(0, Math.min(maxExtractions, value))
              );
            }}
          />

          <button
            type="button"
            onClick={() =>
              setExtractions((value) =>
                Math.min(maxExtractions, value + 1)
              )
            }
          >
            +
          </button>
        </div>

        <div className="itemInspect__effectResult">
          <span>Base value: {baseValue}</span>
          <span>New value: {simulatedValue}</span>
          <span>Gain: +{gain}</span>
        </div>
      </article>
    );
  }

  if (simulation.type === "kills-scaling") {
    const baseValue = item.sellPrice ?? 0;
    const maxKills = simulation.maxKills ?? 50;

    const gain = Math.round(
      baseValue * BLOODTHIRSTY_VALUE_PER_KILL_RATE * kills
    );

    const simulatedValue = baseValue + gain;

    return (
      <article className="itemInspect__effectRoll effect-bloodthirsty">
        <div className="itemInspect__effectRollHead">
          <strong>{effect.label}</strong>
          <span>{kills} kills</span>
        </div>

        <p>{effect.description}</p>

        <div className="itemInspect__effectControls">
          <button
            type="button"
            onClick={() =>
              setKills((value) => Math.max(0, value - 1))
            }
          >
            -
          </button>

          <input
            type="number"
            min={0}
            max={maxKills}
            value={kills}
            onChange={(event) => {
              const value = Number(event.target.value);
              setKills(
                Math.max(0, Math.min(maxKills, value))
              );
            }}
          />

          <button
            type="button"
            onClick={() =>
              setKills((value) => Math.min(maxKills, value + 1))
            }
          >
            +
          </button>
        </div>

        <div className="itemInspect__effectResult">
          <span>Base value: {baseValue}</span>
          <span>New value: {simulatedValue}</span>
          <span>Gain: +{gain}</span>
        </div>
      </article>
    );
  }

  if (simulation.type === "price-flat") {
    const baseValue = item.sellPrice ?? 0;
    const simulatedValue = baseValue + simulation.flatBonus;

    return (
      <article className="itemInspect__effectRoll">
        <div className="itemInspect__effectRollHead">
          <strong>{effect.label}</strong>
        </div>

        <p>{effect.description}</p>

        <div className="itemInspect__effectResult">
          <span>Base value: {baseValue}</span>
          <span>New value: {simulatedValue}</span>
          <span>Gain: +{simulation.flatBonus}</span>
        </div>
      </article>
    );
  }

  return null;
}
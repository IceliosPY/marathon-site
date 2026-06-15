import { useMemo, useState } from "react";
import { itemsData } from "../../lib/items";
import type { ItemEntry, ItemModSubcategory } from "../../lib/items";
import WeaponSelector from "./WeaponSelector";
import WeaponModSlots from "./WeaponModSlots";
import BuilderStatsPanel from "./BuilderStatsPanel";
import {
  calculateWeaponBuildStats,
  createEmptyBuildSelection,
  isWeapon,
  type WeaponBuildSelection,
} from "../../utils/weapons/weaponBuilder";
import "../../styles/weaponBuilder/weapon-builder.css";

export default function WeaponBuilderPanel() {
  const weapons = useMemo(
    () => itemsData.filter((item): item is ItemEntry => isWeapon(item)),
    []
  );

  const [selectedWeapon, setSelectedWeapon] = useState<ItemEntry | null>(
    weapons[0] ?? null
  );

  const [selection, setSelection] = useState<WeaponBuildSelection>(() =>
    selectedWeapon ? createEmptyBuildSelection(selectedWeapon) : {}
  );

  const finalStats = useMemo(
    () =>
      selectedWeapon
        ? calculateWeaponBuildStats(selectedWeapon, selection)
        : [],
    [selectedWeapon, selection]
  );

  const handleSelectWeapon = (weapon: ItemEntry) => {
    setSelectedWeapon(weapon);
    setSelection(createEmptyBuildSelection(weapon));
  };

  const handleSelectMod = (
    slot: ItemModSubcategory,
    mod: ItemEntry | null
  ) => {
    setSelection((current) => ({
      ...current,
      [slot]: mod,
    }));
  };

  return (
    <main className="weaponBuilder">
      <header className="weaponBuilder__hero">
        <p className="weaponBuilder__kicker">Tau Ceti IV / Armory Simulator</p>
        <h1>Weapon Builder</h1>
        <p>
          Select a weapon, install compatible mods, and preview the resulting
          stat changes before deployment.
        </p>
      </header>

      <div className="weaponBuilder__layout">
        <WeaponSelector
          weapons={weapons}
          selectedWeapon={selectedWeapon}
          onSelectWeapon={handleSelectWeapon}
        />

        <section className="weaponBuilder__center">
          {selectedWeapon ? (
            <>
              <div className="weaponBuilder__preview">
                <img
                  src={
                    selectedWeapon.render ??
                    selectedWeapon.image ??
                    selectedWeapon.icon
                  }
                  alt={selectedWeapon.name}
                />

                <div>
                  <span>{selectedWeapon.rarity}</span>
                  <h2>{selectedWeapon.name}</h2>
                  <p>{selectedWeapon.effect}</p>
                </div>
              </div>

              <WeaponModSlots
                weapon={selectedWeapon}
                items={itemsData}
                selection={selection}
                onChange={handleSelectMod}
              />
            </>
          ) : null}
        </section>

        <BuilderStatsPanel stats={finalStats} />
      </div>
    </main>
  );
}
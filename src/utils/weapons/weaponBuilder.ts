import type {
  ItemEntry,
  ItemModSubcategory,
  ItemStat,
} from "../../lib/items/types";

export type WeaponBuildSelection = Partial<
  Record<ItemModSubcategory, ItemEntry | null>
>;

export type BuilderStatModifier = {
  sourceName: string;
  value: number;
};

export type BuilderStat = {
  label: string;
  baseValue: number;
  modifier: number;
  finalValue: number;
  unit?: string;
  modifiers: BuilderStatModifier[];
};

export type BuilderSpecialEffect = {
  name: string;
  description: string;
  color?: string;
  sourceName: string;
  rarity?: string;
};

export function isWeapon(item: ItemEntry): item is ItemEntry {
  return item.category === "weapon";
}

export function isMod(item: ItemEntry): item is ItemEntry {
  return item.category === "mod";
}

export function getWeaponModSlots(weapon: ItemEntry): ItemModSubcategory[] {
  return weapon.acceptedModSubcategories ?? [];
}

export function createEmptyBuildSelection(
  weapon: ItemEntry
): WeaponBuildSelection {
  return getWeaponModSlots(weapon).reduce<WeaponBuildSelection>(
    (selection, slot) => {
      selection[slot] = null;
      return selection;
    },
    {}
  );
}

export function getCompatibleModsForSlot(
  weapon: ItemEntry,
  slot: ItemModSubcategory,
  items: ItemEntry[]
): ItemEntry[] {
  if (!weapon.acceptedModSubcategories?.includes(slot)) {
    return [];
  }

  return items.filter((item) => {
    if (item.category !== "mod") return false;
    if (item.modSubcategory !== slot) return false;

    if (item.modSubcategory === "chip") {
      return true;
    }

    return (
      item.weaponStatProfiles?.some(
        (profile) =>
          profile.weaponId === weapon.id || profile.weaponId === "*"
      ) ?? false
    );
  });
}

export function getSelectedBuildEffects(
  selection: WeaponBuildSelection
): BuilderSpecialEffect[] {
  const effects: BuilderSpecialEffect[] = [];

  Object.values(selection)
    .filter((mod): mod is ItemEntry => mod !== null && mod !== undefined)
    .forEach((mod) => {
      if (mod.specialEffects?.length) {
        effects.push(
          ...mod.specialEffects.map((effect) => ({
            name: effect.name,
            description: effect.description,
            color: effect.color,
            sourceName: mod.name,
            rarity: mod.rarity,
          }))
        );
      }

      if (mod.prestigeFeature) {
        effects.push({
          name: mod.prestigeFeature.title,
          description: mod.prestigeFeature.description,
          sourceName: mod.name,
          rarity: "prestige",
        });
      }
    });

  return effects;
}

function parseNumericValue(value: number | string): number | null {
  if (typeof value === "number") return value;

  const parsed = Number(value.replace(",", ".").replace(/[^\d.-]/g, ""));

  return Number.isFinite(parsed) ? parsed : null;
}

function inferUnit(
  value: number | string,
  fallback?: string
): string | undefined {
  if (fallback) return fallback;
  if (typeof value === "number") return undefined;

  const lower = value.toLowerCase();

  if (value.includes("RPM")) return " RPM";
  if (value.includes("°")) return "°";
  if (value.includes("%")) return "%";
  if (lower.includes("s")) return "S";
  if (lower.includes("m")) return "M";
  if (lower.includes("x")) return "X";

  return undefined;
}

function roundStatValue(value: number): number {
  return Number(value.toFixed(2));
}

function flattenWeaponStats(weapon: ItemEntry): BuilderStat[] {
  const result: BuilderStat[] = [];

  for (const stat of weapon.stats ?? []) {
    if (stat.details?.length) {
      for (const detail of stat.details) {
        const value = parseNumericValue(detail.value);

        if (value === null) continue;

        result.push({
          label: detail.label,
          baseValue: value,
          modifier: 0,
          finalValue: value,
          unit: inferUnit(detail.value),
          modifiers: [],
        });
      }

      continue;
    }

    result.push({
      label: stat.label,
      baseValue: stat.value,
      modifier: 0,
      finalValue: stat.value,
      unit: stat.unit,
      modifiers: [],
    });
  }

  return result;
}

function getModStatsForWeapon(
  mod: ItemEntry,
  weapon: ItemEntry
): ItemStat[] {
  const exactProfile = mod.weaponStatProfiles?.find(
    (profile) => profile.weaponId === weapon.id
  );

  if (exactProfile) {
    return exactProfile.stats;
  }

  const universalProfile = mod.weaponStatProfiles?.find(
    (profile) => profile.weaponId === "*"
  );

  return universalProfile?.stats ?? [];
}

export function calculateBuildValue(
  weapon: ItemEntry,
  selection: WeaponBuildSelection
): number {
  const weaponValue =
    weapon.buyPrice ??
    weapon.sellPrice ??
    0;

  const modsValue = Object.values(selection)
    .filter(
      (mod): mod is ItemEntry =>
        mod !== null &&
        mod !== undefined
    )
    .reduce((total, mod) => {
      return (
        total +
        (mod.buyPrice ??
          mod.sellPrice ??
          0)
      );
    }, 0);

  return weaponValue + modsValue;
}

export function calculateWeaponBuildStats(
  weapon: ItemEntry,
  selection: WeaponBuildSelection
): BuilderStat[] {
  const stats = flattenWeaponStats(weapon);

  const selectedMods = Object.values(selection).filter(
    (mod): mod is ItemEntry => mod !== null && mod !== undefined
  );

  for (const mod of selectedMods) {
    const modStats = getModStatsForWeapon(mod, weapon);

    for (const modStat of modStats) {
      if (typeof modStat.modifier !== "number") continue;

      const target = stats.find((stat) => stat.label === modStat.label);

      if (!target) continue;

      target.modifier = roundStatValue(target.modifier + modStat.modifier);

      target.modifiers.push({
        sourceName: mod.name,
        value: modStat.modifier,
      });

      target.finalValue = roundStatValue(target.baseValue + target.modifier);

      if (!target.unit && modStat.unit) {
        target.unit = modStat.unit;
      }
    }
  }

  return stats;
}
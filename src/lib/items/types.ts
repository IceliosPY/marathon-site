export type ItemCategory =
  | "trinket" 
  | "backpack" 
  | "weapon"
  | "consumable"
  | "ammo"
  | "salvage"
  | "valuable"
  | "key"
  | "schema"
  | "implant"
  | "core"
  | "mod"
  | "chip"
  | "Shield"
  | "priority"
  | "gadget"
  | "grenade"
  | "shield"
  | "misc";

export type ItemRarity =
  | "standard"
  | "enhanced"
  | "deluxe"
  | "superior"
  | "prestige"
  | "contraband"
  | "priority";

/* =========================
   STATS
========================= */

export type ItemStatDetail = {
  label: string;
  value: number | string;
};

export type ItemStat = {
  label: string;
  value: number;
  modifier?: number;
  max?: number;
  unit?: string;
  details?: ItemStatDetail[];
};

/* =========================
   SOURCES
========================= */

export type ItemSourceKind =
  | "map-point"
  | "vendor"
  | "contract"
  | "world-loot"
  | "quest"
  | "activity"
  | "crafting"
  | "other";

export type ItemSourceTarget = {
  type: "map" | "vendor" | "contract" | "page";
  id: string;
  subId?: string;
};

export type ItemSource = {
  label: string;
  kind: ItemSourceKind;
  target?: ItemSourceTarget;
};

/* =========================
   EFFECTS / ROLLS
========================= */

export type ItemEffectId =
  | "materialist"
  | "materialist-plus"
  | "enduring"
  | "bloodthirsty"
  | "unique";

export type ItemEnduringSimulation = {
  type: "enduring";
  firstExtractionBonusRate: number;
  firstExtractionLimit: number;
  laterExtractionBonusRate: number;
  defaultExtractions?: number;
  maxExtractions?: number;
};

export type ItemBloodthirstySimulation = {
  type: "kills-scaling";
  defaultKills?: number;
  maxKills?: number;
};

export type ItemFlatPriceSimulation = {
  type: "price-flat";
  flatBonus: number;
};

export type ItemUniqueSimulation = {
  type: "unique";
};

export type ItemEffectSimulation =
  | ItemEnduringSimulation
  | ItemBloodthirstySimulation
  | ItemFlatPriceSimulation
  | ItemUniqueSimulation;

export type ItemPossibleEffect = {
  id: ItemEffectId;
  label: string;
  description: string;
  simulation?: ItemEffectSimulation;
};

/* =========================
   ITEM WEAPON STAT PROFILES
========================= */

export type ItemWeaponStatProfile = {
  weaponId: string;
  weaponName: string;
  stats: ItemStat[];
};

/* =========================
   UNIQUE / LOCKED UPGRADES
========================= */

export type ItemLockedUpgradeKind =
  | "optic"
  | "magazine"
  | "underbarrel"
  | "grip"
  | "stock"
  | "chip"
  | "core"
  | "ammo"
  | "other";

export type ItemLockedUpgrade = {
  id: string;
  name: string;
  kind: ItemLockedUpgradeKind;
  rarity?: ItemRarity;
  icon?: string;
  description?: string;
};

/* =========================
   AMMO LINK
========================= */

export type ItemAmmoLink = {
  itemId: string;
  label: string;
  icon: string;
};
export type ItemPrestigeFeature = {
  title: string;
  description: string;
  color?: "yellow" | "purple" | "red" | "green";
};
/* =========================
   ITEM
========================= */

export type ItemEntry = {
  id: string;
  name: string;

  category: ItemCategory;
  rarity: ItemRarity;

  icon?: string;
  image?: string;
  render?: string;
  video?: string;
  prestigeFeature?: ItemPrestigeFeature;
  description?: string;
  lore?: string;
  effect?: string;

  buyPrice?: number;
  sellPrice?: number;

  sources?: ItemSource[];
  possibleEffects?: ItemPossibleEffect[];
  highlightTerms?: string[];
  stackable?: boolean;

  slot?: string;
  manufacturer?: string;
  tags?: string[];

  stats?: ItemStat[];

  isPriority?: boolean;

  weaponStatProfiles?: ItemWeaponStatProfile[];

  /**
   * Ancienne méthode : upgrades écrits directement dans l'arme.
   */
  lockedUpgrades?: ItemLockedUpgrade[];

  /**
   * Nouvelle méthode : IDs d'items déjà existants.
   * Exemple : ["quickdraw-grip", "volt-tuning", "charge-accelerator"]
   */
  lockedUpgradeIds?: string[];

  ammo?: ItemAmmoLink;
};
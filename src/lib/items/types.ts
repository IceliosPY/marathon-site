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
   MOD SUBCATEGORIES
========================= */

export type ItemModSubcategory =
  | "belt-fed-magazine"
  | "lmg-optic"
  | "shield"
  | "volt-array"
  | "volt-dampener"
  | "rifle-grip"
  | "assault-barrel"
  | "pistol-magazine"
  | "chip"
  | "pistol-optic"
  | "shotgun-grip"
  | "underbarrel"
  | "magazine"
  | "volt-cell"
  | "ion-dampener"
  | "generator"
  | "assault-magazine"
  | "assault-optic"
  | "cqc-barrel"
  | "sniper-optic"
  | "precision-magazine"
  | "precision-optic"
  | "precision-barrel";

export interface SpecialEffect {
  name: string;
  description: string;
  color?: string;
}

export const itemModSubcategoryLabels: Record<ItemModSubcategory, string> = {
  "belt-fed-magazine": "Belt-Fed Magazine",
  "lmg-optic": "LMG Optic",
  shield: "Shield",
  "volt-array": "Volt Array",
  "volt-dampener": "Volt Dampener",
  "rifle-grip": "Rifle Grip",
  "assault-barrel": "Assault Barrel",
  "precision-magazine": "Precision Magazine",
  "precision-optic": "Precision Optic",
  "precision-barrel": "Precision Barrel",
  "assault-magazine": "Assault Magazine",
  "pistol-magazine": "Pistol Magazine",
  "pistol-optic": "Pistol Optic",
  "cqc-barrel": "CQC Barrel",
  "assault-optic": "Assault Optic",
  generator: "Generator",
  "sniper-optic": "Sniper Optic",
  "ion-dampener": "Ion Dampener",
  chip: "Chip",
  "shotgun-grip": "Shotgun Grip",
  underbarrel: "Underbarrel",
  magazine: "Magazine",
  "volt-cell": "Volt Cell",
};

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
  | "enemy"
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
  weaponIcon?: string;
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

/* =========================
   PRESTIGE FEATURE
========================= */

export type ItemPrestigeFeature = {
  title: string;
  description: string;
  color?: "yellow" | "purple" | "red" | "green";
};

/* =========================
   3D MODEL PARTS
========================= */

export type ItemModelParts = {
  body: string;
  sight?: string;
  magazine?: string;
  barrel?: string;
};

/* =========================
   ITEM
========================= */

export type ItemEntry = {
  id: string;
  name: string;

  category: ItemCategory;
  rarity: ItemRarity;

  modSubcategory?: ItemModSubcategory;
  acceptedModSubcategories?: ItemModSubcategory[];

  specialEffects?: SpecialEffect[];

  icon?: string;
  image?: string;
  render?: string;
  video?: string;

  modelParts?: ItemModelParts;

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

  lockedUpgrades?: ItemLockedUpgrade[];
  lockedUpgradeIds?: string[];

  ammo?: ItemAmmoLink;
};
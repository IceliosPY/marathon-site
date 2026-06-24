import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const magnumMc: ItemEntry = {
  id: "magnum-mc",

  name: "Magnum MC",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/MagnumMC.png"),
  image: asset("items/icons/MagnumMC.png"),
  render: asset("items/icons/MagnumMC.png"),
  video: asset("items/videos/weapons/magnum-mc.mp4"),

  modelParts: {
    body: asset(
      "items/models/weapons/magnum MC/v002_Pistol_heavy_01_default.glb"
    ),
    sight: asset(
      "items/models/weapons/magnum MC/mod_sight_default.glb"
    ),
  },

  sellPrice: 160,
  buyPrice: 400,

  description:
    "Heavy pistol equipped with modular muzzle and optics rail.",

  effect: "Standard Pistol",

  lore:
    "Compact heavy-caliber sidearm favored by UESC security forces. Delivers devastating stopping power at close and medium range.",

  ammo: {
    itemId: "heavy-rounds",
    label: "Heavy Rounds",
    icon: asset("items/icons/heavy-rounds.png"),
  },

  possibleEffects: [
    {
      id: "enduring",
      label: "Enduring",
      description:
        "First 3 extractions increase value by 75% of base value each. After that, +20% per extraction.",
      simulation: {
        type: "enduring",
        firstExtractionBonusRate: 0.75,
        firstExtractionLimit: 3,
        laterExtractionBonusRate: 0.2,
        defaultExtractions: 1,
        maxExtractions: 10,
      },
    },
  ],

  sources: [
    {
      label: "Schema",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "armory",
      },
    },
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],

  stats: [
    {
      label: "Firepower",
      value: 66,
      max: 220,

      details: [
        { label: "Damage", value: "33.0" },
        { label: "Precision", value: "2.0" },
        { label: "Rate of Fire", value: "150 RPM" },
      ],
    },

    {
      label: "Accuracy",
      value: 54.8,
      max: 100,

      details: [
        { label: "Hipfire Spread", value: "1.39°" },
        { label: "ADS Spread", value: "1.15°" },
        { label: "Crouch Spread Bonus", value: "90.0%" },
        { label: "Moving Inaccuracy", value: "90.9%" },
      ],
    },

    {
      label: "Handling",
      value: 40,
      max: 100,

      details: [
        { label: "Equip Speed", value: "0.8S" },
        { label: "ADS Speed", value: "0.38S" },
        { label: "Weight", value: "28.0%" },
        { label: "Recoil", value: "128.8%" },
        { label: "Aim Assist", value: "1.28°" },
        { label: "Reload Speed", value: "1.90S" },
      ],
    },

    {
      label: "Range",
      value: 21,
      max: 55,
      unit: "M",
    },

    {
      label: "Magazine",
      value: 12,
      max: 30,
    },

    {
      label: "Zoom",
      value: 1.4,
      max: 3,
      unit: "X",
    },
  ],

  acceptedModSubcategories: [
    "chip",
    "pistol-optic",
    "cqc-barrel",
  ],

  tags: [
    "weapon",
    "pistol",
    "magnum",
    "magnum mc",
    "sidearm",
    "heavy pistol",
    "precision",
    "uesc",
  ],
};
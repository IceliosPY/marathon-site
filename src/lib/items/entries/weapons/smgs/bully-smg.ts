import type { ItemEntry } from "../types";
import { asset } from "@/lib/assets";

export const bullySmg: ItemEntry = {
  id: "bully-smg",

  name: "Bully SMG",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/BullySMG.png"),
  image: asset("items/icons/BullySMG.png"),
  render: asset("items/icons/BullySMG.png"),
  video: asset("items/videos/weapons/bully-smg.mp4"),

  modelParts: {
    body: asset("items/models/weapons/bullysmg/v002_SMG_heavy_default.glb"),
    magazine: asset("items/models/weapons/bullysmg/mod_mag_default.glb"),
  },

  sellPrice: 400,
  buyPrice: 1000,

  description:
    "Heavy ballistic submachine gun with brutal reputation.",

  effect: "Standard Submachine Gun",

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

  stats: [
    {
      label: "Firepower",
      value: 22.5,
      max: 220,

      details: [
        {
          label: "Damage",
          value: "15.0",
        },
        {
          label: "Precision",
          value: "1.5",
        },
        {
          label: "Rate of Fire",
          value: "540 RPM",
        },
      ],
    },

    {
      label: "Accuracy",
      value: 61.1,
      max: 100,

      details: [
        {
          label: "Hipfire Spread",
          value: "1.55°",
        },
        {
          label: "ADS Spread",
          value: "1.47°",
        },
        {
          label: "Crouch Spread Bonus",
          value: "80.0%",
        },
        {
          label: "Moving Inaccuracy",
          value: "17.7%",
        },
      ],
    },

    {
      label: "Handling",
      value: 47,
      max: 100,

      details: [
        {
          label: "Equip Speed",
          value: "0.9S",
        },
        {
          label: "ADS Speed",
          value: "0.35S",
        },
        {
          label: "Weight",
          value: "27.5%",
        },
        {
          label: "Recoil",
          value: "82.0%",
        },
        {
          label: "Aim Assist",
          value: "2.47°",
        },
        {
          label: "Reload Speed",
          value: "2.76S",
        },
      ],
    },

    {
      label: "Range",
      value: 18,
      max: 55,
      unit: "M",
    },

    {
      label: "Magazine",
      value: 23,
      max: 60,
    },

    {
      label: "Zoom",
      value: 1.1,
      max: 3,
      unit: "X",
    },
  ],

  acceptedModSubcategories: [
    "chip",
    "assault-optic",
    "assault-magazine",
    "cqc-barrel",
  ],

  sources: [
    {
      label: "Traxus Armory",
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

  tags: [
    "weapon",
    "submachine gun",
    "smg",
    "bully",
    "bully smg",
    "heavy ballistic",
    "close range",
    "automatic",
    "uesc",
  ],
};
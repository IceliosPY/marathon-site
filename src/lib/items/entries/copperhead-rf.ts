import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const copperheadRf: ItemEntry = {
  id: "copperhead-rf",

  name: "Copperhead RF",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/CopperheadRF.png"),
  image: asset("items/icons/CopperheadRF.png"),
  render: asset("items/icons/CopperheadRF.png"),
  video: asset("items/videos/weapons/copperhead-rf.mp4"),

  sellPrice: 2400,
  buyPrice: 6000,

  description:
    "Light submachine gun engineered for extreme rate of fire.",

  effect: "Standard Submachine Gun",


  ammo: {
    itemId: "light-rounds",
    label: "Light Rounds",
    icon: asset("items/icons/light-rounds.png"),
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
      value: 16.8,
      max: 220,

      details: [
        {
          label: "Damage",
          value: "12.0",
        },
        {
          label: "Precision",
          value: "1.4",
        },
        {
          label: "Rate of Fire",
          value: "720 RPM",
        },
      ],
    },

    {
      label: "Accuracy",
      value: 49.3,
      max: 100,

      details: [
        {
          label: "Hipfire Spread",
          value: "2.36°",
        },
        {
          label: "ADS Spread",
          value: "1.06°",
        },
        {
          label: "Crouch Spread Bonus",
          value: "85.0%",
        },
        {
          label: "Moving Inaccuracy",
          value: "90.9%",
        },
      ],
    },

    {
      label: "Handling",
      value: 46,
      max: 100,

      details: [
        {
          label: "Equip Speed",
          value: "0.9S",
        },
        {
          label: "ADS Speed",
          value: "0.43S",
        },
        {
          label: "Weight",
          value: "27.5%",
        },
        {
          label: "Recoil",
          value: "90.0%",
        },
        {
          label: "Aim Assist",
          value: "1.40°",
        },
        {
          label: "Reload Speed",
          value: "2.37S",
        },
      ],
    },

    {
      label: "Range",
      value: 16,
      max: 55,
      unit: "M",
    },

    {
      label: "Magazine",
      value: 28,
      max: 60,
    },

    {
      label: "Zoom",
      value: 1.1,
      max: 3,
      unit: "X",
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
  acceptedModSubcategories: [
    "chip",
    "assault-magazine",
    "assault-optic",
    "cqc-barrel",
  ],

  tags: [
    "weapon",
    "submachine gun",
    "smg",
    "copperhead",
    "copperhead rf",
    "automatic",
    "high rate of fire",
    "close range",
    "uesc",
  ],
};
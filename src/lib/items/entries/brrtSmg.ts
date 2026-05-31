import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const brrtSmg: ItemEntry = {
  id: "brrt-smg",

  name: "BRRT SMG",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/BRRTSMG.png"),
  image: asset("items/icons/BRRTSMG.png"),
  render: asset("items/icons/BRRTSMG.png"),
  video: asset("items/videos/weapons/brrt-smg.mp4"),

  sellPrice: 1000,
  buyPrice : 2500,

  description:
    "Compact submachine gun with five-round burst firing mechanism.",

  effect: "Burst-Fire Submachine Gun",

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
      value: 15.4,
      max: 220,

      details: [
        {
          label: "Damage",
          value: "11.0",
        },
        {
          label: "Precision",
          value: "1.4",
        },
        {
          label: "Rate of Fire",
          value: "1000 RPM",
        },
      ],
    },

    {
      label: "Accuracy",
      value: 60.5,
      max: 100,

      details: [
        {
          label: "Hipfire Spread",
          value: "1.93°",
        },
        {
          label: "ADS Spread",
          value: "1.16°",
        },
        {
          label: "Crouch Spread Bonus",
          value: "85.0%",
        },
        {
          label: "Moving Inaccuracy",
          value: "17.7%",
        },
      ],
    },

    {
      label: "Handling",
      value: 35,
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
          value: "143.6%",
        },
        {
          label: "Aim Assist",
          value: "2.44°",
        },
        {
          label: "Reload Speed",
          value: "3.0S",
        },
      ],
    },

    {
      label: "Range",
      value: 22,
      max: 55,
      unit: "M",
    },

    {
      label: "Magazine",
      value: 35,
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
    "cqc-barrel",
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
  tags: [
    "weapon",
    "submachine gun",
    "smg",
    "brrt",
    "brrt smg",
    "burst fire",
    "five round burst",
    "close range",
    "uesc",
  ],
};
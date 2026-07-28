import type { ItemEntry } from "../types";
import { asset } from "@/lib/assets";

export const misriah2442: ItemEntry = {
  id: "misriah-2442",

  name: "Misriah 2442",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/Misriah.png"),
  image: asset("items/icons/Misriah.png"),
  render: asset("items/icons/Misriah.png"),
  video: asset("items/videos/weapons/misriah.mp4"),

  sellPrice: 6000,

  description:
    "Pump-action shotgun kept for close encounters. Reloads one MIPS cartridge at a time.",

  effect: "Standard Shotgun",

  lore:
    "Reliable close-quarters shotgun manufactured for UESC boarding and breach operations.",

  ammo: {
    itemId: "heavy-rounds",
    label: "Heavy Rounds",
    icon: asset("items/icons/heavy-rounds.png"),
  },

  /*
    POSSIBLE EFFECTS
  */

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
      value: 168,
      max: 220,

      details: [
        {
          label: "Firepower",
          value: "168",
        },
        {
          label: "Damage",
          value: "11.7",
        },
        {
          label: "Precision",
          value: "1.2",
        },
        {
          label: "Rate of Fire",
          value: "58 RPM",
        },
      ],
    },

    {
      label: "Handling",
      value: 54,
      max: 100,

      details: [
        {
          label: "Equip Speed",
          value: "0.9S",
        },
        {
          label: "ADS Speed",
          value: "0.42S",
        },
        {
          label: "Weight",
          value: "36.0%",
        },
        {
          label: "Recoil",
          value: "93.0%",
        },
        {
          label: "Aim Assist",
          value: "5.10°",
        },
        {
          label: "Reload Speed",
          value: "0.84S",
        },
        {
          label: "Crouch Spread Bonus",
          value: "0.0%",
        },
      ],
    },

    {
      label: "Range",
      value: 11,
      max: 20,
      unit: "M",
    },

    {
      label: "Spread Angle",
      value: 4.8,
      max: 10,
      unit: "°",
    },

    {
      label: "Magazine",
      value: 4,
      max: 10,
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
    "shotgun-grip",
    "magazine",
    "underbarrel",
  ],
  tags: [
    "weapon",
    "shotgun",
    "misriah",
    "pump action",
    "close range",
    "uesc",
  ],
};
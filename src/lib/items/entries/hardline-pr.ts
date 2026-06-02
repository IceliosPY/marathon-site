import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const hardlinePr: ItemEntry = {
  id: "hardline-pr",

  name: "Hardline PR",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/HardlinePR.png"),
  image: asset("items/icons/HardlinePR.png"),
  render: asset("items/icons/HardlinePR.png"),
  video: asset("items/videos/weapons/HardlinePR.mp4"),

  sellPrice: 200,

  description:
    "Single-round semiautomatic precision rifle with high rate of fire.",

  effect: "Standard Precision Rifle",

  lore:
    "A lightweight precision platform built around rapid follow-up shots, balancing accuracy and sustained fire for medium-range engagements.",

  ammo: {
    itemId: "heavy-rounds",
    label: "Heavy Rounds",
    icon: asset("items/icons/heavy-rounds.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 36.8,
      max: 220,

      details: [
        {
          label: "Firepower",
          value: "36.8",
        },
        {
          label: "Damage",
          value: "23.0",
        },
        {
          label: "Precision",
          value: "1.6",
        },
        {
          label: "Rate of Fire",
          value: "275 RPM",
        },
      ],
    },

    {
      label: "Accuracy",
      value: 66.9,
      max: 100,

      details: [
        {
          label: "Hipfire Spread",
          value: "2.35°",
        },
        {
          label: "ADS Spread",
          value: "0.44°",
        },
        {
          label: "Crouch Spread Bonus",
          value: "60.0%",
        },
        {
          label: "Moving Inaccuracy",
          value: "20.5%",
        },
      ],
    },

    {
      label: "Handling",
      value: 36,
      max: 100,

      details: [
        {
          label: "Equip Speed",
          value: "0.94S",
        },
        {
          label: "ADS Speed",
          value: "0.45S",
        },
        {
          label: "Weight",
          value: "37.0%",
        },
        {
          label: "Recoil",
          value: "103.2%",
        },
        {
          label: "Aim Assist",
          value: "1.01°",
        },
        {
          label: "Reload Speed",
          value: "3.60S",
        },
      ],
    },

    {
      label: "Range",
      value: 74,
      max: 100,
      unit: "M",
    },

    {
      label: "Magazine",
      value: 14,
      max: 30,
    },

    {
      label: "Zoom",
      value: 1.2,
      max: 4,
      unit: "X",
    },
  ],

  acceptedModSubcategories: [
    "chip",
    "precision-magazine",
    "precision-optic",
    "precision-barrel",
  ],

  tags: [
    "weapon",
    "precision rifle",
    "hardline",
    "hardline pr",
    "semi automatic",
    "high rate of fire",
    "uesc",
    "heavy rounds",
  ],
};
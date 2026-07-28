import type { ItemEntry } from "../types";
import { asset } from "@/lib/assets";

export const longshot: ItemEntry = {
  id: "longshot",

  name: "Longshot",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/Longshot.png"),
  image: asset("items/icons/Longshot.png"),
  render: asset("items/icons/Longshot.png"),
  video: asset("items/videos/weapons/Longshot.mp4"),

  sellPrice: 2800,

  description:
    "Ballistic semiautomatic sniper rifle. High damage, high customization.",

  effect: "Standard Sniper Rifle",

  lore:
    "Versatile semiautomatic sniper platform favored by marksmen who value sustained precision fire without sacrificing long-range lethality.",

  ammo: {
    itemId: "heavy-rounds",
    label: "Heavy Rounds",
    icon: asset("items/icons/heavy-rounds.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 149.4,
      max: 220,

      details: [
        {
          label: "Firepower",
          value: "149.4",
        },
        {
          label: "Damage",
          value: "69.5",
        },
        {
          label: "Precision",
          value: "2.15",
        },
        {
          label: "Rate of Fire",
          value: "60 RPM",
        },
      ],
    },

    {
      label: "Accuracy",
      value: 80.9,
      max: 100,

      details: [
        {
          label: "Hipfire Spread",
          value: "6.75°",
        },
        {
          label: "ADS Spread",
          value: "0.0°",
        },
        {
          label: "Crouch Spread Bonus",
          value: "60.0%",
        },
        {
          label: "Moving Inaccuracy",
          value: "54.5%",
        },
      ],
    },

    {
      label: "Handling",
      value: 43,
      max: 100,

      details: [
        {
          label: "Equip Speed",
          value: "0.9S",
        },
        {
          label: "ADS Speed",
          value: "0.6S",
        },
        {
          label: "Weight",
          value: "38.0%",
        },
        {
          label: "Recoil",
          value: "60.0%",
        },
        {
          label: "Aim Assist",
          value: "0.50°",
        },
        {
          label: "Reload Speed",
          value: "3.35S",
        },
      ],
    },

    {
      label: "Range",
      value: 175,
      max: 200,
      unit: "M",
    },

    {
      label: "Magazine",
      value: 4,
      max: 20,
    },

    {
      label: "Zoom",
      value: 4.0,
      max: 6.0,
      unit: "X",
    },
  ],

  acceptedModSubcategories: [
    "chip",
    "precision-magazine",
    "sniper-optic",
    "precision-barrel",
  ],

  tags: [
    "weapon",
    "sniper rifle",
    "longshot",
    "semi automatic",
    "precision",
    "long range",
    "uesc",
    "heavy rounds",
  ],
};
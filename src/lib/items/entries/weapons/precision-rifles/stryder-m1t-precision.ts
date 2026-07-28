import type { ItemEntry } from "../types";
import { asset } from "@/lib/assets";

export const stryderM1T: ItemEntry = {
  id: "stryder-m1t",

  name: "Stryder M1T",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/StryderM1T.png"),
  image: asset("items/icons/StryderM1T.png"),
  render: asset("items/icons/StryderM1T.png"),
  video: asset("items/videos/weapons/StryderM1T.mp4"),

  sellPrice: 1200,

  description:
    "Fine-tuned semiautomatic precision rifle.",

  effect: "Standard Precision Rifle",


  ammo: {
    itemId: "light-rounds",
    label: "Light Rounds",
    icon: asset("items/icons/light-rounds.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 46.5,
      max: 220,
      details: [
        {
          label: "Firepower",
          value: "46.5",
        },
        {
          label: "Damage",
          value: "31.0",
        },
        {
          label: "Precision",
          value: "1.5",
        },
        {
          label: "Rate of Fire",
          value: "200 RPM",
        },
      ],
    },

    {
      label: "Accuracy",
      value: 59.4,
      max: 100,
      details: [
        {
          label: "Hipfire Spread",
          value: "2.13°",
        },
        {
          label: "ADS Spread",
          value: "1.17°",
        },
        {
          label: "Crouch Spread Bonus",
          value: "80.0%",
        },
        {
          label: "Moving Inaccuracy",
          value: "20.5%",
        },
      ],
    },

    {
      label: "Handling",
      value: 39,
      max: 100,
      details: [
        {
          label: "Equip Speed",
          value: "0.94S",
        },
        {
          label: "ADS Speed",
          value: "0.35S",
        },
        {
          label: "Weight",
          value: "37.5%",
        },
        {
          label: "Recoil",
          value: "90.0%",
        },
        {
          label: "Aim Assist",
          value: "0.80°",
        },
        {
          label: "Reload Speed",
          value: "3.42S",
        },
      ],
    },

    {
      label: "Range",
      value: 84,
      max: 100,
      unit: "M",
    },

    {
      label: "Magazine",
      value: 12,
      max: 60,
    },

    {
      label: "Zoom",
      value: 1.4,
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
    "stryder",
    "stryder m1t",
    "semi automatic",
    "medium range",
    "long range",
    "uesc",
  ],
};
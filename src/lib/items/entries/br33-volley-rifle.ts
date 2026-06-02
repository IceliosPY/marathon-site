import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const br33VolleyRifle: ItemEntry = {
  id: "br33-volley-rifle",

  name: "BR33 Volley Rifle",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/BR33VolleyRifle.png"),
  image: asset("items/icons/BR33VolleyRifle.png"),
  render: asset("items/icons/BR33VolleyRifle.png"),
  video: asset("items/videos/weapons/BR33VolleyRifle.mp4"),

  sellPrice: 480,

  description:
    "Semiautomatic precision rifle with three-round burst fire.",

  effect: "Standard Precision Rifle",

  lore:
    "UESC burst-fire precision platform built to deliver accurate volleys at medium range while maintaining excellent controllability.",

  ammo: {
    itemId: "light-rounds",
    label: "Light Rounds",
    icon: asset("items/icons/light-rounds.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 20.7,
      max: 220,

      details: [
        {
          label: "Firepower",
          value: "20.7",
        },
        {
          label: "Damage",
          value: "14.8",
        },
        {
          label: "Precision",
          value: "1.4",
        },
        {
          label: "Rate of Fire",
          value: "900 RPM",
        },
      ],
    },

    {
      label: "Accuracy",
      value: 61.2,
      max: 100,

      details: [
        {
          label: "Hipfire Spread",
          value: "2.20°",
        },
        {
          label: "ADS Spread",
          value: "0.96°",
        },
        {
          label: "Crouch Spread Bonus",
          value: "80.0%",
        },
        {
          label: "Moving Inaccuracy",
          value: "16.4%",
        },
      ],
    },

    {
      label: "Handling",
      value: 45,
      max: 100,

      details: [
        {
          label: "Equip Speed",
          value: "0.94S",
        },
        {
          label: "ADS Speed",
          value: "0.4S",
        },
        {
          label: "Weight",
          value: "28.0%",
        },
        {
          label: "Recoil",
          value: "87.3%",
        },
        {
          label: "Aim Assist",
          value: "1.61°",
        },
        {
          label: "Reload Speed",
          value: "3.0S",
        },
      ],
    },

    {
      label: "Range",
      value: 48,
      max: 100,
      unit: "M",
    },

    {
      label: "Magazine",
      value: 27,
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
    "precision-optic",
    "precision-magazine",
    "precision-barrel",
  ],

  tags: [
    "weapon",
    "precision rifle",
    "burst rifle",
    "br33",
    "volley rifle",
    "uesc",
    "three round burst",
    "medium range",
  ],
};
import type { ItemEntry } from "../types";
import { asset } from "@/lib/assets";

export const aresRG: ItemEntry = {
  id: "ares-rg",

  name: "ARES RG",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/AresRG.png"),
  image: asset("items/icons/AresRG.png"),
  render: asset("items/icons/AresRG.png"),
  video: asset("items/videos/weapons/ares-rg.mp4"),

  sellPrice: 2800,
  buyPrice : 7000,

  description:
    "Heavy ballistic railgun. Charges up to fire a massive projectile at extreme velocity.",

  effect: "Standard Railgun",

  ammo: {
    itemId: "rail-slugs",
    label: "Rail Slugs",
    icon: asset("items/icons/rail-slugs.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 159.9,
      max: 220,

      details: [
        {
          label: "Damage",
          value: "123.0",
        },
        {
          label: "Precision",
          value: "1.3",
        },
        {
          label: "Rate of Fire",
          value: "60 RPM",
        },
      ],
    },

    {
      label: "Accuracy",
      value: 100,
      max: 100,

      details: [
        {
          label: "Hipfire Spread",
          value: "4.10°",
        },
        {
          label: "ADS Spread",
          value: "0.0°",
        },
        {
          label: "Crouch Spread Bonus",
          value: "0.0%",
        },
        {
          label: "Moving Inaccuracy",
          value: "0.0%",
        },
      ],
    },

    {
      label: "Handling",
      value: 49,
      max: 100,

      details: [
        {
          label: "Equip Speed",
          value: "0.94S",
        },
        {
          label: "ADS Speed",
          value: "0.50S",
        },
        {
          label: "Weight",
          value: "38.0%",
        },
        {
          label: "Recoil",
          value: "33.8%",
        },
        {
          label: "Aim Assist",
          value: "0.80°",
        },
        {
          label: "Reload Speed",
          value: "4.46S",
        },
        {
          label: "Charge Time",
          value: "1.20S",
        },
      ],
    },

    {
      label: "Range",
      value: 55,
      max: 100,
      unit: "M",
    },

    {
      label: "Magazine",
      value: 6,
      max: 12,
    },

    {
      label: "Zoom",
      value: 2.5,
      max: 5,
      unit: "X",
    },
  ],

  acceptedModSubcategories: [
    "chip",
    "generator",
    "magazine",
  ],
  sources: [
    {
      label: "Arachnee Armory",
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
    "railgun",
    "ares",
    "anti-material",
    "long range",
    "charged",
    "uesc",
  ],
};
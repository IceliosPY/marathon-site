import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const outland: ItemEntry = {
  id: "outland",

  name: "Outland",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/Outland.png"),
  image: asset("items/icons/Outland.png"),
  render: asset("items/icons/Outland.png"),
  video: asset("items/videos/weapons/Outland.mp4"),

  sellPrice: 4980,

  description:
    "Bolt-action sniper rifle. Extreme damage and range.",

  effect: "Standard Sniper Rifle",

  lore:
    "High-powered bolt-action sniper rifle designed for extreme-range precision and devastating single-shot damage.",

  ammo: {
    itemId: "heavy-rounds",
    label: "Heavy Rounds",
    icon: asset("items/icons/heavy-rounds.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 168,
      max: 220,
      details: [
        { label: "Firepower", value: "168.0" },
        { label: "Damage", value: "120.0" },
        { label: "Precision", value: "1.4" },
        { label: "Rate of Fire", value: "39 RPM" },
      ],
    },
    {
      label: "Accuracy",
      value: 96,
      max: 100,
      details: [
        { label: "Hipfire Spread", value: "6.75°" },
        { label: "ADS Spread", value: "0.71°" },
        { label: "Crouch Spread Bonus", value: "0.0%" },
        { label: "Moving Inaccuracy", value: "0.0%" },
      ],
    },
    {
      label: "Handling",
      value: 31,
      max: 100,
      details: [
        { label: "Equip Speed", value: "1.7S" },
        { label: "ADS Speed", value: "0.44S" },
        { label: "Weight", value: "38.0%" },
        { label: "Recoil", value: "95.0%" },
        { label: "Aim Assist", value: "0.78°" },
        { label: "Reload Speed", value: "3.6S" },
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
      value: 6,
      max: 20,
    },
    {
      label: "Zoom",
      value: 4,
      max: 6,
      unit: "X",
    },
  ],

  acceptedModSubcategories: [
    "chip",
    "sniper-optic",
    "precision-barrel",
  ],

  tags: [
    "weapon",
    "sniper rifle",
    "bolt action",
    "outland",
    "extreme range",
    "high damage",
    "uesc",
  ],
};
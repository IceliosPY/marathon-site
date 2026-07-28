import type { ItemEntry } from "../types";
import { asset } from "@/lib/assets";

export const ceTacticalSidearm: ItemEntry = {
  id: "ce-tactical-sidearm",

  name: "CE Tactical Sidearm",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/CETacticalSidearm.png"),
  image: asset("items/icons/CETacticalSidearm.png"),
  render: asset("items/icons/CETacticalSidearm.png"),
  video: asset("items/videos/weapons/ce-tactical-sidearm.mp4"),

  sellPrice: 25,
  buyPrice : 50,

  description:
    "Light ballistic pistol with standard semiautomatic fire.",

  effect: "Standard Pistol",

  lore:
    "Reliable lightweight sidearm designed for basic defensive use and close-range precision engagements.",

  ammo: {
    itemId: "light-rounds",
    label: "Light Rounds",
    icon: asset("items/icons/light-rounds.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 36,
      max: 220,
      details: [
        { label: "Damage", value: "20.0" },
        { label: "Precision", value: "1.8" },
        { label: "Rate of Fire", value: "300 RPM" },
      ],
    },
    {
      label: "Accuracy",
      value: 56.3,
      max: 100,
      details: [
        { label: "Hipfire Spread", value: "1.47°" },
        { label: "ADS Spread", value: "1.03°" },
        { label: "Crouch Spread Bonus", value: "90.0%" },
        { label: "Moving Inaccuracy", value: "81.8%" },
      ],
    },
    {
      label: "Handling",
      value: 59,
      max: 100,
      details: [
        { label: "Equip Speed", value: "0.8S" },
        { label: "ADS Speed", value: "0.33S" },
        { label: "Weight", value: "26.0%" },
        { label: "Recoil", value: "43.0%" },
        { label: "Aim Assist", value: "1.55°" },
        { label: "Reload Speed", value: "1.8S" },
      ],
    },
    {
      label: "Range",
      value: 26,
      max: 55,
      unit: "M",
    },
    {
      label: "Magazine",
      value: 18,
      max: 30,
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
    "pistol-optic",
    "pistol-magazine",
    "cqc-barrel",
  ],
  sources: [
    {
      label: "Cyac Armory",
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
    "pistol",
    "sidearm",
    "ce tactical sidearm",
    "light pistol",
    "semiautomatic",
    "close range",
    "uesc",
  ],
};
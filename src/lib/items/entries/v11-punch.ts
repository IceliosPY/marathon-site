import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const v11Punch: ItemEntry = {
  id: "v11-punch",

  name: "V11 Punch",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/v11-punch.png"),
  image: asset("items/icons/v11-punch.png"),
  render: asset("items/icons/v11-punch.png"),
  video: asset("items/videos/weapons/v11-punch.mp4"),

  sellPrice: 25,

  description:
    "Volt-actuated pistol. Tap for semiautomatic fire or hold to build and release a high-damage burst.",

  effect: "Standard Pistol",

  lore:
    "Compact volt sidearm built around a capacitor-assisted burst system. The longer the charge, the harder the punch.",

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],

  ammo: {
    itemId: "volt-cell",
    label: "Volt Cell",
    icon: asset("items/icons/volt-cell.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 37.5,
      max: 100,

      details: [
        {
          label: "Damage",
          value: "25.0",
        },
        {
          label: "Precision",
          value: "1.5",
        },
        {
          label: "Rate of Fire",
          value: "258 RPM",
        },
      ],
    },

    {
      label: "Accuracy",
      value: 36,
      max: 100,

      details: [
        {
          label: "Hipfire Spread",
          value: "3.13°",
        },
        {
          label: "ADS Spread",
          value: "1.72°",
        },
        {
          label: "Crouch Spread Bonus",
          value: "90.0%",
        },
        {
          label: "Moving Inaccuracy",
          value: "100.0%",
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
          value: "0.8S",
        },
        {
          label: "ADS Speed",
          value: "0.3S",
        },
        {
          label: "Weight",
          value: "26.0%",
        },
        {
          label: "Recoil",
          value: "76.5%",
        },
        {
          label: "Aim Assist",
          value: "2.04°",
        },
        {
          label: "Reload Speed",
          value: "3.60S",
        },
      ],
    },

    {
      label: "Range",
      value: 21,
      max: 100,
      unit: "M",
    },

    {
      label: "Volt Drain",
      value: 4.5,
      max: 100,
      unit: "%",
    },

    {
      label: "Zoom",
      value: 1.1,
      max: 10,
      unit: "X",
    },
  ],

  acceptedModSubcategories: [
    "chip",
    "volt-array",
    "pistol-optic",
    "volt-dampener",
  ],

  tags: [
    "weapon",
    "pistol",
    "volt",
    "v11",
    "charge",
    "burst",
    "uesc",
    "sidearm",
    "standard",
  ],
};
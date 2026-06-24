import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const v66Lookout: ItemEntry = {
  id: "v66-lookout",

  name: "V66 Lookout",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/v66-lookout.png"),
  image: asset("items/icons/v66-lookout.png"),
  render: asset("items/icons/v66-lookout.png"),
  video: asset("items/videos/weapons/v66-lookout.mp4"),

  sellPrice: 480,

  description:
    "Volt-actuated precision rifle with alternate charge-fire mode for increased damage.",

  effect: "Standard Precision Rifle",

  lore:
    "Designed for marksmen operating beyond conventional engagement ranges. Its alternate charge-fire mode sacrifices rate of fire for devastating precision shots.",
    modelParts: {
      body: asset("items/models/weapons/lookout/v66_stock_default.glb"),
    },
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
      value: 46.8,
      max: 100,

      details: [
        {
          label: "Damage",
          value: "26.0",
        },
        {
          label: "Precision",
          value: "1.8",
        },
        {
          label: "Rate of Fire",
          value: "180 RPM",
        },
      ],
    },

    {
      label: "Accuracy",
      value: 66.0,
      max: 100,

      details: [
        {
          label: "Hipfire Spread",
          value: "1.27°",
        },
        {
          label: "ADS Spread",
          value: "1.13°",
        },
        {
          label: "Crouch Spread Bonus",
          value: "80.0%",
        },
        {
          label: "Moving Inaccuracy",
          value: "19.1%",
        },
      ],
    },

    {
      label: "Handling",
      value: 46,
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
          value: "39.4%",
        },
        {
          label: "Recoil",
          value: "49.6%",
        },
        {
          label: "Aim Assist",
          value: "1.64°",
        },
        {
          label: "Reload Speed",
          value: "3.76S",
        },
      ],
    },

    {
      label: "Range",
      value: 88,
      max: 100,
      unit: "M",
    },

    {
      label: "Volt Drain",
      value: 3.4,
      max: 100,
      unit: "%",
    },

    {
      label: "Zoom",
      value: 1.4,
      max: 10,
      unit: "X",
    },
  ],

  acceptedModSubcategories: [
    "chip",
    "volt-array",
    "precision-optic",
    "ion-dampener",
  ],

  tags: [
    "weapon",
    "precision rifle",
    "volt",
    "v66",
    "lookout",
    "charge fire",
    "uesc",
    "marksman",
    "standard",
  ],
};
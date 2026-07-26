import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const v22VoltThrower: ItemEntry = {
  id: "v22-volt-thrower",

  name: "V22 Volt Thrower",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/v22-volt-thrower.png"),
  image: asset("items/icons/v22-volt-thrower.png"),
  render: asset("items/icons/v22-volt-thrower.png"),
  video: asset("items/videos/weapons/v22-volt-thrower.mp4"),

  sellPrice: 160,

  description: "Volt-actuated submachine gun with smart lock-on system.",

  effect: "Standard Submachine Gun",

  lore:
    "A compact UESC volt platform designed for sustained close-range engagements. Integrated targeting electronics improve projectile tracking and energy efficiency.",

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
      value: 18.0,
      max: 100,

      details: [
        {
          label: "Damage",
          value: "18.0",
        },
        {
          label: "Precision",
          value: "1.0",
        },
        {
          label: "Rate of Fire",
          value: "507 RPM",
        },
      ],
    },

    {
      label: "Accuracy",
      value: 74.1,
      max: 100,

      details: [
        {
          label: "Hipfire Spread",
          value: "0.98°",
        },
        {
          label: "ADS Spread",
          value: "0.45°",
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
      value: 43,
      max: 100,

      details: [
        {
          label: "Equip Speed",
          value: "0.9S",
        },
        {
          label: "ADS Speed",
          value: "0.4S",
        },
        {
          label: "Weight",
          value: "27.5%",
        },
        {
          label: "Recoil",
          value: "98.0%",
        },
        {
          label: "Aim Assist",
          value: "1.78°",
        },
        {
          label: "Reload Speed",
          value: "3.1S",
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
      value: 1.6,
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
    "volt-dampener",
  ],

  tags: [
    "weapon",
    "smg",
    "submachine gun",
    "volt",
    "v22",
    "volt thrower",
    "uesc",
    "energy",
    "tracking",
    "standard",
  ],
};
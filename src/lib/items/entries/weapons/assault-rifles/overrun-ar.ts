import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const overrunAr: ItemEntry = {
  id: "overrun-ar",

  name: "Overrun AR",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/OverrunAR.png"),
  image: asset("items/icons/OverrunAR.png"),
  render: asset("items/icons/OverrunAR.png"),
  video: asset("items/videos/weapons/OverrunAR.mp4"),

  sellPrice: 50,

  description:
    "Light assault rifle with high rate of fire.",

  effect: "Standard Assault Rifle",

  lore:
    "A lightweight automatic rifle engineered for relentless suppressive fire. Its exceptional firing rate allows operators to overwhelm targets at close to medium range before they can react.",

  ammo: {
    itemId: "light-rounds",
    label: "Light Rounds",
    icon: asset("items/icons/light-rounds.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 14.7,
      max: 40,

      details: [
        {
          label: "Damage",
          value: "10.5",
        },
        {
          label: "Precision",
          value: "1.4",
        },
        {
          label: "Rate of Fire",
          value: "720 RPM",
        },
      ],
    },

    {
      label: "Accuracy",
      value: 50.3,
      max: 100,

      details: [
        {
          label: "Hipfire Spread",
          value: "2.32°",
        },
        {
          label: "ADS Spread",
          value: "0.94°",
        },
        {
          label: "Crouch Spread Bonus",
          value: "87.5%",
        },
        {
          label: "Moving Inaccuracy",
          value: "90.9%",
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
          value: "0.43S",
        },
        {
          label: "Weight",
          value: "32.0%",
        },
        {
          label: "Recoil",
          value: "78.3%",
        },
        {
          label: "Aim Assist",
          value: "1.68°",
        },
        {
          label: "Reload Speed",
          value: "2.37S",
        },
      ],
    },

    {
      label: "Range",
      value: 40,
      max: 100,
      unit: "M",
    },

    {
      label: "Magazine",
      value: 25,
      max: 60,
    },

    {
      label: "Zoom",
      value: 1.2,
      max: 6.0,
      unit: "X",
    },
  ],

  acceptedModSubcategories: [
    "chip",
    "assault-magazine",
    "assault-optic",
    "rifle-grip",
  ],

  tags: [
    "weapon",
    "assault rifle",
    "overrun ar",
    "automatic",
    "high fire rate",
    "light rounds",
    "uesc",
  ],
};
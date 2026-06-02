import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const repeaterHpr: ItemEntry = {
  id: "repeater-hpr",

  name: "Repeater HPR",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/RepeaterHPR.png"),
  image: asset("items/icons/RepeaterHPR.png"),
  render: asset("items/icons/RepeaterHPR.png"),
  video: asset("items/videos/weapons/RepeaterHPR.mp4"),

  sellPrice: 480,

  description:
    "Lever-action heavy precision rifle. Reloads one round at a time.",

  effect: "Standard Precision Rifle",

  lore:
    "A compact lever-action precision rifle chambered for heavy rounds. Fast handling and strong stopping power make it a favorite among frontier marksmen.",

  ammo: {
    itemId: "heavy-rounds",
    label: "Heavy Rounds",
    icon: asset("items/icons/heavy-rounds.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 79.8,
      max: 220,

      details: [
        {
          label: "Firepower",
          value: "79.8",
        },
        {
          label: "Damage",
          value: "38.0",
        },
        {
          label: "Precision",
          value: "2.1",
        },
        {
          label: "Rate of Fire",
          value: "86 RPM",
        },
      ],
    },

    {
      label: "Accuracy",
      value: 60.4,
      max: 100,

      details: [
        {
          label: "Hipfire Spread",
          value: "2.65°",
        },
        {
          label: "ADS Spread",
          value: "0.92°",
        },
        {
          label: "Crouch Spread Bonus",
          value: "60.0%",
        },
        {
          label: "Moving Inaccuracy",
          value: "20.5%",
        },
      ],
    },

    {
      label: "Handling",
      value: 52,
      max: 100,

      details: [
        {
          label: "Equip Speed",
          value: "0.94S",
        },
        {
          label: "ADS Speed",
          value: "0.34S",
        },
        {
          label: "Weight",
          value: "37.0%",
        },
        {
          label: "Recoil",
          value: "57.8%",
        },
        {
          label: "Aim Assist",
          value: "1.01°",
        },
        {
          label: "Reload Speed",
          value: "0.76S",
        },
      ],
    },

    {
      label: "Range",
      value: 37,
      max: 100,
      unit: "M",
    },

    {
      label: "Magazine",
      value: 9,
      max: 20,
    },

    {
      label: "Zoom",
      value: 1.2,
      max: 4,
      unit: "X",
    },
  ],

  acceptedModSubcategories: [
    "chip",
    "precision-optic",
    "precision-barrel",
  ],

  tags: [
    "weapon",
    "precision rifle",
    "repeater",
    "hpr",
    "lever action",
    "heavy rounds",
    "uesc",
  ],
};
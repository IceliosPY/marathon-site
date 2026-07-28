import type { ItemEntry } from "../types";
import { asset } from "@/lib/assets";

export const fistOfPhobos: ItemEntry = {
  id: "fist-of-phobos",

  name: "Fist of Phobos",

  category: "weapon",
  rarity: "prestige",

  icon: asset("items/icons/fist-of-phobos.png"),
  image: asset("items/icons/fist-of-phobos.png"),
  render: asset("items/icons/fist-of-phobos.png"),
  video: asset("items/videos/weapons/fist-of-phobos.mp4"),

  sellPrice: 6303,

  description:
    "A modified Stryder M1T, with greatly enhanced proximity sensor range.",

  effect: "Prestige Precision Rifle",

  lore: "We dug two graves.",

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],

  ammo: {
    itemId: "rifle-ammo",
    label: "Rifle Ammo",
    icon: asset("items/icons/rifle-ammo.png"),
  },

  possibleEffects: [
    {
      id: "unique",
      label: "Unique",
      description:
        "This weapon uses unique upgrades; its mod slots are permanently locked.",
    },
  ],

  lockedUpgradeIds: [
    "afterburner",
    "hi-cap-mag",
    "vital-intel",
    "farshot-barrel",
  ],

  stats: [
    {
      label: "Firepower",
      value: 46.5,
      max: 100,

      details: [
        { label: "Damage", value: "31.0" },
        { label: "Precision", value: "1.5" },
        { label: "Rate of Fire", value: "200 RPM" },
      ],
    },

    {
      label: "Accuracy",
      value: 64.7,
      max: 100,

      details: [
        { label: "Hipfire Spread", value: "2.00°" },
        { label: "ADS Spread", value: "0.68°" },
        { label: "Crouch Spread Bonus", value: "80.0%" },
        { label: "Moving Inaccuracy", value: "20.5%" },
      ],
    },

    {
      label: "Handling",
      value: 48,
      max: 100,

      details: [
        { label: "Equip Speed", value: "0.75S" },
        { label: "ADS Speed", value: "0.27S" },
        { label: "Weight", value: "30.0%" },
        { label: "Recoil", value: "80.0%" },
        { label: "Aim Assist", value: "0.82°" },
        { label: "Reload Speed", value: "3.23S" },
      ],
    },

    {
      label: "Range",
      value: 105,
      max: 150,
      unit: "M",
    },

    {
      label: "Magazine",
      value: 30,
      max: 100,
    },

    {
      label: "Zoom",
      value: 1.4,
      max: 10,
      unit: "X",
    },
  ],

  tags: [
    "weapon",
    "precision rifle",
    "stryder m1t",
    "fist of phobos",
    "prestige",
    "unique",
    "proximity sensor",
    "radar",
  ],
};
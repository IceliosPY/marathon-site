import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const m77Omnipositor: ItemEntry = {
  id: "m77-omnipositor",

  name: "M77 Omnipositor",

  category: "weapon",
  rarity: "prestige",

  icon: asset("items/icons/m77-omnipositor.png"),
  image: asset("items/icons/m77-omnipositor.png"),
  render: asset("items/icons/m77-omnipositor.png"),
  video: asset("items/videos/weapons/M77Omnipositor.mp4"),

  sellPrice: 5601,

  description:
    "A modified M77 Assault Rifle with a faster rate of fire and deeper magazine.",

  effect: "Prestige Assault Rifle",

  lore:
    "A deafening buzz. Then silence. This modified M77 Assault Rifle is built around sustained precision fire, a deeper magazine, and a built-in flip scope for high-precision engagements.",

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
    "swarm-directive",
    "interval-mag",
    "speed-scout-grip",
  ],

  stats: [
    {
      label: "Firepower",
      value: 24,
      max: 250,

      details: [
        {
          label: "Firepower",
          value: "24.0",
        },
        {
          label: "Damage",
          value: "16.0",
        },
        {
          label: "Precision",
          value: "1.5",
        },
        {
          label: "Rate of Fire",
          value: "514 RPM",
        },
      ],
    },

    {
      label: "Accuracy",
      value: 62.1,
      max: 100,

      details: [
        {
          label: "Hipfire Spread",
          value: "2.08°",
        },
        {
          label: "ADS Spread",
          value: "0.73°",
        },
        {
          label: "Crouch Spread Bonus",
          value: "80.0%",
        },
        {
          label: "Moving Inaccuracy",
          value: "32.7%",
        },
      ],
    },

    {
      label: "Handling",
      value: 44,
      max: 100,

      details: [
        {
          label: "Equip Speed",
          value: "0.9S",
        },
        {
          label: "ADS Speed",
          value: "0.24S",
        },
        {
          label: "Weight",
          value: "30.0%",
        },
        {
          label: "Recoil",
          value: "108.0%",
        },
        {
          label: "Aim Assist",
          value: "2.06°",
        },
        {
          label: "Reload Speed",
          value: "1.97S",
        },
      ],
    },

    {
      label: "Range",
      value: 51,
      max: 100,
      unit: "M",
    },

    {
      label: "Magazine",
      value: 48,
      max: 100,
    },

    {
      label: "Zoom",
      value: 1.2,
      max: 10,
      unit: "X",
    },
  ],

  tags: [
    "weapon",
    "assault rifle",
    "m77",
    "omnipositor",
    "prestige",
    "unique",
    "precision",
    "rifle",
    "flip scope",
  ],
};
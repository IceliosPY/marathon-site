import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const drrvish: ItemEntry = {
  id: "drrvish",

  name: "DRRVISH",

  category: "weapon",
  rarity: "prestige",

  icon: asset("items/icons/BRRTSMG.png"),
  image: asset("items/icons/BRRTSMG.png"),
  render: asset("items/icons/BRRTSMG.png"),
  video: asset("items/videos/weapons/brrt-smg.mp4"),

  sellPrice: 5563,

  description:
    "A modified BRRT SMG, featuring an extended magazine.",

  effect: "Prestige Submachine Gun",

  lore:
    `"Brief scenes of stylized violence." A unique BRRT SMG variant tuned for extreme rate of fire and locked custom upgrades.`,

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],

  ammo: {
    itemId: "light-rounds",
    label: "Light Rounds",
    icon: asset("items/icons/light-rounds.png"),
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
    "endless-runner",
    "shortwave-scout-optic",
    "flechette-split-action",
  ],

  stats: [
    {
      label: "Firepower",
      value: 15.4,
      max: 220,
      details: [
        { label: "Damage", value: "11.0" },
        { label: "Precision", value: "1.4" },
        { label: "Rate of Fire", value: "1000 RPM" },
      ],
    },

    {
      label: "Accuracy",
      value: 64.6,
      max: 100,
      details: [
        { label: "Hipfire Spread", value: "1.81°" },
        { label: "ADS Spread", value: "0.81°" },
        { label: "Crouch Spread Bonus", value: "85.0%" },
        { label: "Moving Inaccuracy", value: "17.7%" },
      ],
    },

    {
      label: "Handling",
      value: 45,
      max: 100,
      details: [
        { label: "Equip Speed", value: "0.79S" },
        { label: "ADS Speed", value: "0.38S" },
        { label: "Weight", value: "27.5%" },
        { label: "Recoil", value: "98.0%" },
        { label: "Aim Assist", value: "2.46°" },
        { label: "Reload Speed", value: "2.82S" },
      ],
    },

    {
      label: "Range",
      value: 28,
      max: 100,
      unit: "M",
    },

    {
      label: "Magazine",
      value: 45,
      max: 100,
    },

    {
      label: "Zoom",
      value: 1.4,
      max: 6.0,
      unit: "X",
    },
  ],

  tags: [
    "weapon",
    "submachine gun",
    "smg",
    "brrt smg",
    "drrvish",
    "prestige",
    "unique",
    "high rate of fire",
  ],
};
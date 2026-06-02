import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const saltWages: ItemEntry = {
  id: "salt-wages",

  name: "Salt Wages",

  category: "weapon",
  rarity: "prestige",

  icon: asset("items/icons/salt-wages.png"),
  image: asset("items/icons/salt-wages.png"),
  render: asset("items/icons/salt-wages.png"),
  video: asset("items/videos/weapons/SaltWages.mp4"),

  sellPrice: 5664,

  description:
    "A modified Conquest LMG, tempered for faster minimum and maximum fire rates.",

  effect: "Prestige Machine Gun",

  lore: `"Forged with malice."`,

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],

  ammo: {
    itemId: "heavy-rounds",
    label: "Heavy Rounds",
    icon: asset("items/icons/heavy-rounds.png"),
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
    "five-finger-discount",
    "infinity-belt",
    "accu-sight-lens",
    "duelist-shield",
  ],

  stats: [
    {
      label: "Firepower",
      value: 24.0,
      max: 220,
      details: [
        { label: "Damage", value: "16.0" },
        { label: "Precision", value: "1.5" },
        { label: "Rate of Fire", value: "660 RPM" },
      ],
    },

    {
      label: "Accuracy",
      value: 68.4,
      max: 100,
      details: [
        { label: "Hipfire Spread", value: "2.28°" },
        { label: "ADS Spread", value: "0.35°" },
        { label: "Crouch Spread Bonus", value: "70.0%" },
        { label: "Moving Inaccuracy", value: "9.1%" },
      ],
    },

    {
      label: "Handling",
      value: 31,
      max: 100,
      details: [
        { label: "Equip Speed", value: "1.1S" },
        { label: "ADS Speed", value: "0.5S" },
        { label: "Weight", value: "47.5%" },
        { label: "Recoil", value: "82.0%" },
        { label: "Aim Assist", value: "1.50°" },
        { label: "Reload Speed", value: "4.54S" },
      ],
    },

    {
      label: "Range",
      value: 120,
      max: 200,
      unit: "M",
    },

    {
      label: "Magazine",
      value: 126,
      max: 160,
    },

    {
      label: "Zoom",
      value: 2.5,
      max: 6.0,
      unit: "X",
    },
  ],

  acceptedModSubcategories: [
    "chip",
    "belt-fed-magazine",
    "lmg-optic",
    "shield",
  ],

  tags: [
    "weapon",
    "machine gun",
    "lmg",
    "salt wages",
    "prestige",
    "unique",
    "conquest lmg",
    "heavy rounds",
    "uesc",
  ],
};
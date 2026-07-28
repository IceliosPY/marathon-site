import type { ItemEntry } from "../types";
import { asset } from "@/lib/assets";

export const wstrCombatShotgun: ItemEntry = {
  id: "wstr-combat-shotgun",

  name: "WSTR Combat Shotgun",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/WSTRCombatShotgun.png"),
  image: asset("items/icons/WSTRCombatShotgun.png"),
  render: asset("items/icons/WSTRCombatShotgun.png"),
  video: asset("items/videos/weapons/WSTR.mp4"),

  modelParts: {
    body: asset("items/models/weapons/wstr/v002_Shotgun_default.glb"),
  },

  sellPrice: 2400,

  description:
    "Ballistic double-barrel shotgun. Packs high damage in close quarters.",

  effect: "Standard Shotgun",

  lore:
    "Compact double-barrel combat shotgun designed for fast close-range engagements.",

  ammo: {
    itemId: "heavy-rounds",
    label: "Heavy Rounds",
    icon: asset("items/icons/heavy-rounds.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 89.2,
      max: 220,
      details: [
        { label: "Firepower", value: "89" },
        { label: "Damage", value: "8.5" },
        { label: "Precision", value: "1.05" },
        { label: "Rate of Fire", value: "194 RPM" },
      ],
    },
    {
      label: "Handling",
      value: 49,
      max: 100,
      details: [
        { label: "Equip Speed", value: "0.9S" },
        { label: "ADS Speed", value: "0.42S" },
        { label: "Weight", value: "36.0%" },
        { label: "Recoil", value: "50.5%" },
        { label: "Aim Assist", value: "2.70°" },
        { label: "Reload Speed", value: "2.64S" },
      ],
    },
    {
      label: "Range",
      value: 4,
      max: 20,
      unit: "M",
    },
    {
      label: "Spread Angle",
      value: 4.0,
      max: 10,
      unit: "°",
    },
    {
      label: "Magazine",
      value: 2,
      max: 10,
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
    "shotgun-grip",
    "underbarrel",
  ],

  tags: [
    "weapon",
    "shotgun",
    "wstr",
    "combat shotgun",
    "double barrel",
    "ballistic",
    "close range",
  ],
};
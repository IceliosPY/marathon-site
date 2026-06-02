import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const controlShield: ItemEntry = {
  id: "control-shield",

  name: "Control Shield",

  category: "mod",
  rarity: "superior",
  modSubcategory: "shield",

  icon: asset("items/icons/ControlShield.png"),
  image: asset("items/icons/ControlShield.png"),
  render: asset("items/icons/ControlShield.png"),
  video: asset("items/videos/mods/ControlShield.webm"),

  sellPrice: 621,

  effect: "Superior Shield Mod",

  description: "Greatly increases stability.",

  lore:
    "A stabilizing shield assembly built for sustained machine-gun fire. It reinforces the weapon frame and helps control recoil while retaining the assault shield system.",

  weaponStatProfiles: [
    {
      weaponId: "conquest-lmg",
      weaponName: "Conquest LMG",
      stats: [
        { label: "Recoil", value: 0, modifier: -55.0, unit: "%" },
      ],
    },
    {
      weaponId: "retaliator-lmg",
      weaponName: "Retaliator LMG",
      stats: [
        { label: "Recoil", value: 0, modifier: -45.0, unit: "%" },
      ],
    },
    {
      weaponId: "demolition-hmg",
      weaponName: "Demolition HMG",
      stats: [
        { label: "Recoil", value: 0, modifier: -31.9, unit: "%" },
      ],
    },
  ],

  specialEffects: [
    {
      name: "Assault Shield",
      description:
        "Activate an energy shield that absorbs incoming damage.",
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const balancedShield: ItemEntry = {
  id: "balanced-shield",

  name: "Balanced Shield",

  category: "mod",
  rarity: "superior",
  modSubcategory: "shield",

  icon: asset("items/icons/BalancedShield.png"),
  image: asset("items/icons/BalancedShield.png"),
  render: asset("items/icons/BalancedShield.png"),
  video: asset("items/videos/mods/balanced-shield.mp4"),

  sellPrice: 621,

  effect: "Superior Shield Mod",

  description:
    "Greatly increases ready speed and movement speed with this weapon.",

  weaponStatProfiles: [
    {
      weaponId: "retaliator-lmg",
      weaponName: "Retaliator LMG",
      stats: [
        { label: "Equip Speed", value: 0, modifier: -0.81, unit: "s" },
        { label: "Weight", value: 0, modifier: -18.0, unit: "%" },
      ],
    },
    {
      weaponId: "conquest-lmg",
      weaponName: "Conquest LMG",
      stats: [
        { label: "Equip Speed", value: 0, modifier: -0.80, unit: "s" },
        { label: "Weight", value: 0, modifier: -20.0, unit: "%" },
      ],
    },
    {
      weaponId: "demolition-hmg",
      weaponName: "Demolition HMG",
      stats: [
        { label: "Equip Speed", value: 0, modifier: -0.60, unit: "s" },
        { label: "Weight", value: 0, modifier: -18.0, unit: "%" },
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
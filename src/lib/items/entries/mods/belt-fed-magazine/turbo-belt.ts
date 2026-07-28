import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const turboBelt: ItemEntry = {
  id: "turbo-belt",

  name: "Turbo Belt",

  category: "mod",
  rarity: "superior",
  modSubcategory: "belt-fed-magazine",

  icon: asset("items/icons/TurboBelt.png"),
  image: asset("items/icons/TurboBelt.png"),
  render: asset("items/icons/TurboBelt.png"),
  video: asset("items/videos/mods/TurboBelt.webm"),

  sellPrice: 621,

  effect: "Superior Belt-Fed Magazine Mod",

  description:
    "Greatly increases magazine size, reload speed, and movement speed with this weapon.",

  lore:
    "A lightweight accelerated belt-feed system built to keep heavy weapons mobile without sacrificing sustained fire capacity.",

  weaponStatProfiles: [
    {
      weaponId: "conquest-lmg",
      weaponName: "Conquest LMG",
      stats: [
        { label: "Weight", value: 0, modifier: -12.5, unit: "%" },
        { label: "Reload Speed", value: 0, modifier: -0.62, unit: "S" },
        { label: "Magazine", value: 0, modifier: 40 },
      ],
    },
    {
      weaponId: "retaliator-lmg",
      weaponName: "Retaliator LMG",
      stats: [
        { label: "Weight", value: 0, modifier: -9.0, unit: "%" },
        { label: "Reload Speed", value: 0, modifier: -0.58, unit: "S" },
        { label: "Magazine", value: 0, modifier: 45 },
      ],
    },
    {
      weaponId: "demolition-hmg",
      weaponName: "Demolition HMG",
      stats: [
        { label: "Weight", value: 0, modifier: -9.0, unit: "%" },
        { label: "Reload Speed", value: 0, modifier: -0.52, unit: "S" },
        { label: "Magazine", value: 0, modifier: 27 },
      ],
    },
  ],

  sources: [{ label: "World Loot", kind: "world-loot" }],
};
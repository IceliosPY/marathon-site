import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const cloudfeatherBelt: ItemEntry = {
  id: "cloudfeather-belt",

  name: "Cloudfeather Belt",

  category: "mod",
  rarity: "superior",
  modSubcategory: "belt-fed-magazine",

  icon: asset("items/icons/CloudfeatherBelt.png"),
  image: asset("items/icons/CloudfeatherBelt.png"),
  render: asset("items/icons/CloudfeatherBelt.png"),
  video: asset("items/videos/mods/CloudfeatherBelt.webm"),

  sellPrice: 621,

  effect: "Superior Belt-Fed Magazine Mod",

  description:
    "Greatly increases reload speed and magazine size.",

  lore:
    "A lightweight belt-feed assembly designed to improve ammunition handling and reload cycling while still expanding sustained-fire capacity.",

  highlightTerms: [
    "cloudfeather belt",
    "belt-fed magazine",
    "reload speed",
    "magazine size",
    "lmg",
    "machine gun",
  ],

  tags: [
    "mod",
    "belt-fed magazine",
    "magazine",
    "reload speed",
    "lmg",
    "machine gun",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "conquest-lmg",
      weaponName: "Conquest LMG",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -2.48, unit: "S" },
        { label: "Magazine", value: 0, modifier: 30 },
      ],
    },

    {
      weaponId: "retaliator-lmg",
      weaponName: "Retaliator LMG",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -2.34, unit: "S" },
        { label: "Magazine", value: 0, modifier: 33 },
      ],
    },

    {
      weaponId: "demolition-hmg",
      weaponName: "Demolition HMG",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -1.9, unit: "S" },
        { label: "Magazine", value: 0, modifier: 20 },
      ],
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
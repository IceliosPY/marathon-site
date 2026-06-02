import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const megaBelt: ItemEntry = {
  id: "mega-belt",

  name: "Mega Belt",

  category: "mod",
  rarity: "superior",
  modSubcategory: "belt-fed-magazine",

  icon: asset("items/icons/MegaBelt.png"),
  image: asset("items/icons/MegaBelt.png"),
  render: asset("items/icons/MegaBelt.png"),
  video: asset("items/videos/mods/MegaBelt.webm"),

  sellPrice: 702,

  effect: "Superior Belt-Fed Magazine Mod",

  description:
    "Massively increases magazine size.",

  lore:
    "An expanded belt-feed assembly built for sustained suppressive fire. Its oversized ammunition path dramatically extends firing uptime, though the added bulk increases weapon weight.",

  highlightTerms: [
    "mega belt",
    "belt-fed magazine",
    "magazine size",
    "weight",
    "lmg",
    "machine gun",
  ],

  tags: [
    "mod",
    "belt-fed magazine",
    "magazine",
    "lmg",
    "machine gun",
    "sustained fire",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "conquest-lmg",
      weaponName: "Conquest LMG",
      stats: [
        { label: "Weight", value: 0, modifier: 10.0, unit: "%" },
        { label: "Magazine", value: 0, modifier: 90 },
      ],
    },

    {
      weaponId: "retaliator-lmg",
      weaponName: "Retaliator LMG",
      stats: [
        { label: "Weight", value: 0, modifier: 3.0, unit: "%" },
        { label: "Magazine", value: 0, modifier: 101 },
      ],
    },

    {
      weaponId: "demolition-hmg",
      weaponName: "Demolition HMG",
      stats: [
        { label: "Weight", value: 0, modifier: 3.0, unit: "%" },
        { label: "Magazine", value: 0, modifier: 68 },
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
import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const dermachemPack: ItemEntry = {
  id: "dermachem-pack",

  name: "Dermachem Pack",

  category: "salvage",
  rarity: "enhanced",

  icon: asset("items/icons/dermachem-pack.png"),
  image: asset("items/icons/dermachem-pack.png"),
  render: asset("items/icons/dermachem-pack.png"),
  video: asset("items/videos/salvage/dermachem-pack.mp4"),

  sellPrice: 10000,

  effect: "Enhanced Salvage",

  description:
    "Chempack Salvage. Synthetic chemical substrate able to add a fleshlike conductive layer to inorganic materials.\n\nSources\nDire Marsh\n• Algae Ponds\nOutpost\n• Pinwheel Base\nCryo Archive\n• Steerage\nMedical Cabinet\n\nUsage\nNuCaloric Upgrades and Barters",

  highlightTerms: [
    "Sources",
    "Usage",
  ],

  sources: [
    {
      label: "Dire Marsh - Algae Ponds",
      kind: "world-loot",
    },
    {
      label: "Outpost - Pinwheel Base",
      kind: "world-loot",
    },
    {
      label: "Cryo Archive - Steerage",
      kind: "world-loot",
    },
    {
      label: "Medical Cabinet",
      kind: "world-loot",
    },
  ],

  tags: [
    "salvage",
    "enhanced",
    "dermachem",
    "chempack",
    "chemical",
    "synthetic",
    "conductive",
    "biomaterial",
    "dire marsh",
    "algae ponds",
    "outpost",
    "pinwheel base",
    "cryo archive",
    "steerage",
    "medical cabinet",
    "nucaloric",
  ],
};
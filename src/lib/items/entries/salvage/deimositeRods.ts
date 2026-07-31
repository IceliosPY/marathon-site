import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const deimositeRods: ItemEntry = {
  id: "deimosite-rods",

  name: "Deimosite Rods",

  category: "salvage",
  rarity: "enhanced",

  icon: asset("items/icons/deimosite-rods.png"),
  image: asset("items/icons/deimosite-rods.png"),
  render: asset("items/icons/deimosite-rods.png"),
  video: asset("items/videos/salvage/deimosite-rods.mp4"),

  sellPrice: 2000,

  effect: "Enhanced Salvage",

  description:
    "Rod Salvage. Stout rods made from material mined from Deimos itself.\n\nSources\nDire Marsh\n• Maintenance\nCryo Archive\n• Index\nArms Locker\n\nUsage\nTraxus Upgrades and Barters",

  highlightTerms: [
    "Sources",
    "Usage",
  ],

  sources: [
    {
      label: "Dire Marsh - Maintenance",
      kind: "world-loot",
    },
    {
      label: "Cryo Archive - Index",
      kind: "world-loot",
    },
    {
      label: "Arms Locker",
      kind: "world-loot",
    },
  ],

  tags: [
    "salvage",
    "enhanced",
    "deimosite",
    "rods",
    "rod",
    "metal",
    "deimos",
    "dire marsh",
    "maintenance",
    "cryo archive",
    "index",
    "arms locker",
    "traxus",
  ],
};
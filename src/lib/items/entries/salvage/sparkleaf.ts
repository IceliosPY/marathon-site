import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const sparkleaf: ItemEntry = {
  id: "sparkleaf",

  name: "Sparkleaf",

  category: "salvage",
  rarity: "enhanced",

  icon: asset("items/icons/sparkleaf.png"),
  image: asset("items/icons/sparkleaf.png"),
  render: asset("items/icons/sparkleaf.png"),
  video: asset("items/videos/salvage/sparkleaf.mp4"),

  sellPrice: 10000,

  effect: "Enhanced Salvage",

  description:
    "Plant Salvage. High in silica content, this plant is a valuable resource on Tau Ceti IV.\n\nSources\nPerimeter\n• Overflow\nDire Marsh\n• Greenhouse\nCryo Archive\n• Revival\nGrassy Areas\n\nUsage\nNuCaloric Upgrades and Barters",

  highlightTerms: [
    "Sources",
    "Usage",
  ],

  sources: [
    {
      label: "Perimeter - Overflow",
      kind: "world-loot",
    },
    {
      label: "Dire Marsh - Greenhouse",
      kind: "world-loot",
    },
    {
      label: "Cryo Archive - Revival",
      kind: "world-loot",
    },
    {
      label: "Grassy Areas",
      kind: "world-loot",
    },
  ],

  tags: [
    "salvage",
    "enhanced",
    "sparkleaf",
    "plant",
    "flora",
    "silica",
    "tau ceti iv",
    "perimeter",
    "overflow",
    "dire marsh",
    "greenhouse",
    "cryo archive",
    "revival",
    "grassy areas",
    "nucaloric",
  ],
};
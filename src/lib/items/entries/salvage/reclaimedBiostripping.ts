import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const reclaimedBiostripping: ItemEntry = {
  id: "reclaimed-biostripping",

  name: "Reclaimed Biostripping",

  category: "salvage",
  rarity: "enhanced",

  icon: asset("items/icons/reclaimed-biostripping.png"),
  image: asset("items/icons/reclaimed-biostripping.png"),
  render: asset("items/icons/reclaimed-biostripping.png"),
  video: asset("items/videos/salvage/reclaimed-biostripping.mp4"),

  sellPrice: 4600,

  effect: "Enhanced Salvage",

  description:
    "Biostrip Salvage. Useful rubberlike material sourced from reclaimed biological waste.\n\nSources\nPerimeter\n• Hauler\nCryo Archive\n• Preservation\nArms Locker\n\nUsage\nNuCaloric Upgrades and Barters",

  highlightTerms: [
    "Sources",
    "Usage",
  ],

  sources: [
    {
      label: "Perimeter - Hauler",
      kind: "world-loot",
    },
    {
      label: "Cryo Archive - Preservation",
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
    "reclaimed",
    "biostripping",
    "biostrip",
    "biological",
    "waste",
    "rubber",
    "perimeter",
    "hauler",
    "cryo archive",
    "preservation",
    "arms locker",
    "nucaloric",
  ],
};
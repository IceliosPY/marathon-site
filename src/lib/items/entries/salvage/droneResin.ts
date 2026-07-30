import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const droneResin: ItemEntry = {
  id: "drone-resin",

  name: "Drone Resin",

  category: "salvage",
  rarity: "enhanced",

  icon: asset("items/icons/drone-resin.png"),
  image: asset("items/icons/drone-resin.png"),
  render: asset("items/icons/drone-resin.png"),
  video: asset("items/videos/salvage/drone-resin.mp4"),

  sellPrice: 500,

  effect: "Enhanced Salvage",

  description:
    "Resin Salvage. A synthetic adhesive used in drone assembly.\n\nSources\nDire Marsh\n• Bio-Research\nCryo Archive\n• Cargo\nTool Cart\nScan Drones\n\nUsage\nArachne Upgrades and Barters",

  highlightTerms: [
    "Sources",
    "Usage",
  ],

  sources: [
    {
      label: "Dire Marsh - Bio-Research",
      kind: "world-loot",
    },
    {
      label: "Cryo Archive - Cargo",
      kind: "world-loot",
    },
    {
      label: "Tool Cart",
      kind: "world-loot",
    },
    {
        label: "Scan drones",
        kind: "world-loot",
    },
  ],

  tags: [
    "salvage",
    "enhanced",
    "resin",
    "drone",
    "adhesive",
    "arachne",
    "dire marsh",
    "cryo archive",
    "bio-research",
    "cargo",
    "tool cart",
    "scan drones",
    "synthetic",
  ],
};
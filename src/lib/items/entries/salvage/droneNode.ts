import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const droneNode: ItemEntry = {
  id: "drone-node",

  name: "Drone Node",

  category: "salvage",
  rarity: "enhanced",

  icon: asset("items/icons/drone-node.png"),
  image: asset("items/icons/drone-node.png"),
  render: asset("items/icons/drone-node.png"),
  video: asset("items/videos/salvage/drone-node.mp4"),

  sellPrice: 1450,

  effect: "Enhanced Salvage",

  description:
    "Node Salvage. A digital node from a drone capable of independent thought.\n\nSources\nOutpost\n• Orientation\n• Pinwheel Base\n• Processing\nCryo Archive\n• Steerage\nTool Cart\nScan Drones\n\nUsage\nArachne Upgrades and Barters",

  highlightTerms: [
    "Sources",
    "Usage",
  ],

  sources: [
    {
      label: "Outpost - Orientation",
      kind: "world-loot",
    },
    {
      label: "Outpost - Pinwheel Base",
      kind: "world-loot",
    },
    {
      label: "Outpost - Processing",
      kind: "world-loot",
    },
    {
      label: "Cryo Archive - Steerage",
      kind: "world-loot",
    },
    {
      label: "Tool Cart",
      kind: "world-loot",
    },
    {
      label: "Scan Drones",
      kind: "enemy",
    },
  ],

  tags: [
    "salvage",
    "enhanced",
    "drone",
    "node",
    "digital",
    "processor",
    "ai",
    "outpost",
    "orientation",
    "pinwheel base",
    "processing",
    "cryo archive",
    "steerage",
    "tool cart",
    "scan drones",
    "arachne",
  ],
};
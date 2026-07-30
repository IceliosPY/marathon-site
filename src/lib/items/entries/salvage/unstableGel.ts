import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const unstableGel: ItemEntry = {
  id: "unstable-gel",

  name: "Unstable Gel",

  category: "salvage",
  rarity: "standard",

  icon: asset("items/icons/unstable-gel.png"),
  image: asset("items/icons/unstable-gel.png"),
  render: asset("items/icons/unstable-gel.png"),
  video: asset("items/videos/salvage/unstable-gel.mp4"),

  sellPrice: 4850,

  effect: "Standard Salvage",

  description:
    "Resin/Node Salvage. A sample of resorcinol-formaldehyde gel that has molecularly destabilized.\n\nSources\nDire Marsh\n• Bio-Research\nOutpost\n• Orientation\n• Processing\n\nUsage\nAmmo\nCyberAcme Upgrades\nArachne Upgrades and Barters",

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
      label: "Outpost - Orientation",
      kind: "world-loot",
    },
    {
      label: "Outpost - Processing",
      kind: "world-loot",
    },
  ],

  tags: [
    "salvage",
    "standard",
    "unstable",
    "gel",
    "resin",
    "node",
    "resorcinol-formaldehyde",
    "ammo",
    "cyberacme",
    "arachne",
    "dire marsh",
    "outpost",
    "bio-research",
    "orientation",
    "processing",
  ],
};
import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const unstableGunmetal: ItemEntry = {
  id: "unstable-gunmetal",

  name: "Unstable Gunmetal",

  category: "salvage",
  rarity: "standard",

  icon: asset("items/icons/unstable-gunmetal.png"),
  image: asset("items/icons/unstable-gunmetal.png"),
  render: asset("items/icons/unstable-gunmetal.png"),
  video: asset("items/videos/salvage/unstable-gunmetal.mp4"),

  sellPrice: 2130,

  effect: "Standard Salvage",

  description:
    "Filament/Rod/Wire Salvage. A piece of gunmetal that has molecularly destabilized.\n\nSources\nPerimeter\n• Station\nDire Marsh\n• AI Uplink\n• Maintenance\n\nUsage\nAmmo\nCyberAcme Upgrades\nTraxus Upgrades and Barters",

  highlightTerms: [
    "Sources",
    "Usage",
  ],

  sources: [
    {
      label: "Perimeter - Station",
      kind: "world-loot",
    },
    {
      label: "Dire Marsh - AI Uplink",
      kind: "world-loot",
    },
    {
      label: "Dire Marsh - Maintenance",
      kind: "world-loot",
    },
  ],

  tags: [
    "salvage",
    "standard",
    "unstable",
    "gunmetal",
    "filament",
    "rod",
    "wire",
    "metal",
    "perimeter",
    "station",
    "dire marsh",
    "ai uplink",
    "maintenance",
    "ammo",
    "cyberacme",
    "traxus",
  ],
};
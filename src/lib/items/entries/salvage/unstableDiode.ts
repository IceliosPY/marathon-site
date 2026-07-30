import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const unstableDiode: ItemEntry = {
  id: "unstable-diode",

  name: "Unstable Diode",

  category: "salvage",
  rarity: "standard",

  icon: asset("items/icons/unstable-diode.png"),
  image: asset("items/icons/unstable-diode.png"),
  render: asset("items/icons/unstable-diode.png"),
  video: asset("items/videos/salvage/unstable-diode.mp4"),

  sellPrice: 5000,

  effect: "Standard Salvage",

  description:
    "Drive/Circuit Salvage. A diode that has molecularly destabilized.\n\nSources\nPerimeter\n• North Relay\n• South Relay\nOutpost\n• Flight Control\n• Dormitories\n\nUsage\nImplants\nRunner Cores\nCyberAcme Upgrades\nSekiguchi Upgrades and Barters",

  highlightTerms: [
    "Sources",
    "Usage",
  ],

  sources: [
    {
      label: "Perimeter - North Relay",
      kind: "world-loot",
    },
    {
      label: "Perimeter - South Relay",
      kind: "world-loot",
    },
    {
      label: "Outpost - Flight Control",
      kind: "world-loot",
    },
    {
      label: "Outpost - Dormitories",
      kind: "world-loot",
    },
  ],

  tags: [
    "salvage",
    "standard",
    "unstable",
    "diode",
    "drive",
    "circuit",
    "electronics",
    "perimeter",
    "north relay",
    "south relay",
    "outpost",
    "flight control",
    "dormitories",
    "implants",
    "runner cores",
    "cyberacme",
    "sekiguchi",
  ],
};
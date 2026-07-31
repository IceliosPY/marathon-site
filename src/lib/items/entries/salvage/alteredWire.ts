import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const alteredWire: ItemEntry = {
  id: "altered-wire",

  name: "Altered Wire",

  category: "salvage",
  rarity: "enhanced",

  icon: asset("items/icons/altered-wire.png"),
  image: asset("items/icons/altered-wire.png"),
  render: asset("items/icons/altered-wire.png"),
  video: asset("items/videos/salvage/altered-wire.mp4"),

  sellPrice: 4500,

  effect: "Enhanced Salvage",

  description:
    "Wire Salvage. Wiring influenced by unknown energies, causing bursts of superconductive capacity.\n\nSources\nPerimeter\n• Station\nCryo Archive\n• Biostock\nMunitions Crate\nLocked Rooms [Deluxe or higher]\n\nUsage\nTraxus Upgrades and Barters",

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
      label: "Cryo Archive - Biostock",
      kind: "world-loot",
    },
    {
      label: "Munitions Crate",
      kind: "world-loot",
    },
    {
      label: "Locked Rooms [Deluxe or higher]",
      kind: "world-loot",
    },
  ],

  tags: [
    "salvage",
    "enhanced",
    "altered",
    "wire",
    "copper",
    "superconductive",
    "electric",
    "electronics",
    "perimeter",
    "station",
    "cryo archive",
    "biostock",
    "munitions crate",
    "locked rooms",
    "deluxe",
    "traxus",
  ],
};
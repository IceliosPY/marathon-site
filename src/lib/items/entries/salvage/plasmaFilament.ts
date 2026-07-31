import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const plasmaFilament: ItemEntry = {
  id: "plasma-filament",

  name: "Plasma Filament",

  category: "salvage",
  rarity: "enhanced",

  icon: asset("items/icons/plasma-filament.png"),
  image: asset("items/icons/plasma-filament.png"),
  render: asset("items/icons/plasma-filament.png"),
  video: asset("items/videos/salvage/plasma-filament.mp4"),

  sellPrice: 2750,

  effect: "Enhanced Salvage",

  description:
    "Filament Salvage. Easily molded filament able to withstand tremendous heat and pressure.\n\nSources\nDire Marsh\n• AI Uplink\nCryo Archive\n• Cargo\nBioprinter\n\nUsage\nTraxus Upgrades and Barters",

  highlightTerms: [
    "Sources",
    "Usage",
    "Dire Marsh",
    "AI Uplink",
    "Cryo Archive",
    "Cargo",
    "Bioprinter",
    "Traxus",
  ],

  sources: [
    {
      label: "Dire Marsh - AI Uplink",
      kind: "world-loot",
    },
    {
      label: "Cryo Archive - Cargo",
      kind: "world-loot",
    },
    {
      label: "Bioprinter",
      kind: "world-loot",
    },
  ],

  tags: [
    "salvage",
    "enhanced",
    "plasma",
    "filament",
    "heat",
    "pressure",
    "high-temperature",
    "dire marsh",
    "ai uplink",
    "cryo archive",
    "cargo",
    "bioprinter",
    "traxus",
  ],
};
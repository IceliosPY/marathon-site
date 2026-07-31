import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const surveillanceLens: ItemEntry = {
  id: "surveillance-lens",

  name: "Surveillance Lens",

  category: "salvage",
  rarity: "enhanced",

  icon: asset("items/icons/surveillance-lens.png"),
  image: asset("items/icons/surveillance-lens.png"),
  render: asset("items/icons/surveillance-lens.png"),
  video: asset("items/videos/salvage/surveillance-lens.mp4"),

  sellPrice: 1450,

  effect: "Enhanced Salvage",

  description:
    "Lens Salvage. Restricted equipment used for high-risk military recon.\n\nSources\nDire Marsh\n• Quarantine\nCryo Archive\n• Revival\nBioprinter\n\nUsage\nMIDA Upgrades and Barters",

  highlightTerms: [
    "Sources",
    "Usage",
    "Dire Marsh",
    "Quarantine",
    "Cryo Archive",
    "Revival",
    "Bioprinter",
    "MIDA",
  ],

  sources: [
    {
      label: "Dire Marsh - Quarantine",
      kind: "world-loot",
    },
    {
      label: "Cryo Archive - Revival",
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
    "surveillance",
    "lens",
    "optics",
    "recon",
    "military",
    "camera",
    "dire marsh",
    "quarantine",
    "cryo archive",
    "revival",
    "bioprinter",
    "mida",
  ],
};
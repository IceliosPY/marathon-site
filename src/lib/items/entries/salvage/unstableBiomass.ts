import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const unstableBiomass: ItemEntry = {
  id: "unstable-biomass",

  name: "Unstable Biomass",

  category: "salvage",
  rarity: "standard",

  icon: asset("items/icons/unstable-biomass.png"),
  image: asset("items/icons/unstable-biomass.png"),
  render: asset("items/icons/unstable-biomass.png"),
  video: asset("items/videos/salvage/unstable-biomass.mp4"),

  sellPrice: 4520,

  effect: "Standard Salvage",

  description:
    "Plant/Chempack/Biostrip Salvage. A sample of unidentifiable biomass that has molecularly destabilized.\n\nSources\nPerimeter\n• Hauler\n• Overflow\nDire Marsh\n• Algae Ponds\n• Greenhouse\n\nUsage\nPatch Kits\nShield Charges\nCyberAcme Upgrades\nNuCaloric Upgrades and Barters",

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
      label: "Perimeter - Overflow",
      kind: "world-loot",
    },
    {
      label: "Dire Marsh - Algae Ponds",
      kind: "world-loot",
    },
    {
      label: "Dire Marsh - Greenhouse",
      kind: "world-loot",
    },
  ],

  tags: [
    "salvage",
    "standard",
    "unstable",
    "biomass",
    "plant",
    "chempack",
    "biostrip",
    "organic",
    "perimeter",
    "hauler",
    "overflow",
    "dire marsh",
    "algae ponds",
    "greenhouse",
    "patch kits",
    "shield charges",
    "cyberacme",
    "nucaloric",
  ],
};
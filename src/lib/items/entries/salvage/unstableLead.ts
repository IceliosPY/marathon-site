import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const unstableLead: ItemEntry = {
  id: "unstable-lead",

  name: "Unstable Lead",

  category: "salvage",
  rarity: "standard",

  icon: asset("items/icons/unstable-lead.png"),
  image: asset("items/icons/unstable-lead.png"),
  render: asset("items/icons/unstable-lead.png"),
  video: asset("items/videos/salvage/unstable-lead.mp4"),

  sellPrice: 4400,

  effect: "Standard Salvage",

  description:
    "Compound/Lens Salvage. A chunk of lead that has molecularly destabilized.\n\nSources\nDire Marsh\n• Quarantine\n• Complex\nOutpost\n• Airfield\n\nUsage\nAmmo Crates\nCyberAcme Upgrades\nMIDA Upgrades and Barters",

  highlightTerms: [
    "Sources",
    "Usage",
  ],

  sources: [
    {
      label: "Dire Marsh - Quarantine",
      kind: "world-loot",
    },
    {
      label: "Dire Marsh - Complex",
      kind: "world-loot",
    },
    {
      label: "Outpost - Airfield",
      kind: "world-loot",
    },
  ],

  tags: [
    "salvage",
    "standard",
    "unstable",
    "lead",
    "compound",
    "lens",
    "metal",
    "dire marsh",
    "quarantine",
    "complex",
    "outpost",
    "airfield",
    "ammo crates",
    "cyberacme",
    "mida",
  ],
};
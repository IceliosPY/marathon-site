import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const synapseCube: ItemEntry = {
  id: "synapse-cube",

  name: "Synapse Cube",

  category: "salvage",
  rarity: "prestige",

  icon: asset("items/icons/synapse-cube.png"),
  image: asset("items/icons/synapse-cube.png"),
  render: asset("items/icons/synapse-cube.png"),
  video: asset("items/videos/salvage/synapse-cube.mp4"),

  sellPrice: 12000,

  effect: "Prestige Eccentric Salvage",

  description:
    "Essential for integrating the electrical signals within a cyborg shell.\n\nSources\nCryo Archive\nLocked Rooms [Prestige]\n\nUsage\nArachne Upgrades and Barters",

  highlightTerms: [
    "Sources",
    "Usage",
    "[Prestige]",
  ],

  sources: [
    {
      label: "Cryo Archive Locked Rooms [Prestige]",
      kind: "world-loot",
    },
  ],

  tags: [
    "salvage",
    "prestige",
    "synapse",
    "cube",
    "arachne",
    "cryo archive",
  ],
};
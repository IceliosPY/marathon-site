import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const fractalCircuit: ItemEntry = {
  id: "fractal-circuit",

  name: "Fractal Circuit",

  category: "salvage",
  rarity: "enhanced",

  icon: asset("items/icons/fractal-circuit.png"),
  image: asset("items/icons/fractal-circuit.png"),
  render: asset("items/icons/fractal-circuit.png"),
  video: asset("items/videos/salvage/fractal-circuit.mp4"),

  sellPrice: 9500,

  effect: "Enhanced Salvage",

  description:
    "Circuit Salvage. Digital processor able to exponentially increase speed and storage.\n\nSources\nPerimeter\n• North Relay\nOutpost\n• Flight Control\n• Dormitories\n• Pinwheel Base\nCryo Archive\n• Preservation\n• Core Storage\n\nUsage\nSekiguchi Upgrades and Barters",

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
      label: "Outpost - Flight Control",
      kind: "world-loot",
    },
    {
      label: "Outpost - Dormitories",
      kind: "world-loot",
    },
    {
      label: "Outpost - Pinwheel Base",
      kind: "world-loot",
    },
    {
      label: "Cryo Archive - Preservation",
      kind: "world-loot",
    },
    {
      label: "Cryo Archive - Core Storage",
      kind: "world-loot",
    },
  ],

  tags: [
    "salvage",
    "enhanced",
    "fractal",
    "circuit",
    "processor",
    "digital",
    "electronics",
    "perimeter",
    "north relay",
    "outpost",
    "flight control",
    "dormitories",
    "pinwheel base",
    "cryo archive",
    "preservation",
    "core storage",
    "sekiguchi",
  ],
};
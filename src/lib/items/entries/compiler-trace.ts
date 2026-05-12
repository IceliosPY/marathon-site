import type { ItemEntry } from "../types";

export const compilerTrace: ItemEntry = {
  id: "compiler-trace",
  name: "Compiler Trace",
  category: "valuable",
  rarity: "contraband",

  icon: "/items/icons/compiler-trace.png",
  image: "/items/icons/compiler-trace.png",
  render: "/items/icons/compiler-trace.png",
  video: "/items/videos/compiler-trace.mp4",

  sellPrice: 40000,


  description:
    "Alien fabric worth a great deal to interested buyers.",

  lore: "Automatically sold for credits upon extraction.",

  highlightTerms: [
    "Automatically sold for credits upon exfil",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
  tags: [
    "valuable",
    "contraband",
    "alien",
    "credits",
    "exfil",
    "high value",
  ],
};
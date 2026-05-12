import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const compilerTrace: ItemEntry = {
  id: "compiler-trace",
  name: "Compiler Trace",
  category: "valuable",
  rarity: "contraband",

  icon: asset("items/icons/compiler-trace.png"),
  image: asset("items/icons/compiler-trace.png"),
  render: asset("items/icons/compiler-trace.png"),
  video: asset("items/videos/compiler-trace.mp4"),

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
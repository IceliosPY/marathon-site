import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const compilerGanglion: ItemEntry = {
  id: "compiler-ganglion",

  name: "COMPILER GANGLION",

  category: "salvage",
  rarity: "contraband",

  icon: asset("items/icons/compiler-ganglion.png"),
  image: asset("items/icons/compiler-ganglion.png"),
  render: asset("items/icons/compiler-ganglion.png"),
  video: asset("items/videos/salvage/compiler-ganglion.mp4"),

  sellPrice: 8000,

  effect: "Contraband Eccentric Salvage",

  description:
    "A piece of a Compiler's nervous system.\n\nSources\nCompiler\n\nUsage\nCyberAcme Market Access",

    highlightTerms: ["Sources", "Usage"],

  sources: [
    {
      label: "Compiler",
      kind: "activity",
    },
  ],

  tags: [
    "salvage",
    "compiler",
    "ganglion",
    "contraband",
    "eccentric",
    "organic",
    "cyberacme",
    "market",
  ],
};
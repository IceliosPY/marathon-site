import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const punishment: ItemEntry = {
  id: "punishment",

  name: "Punishment",

  category: "chip",
  rarity: "superior",

  icon: asset("items/icons/chip3.png"),
  image: asset("items/icons/chip3.png"),
  render: asset("items/icons/chip3.png"),
  video: asset("items/videos/chips/chip3.webm"),

  sellPrice: 621,

  effect: "Superior Chip Mod",

  description:
    "This weapon deals significantly increased damage against Spht combatants.",


  highlightTerms: [
    "increased damage",
    "Synth combatants",
    "universal chip mod",
    "damage",
    "spht",
    "compiler",
    "boss",
  ],

  tags: [
    "boss",
    "chip",
    "mod",
    "chip mod",
    "universal chip mod",
    "superior",
    "damage",
    "spht",
    "spht combatants",
    "weapon mod",
    "compiler",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
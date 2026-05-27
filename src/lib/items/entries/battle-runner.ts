import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const battleRunner: ItemEntry = {
  id: "battle-runner",
  name: "Battle Runner",
  category: "chip",
  rarity: "superior",

  icon: asset("items/icons/chip3.png"),
  image: asset("items/icons/chip3.png"),
  render: asset("items/icons/chip3.png"),
  video: asset("items/videos/chips/chip3.mp4"),

  sellPrice: 621,

  effect: "Superior Chip Mod",

  description:
    "Eliminations with this weapon grant increased sprint speed for a long duration.",

  highlightTerms: [
    "increased sprint speed",
    "long duration",
  ],

  tags: [
    "chip",
    "weapon chip",
    "combat",
    "universal",
    "superior",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
    {
      label: "Traxus Armory",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "traxus-armory",
      },
    },
  ],
};
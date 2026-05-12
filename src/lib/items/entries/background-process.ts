import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const backgroundProcess: ItemEntry = {
  id: "background-process",
  name: "Background Process",
  category: "chip",
  rarity: "deluxe",

  icon: asset("items/icons/background-process.png"),
  image: asset("items/icons/background-process.png"),
  render: asset("items/icons/background-process.png"),
  video: asset("items/videos/background-process.mp4"),

  sellPrice: 207,

  effect: "Universal Chip Mod",

  description:
    "When this weapon is stowed, it automatically reloads after a moderate period of time.",

  lore: "Chip mods can be installed onto any weapon.",

  highlightTerms: ["automatically reloads"],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],

  tags: [
    "chip",
    "reload",
    "stowed",
    "background",
    "weapon mod",
  ],
};
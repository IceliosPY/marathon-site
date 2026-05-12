import type { ItemEntry } from "../types";

export const backgroundProcess: ItemEntry = {
  id: "background-process",
  name: "Background Process",
  category: "chip",
  rarity: "deluxe",

  icon: "/items/icons/background-process.png",
  image: "/items/icons/background-process.png",
  render: "/items/icons/background-process.png",
  video: "/items/videos/background-process.mp4",

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
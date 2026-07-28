import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const backgroundProcess: ItemEntry = {
  id: "background-process",

  name: "Background Process",

  category: "mod",
  rarity: "deluxe",
  modSubcategory: "chip",

  icon: asset("items/icons/background-process.png"),
  image: asset("items/icons/background-process.png"),
  render: asset("items/icons/background-process.png"),
  video: asset("items/videos/chips/chip2.mp4"),

  sellPrice: 207,

  effect: "Deluxe Universal Chip Mod",

  description:
    "When this weapon is stowed, it automatically reloads after a moderate period of time.",

  lore:
    "Originally developed for autonomous maintenance systems, Background Process continuously monitors weapon status while stowed. When conditions are met, it quietly reloads the weapon without requiring operator input.",


  specialEffects: [
    {
      name: "Background Process",
      description:
        "While this weapon is stowed, it automatically reloads itself after a moderate delay.",
    },
  ],

  highlightTerms: [
    "automatically reloads",
    "stowed weapon",
    "passive reload",
    "background process",
  ],

  tags: [
    "mod",
    "chip",
    "universal chip",
    "reload",
    "stowed",
    "background",
    "passive",
    "automatic reload",
    "weapon mod",
    "deluxe",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
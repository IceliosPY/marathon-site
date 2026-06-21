import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const battleRunner: ItemEntry = {
  id: "battle-runner",

  name: "Battle Runner",

  category: "mod",
  rarity: "superior",
  modSubcategory: "chip",

  icon: asset("items/icons/chip3.png"),
  image: asset("items/icons/chip3.png"),
  render: asset("items/icons/chip3.png"),
  video: asset("items/videos/chips/chip3.mp4"),

  sellPrice: 621,

  effect: "Superior Universal Chip Mod",

  description:
    "Eliminations with this weapon grant increased sprint speed for a long duration.",

  lore:
    "Developed for reconnaissance and assault operators, Battle Runner rewards successful engagements by converting combat momentum into sustained mobility. Each elimination fuels a burst of enhanced movement speed.",

  specialEffects: [
    {
      name: "Battle Runner",
      description:
        "Eliminations with this weapon grant a substantial sprint speed increase for a long duration.",
    },
  ],

  highlightTerms: [
    "increased sprint speed",
    "long duration",
    "mobility",
    "combat momentum",
    "eliminations",
  ],

  tags: [
    "mod",
    "chip",
    "universal chip",
    "weapon chip",
    "combat",
    "mobility",
    "movement speed",
    "sprint",
    "battle runner",
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
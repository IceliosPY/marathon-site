import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const hurricane: ItemEntry = {
  id: "hurricane",

  name: "Hurricane",

  category: "mod",
  rarity: "superior",
  modSubcategory: "chip",

  icon: asset("items/icons/hurricane.png"),
  image: asset("items/icons/hurricane.png"),
  render: asset("items/icons/hurricane.png"),
  video: asset("items/videos/chips/hurricane.mp4"),

  sellPrice: 621,

  effect: "Superior Universal Chip Mod",

  description:
    "While airborne, this weapon has increased stability and greatly reduced accuracy penalties.",

  lore:
    "Originally developed for orbital insertion troops, Hurricane dynamically compensates for movement instability during jumps, falls, and aerial maneuvers. The chip continuously adjusts targeting calculations to maintain combat effectiveness while airborne.",


  specialEffects: [
    {
      name: "Hurricane",
      description:
        "While airborne, this weapon gains increased stability and significantly reduced accuracy penalties.",
    },
  ],

  highlightTerms: [
    "airborne",
    "stability",
    "accuracy",
    "jumping",
    "aerial combat",
  ],

  tags: [
    "mod",
    "chip",
    "universal chip",
    "airborne",
    "stability",
    "accuracy",
    "jumping",
    "aerial",
    "movement",
    "weapon mod",
    "superior",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
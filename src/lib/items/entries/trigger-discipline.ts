import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const triggerDiscipline: ItemEntry = {
  id: "trigger-discipline",

  name: "Trigger Discipline",

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
    "Grants a significant amount of increased accuracy for the first few rounds of a trigger pull.",

  lore:
    "An adaptive targeting chip that stabilizes weapon handling during the opening moments of sustained fire, rewarding controlled bursts and disciplined trigger usage.",


  specialEffects: [
    {
      name: "Trigger Discipline",
      description:
        "The first rounds fired after pulling the trigger gain a substantial accuracy bonus.",
    },
  ],

  highlightTerms: [
    "increased accuracy",
    "burst fire",
    "precision",
    "first shots",
  ],

  tags: [
    "mod",
    "chip",
    "accuracy",
    "precision",
    "trigger",
    "burst",
    "weapon mod",
    "universal chip",
    "superior",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
    {
      label: "Contracts",
      kind: "contract",
      target: {
        type: "contract",
        id: "uesc-contracts",
      },
    },
    {
      label: "Nucaloric Armory",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "nucaloric-armory",
      },
    },
  ],
};
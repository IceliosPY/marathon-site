import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const afterburner: ItemEntry = {
  id: "afterburner",

  name: "Afterburner",

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
    "Sliding with this weapon reloads a portion of your magazine and increases stability and accuracy by a massive amount.",

  lore:
    "A mobility-focused combat chip that converts momentum into weapon optimization. Sliding temporarily stabilizes the weapon platform while replenishing ammunition reserves.",

  highlightTerms: [
    "sliding",
    "reloads a portion",
    "stability",
    "accuracy",
    "universal chip",
  ],

  tags: [
    "mod",
    "chip",
    "universal chip",
    "movement",
    "slide",
    "reload",
    "stability",
    "accuracy",
    "weapon mod",
    "combat",
    "superior",
  ],

  specialEffects: [
    {
      name: "Afterburner",
      description:
        "Sliding reloads part of the current magazine and greatly increases weapon stability and accuracy for a short duration.",
    },
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
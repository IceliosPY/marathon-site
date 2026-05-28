import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const blueBlood: ItemEntry = {
  id: "blue-blood",

  name: "Blue Blood",

  category: "mod",
  rarity: "superior",
  modSubcategory: "chip",

  icon: asset("items/icons/stack-overflow.png"),
  image: asset("items/icons/stack-overflow.png"),
  render: asset("items/icons/stack-overflow.png"),
  video: asset("items/videos/chips/chip1.mp4"),

  sellPrice: 621,

  effect: "Superior Chip Mod",

  description:
    "Downing a hostile Runner restores health.",

  highlightTerms: [
    "restores health",
    "hostile Runner",
    "health recovery",
  ],

  lore:
    "Combat recovery firmware designed for aggressive frontline engagements. The chip reroutes emergency stimulant reserves upon confirmed hostile neutralization.",

  tags: [
    "mod",
    "chip",
    "chip mod",
    "health",
    "healing",
    "runner",
    "combat recovery",
    "universal mod",
  ],

  prestigeFeature: {
    title: "Universal Chip Mod",
    description:
      "Chip mods can be installed onto any weapon.",
    color: "purple",
  },

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
    {
      label: "UESC Armory",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "uesc-armory",
      },
    },
  ],
};
import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const sneakPack24XS: ItemEntry = {
  id: "24xs-sneak-pack-plus",

  name: "24XS SNEAK PACK+",

  category: "backpack",
  rarity: "prestige",

  icon: asset("items/icons/24xs-sneak-pack.png"),
  image: asset("items/icons/24xs-sneak-pack.png"),
  render: asset("items/icons/24xs-sneak-pack.png"),
  video: asset("items/videos/backpacks/24xs-sneak-pack.mp4"),

  sellPrice: 5000,

  effect: "Prestige Backpack",

  description:
    "+24 Slots\n+ Invisibility when opening a container.",

  highlightTerms: [],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
    {
        label: "Cyac market",
        kind: "vendor",
        target: {
          type: "vendor",
          id: "armory",
        },
    },
  ],

  tags: [
    "backpack",
    "prestige",
    "sneak",
    "stealth",
    "invisibility",
    "container",
    "loot",
    "24xs",
    "uesc",
  ],
};
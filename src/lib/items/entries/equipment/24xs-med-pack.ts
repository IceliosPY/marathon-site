import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const medPack24XS2: ItemEntry = {
  id: "24xs-med-pack",

  name: "24XS MED PACK",

  category: "backpack",
  rarity: "superior",

  icon: asset("items/icons/24xs-med-pack2.png"),
  image: asset("items/icons/24xs-med-pack2.png"),
  render: asset("items/icons/24xs-med-pack2.png"),
  video: asset("items/videos/backpacks/24xs-med-pack.mp4"),

  sellPrice: 1650,

  effect: "Superior Backpack",

  description:
    "+24 Slots\n+ Significantly faster health and shield consumable usage.",

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
    "superior",
    "medical",
    "support",
    "healing",
    "24xs",
  ],
};
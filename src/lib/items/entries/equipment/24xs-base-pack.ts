import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const xs24BasePack: ItemEntry = {
  id: "24xs-base-pack",

  name: "24XS BASE PACK",

  category: "backpack",
  rarity: "superior",

  icon: asset("items/icons/24xs-base-pack.png"),
  image: asset("items/icons/24xs-base-pack.png"),
  render: asset("items/icons/24xs-base-pack.png"),
  video: asset("items/videos/backpacks/24xs-base-pack.mp4"),

  buyPrice: 1650,
  sellPrice: 330,

  effect: "Superior Backpack",

  description:
    "+24 Slots",

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
    {
      label: "Cyac Market",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "armory",
      },
    },
  ],

  tags: [
    "backpack",
    "24xs",
    "base",
    "storage",
    "superior",
    "uesc",
    "logistics",
    "expedition",
  ],
};
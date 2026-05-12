import type { ItemEntry } from "../types";

export const stackOverflow: ItemEntry = {
  id: "stack-overflow",
  name: "Stack Overflow",
  category: "chip",
  rarity: "superior",

  icon: "/items/icons/stack-overflow.png",
  image: "/items/icons/stack-overflow.png",
  render: "/items/icons/stack-overflow.png",
  video: "/items/videos/stack-overflow.mp4",

  sellPrice: 621,

  effect: "Universal Chip Mod",

  description:
    "Reloading this weapon when the magazine is empty overflows the magazine by a massive amount.",


  highlightTerms: ["overflows the magazine"],

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

  tags: [
    "chip",
    "overflow",
    "reload",
    "ammo",
    "magazine",
    "ballistic",
    "volt",
  ],
};
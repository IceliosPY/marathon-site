import type { ItemEntry } from "../types";

export const voltCell: ItemEntry = {
  id: "volt-cell",
  name: "Volt Cell",
  category: "ammo",
  rarity: "standard",

  icon: "/items/icons/volt-cell.png",
  image: "/items/icons/volt-cell.png",
  render: "/items/icons/volt-cell.png",
  video: "/items/videos/volt-cell.mp4",

  sellPrice: 27,
  buyPrice: 600,

  description:
    "High-capacity energy cells used for powering advanced volt weaponry that build heat on targets with each hit.",

  lore:
    "Remaining ammo in the cell is lost upon reload.",

  highlightTerms: ["build heat"],

  tags: [
    "ammo",
    "volt",
    "energy cell",
    "heat",
    "energy weapon",
    "munition",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
    {
      label: "Cyac Armory",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "Cyac-armory",
      },
    },
  ],
};
import type { ItemEntry } from "../types";

export const heavyRounds: ItemEntry = {
  id: "heavy-rounds",
  name: "Heavy Rounds",
  category: "ammo",
  rarity: "standard",

  icon: "/items/icons/heavy-rounds.png",
  image: "/items/icons/heavy-rounds.png",
  render: "/items/icons/heavy-rounds.png",
  video: "/items/videos/heavy-rounds.mp4",

  buyPrice: 300,
  sellPrice: 6,

  description:
    "High-caliber rounds used for advanced ballistic weaponry that are capable of staggering UESC hostiles.",

  highlightTerms: ["staggering UESC hostiles"],

  tags: [
    "ammo",
    "ballistic",
    "heavy rounds",
    "high-caliber",
    "stagger",
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
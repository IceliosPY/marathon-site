import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const medPack24XS: ItemEntry = {
  id: "24xs-med-pack-plus",

  name: "24XS MED PACK+",

  category: "backpack",
  rarity: "prestige",

  icon: asset("items/icons/24xs-med-pack.png"),
  image: asset("items/icons/24xs-med-pack.png"),
  render: asset("items/icons/24xs-med-pack.png"),
  video: asset("items/videos/backpacks/24xs-med-pack.mp4"),

  sellPrice: 5000,

  description:
    "+24 Slots\n+ Significantly faster health and shield consumable usage.\n+ Health consumables also recharge portion of shields.\n+ Shield consumables also restore portion of health.",

  effect: "Prestige Backpack",

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
  possibleEffects: [
    {
      id: "enduring",
      label: "Enduring",
      description:
        "First 3 extractions increase value by 75% of base value each. After that, +20% per extraction.",
      simulation: {
        type: "enduring",
        firstExtractionBonusRate: 0.75,
        firstExtractionLimit: 3,
        laterExtractionBonusRate: 0.2,
        defaultExtractions: 1,
        maxExtractions: 10,
      },
    },
  ],
  tags: [
    "backpack",
    "prestige",
    "medical",
    "support",
    "healing",
    "24xs",
  ],
};
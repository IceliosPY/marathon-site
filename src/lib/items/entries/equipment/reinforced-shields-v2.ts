import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const reinforcedShieldsV2: ItemEntry = {
  id: "reinforced-shields-v2",

  name: "Reinforced Shields V2",

  category: "implant",
  rarity: "prestige",

  icon: asset("items/icons/protector2.png"),
  image: asset("items/icons/protector2.png"),
  render: asset("items/icons/protector2.png"),
  video: asset("items/videos/protector/protector2.mp4"),

  sellPrice: 3000,

  effect: "+1 Reinforced Shield Slot",

  description:
    "Reinforced shields take half damage.",

  highlightTerms: [
    "+1 Reinforced Shield Slot",
    "Reinforced",
  ],


  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
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

  stats: [
    {
      label: "Heat Capacity",
      value: 40,
      modifier: -15,
    },
    {
      label: "Agility",
      value: 50,
      modifier: -15,
    },
  ],

  tags: [
    "implant",
    "shield",
    "reinforced",
    "prestige",
    "tank",
    "survivability",
    "uesc",
  ],
};
import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const spectreArmor: ItemEntry = {
  id: "spectre-armor",

  name: "Spectre Armor",

  category: "implant",
  rarity: "prestige",

  icon: asset("items/icons/protector.png"),
  image: asset("items/icons/protector.png"),
  render: asset("items/icons/protector.png"),
  video: asset("items/videos/protector/protector.mp4"),

  sellPrice: 3000,

  effect: "+3 Shield Slots",

  description:
    "When your shields are depleted, you briefly gain invisibility.",

  highlightTerms: ["invisibility"],

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
    { label: "Heat Capacity", value: 40, modifier: -15 },
    { label: "Agility", value: 50, modifier: -15 },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],

  tags: [
    "sneak",
    "implant",
    "shield",
    "armor",
    "spectre",
    "prestige",
    "invisibility",
    "survivability",
  ],
};
import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const samaritan: ItemEntry = {
  id: "samaritan",

  name: "Samaritan",

  category: "core",
  rarity: "prestige",

  icon: asset("items/icons/samaritan.png"),
  image: asset("items/icons/samaritan.png"),
  render: asset("items/icons/samaritan.png"),
  video: asset("items/videos/cores/samaritan.mp4"),

  sellPrice: 3000,
  buyPrice : 22500,

  effect: "Prestige Core",

  highlightTerms: [
    "shareware.exe",
    "consumable",
    "med-drone",
    "cooldown reduction",
    "support",
    "healing",
  ],

  tags: [
    "core",
    "prestige core",
    "triage",
    "triage shell",
    "shareware",
    "med drone",
    "support",
    "healing",
    "cooldown",
    "medical",
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

  prestigeFeature: {
    title: "Samaritan",
    description:
      "Sharing a consumable with your Shareware.exe reduces the cooldown of your next Med-Drone.",
    color: "yellow",
  },



  sources: [
    {
      label: "Prestige Cache",
      kind: "activity",
    },
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const doubleDose: ItemEntry = {
  id: "double-dose",

  name: "Double Dose",

  category: "core",
  rarity: "prestige",

  icon: asset("items/icons/samaritan.png"),
  image: asset("items/icons/samaritan.png"),
  render: asset("items/icons/samaritan.png"),
  video: asset("items/videos/cores/samaritan.mp4"),

  sellPrice: 3000,
  buyPrice: 22500,

  effect: "Prestige Core",

  highlightTerms: [
    "consumables",
    "shareware.exe",
    "crew members",
    "increased benefits",
    "support",
    "healing",
    "buffs",
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
    "core",
    "prestige core",
    "triage",
    "triage shell",
    "shareware",
    "consumables",
    "support",
    "healing",
    "crew",
    "buff",
  ],

  prestigeFeature: {
    title: "Double Dose",
    description:
      "Consumables shared by Shareware.exe provide stronger benefits to allied crew members.",
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
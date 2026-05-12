import type { ItemEntry } from "../types";

export const protectorV3: ItemEntry = {
  id: "protector-v3",
  name: "Protector V3",
  category: "implant",
  rarity: "superior",

  icon: "/items/icons/protector.png",
  image: "/items/icons/protector.png",
  render: "/items/icons/protector.png",
  video: "/items/videos/protector.mp4",

  buyPrice: -1,
  sellPrice: 900,

  description:
    "Superior shield implant engineered for advanced frontline survivability.",
  effect: "+3 Shield Slots.",

  sources: [
    {
      label: "Nucaloric Armory",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "nucaloric-armory",
      },
    },
    {
      label: "Nucaloric Contract",
      kind: "contract",
      target: {
        type: "contract",
        id: "nucaloric-contract",
      },
    },
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
    { label: "Heat Capacity", value: 0, modifier: -15 },
    { label: "Agility", value: 0, modifier: -15 },
  ],
};
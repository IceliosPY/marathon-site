import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const reinforcedShieldsV1: ItemEntry = {
  id: "reinforced-shields-v1",
  name: "Reinforced Shields V1",
  category: "implant",
  rarity: "enhanced",

  icon: asset("items/icons/protector.png"),
  image: asset("items/icons/protector.png"),
  render: asset("items/icons/protector.png"),
  video: asset("items/videos/reinforced-shields-v1.mp4"),

  buyPrice: 900,
  sellPrice: 180,

  description: "Reinforced shields take half damage.",

  effect: "Reinforces your base shields.",

  sources: [
    {
      label: "Nucaloric Contracts",
      kind: "contract",
      target: {
        type: "contract",
        id: "nucaloric-contracts",
      },
    },
    {
      label: "World Loot",
      kind: "world-loot",
    },
    {
      label: "Buyable in the Armory",
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

  stats: [
    {
      label: "Heat Capacity",
      value: 0,
      modifier: -5,
    },
    {
      label: "Agility",
      value: 0,
      modifier: -5,
    },
  ],
};
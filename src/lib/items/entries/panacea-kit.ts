import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const panaceaKit: ItemEntry = {
  id: "panacea-kit",

  name: "Panacea Kit",

  category: "consumable",
  rarity: "superior",

  icon: asset("items/icons/PanaceaKit.png"),
  image: asset("items/icons/PanaceaKit.png"),
  render: asset("items/icons/PanaceaKit.png"),
  video: asset("items/videos/consumables/PanaceaKit.webm"),

  sellPrice: 420,

  effect: "Superior Shield Consumable",

  description:
    "Fully restores health, fully recharges shields, and removes hazardous status effects.",


  highlightTerms: [
    "full heal",
    "shield recharge",
    "status removal",
    "recovery",
    "survivability",
    "consumable",
  ],

  tags: [
    "consumable",
    "healing",
    "shield",
    "recovery",
    "medical",
    "status effects",
    "survival",
    "superior",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
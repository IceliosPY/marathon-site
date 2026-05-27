import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const commendationGenerator: ItemEntry = {
  id: "commendation-generator",

  name: "Commendation Generator",

  category: "trinket",
  rarity: "enhanced",

  icon: asset("items/icons/commendation-generator.png"),
  image: asset("items/icons/commendation-generator.png"),
  render: asset("items/icons/commendation-generator.png"),
  video: asset("items/videos/trinkets/commendation-generator.mp4"),

  sellPrice: 250,

  effect: "Enhanced Trinket",

  description:
    "Awards CyberAcme Commendations upon exfil. A greater amount is granted if you are solo or Rook. This benefit does not stack with other instances of the same item.",

  highlightTerms: [
    "CyberAcme Commendations",
    "solo",
    "Rook",
    "does not stack",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],

  tags: [
    "trinket",
    "commendation",
    "cyberacme",
    "exfil",
    "solo",
  ],
};
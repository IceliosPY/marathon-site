import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const selfRevive: ItemEntry = {
  id: "self-revive",

  name: "Self-Revive",

  category: "consumable",
  rarity: "superior",

  icon: asset("items/icons/self-revive.png"),
  image: asset("items/icons/self-revive.png"),
  render: asset("items/icons/self-revive.png"),
  video: asset("items/videos/consumables/self-revive.mp4"),

  buyPrice: 800,
  sellPrice: 160,

  effect: "Superior Survival Consumable",

  description:
    "Allows for self-revive when downed.\n\n[E] Hold: Initiate self-revive.",

  highlightTerms: [
    "self-revive",
    "when downed",
    "Initiate self-revive",
  ],

  sources: [
    {
      label: "Medical Crates",
      kind: "world-loot",
    },
    {
      label: "UESC Medical Supply",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "uesc-medical-supply",
      },
    },
  ],

  tags: [
    "consumable",
    "survival",
    "medical",
    "self revive",
    "revive",
    "downed",
    "uesc",
    "combat",
  ],
};
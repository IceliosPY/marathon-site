import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const advancedPatchKit: ItemEntry = {
  id: "advanced-patch-kit",

  name: "Advanced Patch Kit",

  category: "consumable",
  rarity: "deluxe",

  icon: asset("items/icons/advanced-patch-kit.png"),
  image: asset("items/icons/advanced-patch-kit.png"),
  render: asset("items/icons/advanced-patch-kit.png"),
  video: asset("items/videos/consumables/advanced-patch-kit.mp4"),

  buyPrice: 675,
  sellPrice: 90,

  effect: "Deluxe Medical Consumable",

  description:
    "Restores a large amount of health.",

  highlightTerms: [
    "large amount of health",
  ],

  sources: [
    {
      label: "Medical Crates",
      kind: "world-loot",
    },
    {
      label: "Nucal Market",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "armory",
      },
    },
  ],

  tags: [
    "consumable",
    "medical",
    "healing",
    "health",
    "patch kit",
    "deluxe",
    "uesc",
    "combat",
  ],
};
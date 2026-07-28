import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const advancedShieldCharge: ItemEntry = {
  id: "advanced-shield-charge",

  name: "Advanced Shield Charge",

  category: "consumable",
  rarity: "deluxe",

  icon: asset("items/icons/advanced-shield-charge.png"),
  image: asset("items/icons/advanced-shield-charge.png"),
  render: asset("items/icons/advanced-shield-charge.png"),
  video: asset("items/videos/consumables/advanced-shield-charge.mp4"),

  buyPrice: 600,
  sellPrice: 80,

  effect: "Deluxe Shield Consumable",

  description:
    "Quickly recharges shield to full.",

  highlightTerms: [
    "recharges shield",
    "to full",
  ],

  sources: [
    {
      label: "Military Crates",
      kind: "world-loot",
    },
    {
      label: "UESC Armory",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "uesc-armory",
      },
    },
  ],

  tags: [
    "consumable",
    "shield",
    "charge",
    "recharge",
    "armor",
    "deluxe",
    "uesc",
    "combat",
  ],
};
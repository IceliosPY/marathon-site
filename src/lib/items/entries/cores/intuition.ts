import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const intuition: ItemEntry = {
  id: "intuition",

  name: "Intuition",

  category: "core",
  rarity: "prestige",

  icon: asset("items/icons/intuition.png"),
  image: asset("items/icons/intuition.png"),
  render: asset("items/icons/intuition.png"),
  video: asset("items/videos/cores/intuition.mp4"),

  sellPrice: 3000,
  buyPrice: 22500,

  effect: "Prestige Core",

  highlightTerms: [
    "interrogation",
    "down",
    "hostile runner",
    "runner",
    "recon",
    "reveal",
    "intel",
  ],

  tags: [
    "core",
    "prestige core",
    "recon",
    "recon shell",
    "interrogation",
    "runner",
    "hostile runner",
    "intel",
    "tracking",
    "reveal",
  ],

  prestigeFeature: {
    title: "Intuition",
    description:
      "Your Interrogation trait now triggers when you down a hostile Runner.",
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
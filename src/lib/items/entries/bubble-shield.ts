import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const bubbleShield: ItemEntry = {
  id: "bubble-shield",

  name: "Bubble Shield",

  category: "gadget",
  rarity: "superior",

  icon: asset("items/icons/BubbleShield.png"),
  image: asset("items/icons/BubbleShield.png"),
  render: asset("items/icons/BubbleShield.png"),
  video: asset("items/videos/gadgets/BubbleShield.webm"),

  sellPrice: 2400,

  effect: "Superior Gadget Equipment",

  description:
    "Spherical energy shield that absorbs damage.",

  lore:
    "Deployable defensive gadget projecting a temporary spherical barrier around its activation point. Commonly used to create emergency cover, hold exposed positions, or protect allies during recovery windows.",

  highlightTerms: [
    "energy shield",
    "absorbs damage",
    "spherical shield",
    "defensive gadget",
  ],

  tags: [
    "gadget",
    "equipment",
    "bubble shield",
    "shield",
    "defense",
    "damage absorption",
    "superior",
    "deployable",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
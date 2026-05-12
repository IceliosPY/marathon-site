import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const colonistDnaVial: ItemEntry = {
  id: "colonist-dna-vial",
  name: "Colonist DNA Vial",
  category: "priority",
  rarity: "priority",

  icon: asset("items/icons/colonistDnaVial.png"),
  image: asset("items/icons/colonistDnaVial.png"),
  render: asset("items/icons/colonistDnaVial.png"),
  video: asset("items/videos/colonist-dna-vial.mp4"),

  sellPrice: 0,

  effect: "Priority Item",

  description:
    "Synthetic DNA mirroring a colonist's genetics. Bring it to the DNA Validator in the Panopticon to fabricate Colonist Credentials.",

  lore: "Mission-critical recovery asset.",

  highlightTerms: [
    "DNA Validator",
    "Panopticon",
    "Colonist Credentials",
  ],

  sources: [
    {
      label: "Key 7 Opening",
      kind: "world-loot",
    },
  ],

  tags: [
    "priority",
    "dna",
    "colonist",
    "credential",
    "quest item",
    "panopticon",
  ],
};
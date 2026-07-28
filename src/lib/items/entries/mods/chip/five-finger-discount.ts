import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const fiveFingerDiscount: ItemEntry = {
  id: "five-finger-discount",

  name: "Five Finger Discount",

  category: "mod",
  rarity: "superior",
  modSubcategory: "chip",

  icon: asset("items/icons/stack-overflow.png"),
  image: asset("items/icons/stack-overflow.png"),
  render: asset("items/icons/stack-overflow.png"),
  video: asset("items/videos/chips/chip2.mp4"),

  sellPrice: 621,

  effect: "Superior Universal Chip Mod",

  description:
    "Eliminating UESC personnel or downing Runners with a melee or knife attack partially reloads this weapon by a massive amount.",

  lore:
    "An infamous black-market combat chip originally developed for boarding operations. Five Finger Discount rewards close-quarters aggression by siphoning ammunition reserves back into the weapon whenever targets are eliminated through melee execution.",


  specialEffects: [
    {
      name: "Five Finger Discount",
      description:
        "Melee and knife eliminations partially reload the equipped weapon by a massive amount.",
    },
  ],

  highlightTerms: [
    "UESC",
    "Runners",
    "melee",
    "knife attack",
    "reloads",
    "close quarters",
  ],

  tags: [
    "mod",
    "chip",
    "universal chip",
    "melee",
    "knife",
    "reload",
    "runner",
    "uesc",
    "close quarters",
    "weapon mod",
    "superior",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
    {
      label: "Contracts",
      kind: "contract",
      target: {
        type: "contract",
        id: "uesc-contracts",
      },
    },
    {
      label: "Nucaloric Armory",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "nucaloric-armory",
      },
    },
  ],
};
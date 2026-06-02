import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const fiveFingerDiscount: ItemEntry = {
  id: "five-finger-discount",
  name: "Five Finger Discount",
  category: "chip",
  rarity: "superior",

  icon: asset("items/icons/stack-overflow.png"),
  image: asset("items/icons/stack-overflow.png"),
  render: asset("items/icons/stack-overflow.png"),
  video: asset("items/videos/chip/chip2.mp4"),

  sellPrice: 621,

  effect: "Universal Chip Mod",

  description:
    "Eliminating UESC or downing Runners with a melee or knife attack partially reloads this weapon by a massive amount.",

  lore: "Chip mods can be installed onto any weapon.",

  highlightTerms: [
    "UESC",
    "Runners",
    "melee",
    "knife attack",
    "reloads",
  ],

  tags: [
    "chip",
    "melee",
    "knife",
    "reload",
    "runner",
    "uesc",
    "weapon mod",
    "universal mod",
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
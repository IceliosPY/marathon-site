import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const rocketStart: ItemEntry = {
  id: "rocket-start",

  name: "Rocket Start",

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
    "Eliminating a hostile shortly after sprinting grants you the effects of Cardio Kick for a long duration.",

  lore:
    "Developed for rapid assault operators, Rocket Start rewards aggressive movement by converting combat momentum into sustained combat performance. Successful sprint engagements trigger an extended Cardio Kick state.",


  specialEffects: [
    {
      name: "Rocket Start",
      description:
        "Eliminating a hostile shortly after sprinting activates Cardio Kick for an extended duration.",
    },
  ],

  highlightTerms: [
    "Cardio Kick",
    "sprinting",
    "mobility",
    "kill trigger",
    "movement buff",
  ],

  tags: [
    "mod",
    "chip",
    "universal chip",
    "mobility",
    "sprint",
    "kill trigger",
    "cardio kick",
    "movement",
    "aggressive playstyle",
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
import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const rocketStart: ItemEntry = {
  id: "rocket-start",
  name: "Rocket Start",
  category: "chip",
  rarity: "superior",

  icon: asset("items/icons/stack-overflow.png"),
  image: asset("items/icons/stack-overflow.png"),
  render: asset("items/icons/stack-overflow.png"),
  video: asset("items/videos/rocket-start.mp4"),

  sellPrice: 621,

  effect: "Universal Chip Mod",

  description:
    "Eliminating a hostile shortly after sprinting grants you the effects of Cardio Kick for a long duration.",

  lore: "Chip mods can be installed onto any weapon.",

  highlightTerms: ["Cardio Kick"],

  tags: [
    "chip",
    "mobility",
    "sprint",
    "kill trigger",
    "cardio kick",
    "weapon mod",
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
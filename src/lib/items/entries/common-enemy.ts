import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const commonEnemy: ItemEntry = {
  id: "common-enemy",

  name: "Common Enemy",

  category: "chip",
  rarity: "superior",

  icon: asset("items/icons/hurricane.png"),
  image: asset("items/icons/hurricane.png"),
  render: asset("items/icons/hurricane.png"),
  video: asset("items/videos/hurricane.mp4"),

  sellPrice: 621,

  effect: "Universal Chip Mod",

  description:
    "Dealing damage to enemy combatants causes them to take a massive amount of increased damage from allied or enemy Runners for a short duration.",

  lore:
    "A battlefield analysis chip that flags hostile targets as priority threats. Marked enemies become significantly more vulnerable to incoming damage from all sources.",

  highlightTerms: [
    "increased damage",
    "enemy combatants",
    "allied Runners",
    "enemy Runners",
  ],

  tags: [
    "chip",
    "debuff",
    "damage amplification",
    "mark target",
    "support",
    "teamplay",
    "combat",
    "weapon mod",
  ],

  prestigeFeature: {
    title: "Universal Chip Mod",
    description:
      "Chip mods can be installed onto any weapon.",
    color: "purple",
  },

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
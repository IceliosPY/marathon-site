import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const commonEnemy: ItemEntry = {
  id: "common-enemy",

  name: "Common Enemy",

  category: "mod",
  rarity: "superior",
  modSubcategory: "chip",

  icon: asset("items/icons/hurricane.png"),
  image: asset("items/icons/hurricane.png"),
  render: asset("items/icons/hurricane.png"),
  video: asset("items/videos/chips/hurricane.mp4"),

  sellPrice: 621,

  effect: "Superior Universal Chip Mod",

  description:
    "Dealing damage to enemy combatants causes them to take a massive amount of increased damage from allied or enemy Runners for a short duration.",

  lore:
    "A battlefield analysis chip that flags hostile targets as priority threats. Marked enemies become significantly more vulnerable to incoming damage from all sources.",

  specialEffects: [
    {
      name: "Common Enemy",
      description:
        "Damaging an enemy combatant marks them, causing them to take greatly increased damage from allied or enemy Runners for a short duration.",
    },
  ],

  highlightTerms: [
    "increased damage",
    "enemy combatants",
    "allied Runners",
    "enemy Runners",
    "marked targets",
  ],

  tags: [
    "mod",
    "chip",
    "universal chip",
    "debuff",
    "damage amplification",
    "mark target",
    "support",
    "teamplay",
    "combat",
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
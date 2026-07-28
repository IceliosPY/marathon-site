import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const swarmDirective: ItemEntry = {
  id: "swarm-directive",

  name: "Swarm Directive",

  category: "mod",
  rarity: "superior",
  modSubcategory: "chip",

  icon: asset("items/icons/testament.png"),
  image: asset("items/icons/testament.png"),
  render: asset("items/icons/testament.png"),
  video: asset("items/videos/chips/swarm-directive.mp4"),

  sellPrice: 621,

  effect: "Superior Universal Chip Mod",

  description:
    "Precision eliminations with this weapon spawn a large amount of flechette seekers that heal you when damaging hostiles.",

  lore:
    "An experimental battlefield AI directive that fragments excess targeting data into autonomous flechette seekers. These seekers aggressively pursue nearby hostiles and return biofeedback to the operator upon impact.",


  specialEffects: [
    {
      name: "Swarm Directive",
      description:
        "Precision eliminations release a swarm of flechette seekers that automatically track nearby enemies.",
    },
  ],

  highlightTerms: [
    "precision eliminations",
    "flechette seekers",
    "tracking projectiles",
    "healing",
    "biofeedback",
  ],

  tags: [
    "mod",
    "chip",
    "precision",
    "flechette",
    "seekers",
    "heal",
    "healing",
    "swarm",
    "biofeedback",
    "weapon mod",
    "universal chip",
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
      label: "Traxus Armory",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "Traxus-armory",
      },
    },
  ],
};
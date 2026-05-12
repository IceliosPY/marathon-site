import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const swarmDirective: ItemEntry = {
  id: "swarm-directive",
  name: "Swarm Directive",
  category: "chip",
  rarity: "superior",

  icon: asset("items/icons/testament.png"),
  image: asset("items/icons/testament.png"),
  render: asset("items/icons/testament.png"),
  video: asset("items/videos/swarm-directive.mp4"),

  sellPrice: 621,

  effect: "Universal Chip Mod",

  description:
    "Precision eliminations with this weapon spawn a large amount of flechette seekers that heal you when damaging hostiles.",

  lore: "Chip mods can be installed onto any weapon.",

  highlightTerms: ["flechette seekers that heal you"],

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

  tags: [
    "chip",
    "precision",
    "flechette",
    "seekers",
    "heal",
    "weapon mod",
  ],
};
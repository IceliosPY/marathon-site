import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const punishment: ItemEntry = {
  id: "punishment",

  name: "Punishment",

  category: "mod",
  rarity: "superior",
  modSubcategory: "chip",

  icon: asset("items/icons/chip3.png"),
  image: asset("items/icons/chip3.png"),
  render: asset("items/icons/chip3.png"),
  video: asset("items/videos/chips/chip3.webm"),

  sellPrice: 621,

  effect: "Superior Universal Chip Mod",

  description:
    "This weapon deals significantly increased damage against SPHT combatants.",

  lore:
    "Developed during the height of the SPHT incursions, Punishment analyzes enemy architecture and dynamically adjusts projectile behavior to maximize lethality against synthetic targets.",

  specialEffects: [
    {
      name: "Punishment",
      description:
        "This weapon deals substantially increased damage against SPHT combatants.",
    },
  ],

  highlightTerms: [
    "increased damage",
    "SPHT combatants",
    "universal chip mod",
    "damage",
    "spht",
    "compiler",
    "boss",
  ],

  tags: [
    "mod",
    "chip",
    "chip mod",
    "universal chip mod",
    "superior",
    "damage",
    "spht",
    "spht combatants",
    "weapon mod",
    "compiler",
    "boss",
    "synthetic",
    "elite",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
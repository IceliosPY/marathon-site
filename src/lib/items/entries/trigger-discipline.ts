import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const triggerDiscipline: ItemEntry = {
  id: "trigger-discipline",
  name: "Trigger Discipline",
  category: "chip",
  rarity: "superior",

  icon: asset("items/icons/trigger-discipline.png"),
  image: asset("items/icons/trigger-discipline.png"),
  render: asset("items/icons/trigger-discipline.png"),
  video: asset("items/videos/trigger-discipline.mp4"),

  sellPrice: 621,

  effect: "Universal Chip Mod",

  description:
    "Grants a significant amount of increased accuracy for the first few rounds of a trigger pull.",

  lore: "Chip mods can be installed onto any weapon.",

  highlightTerms: [
    "increased accuracy",
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

  tags: [
    "chip",
    "accuracy",
    "precision",
    "trigger",
    "burst",
    "weapon mod",
  ],
};
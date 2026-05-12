import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const hurricane: ItemEntry = {
  id: "hurricane",
  name: "Hurricane",

  category: "mod",
  rarity: "superior",

  icon: asset("items/icons/hurricane.png"),
  image: asset("items/icons/hurricane.png"),
  render: asset("items/icons/hurricane.png"),
  video: asset("items/videos/hurricane.mp4"),

  sellPrice: 621,

  description:
    "While airborne, this weapon has increased stability and greatly reduced accuracy penalties.",

  effect: "Universal Chip Mod",
  lore: "Chip mods can be installed onto any weapon.",

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],

  tags: [
    "chip",
    "mod",
    "airborne",
    "stability",
    "accuracy",
    "universal",
  ],
};
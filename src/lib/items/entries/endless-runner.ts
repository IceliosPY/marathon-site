import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const endlessRunner: ItemEntry = {
  id: "endless-runner",

  name: "Endless Runner",

  category: "mod",
  rarity: "superior",
  modSubcategory: "chip",

  icon: asset("items/icons/testament.png"),
  image: asset("items/icons/testament.png"),
  render: asset("items/icons/testament.png"),
  video: asset("items/videos/chips/chip1.mp4"),

  sellPrice: 621,

  effect: "Superior Chip Mod",

  description:
    "While under the effects of Cardio Kick, eliminating hostiles with this weapon extends its duration by a massive amount.",

  specialEffects: [
    {
      name: "Endless Runner",
      description:
        "While under the effects of Cardio Kick, eliminating hostiles with this weapon extends its duration by a massive amount.",
    },
    {
      name: "Universal Chip Mod",
      description:
        "Chip mods can be installed onto any weapon.",
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
    {
      label: "UESC Armory",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "uesc-armory",
      },
    },
  ],
};
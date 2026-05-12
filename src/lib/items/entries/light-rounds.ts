import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const lightRounds: ItemEntry = {
  id: "light-rounds",
  name: "Light Rounds",
  category: "ammo",
  rarity: "standard",

  icon: asset("items/icons/light-rounds.png"),
  image: asset("items/icons/light-rounds.png"),
  render: asset("items/icons/light-rounds.png"),
  video: asset("items/videos/light-rounds.mp4"),

  buyPrice: 200,
  sellPrice: 6,

  description:
    "Small-caliber compact ammunition used for a variety of ballistic weapon types.",

  tags: [
    "ammo",
    "ballistic",
    "light rounds",
    "compact ammunition",
    "munition",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
    {
      label: "Cyac Armory",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "Cyac-armory",
      },
    },
  ],
};
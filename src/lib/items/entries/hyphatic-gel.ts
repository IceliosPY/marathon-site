import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const hyphaticGel: ItemEntry = {
  id: "hyphatic-gel",
  name: "Hyphatic Gel",
  category: "ammo",
  rarity: "prestige",

  icon: asset("items/icons/hyphatic-gel.png"),
  image: asset("items/icons/hyphatic-gel.png"),
  render: asset("items/icons/hyphatic-gel.png"),
  video: asset("items/videos/hyphatic-gel.mp4"),

  sellPrice: 1,

  description:
    "A smart ferrofluid, capable of self-printing into many forms.",

  tags: [
    "ammo",
    "hyphatic gel",
    "ferrofluid",
    "smart ammo",
    "prestige",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const stackOverflow: ItemEntry = {
  id: "stack-overflow",

  name: "Stack Overflow",

  category: "mod",
  rarity: "superior",
  modSubcategory: "chip",

  icon: asset("items/icons/stack-overflow.png"),
  image: asset("items/icons/stack-overflow.png"),
  render: asset("items/icons/stack-overflow.png"),
  video: asset("items/videos/chips/chip2.mp4"),

  sellPrice: 621,

  effect: "Superior Universal Chip Mod",

  description:
    "Reloading this weapon when the magazine is empty overflows the magazine by a massive amount.",

  lore:
    "A controversial ammunition management chip originally developed for extended combat operations. By exploiting reserve-feed buffering, it allows magazines to temporarily exceed their intended capacity after a full empty reload.",


  specialEffects: [
    {
      name: "Stack Overflow",
      description:
        "Reloading from an empty magazine massively overfills the weapon's magazine capacity.",
    },
  ],

  highlightTerms: [
    "overflow magazine",
    "empty reload",
    "bonus ammunition",
    "extended capacity",
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
    "mod",
    "chip",
    "overflow",
    "reload",
    "ammo",
    "magazine",
    "ballistic",
    "volt",
    "universal chip",
    "superior",
  ],
};
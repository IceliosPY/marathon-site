import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const empGrenade: ItemEntry = {
  id: "emp-grenade",

  name: "EMP Grenade",

  category: "grenade",
  rarity: "deluxe",

  icon: asset("items/icons/EMPGrenade.png"),
  image: asset("items/icons/EMPGrenade.png"),
  render: asset("items/icons/EMPGrenade.png"),
  video: asset("items/videos/grenades/EMPGrenade.webm"),

  sellPrice: 700,

  effect: "Deluxe Grenade Equipment",

  description:
    "Bouncing energy grenade that creates lingering electromagnetic blast.",

  lore:
    "An experimental electromagnetic disruption device designed to ricochet across combat zones before detonating. Upon activation, it releases a lingering EMP field that interferes with electronics, shields, and tactical equipment caught within its radius.",

  highlightTerms: [
    "EMP",
    "electromagnetic blast",
    "lingering field",
    "bouncing grenade",
    "disruption",
    "electronics",
  ],

  tags: [
    "grenade",
    "emp",
    "electromagnetic",
    "area denial",
    "equipment disruption",
    "explosive",
    "deluxe",
    "throwable",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
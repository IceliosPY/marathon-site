import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const alienAlloy: ItemEntry = {
  id: "alien-alloy",

  name: "Alien Alloy",

  category: "salvage",
  rarity: "prestige",

  icon: asset("items/icons/alien-alloy.png"),
  image: asset("items/icons/alien-alloy.png"),
  render: asset("items/icons/alien-alloy.png"),
  video: asset("items/videos/salvage/alien-alloy.mp4"),

  sellPrice: 8000,

  effect: "Prestige Eccentric Salvage",

  description:
    "An unusual material with metallic and biological properties.\n\nSources\nCryo Archive\nLocked Rooms [Prestige]\n\nUsage\nMIDA Upgrades and Barters",

  highlightTerms: [
    "Sources",
    "Usage",
    "[Prestige]",
  ],

  sources: [
    {
      label: "Cryo Archive Locked Rooms [Prestige]",
      kind: "world-loot",
    },
  ],

  tags: [
    "salvage",
    "prestige",
    "eccentric",
    "alien",
    "alloy",
    "mida",
    "biological",
    "metallic",
    "cryo archive",
    "uesc",
  ],
};
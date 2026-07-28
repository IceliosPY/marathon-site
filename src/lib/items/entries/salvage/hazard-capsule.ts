import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const hazardCapsule: ItemEntry = {
  id: "hazard-capsule",

  name: "Hazard Capsule",

  category: "salvage",
  rarity: "prestige",

  icon: asset("items/icons/hazard-capsule.png"),
  image: asset("items/icons/hazard-capsule.png"),
  render: asset("items/icons/hazard-capsule.png"),
  video: asset("items/videos/salvage/hazard-capsule.mp4"),

  sellPrice: 4000,

  effect: "Prestige Eccentric Salvage",

  description:
    "A hermetically sealed container filled with an extremely volatile substance.\n\nSources\nCryo Archive\nLocked Rooms [Prestige]\n\nUsage\nNuCaloric Upgrades and Barters",

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
    "hazard",
    "capsule",
    "volatile",
    "chemical",
    "cryo archive",
    "nucaloric",
    "uesc",
  ],
};
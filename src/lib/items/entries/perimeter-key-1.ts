import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const perimeterKey1: ItemEntry = {
  id: "perimeter-key-1",

  name: "North Relay Storage",

  category: "key",
  rarity: "deluxe",

  icon: asset("items/icons/perimeterkey.png"),
  image: asset("items/icons/perimeterkey.png"),
  render: asset("items/icons/perimeterkey.png"),
  video: asset("items/videos/keys/perimeterkey.mp4"),

  sellPrice: 600,

  effect: "Deluxe Key",

  description:
    "REGION: North Relay (Perimeter)\nLOCATION: North Relay offices\nUNLOCKS: Storage\n=======\nON USE: Removed from inventory\nRetain room access during run",

  highlightTerms: [
    "REGION:",
    "LOCATION:",
    "UNLOCKS:",
    "ON USE:",
    "Storage",
  ],

  sources: [
    {
      label: "North Relay",
      kind: "world-loot",
    },
  ],

  tags: [
    "key",
    "deluxe",
    "north relay",
    "storage",
    "perimeter",
    "access card",
  ],
};
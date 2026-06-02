import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const perimeterKey3: ItemEntry = {
  id: "perimeter-key-3",

  name: "Maintenance Office",

  category: "key",
  rarity: "deluxe",

  icon: asset("items/icons/perimeterkey.png"),
  image: asset("items/icons/perimeterkey.png"),
  render: asset("items/icons/perimeterkey.png"),
  video: asset("items/videos/keys/perimeterkey.mp4"),

  sellPrice: 600,

  effect: "Deluxe Key",

  description:
    "REGION: Station (Perimeter)\nLOCATION: Tunnels\nUNLOCKS: Maintenance office\n=======\nON USE: Removed from inventory\nRetain room access during run",

  highlightTerms: [
    "REGION:",
    "LOCATION:",
    "UNLOCKS:",
    "ON USE:",
    "Station",
    "Perimeter",
    "Tunnels",
    "Maintenance office",
  ],

  sources: [
    {
      label: "Station",
      kind: "world-loot",
    },
  ],

  tags: [
    "key",
    "deluxe",
    "station",
    "perimeter",
    "tunnels",
    "maintenance office",
    "access card",
    "keycard",
  ],
};
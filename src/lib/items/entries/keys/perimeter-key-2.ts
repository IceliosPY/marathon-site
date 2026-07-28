import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const perimeterKey2: ItemEntry = {
  id: "perimeter-key-2",

  name: "Hauler Observation",

  category: "key",
  rarity: "prestige",

  icon: asset("items/icons/perimeterkey.png"),
  image: asset("items/icons/perimeterkey.png"),
  render: asset("items/icons/perimeterkey.png"),
  video: asset("items/videos/keys/perimeterkey.mp4"),

  sellPrice: 3200,

  effect: "Prestige Key",

  description:
    "REGION: Hauler (Perimeter)\nLOCATION: Upper observation\nUNLOCKS: Observation\n=======\nON USE: Removed from inventory\nRetain room access during run",

  highlightTerms: [
    "REGION:",
    "LOCATION:",
    "UNLOCKS:",
    "ON USE:",
    "Observation",
    "Hauler",
    "Perimeter",
    "Upper observation",
  ],

  sources: [
    {
      label: "Hauler",
      kind: "world-loot",
    },
  ],

  tags: [
    "key",
    "prestige",
    "hauler",
    "perimeter",
    "observation",
    "upper observation",
    "access card",
    "keycard",
  ],
};
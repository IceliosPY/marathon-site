import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const direMarshKey5: ItemEntry = {
  id: "dire-marsh-key-5",

  name: "Maintenance Pump",

  category: "key",
  rarity: "deluxe",

  icon: asset("items/icons/Dire-marshkey.png"),
  image: asset("items/icons/Dire-marshkey.png"),
  render: asset("items/icons/Dire-marshkey.png"),
  video: asset("items/videos/keys/Dire-marshkey.mp4"),

  sellPrice: 600,

  effect: "Deluxe Key",

  description:
    "REGION: Maintenance (Dire Marsh)\nLOCATION: ???????\nUNLOCKS: Pump\n=======\nON USE: Removed from inventory\nRetain room access during run",

  highlightTerms: [
    "REGION:",
    "LOCATION:",
    "UNLOCKS:",
    "ON USE:",
    "Pump",
    "Maintenance",
    "Dire Marsh",
  ],

  sources: [
    {
      label: "Maintenance",
      kind: "world-loot",
    },
  ],

  tags: [
    "key",
    "deluxe",
    "maintenance",
    "dire marsh",
    "pump",
    "access card",
    "keycard",
  ],
};
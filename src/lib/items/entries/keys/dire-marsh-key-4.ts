import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const direMarshKey4: ItemEntry = {
  id: "dire-marsh-key-4",

  name: "Greenhouse Lab",

  category: "key",
  rarity: "deluxe",

  icon: asset("items/icons/Dire-marshkey.png"),
  image: asset("items/icons/Dire-marshkey.png"),
  render: asset("items/icons/Dire-marshkey.png"),
  video: asset("items/videos/keys/Dire-marshkey.mp4"),

  sellPrice: 600,

  effect: "Deluxe Key",

  description:
    "REGION: Greenhouse (Dire Marsh)\nLOCATION: ???????\nUNLOCKS: Lab\n=======\nON USE: Removed from inventory\nRetain room access during run",

  highlightTerms: [
    "REGION:",
    "LOCATION:",
    "UNLOCKS:",
    "ON USE:",
    "Lab",
    "Greenhouse",
    "Dire Marsh",
  ],

  sources: [
    {
      label: "Greenhouse",
      kind: "world-loot",
    },
  ],

  tags: [
    "key",
    "deluxe",
    "greenhouse",
    "dire marsh",
    "lab",
    "access card",
    "keycard",
    "research",
  ],
};
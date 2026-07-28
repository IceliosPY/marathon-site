import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const direMarshKey1: ItemEntry = {
  id: "dire-marsh-key-1",

  name: "Bio-Research Tank",

  category: "key",
  rarity: "superior",

  icon: asset("items/icons/Dire-marshkey.png"),
  image: asset("items/icons/Dire-marshkey.png"),
  render: asset("items/icons/Dire-marshkey.png"),
  video: asset("items/videos/keys/Dire-marshkey.mp4"),

  sellPrice: 1440,

  effect: "Superior Key",

  description:
    "REGION: Bio-Research (Dire Marsh)\nLOCATION: ???????\nUNLOCKS: Tank\n=======\nON USE: Removed from inventory\nRetain room access during run",

  highlightTerms: [
    "REGION:",
    "LOCATION:",
    "UNLOCKS:",
    "ON USE:",
    "Tank",
    "Bio-Research",
    "Dire Marsh",
  ],

  sources: [
    {
      label: "Bio-Research",
      kind: "world-loot",
    },
  ],

  tags: [
    "key",
    "superior",
    "bio research",
    "dire marsh",
    "tank",
    "access card",
    "keycard",
  ],
};
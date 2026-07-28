import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const direMarshKey2: ItemEntry = {
  id: "dire-marsh-key-2",

  name: "Maintenance Canal",

  category: "key",
  rarity: "superior",

  icon: asset("items/icons/Dire-marshkey.png"),
  image: asset("items/icons/Dire-marshkey.png"),
  render: asset("items/icons/Dire-marshkey.png"),
  video: asset("items/videos/keys/Dire-marshkey.mp4"),

  sellPrice: 1440,

  effect: "Superior Key",

  description:
    "REGION: Field Maintenance (Dire Marsh)\nLOCATION: Main facility\nUNLOCKS: Secure canal entrance\n=======\nON USE: Removed from inventory\nRetain room access during run",

  highlightTerms: [
    "REGION:",
    "LOCATION:",
    "UNLOCKS:",
    "ON USE:",
    "Secure canal entrance",
    "Field Maintenance",
    "Dire Marsh",
    "Main facility",
  ],

  sources: [
    {
      label: "Field Maintenance",
      kind: "world-loot",
    },
  ],

  tags: [
    "key",
    "superior",
    "field maintenance",
    "dire marsh",
    "maintenance canal",
    "secure canal entrance",
    "main facility",
    "access card",
    "keycard",
  ],
};
import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const direMarshKey6: ItemEntry = {
  id: "dire-marsh-key-6",

  name: "AI Uplink Servers",

  category: "key",
  rarity: "prestige",

  icon: asset("items/icons/Dire-marshkey.png"),
  image: asset("items/icons/Dire-marshkey.png"),
  render: asset("items/icons/Dire-marshkey.png"),
  video: asset("items/videos/keys/Dire-marshkey.mp4"),

  sellPrice: 3200,

  effect: "Prestige Key",

  description:
    "REGION: AI Uplink (Dire Marsh)\nLOCATION: Basement\nUNLOCKS: Subterranean server hub\n=======\nON USE: Removed from inventory\nRetain room access during run",

  highlightTerms: [
    "REGION:",
    "LOCATION:",
    "UNLOCKS:",
    "ON USE:",
    "AI Uplink",
    "Basement",
    "Subterranean server hub",
    "Dire Marsh",
  ],

  sources: [
    {
      label: "AI Uplink",
      kind: "world-loot",
    },
  ],

  tags: [
    "key",
    "prestige",
    "ai uplink",
    "dire marsh",
    "server hub",
    "basement",
    "access card",
    "keycard",
  ],
};
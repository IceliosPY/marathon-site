import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const direMarshKey3: ItemEntry = {
  id: "dire-marsh-key-3",

  name: "Quarantine Morgue",

  category: "key",
  rarity: "superior",

  icon: asset("items/icons/Dire-marshkey.png"),
  image: asset("items/icons/Dire-marshkey.png"),
  render: asset("items/icons/Dire-marshkey.png"),
  video: asset("items/videos/keys/Dire-marshkey.mp4"),

  sellPrice: 1440,

  effect: "Superior Key",

  description:
    "REGION: Quarantine (Dire Marsh)\nLOCATION: ???????\nUNLOCKS: Morgue\n=======\nON USE: Removed from inventory\nRetain room access during run",

  highlightTerms: [
    "REGION:",
    "LOCATION:",
    "UNLOCKS:",
    "ON USE:",
    "Morgue",
    "Quarantine",
    "Dire Marsh",
  ],

  sources: [
    {
      label: "Quarantine",
      kind: "world-loot",
    },
  ],

  tags: [
    "key",
    "superior",
    "quarantine",
    "dire marsh",
    "morgue",
    "access card",
    "keycard",
    "secure room",
  ],
};
import type { ItemEntry } from "../types";

export const insurancePlan: ItemEntry = {
  id: "insurance-plan",
  name: "Insurance Plan",
  category: "chip",
  rarity: "superior",

  icon: "/items/icons/insurance-plan.png",
  image: "/items/icons/insurance-plan.png",
  render: "/items/icons/insurance-plan.png",
  video: "/items/videos/insurance-plan.mp4",

  sellPrice: 621,

  effect: "Universal Chip Mod",

  description:
    "While under the effects of a Mechanic's Kit or OS Debug, defeating a hostile massively extends its duration and cleanses any lingering hazardous mechanical or operating system status effects.",

  lore: "Chip mods can be installed onto any weapon.",

  highlightTerms: [
    "Mechanic's Kit",
    "OS Debug",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
    {
      label: "Contracts",
      kind: "contract",
      target: {
        type: "contract",
        id: "uesc-contracts",
      },
    },
    {
      label: "Nucaloric Armory",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "nucaloric-armory",
      },
    },
  ],

  tags: [
    "chip",
    "status cleanse",
    "mechanic",
    "os",
    "duration",
    "support",
  ],
};
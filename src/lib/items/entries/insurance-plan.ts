import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const insurancePlan: ItemEntry = {
  id: "insurance-plan",
  name: "Insurance Plan",
  category: "chip",
  rarity: "superior",

  icon: asset("items/icons/chip1.png"),
  image: asset("items/icons/chip1.png"),
  render: asset("items/icons/chip1.png"),
  video: asset("items/videos/chip/chip1.mp4"),

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
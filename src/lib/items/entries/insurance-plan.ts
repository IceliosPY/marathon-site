import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const insurancePlan: ItemEntry = {
  id: "insurance-plan",

  name: "Insurance Plan",

  category: "mod",
  rarity: "superior",
  modSubcategory: "chip",

  icon: asset("items/icons/chip1.png"),
  image: asset("items/icons/chip1.png"),
  render: asset("items/icons/chip1.png"),
  video: asset("items/videos/chips/chip1.mp4"),

  sellPrice: 621,

  effect: "Superior Universal Chip Mod",

  description:
    "While under the effects of a Mechanic's Kit or OS Debug, defeating a hostile massively extends its duration and cleanses any lingering hazardous mechanical or operating system status effects.",

  lore:
    "Originally developed for field technicians operating in hazardous combat zones, Insurance Plan transforms successful eliminations into system recovery opportunities, extending support effects while purging harmful software corruption and mechanical failures.",


  specialEffects: [
    {
      name: "Insurance Plan",
      description:
        "Defeating a hostile while affected by Mechanic's Kit or OS Debug massively extends the active duration.",
    },
  ],

  highlightTerms: [
    "Mechanic's Kit",
    "OS Debug",
    "status cleanse",
    "duration extension",
    "support chip",
  ],

  tags: [
    "mod",
    "chip",
    "universal chip",
    "status cleanse",
    "mechanic",
    "os",
    "duration",
    "support",
    "mechanic's kit",
    "os debug",
    "weapon mod",
    "superior",
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
};
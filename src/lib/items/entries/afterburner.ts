import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const afterburner: ItemEntry = {
  id: "afterburner",

  name: "Afterburner",

  category: "chip",
  rarity: "superior",

  icon: asset("items/icons/hurricane.png"),
  image: asset("items/icons/hurricane.png"),
  render: asset("items/icons/hurricane.png"),
  video: asset("items/videos/hurricane.mp4"),

  sellPrice: 621,

  effect: "Universal Chip Mod",

  description:
    "Sliding with this weapon reloads a portion of your magazine and increases stability and accuracy by a massive amount.",

  lore:
    "A mobility-focused combat chip that converts momentum into weapon optimization. Sliding temporarily stabilizes the weapon platform while replenishing ammunition reserves.",

  highlightTerms: [
    "sliding",
    "reloads a portion",
    "stability",
    "accuracy",
  ],

  tags: [
    "chip",
    "movement",
    "slide",
    "reload",
    "stability",
    "accuracy",
    "weapon mod",
    "combat",
  ],

  prestigeFeature: {
    title: "Universal Chip Mod",
    description:
      "Chip mods can be installed onto any weapon.",
    color: "purple",
  },

  specialEffects: [
    {
      name: "Afterburner",
      description:
        "Sliding reloads part of the current magazine and greatly increases weapon stability and accuracy for a short duration.",
    },
    {
      name: "Ballistic Compatibility",
      description:
        "Ballistic weapons reload directly from reserves while sliding.",
    },
    {
      name: "Volt Compatibility",
      description:
        "Volt weapons reload a smaller portion of their magazine while sliding.",
    },
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
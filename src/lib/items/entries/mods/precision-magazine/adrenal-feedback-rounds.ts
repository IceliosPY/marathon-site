import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const adrenalFeedbackRounds: ItemEntry = {
  id: "adrenal-feedback-rounds",

  name: "Adrenal Feedback Rounds",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "precision-magazine",

  icon: asset("items/icons/AdrenalFeedbackRounds.png"),
  image: asset("items/icons/AdrenalFeedbackRounds.png"),
  render: asset("items/icons/AdrenalFeedbackRounds.png"),
  video: asset("items/videos/mods/AdrenalFeedbackRounds.webm"),

  sellPrice: 1620,

  effect: "Prestige Precision Magazine Mod",

  description:
    "A custom-made mod for the Hardline PR. Increases magazine size.",

  lore:
    "Experimental ammunition designed to recycle combat momentum into enhanced weapon performance. Precision hits cool the weapon and build Micro-Adrenaline charges, temporarily improving handling characteristics.",

  highlightTerms: [
    "adrenal feedback rounds",
    "micro-adrenaline",
    "precision hits",
    "heat capacity",
    "agility",
    "magazine",
    "hardline pr",
  ],

  prestigeFeature: {
    title: "Adrenal Feedback Rounds",
    description:
      "Precision hits reduce your shell's heat and grant a stack of Micro-Adrenaline. Micro-Adrenaline stacks increase your shell's Heat Capacity and Agility for a short duration.",
    color: "yellow",
  },

  weaponStatProfiles: [
    {
      weaponId: "hardline-pr",
      weaponName: "Hardline PR",
      stats: [
        { label: "Magazine", value: 0, modifier: 18, unit: "" },
      ],
    },
  ],

  tags: [
    "mod",
    "prestige",
    "precision magazine",
    "adrenal feedback rounds",
    "micro-adrenaline",
    "precision hits",
    "heat capacity",
    "agility",
    "magazine",
    "hardline pr",
    "weapon mod",
  ],

  sources: [
    {
      label: "Prestige Loot",
      kind: "world-loot",
    },
  ],
};
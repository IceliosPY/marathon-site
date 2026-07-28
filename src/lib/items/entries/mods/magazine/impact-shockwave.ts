import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const impactShockwave: ItemEntry = {
  id: "impact-shockwave",

  name: "Impact Shockwave",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "magazine",

  icon: asset("items/icons/impact-shockwave.png"),
  image: asset("items/icons/impact-shockwave.png"),
  render: asset("items/icons/impact-shockwave.png"),
  video: asset("items/videos/mods/impact-shockwave.mp4"),

  sellPrice: 1620,

  effect: "Prestige Magazine Mod",

  description:
    "A custom-made mod for the ARES RG. Increases range and magazine size.",

  highlightTerms: [
    "explode on impact",
    "splash damage",
    "knocking targets back",
    "range",
    "magazine",
    "ARES RG",
  ],

  tags: [
    "mod",
    "magazine mod",
    "ares rg",
    "impact shockwave",
    "explode on impact",
    "splash damage",
    "knockback",
    "range",
    "magazine",
    "prestige",
    "weapon mod",
  ],

  stats: [
    {
      label: "Range",
      value: 55,
      modifier: 5,
      unit: "M",
    },
    {
      label: "Magazine",
      value: 6,
      modifier: 2,
    },
  ],

  prestigeFeature: {
    title: "Impact Shockwave",
    description:
      "Rounds from this weapon explode on impact, dealing splash damage and knocking targets back.",
    color: "yellow",
  },

  weaponStatProfiles: [
    {
      weaponId: "ares-rg",
      weaponName: "ARES RG",

      stats: [
        {
          label: "Range",
          value: 55,
          modifier: 5,
          unit: "M",
        },
        {
          label: "Magazine",
          value: 6,
          modifier: 2,
        },
      ],
    },
  ],

  sources: [
    {
      label: "Traxus market",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "armory",
      },
    },
    {
      label: "Cyac market",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "armory",
      },
    },
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
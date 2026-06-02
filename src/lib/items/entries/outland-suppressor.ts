import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const outlandSuppressor: ItemEntry = {
  id: "outland-suppressor",

  name: "Outland Suppressor",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "precision-barrel",

  icon: asset("items/icons/outland-suppressor.png"),
  image: asset("items/icons/outland-suppressor.png"),
  render: asset("items/icons/outland-suppressor.png"),
  video: asset("items/videos/mods/outland-suppressor.mp4"),

  sellPrice: 1620,

  effect: "Prestige Precision Barrel Mod",

  description:
    "A unique mod for the Outland. Increases stability and range.",

  weaponStatProfiles: [
    {
      weaponId: "outland",
      weaponName: "Outland",
      stats: [
        {
          label: "Recoil",
          value: 0,
          modifier: -20.0,
          unit: "%",
        },
        {
          label: "Range",
          value: 0,
          modifier: 15,
          unit: "M",
        },
      ],
    },
  ],

  specialEffects: [
    {
      name: "Silent Shot",
      description:
        "Shots fired from this weapon are suppressed.",
    },
  ],

  lore:
    "A custom-built suppressor assembly designed exclusively for the Outland platform. Advanced baffling technology masks muzzle report while improving projectile stability at extended ranges.",

  highlightTerms: [
    "Silent Shot",
    "suppressed",
    "Recoil",
    "Range",
  ],

  tags: [
    "mod",
    "precision barrel",
    "outland",
    "prestige",
    "suppressor",
    "silent shot",
    "range",
    "stability",
    "unique mod",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
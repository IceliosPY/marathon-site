import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const suppressionDampener: ItemEntry = {
  id: "suppression-dampener",

  name: "Suppression Dampener",

  category: "mod",
  rarity: "superior",
  modSubcategory: "volt-dampener",

  icon: asset("items/icons/SuppressionDampener.png"),
  image: asset("items/icons/SuppressionDampener.png"),
  render: asset("items/icons/SuppressionDampener.png"),
  video: asset("items/videos/mods/SuppressionDampener.webm"),

  sellPrice: 621,

  effect: "Superior Volt Dampener Mod",

  description:
    "A precision-tuned dampener that greatly increases ADS accuracy and stability while suppressing weapon report.",

  lore:
    "Originally developed for reconnaissance teams operating behind enemy lines, the Suppression Dampener combines advanced recoil compensation systems with an integrated sound suppression array. Operators benefit from quieter firing signatures, tighter shot grouping, and improved control during sustained engagements.",

  highlightTerms: [
    "suppressed fire",
    "ads accuracy",
    "stability",
    "recoil reduction",
    "silenced shots",
    "volt dampener",
    "stealth",
  ],

  prestigeFeature: {
    title: "Suppressor",
    description:
      "Shots fired from this weapon are silenced.",
    color: "purple",
  },

  weaponStatProfiles: [
    {
      weaponId: "v11-punch",
      weaponName: "V11 Punch",

      stats: [
        {
          label: "ADS Spread",
          value: 0,
          modifier: -0.82,
          unit: "°",
        },
        {
          label: "Recoil",
          value: 0,
          modifier: -15.8,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "v22-volt-thrower",
      weaponName: "V22 Volt Thrower",

      stats: [
        {
          label: "ADS Spread",
          value: 0,
          modifier: -0.25,
          unit: "°",
        },
        {
          label: "Recoil",
          value: 0,
          modifier: -16.0,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "v75-scar",
      weaponName: "V75 SCAR",

      stats: [
        {
          label: "ADS Spread",
          value: 0,
          modifier: -0.16,
          unit: "°",
        },
        {
          label: "Recoil",
          value: 0,
          modifier: -40.5,
          unit: "%",
        },
      ],
    },
  ],

  tags: [
    "mod",
    "superior",
    "volt dampener",
    "suppression dampener",
    "suppressor",
    "silenced",
    "ads accuracy",
    "stability",
    "recoil",
    "stealth",
    "weapon mod",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
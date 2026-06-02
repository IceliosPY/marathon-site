import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const quickfireBarrel: ItemEntry = {
  id: "quickfire-barrel",

  name: "Quickfire Barrel",

  category: "mod",
  rarity: "superior",
  modSubcategory: "ion-dampener",

  icon: asset("items/icons/QuickfireBarrel.png"),
  image: asset("items/icons/QuickfireBarrel.png"),
  render: asset("items/icons/QuickfireBarrel.png"),
  video: asset("items/videos/mods/QuickfireBarrel.webm"),

  sellPrice: 540,

  effect: "Superior Ion Dampener Mod",

  description:
    "Greatly increases accuracy when firing from the hip, movement speed with this weapon, and accuracy while moving.",

  lore:
    "A lightweight barrel assembly optimized for aggressive engagements. Its ion-balanced construction improves weapon control while moving and dramatically tightens hipfire performance.",

  highlightTerms: [
    "quickfire barrel",
    "hipfire spread",
    "moving inaccuracy",
    "weight",
    "mobility",
    "hipfire accuracy",
    "ion dampener",
  ],

  weaponStatProfiles: [
    {
      weaponId: "v99-channel-rifle",
      weaponName: "V99 Channel Rifle",
      stats: [
        { label: "Hipfire Spread", value: 0, modifier: -2.0, unit: "°" },
        { label: "Moving Inaccuracy", value: 0, modifier: -81.8, unit: "%" },
        { label: "Weight", value: 0, modifier: -10.0, unit: "%" },
      ],
    },

    {
      weaponId: "v66-lookout",
      weaponName: "V66 Lookout",
      stats: [
        { label: "Hipfire Spread", value: 0, modifier: -0.55, unit: "°" },
        { label: "Moving Inaccuracy", value: 0, modifier: -19.1, unit: "%" },
        { label: "Weight", value: 0, modifier: -5.4, unit: "%" },
      ],
    },
  ],

  tags: [
    "mod",
    "ion dampener",
    "barrel",
    "quickfire barrel",
    "hipfire",
    "hipfire accuracy",
    "movement speed",
    "moving accuracy",
    "mobility",
    "weapon mod",
    "superior",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
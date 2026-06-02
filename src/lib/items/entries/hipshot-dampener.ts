import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const hipshotDampener: ItemEntry = {
  id: "hipshot-dampener",

  name: "Hipshot Dampener",

  category: "mod",
  rarity: "superior",
  modSubcategory: "volt-dampener",

  icon: asset("items/icons/HipshotDampener.png"),
  image: asset("items/icons/HipshotDampener.png"),
  render: asset("items/icons/HipshotDampener.png"),
  video: asset("items/videos/mods/HipshotDampener.webm"),

  sellPrice: 540,

  effect: "Superior Volt Dampener Mod",

  description:
    "Greatly increases accuracy when firing from the hip, movement speed with this weapon, and accuracy while moving.",

  lore:
    "Developed for aggressive assault operators, the Hipshot Dampener optimizes weapon stabilization algorithms for close-quarters combat. The module minimizes spread while firing from the hip and improves handling during rapid movement, allowing users to maintain accuracy without aiming down sights.",

  highlightTerms: [
    "hipfire",
    "movement accuracy",
    "mobility",
    "close quarters",
    "run and gun",
    "stability",
    "volt dampener",
  ],

  weaponStatProfiles: [
    {
      weaponId: "v75-scar",
      weaponName: "V75 SCAR",

      stats: [
        {
          label: "Hipfire Spread",
          value: 0,
          modifier: -1.29,
          unit: "°",
        },
        {
          label: "Moving Inaccuracy",
          value: 0,
          modifier: -20.5,
          unit: "%",
        },
        {
          label: "Weight",
          value: 0,
          modifier: -17.0,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "v22-volt-thrower",
      weaponName: "V22 Volt Thrower",

      stats: [
        {
          label: "Hipfire Spread",
          value: 0,
          modifier: -0.53,
          unit: "°",
        },
        {
          label: "Moving Inaccuracy",
          value: 0,
          modifier: -20.5,
          unit: "%",
        },
        {
          label: "Weight",
          value: 0,
          modifier: -22.5,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "v11-punch",
      weaponName: "V11 Punch",

      stats: [
        {
          label: "Hipfire Spread",
          value: 0,
          modifier: -1.13,
          unit: "°",
        },
        {
          label: "Moving Inaccuracy",
          value: 0,
          modifier: -81.8,
          unit: "%",
        },
        {
          label: "Weight",
          value: 0,
          modifier: -18.0,
          unit: "%",
        },
      ],
    },
  ],

  tags: [
    "mod",
    "superior",
    "volt dampener",
    "hipshot dampener",
    "hipfire",
    "mobility",
    "movement speed",
    "close quarters",
    "accuracy",
    "weapon mod",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const oracleLens: ItemEntry = {
  id: "oracle-lens",

  name: "Oracle Lens",

  category: "mod",
  rarity: "superior",
  modSubcategory: "pistol-optic",

  icon: asset("items/icons/OracleLens.png"),
  image: asset("items/icons/OracleLens.png"),
  render: asset("items/icons/OracleLens.png"),
  video: asset("items/videos/mods/OracleLens.webm"),

  sellPrice: 459,

  effect: "Superior Pistol Optic Mod",

  description:
    "Greatly increases ADS speed, accuracy while moving, and ADS accuracy.",

  lore:
    "Compact reflex optic favored by aggressive sidearm users. Its predictive targeting software compensates for movement and weapon sway, allowing operators to maintain accuracy while advancing on targets.",

  highlightTerms: [
    "ADS speed",
    "ADS accuracy",
    "moving accuracy",
    "pistol optic",
    "oracle lens",
  ],

  weaponStatProfiles: [
    {
      weaponId: "ce-tactical-sidearm",
      weaponName: "CE Tactical Sidearm",

      stats: [
        {
          label: "ADS Spread",
          value: 0,
          modifier: -0.43,
          unit: "°",
        },
        {
          label: "Moving Inaccuracy",
          value: 0,
          modifier: -50.9,
          unit: "%",
        },
        {
          label: "ADS Speed",
          value: 0,
          modifier: -0.17,
          unit: "S",
        },
        {
          label: "Zoom",
          value: 1.0,
          modifier: 0.0,
          unit: "X",
        },
      ],
    },

    {
      weaponId: "magnum-mc",
      weaponName: "Magnum MC",

      stats: [
        {
          label: "ADS Spread",
          value: 0,
          modifier: -0.35,
          unit: "°",
        },
        {
          label: "Moving Inaccuracy",
          value: 0,
          modifier: -43.6,
          unit: "%",
        },
        {
          label: "ADS Speed",
          value: 0,
          modifier: -0.18,
          unit: "S",
        },
        {
          label: "Zoom",
          value: 1.1,
          modifier: -0.1,
          unit: "X",
        },
      ],
    },

    {
      weaponId: "v11-punch",
      weaponName: "V11 Punch",

      stats: [
        {
          label: "ADS Spread",
          value: 0,
          modifier: -0.54,
          unit: "°",
        },
        {
          label: "Moving Inaccuracy",
          value: 0,
          modifier: -72.7,
          unit: "%",
        },
        {
          label: "ADS Speed",
          value: 0,
          modifier: -0.17,
          unit: "S",
        },
        {
          label: "Zoom",
          value: 1.0,
          modifier: 0.0,
          unit: "X",
        },
      ],
    },
  ],

  tags: [
    "mod",
    "superior",
    "pistol optic",
    "oracle lens",
    "ce tactical sidearm",
    "magnum mc",
    "v11 punch",
    "ads speed",
    "ads accuracy",
    "moving accuracy",
    "weapon mod",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
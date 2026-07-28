import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const weightedBarrel: ItemEntry = {
  id: "weighted-barrel",

  name: "Weighted Barrel",

  category: "mod",
  rarity: "superior",
  modSubcategory: "cqc-barrel",

  icon: asset("items/icons/WeightedBarrel.png"),
  image: asset("items/icons/WeightedBarrel.png"),
  render: asset("items/icons/WeightedBarrel.png"),
  video: asset("items/videos/mods/WeightedBarrel.webm"),

  sellPrice: 540,

  effect: "Superior CQC Barrel Mod",

  description:
    "Greatly increases aim assist and accuracy while moving.",

  highlightTerms: [
    "aim assist",
    "accuracy",
    "moving",
    "moving inaccuracy",
    "cqc",
    "barrel",
  ],

  tags: [
    "mod",
    "cqc barrel",
    "weighted barrel",
    "aim assist",
    "moving accuracy",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "ce-tactical-sidearm",
      weaponName: "CE Tactical Sidearm",
      stats: [
        {
          label: "Moving Inaccuracy",
          value: 81.8,
          modifier: -50.9,
          unit: "%",
        },
        {
          label: "Aim Assist",
          value: 1.55,
          modifier: 0.25,
          unit: "°",
        },
      ],
    },
    {
      weaponId: "magnum-mc",
      weaponName: "Magnum MC",
      stats: [
        {
          label: "Moving Inaccuracy",
          value: 90.9,
          modifier: -43.6,
          unit: "%",
        },
        {
          label: "Aim Assist",
          value: 1.28,
          modifier: 0.13,
          unit: "°",
        },
      ],
    },
    {
      weaponId: "brrt-smg",
      weaponName: "BRRT SMG",
      stats: [
        {
          label: "Moving Inaccuracy",
          value: 17.7,
          modifier: -10.5,
          unit: "%",
        },
        {
          label: "Aim Assist",
          value: 2.44,
          modifier: 0.22,
          unit: "°",
        },
      ],
    },
    {
      weaponId: "copperhead-rf",
      weaponName: "Copperhead RF",
      stats: [
        {
          label: "Moving Inaccuracy",
          value: 90.9,
          modifier: -72.7,
          unit: "%",
        },
        {
          label: "Aim Assist",
          value: 1.4,
          modifier: 0.5,
          unit: "°",
        },
      ],
    },
    {
      weaponId: "bully-smg",
      weaponName: "Bully SMG",
      stats: [
        {
          label: "Moving Inaccuracy",
          value: 17.7,
          modifier: -10.5,
          unit: "%",
        },
        {
          label: "Aim Assist",
          value: 2.47,
          modifier: 0.36,
          unit: "°",
        },
      ],
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
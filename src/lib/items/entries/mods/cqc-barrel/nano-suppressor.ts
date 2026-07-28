import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const nanoSuppressor: ItemEntry = {
  id: "nano-suppressor",

  name: "Nano-Suppressor",

  category: "mod",
  rarity: "superior",
  modSubcategory: "cqc-barrel",

  icon: asset("items/icons/NanoSuppressor.png"),
  image: asset("items/icons/NanoSuppressor.png"),
  render: asset("items/icons/NanoSuppressor.png"),
  video: asset("items/videos/mods/NanoSuppressor.webm"),

  sellPrice: 621,

  effect: "Superior CQC Barrel Mod",

  description:
    "Greatly increases accuracy when firing from the hip.",


  highlightTerms: [
    "suppressor",
    "silent shots",
    "hipfire",
    "accuracy",
    "close quarters",
    "cqc",
  ],

  tags: [
    "mod",
    "cqc barrel",
    "suppressor",
    "hipfire",
    "accuracy",
    "silent",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "ce-tactical-sidearm",
      weaponName: "CE Tactical Sidearm",

      stats: [
        {
          label: "Hipfire Spread",
          value: 1.55,
          modifier: -0.79,
          unit: "°",
        },
      ],
    },

    {
      weaponId: "magnum-mc",
      weaponName: "Magnum MC",

      stats: [
        {
          label: "Hipfire Spread",
          value: 1.47,
          modifier: -0.52,
          unit: "°",
        },
      ],
    },

    {
      weaponId: "brrt-smg",
      weaponName: "BRRT SMG",

      stats: [
        {
          label: "Hipfire Spread",
          value: 1.36,
          modifier: -0.68,
          unit: "°",
        },
      ],
    },

    {
      weaponId: "copperhead-rf",
      weaponName: "Copperhead RF",

      stats: [
        {
          label: "Hipfire Spread",
          value: 2.72,
          modifier: -1.36,
          unit: "°",
        },
      ],
    },

    {
      weaponId: "bully-smg",
      weaponName: "Bully SMG",

      stats: [
        {
          label: "Hipfire Spread",
          value: 1.46,
          modifier: -0.73,
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
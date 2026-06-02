import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const precisionBarrel: ItemEntry = {
  id: "precision-barrel",

  name: "Precision Barrel",

  category: "mod",
  rarity: "superior",
  modSubcategory: "cqc-barrel",

  icon: asset("items/icons/PrecisionBarrel.png"),
  image: asset("items/icons/PrecisionBarrel.png"),
  render: asset("items/icons/PrecisionBarrel.png"),
  video: asset("items/videos/mods/PrecisionBarrel.webm"),

  sellPrice: 540,

  effect: "Superior CQC Barrel Mod",

  description:
    "Greatly increases ADS accuracy and range.",

  lore:
    "A tuned CQC barrel assembly designed to tighten sighted fire and extend effective engagement distance without compromising compact weapon handling.",

  highlightTerms: [
    "precision barrel",
    "ADS accuracy",
    "ADS spread",
    "range",
    "cqc barrel",
  ],

  tags: [
    "mod",
    "barrel",
    "cqc barrel",
    "ADS accuracy",
    "range",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "brrt-smg",
      weaponName: "BRRT SMG",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.35, unit: "°" },
        { label: "Range", value: 0, modifier: 15, unit: "M" },
      ],
    },

    {
      weaponId: "copperhead-rf",
      weaponName: "Copperhead RF",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.27, unit: "°" },
        { label: "Range", value: 0, modifier: 14, unit: "M" },
      ],
    },

    {
      weaponId: "bully-smg",
      weaponName: "Bully SMG",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.13, unit: "°" },
        { label: "Range", value: 0, modifier: 22, unit: "M" },
      ],
    },

    {
      weaponId: "ce-tactical-sidearm",
      weaponName: "CE Tactical Sidearm",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.60, unit: "°" },
        { label: "Range", value: 0, modifier: 9, unit: "M" },
      ],
    },

    {
      weaponId: "magnum-mc",
      weaponName: "Magnum MC",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.50, unit: "°" },
        { label: "Range", value: 0, modifier: 9, unit: "M" },
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
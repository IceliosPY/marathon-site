import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const clearEyedLens: ItemEntry = {
  id: "clear-eyed-lens",

  name: "Clear-Eyed Lens",

  category: "mod",
  rarity: "superior",
  modSubcategory: "lmg-optic",

  icon: asset("items/icons/ClearEyedLens.png"),
  image: asset("items/icons/ClearEyedLens.png"),
  render: asset("items/icons/ClearEyedLens.png"),
  video: asset("items/videos/mods/ClearEyedLens.webm"),

  sellPrice: 621,

  effect: "Superior LMG Optic Mod",

  description:
    "Greatly increases zoom, ADS speed, and ADS accuracy.",

  lore:
    "A precision-ground optic lens engineered for heavy weapon platforms. The enhanced clarity and target acquisition systems dramatically improve sight alignment and aiming responsiveness.",

  highlightTerms: [
    "clear-eyed lens",
    "optic",
    "zoom",
    "ADS speed",
    "ADS accuracy",
    "ADS spread",
    "LMG",
    "precision sight",
  ],

  weaponStatProfiles: [
    {
      weaponId: "conquest-lmg",
      weaponName: "Conquest LMG",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.38, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.40, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.10, unit: "X" },
      ],
    },
    {
      weaponId: "retaliator-lmg",
      weaponName: "Retaliator LMG",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.10, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.35, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.10, unit: "X" },
      ],
    },
    {
      weaponId: "demolition-hmg",
      weaponName: "Demolition HMG",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.05, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.25, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.10, unit: "X" },
      ],
    },
  ],

  tags: [
    "mod",
    "optic",
    "lmg optic",
    "clear-eyed lens",
    "zoom",
    "ADS speed",
    "ADS accuracy",
    "LMG",
    "HMG",
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
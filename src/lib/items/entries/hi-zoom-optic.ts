import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const hiZoomOptic: ItemEntry = {
  id: "hi-zoom-optic",

  name: "Hi-Zoom Optic",

  category: "mod",
  rarity: "superior",
  modSubcategory: "precision-optic",

  icon: asset("items/icons/HiZoomOptic.png"),
  image: asset("items/icons/HiZoomOptic.png"),
  render: asset("items/icons/HiZoomOptic.png"),
  video: asset("items/videos/mods/HiZoomOptic.webm"),

  sellPrice: 621,

  effect: "Superior Precision Optic Mod",

  description:
    "Greatly increases zoom, range, and ADS accuracy.",

  lore:
    "A high-magnification precision optic built to improve long-range target acquisition and sight alignment.",

  highlightTerms: [
    "zoom",
    "range",
    "ADS accuracy",
    "ADS spread",
    "precision optic",
  ],

  weaponStatProfiles: [
    {
      weaponId: "br33-volley-rifle",
      weaponName: "BR33 Volley Rifle",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.14, unit: "°" },
        { label: "Range", value: 0, modifier: 18, unit: "M" },
        { label: "Zoom", value: 0, modifier: 1.6, unit: "X" },
      ],
    },

    {
      weaponId: "stryder-m1t",
      weaponName: "Stryder M1T",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.37, unit: "°" },
        { label: "Range", value: 0, modifier: 16, unit: "M" },
        { label: "Zoom", value: 0, modifier: 1.6, unit: "X" },
      ],
    },

    {
      weaponId: "hardline-pr",
      weaponName: "Hardline PR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.18, unit: "°" },
        { label: "Range", value: 0, modifier: 25, unit: "M" },
        { label: "Zoom", value: 0, modifier: 1.8, unit: "X" },
      ],
    },

    {
      weaponId: "repeater-hpr",
      weaponName: "Repeater HPR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.34, unit: "°" },
        { label: "Range", value: 0, modifier: 25, unit: "M" },
        { label: "Zoom", value: 0, modifier: 1.8, unit: "X" },
      ],
    },

    {
      weaponId: "v66-lookout",
      weaponName: "V66 Lookout",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.17, unit: "°" },
        { label: "Range", value: 0, modifier: 15, unit: "M" },
        { label: "Zoom", value: 0, modifier: 1.6, unit: "X" },
      ],
    },

    {
      weaponId: "twin-tap-hbr",
      weaponName: "Twin Tap HBR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.08, unit: "°" },
        { label: "Range", value: 0, modifier: 18, unit: "M" },
        { label: "Zoom", value: 0, modifier: 1.6, unit: "X" },
      ],
    },
  ],

  tags: [
    "mod",
    "optic",
    "precision optic",
    "hi-zoom optic",
    "ads accuracy",
    "ads spread",
    "range",
    "zoom",
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
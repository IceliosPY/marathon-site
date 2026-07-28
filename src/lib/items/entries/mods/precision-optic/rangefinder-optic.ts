import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const rangefinderOptic: ItemEntry = {
  id: "rangefinder-optic",

  name: "Rangefinder Optic",

  category: "mod",
  rarity: "superior",
  modSubcategory: "precision-optic",

  icon: asset("items/icons/RangefinderOptic.png"),
  image: asset("items/icons/RangefinderOptic.png"),
  render: asset("items/icons/RangefinderOptic.png"),
  video: asset("items/videos/mods/RangefinderOptic.webm"),

  sellPrice: 621,

  effect: "Superior Precision Optic Mod",

  description:
    "Greatly increases zoom, ADS accuracy, and accuracy while moving.",

  lore:
    "A precision optic fitted with a laser rangefinder module, designed to improve target acquisition and distance reading on precision weapons.",

  highlightTerms: [
    "rangefinder",
    "zoom",
    "ADS accuracy",
    "moving accuracy",
    "precision optic",
  ],

  specialEffects: [
    {
      name: "Rangefinder",
      description:
        "Uses laser pulses to measure distance to the target.",
    },
  ],

  weaponStatProfiles: [
    {
      weaponId: "stryder-m1t",
      weaponName: "Stryder M1T",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.49, unit: "°" },
        { label: "Moving Inaccuracy", value: 0, modifier: -10.2, unit: "%" },
        { label: "Zoom", value: 0, modifier: 0.6, unit: "X" },
      ],
    },

    {
      weaponId: "hardline-pr",
      weaponName: "Hardline PR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.25, unit: "°" },
        { label: "Moving Inaccuracy", value: 0, modifier: -10.2, unit: "%" },
        { label: "Zoom", value: 0, modifier: 0.8, unit: "X" },
      ],
    },

    {
      weaponId: "repeater-hpr",
      weaponName: "Repeater HPR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.44, unit: "°" },
        { label: "Moving Inaccuracy", value: 0, modifier: -10.2, unit: "%" },
        { label: "Zoom", value: 0, modifier: 0.8, unit: "X" },
      ],
    },

    {
      weaponId: "v66-lookout",
      weaponName: "V66 Lookout",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.24, unit: "°" },
        { label: "Moving Inaccuracy", value: 0, modifier: -14.3, unit: "%" },
        { label: "Zoom", value: 0, modifier: 0.6, unit: "X" },
      ],
    },

    {
      weaponId: "br33-volley-rifle",
      weaponName: "BR33 Volley Rifle",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.20, unit: "°" },
        { label: "Moving Inaccuracy", value: 0, modifier: -13.6, unit: "%" },
        { label: "Zoom", value: 0, modifier: 0.6, unit: "X" },
      ],
    },

    {
      weaponId: "twin-tap-hbr",
      weaponName: "Twin Tap HBR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.15, unit: "°" },
        { label: "Moving Inaccuracy", value: 0, modifier: -68.2, unit: "%" },
        { label: "Zoom", value: 0, modifier: 0.6, unit: "X" },
      ],
    },
  ],

  tags: [
    "mod",
    "optic",
    "precision optic",
    "rangefinder optic",
    "ads accuracy",
    "moving accuracy",
    "zoom",
    "rangefinder",
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
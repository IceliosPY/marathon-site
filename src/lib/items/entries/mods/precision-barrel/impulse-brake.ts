import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const impulseBrake: ItemEntry = {
  id: "impulse-brake",

  name: "Impulse Brake",

  category: "mod",
  rarity: "superior",
  modSubcategory: "precision-barrel",

  icon: asset("items/icons/ImpulseBrake.png"),
  image: asset("items/icons/ImpulseBrake.png"),
  render: asset("items/icons/ImpulseBrake.png"),
  video: asset("items/videos/mods/ImpulseBrake.webm"),

  sellPrice: 540,

  effect: "Superior Precision Barrel Mod",

  description:
    "Greatly increases ADS accuracy and aim assist.",

  lore:
    "A precision muzzle brake tuned to redirect impulse and stabilize sight alignment. It improves aim assist while tightening ADS spread for cleaner long-range target acquisition.",

  highlightTerms: [
    "ADS accuracy",
    "aim assist",
    "precision",
    "barrel",
    "stability",
  ],

  tags: [
    "mod",
    "precision barrel",
    "impulse brake",
    "ads accuracy",
    "aim assist",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "stryder-m1t",
      weaponName: "Stryder M1T",
      stats: [
        { label: "ADS Spread", value: 1.17, modifier: -0.63, unit: "°" },
        { label: "Aim Assist", value: 0.8, modifier: 0.06, unit: "°" },
      ],
    },

    {
      weaponId: "hardline-pr",
      weaponName: "Hardline PR",
      stats: [
        { label: "ADS Spread", value: 0.44, modifier: -0.32, unit: "°" },
        { label: "Aim Assist", value: 1.01, modifier: 0.12, unit: "°" },
      ],
    },

    {
      weaponId: "repeater-hpr",
      weaponName: "Repeater HPR",
      stats: [
        { label: "ADS Spread", value: 0.92, modifier: -0.54, unit: "°" },
        { label: "Aim Assist", value: 1.01, modifier: 0.12, unit: "°" },
      ],
    },

    {
      weaponId: "br33-volley-rifle",
      weaponName: "BR33 Volley Rifle",
      stats: [
        { label: "ADS Spread", value: 0.96, modifier: -0.25, unit: "°" },
        { label: "Aim Assist", value: 1.61, modifier: 0.59, unit: "°" },
      ],
    },

    {
      weaponId: "twin-tap-hbr",
      weaponName: "Twin Tap HBR",
      stats: [
        { label: "ADS Spread", value: 1.29, modifier: -0.24, unit: "°" },
        { label: "Aim Assist", value: 1.61, modifier: 0.59, unit: "°" },
      ],
    },

    {
      weaponId: "longshot",
      weaponName: "Longshot",
      stats: [
        { label: "Aim Assist", value: 0.5, modifier: 0.2, unit: "°" },
      ],
    },

    {
      weaponId: "outland",
      weaponName: "Outland",
      stats: [
        { label: "ADS Spread", value: 0.71, modifier: -0.56, unit: "°" },
        { label: "Aim Assist", value: 0.78, modifier: 0.42, unit: "°" },
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
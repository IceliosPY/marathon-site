import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const truShotBarrel: ItemEntry = {
  id: "tru-shot-barrel",

  name: "Tru-Shot Barrel",

  category: "mod",
  rarity: "superior",
  modSubcategory: "precision-barrel",

  icon: asset("items/icons/TruShotBarrel.png"),
  image: asset("items/icons/TruShotBarrel.png"),
  render: asset("items/icons/TruShotBarrel.png"),
  video: asset("items/videos/mods/TruShotBarrel.webm"),

  sellPrice: 540,

  effect: "Superior Precision Barrel Mod",

  description:
    "Greatly increases aim assist and stability.",

  lore:
    "A precision barrel assembly designed to smooth recoil impulse and improve target acquisition. Its internal stabilization channels keep long-range shots aligned while assisting target tracking during sustained engagements.",

  highlightTerms: [
    "aim assist",
    "stability",
    "recoil",
    "precision",
    "barrel",
  ],

  tags: [
    "mod",
    "precision barrel",
    "tru-shot barrel",
    "aim assist",
    "stability",
    "recoil reduction",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "stryder-m1t",
      weaponName: "Stryder M1T",
      stats: [
        { label: "Recoil", value: 90, modifier: -40, unit: "%" },
        { label: "Aim Assist", value: 0.8, modifier: 0.1, unit: "°" },
      ],
    },

    {
      weaponId: "hardline-pr",
      weaponName: "Hardline PR",
      stats: [
        { label: "Recoil", value: 103.2, modifier: -56.4, unit: "%" },
        { label: "Aim Assist", value: 1.01, modifier: 0.2, unit: "°" },
      ],
    },

    {
      weaponId: "repeater-hpr",
      weaponName: "Repeater HPR",
      stats: [
        { label: "Recoil", value: 57.8, modifier: -24.5, unit: "%" },
        { label: "Aim Assist", value: 1.01, modifier: 0.2, unit: "°" },
      ],
    },

    {
      weaponId: "br33-volley-rifle",
      weaponName: "BR33 Volley Rifle",
      stats: [
        { label: "Recoil", value: 87.3, modifier: -38.9, unit: "%" },
        { label: "Aim Assist", value: 1.61, modifier: 1.02, unit: "°" },
      ],
    },

    {
      weaponId: "twin-tap-hbr",
      weaponName: "Twin Tap HBR",
      stats: [
        { label: "Recoil", value: 68, modifier: -12.4, unit: "%" },
        { label: "Aim Assist", value: 1.61, modifier: 1.02, unit: "°" },
      ],
    },

    {
      weaponId: "longshot",
      weaponName: "Longshot",
      stats: [
        { label: "Recoil", value: 60, modifier: -20, unit: "%" },
        { label: "Aim Assist", value: 0.5, modifier: 0.35, unit: "°" },
      ],
    },

    {
      weaponId: "outland",
      weaponName: "Outland",
      stats: [
        { label: "Recoil", value: 95, modifier: -20, unit: "%" },
        { label: "Aim Assist", value: 0.78, modifier: 0.78, unit: "°" },
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
import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const steadyBarrel: ItemEntry = {
  id: "steady-barrel",

  name: "Steady Barrel",

  category: "mod",
  rarity: "superior",
  modSubcategory: "precision-barrel",

  icon: asset("items/icons/SteadyBarrel.png"),
  image: asset("items/icons/SteadyBarrel.png"),
  render: asset("items/icons/SteadyBarrel.png"),
  video: asset("items/videos/mods/SteadyBarrel.webm"),

  sellPrice: 540,

  effect: "Superior Precision Barrel Mod",

  description:
    "Greatly increases stability, ready speed, and accuracy while moving.",

  lore:
    "A stabilized precision barrel assembly designed to improve weapon control during movement. Its reinforced structure reduces recoil while helping the shooter keep a steadier sight picture in mobile engagements.",

  highlightTerms: [
    "stability",
    "ready speed",
    "accuracy while moving",
    "recoil",
    "precision barrel",
  ],

  tags: [
    "mod",
    "precision barrel",
    "steady barrel",
    "stability",
    "ready speed",
    "moving accuracy",
    "recoil reduction",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "stryder-m1t",
      weaponName: "Stryder M1T",

      stats: [
        {
          label: "Moving Inaccuracy",
          value: 20.5,
          modifier: -20.5,
          unit: "%",
        },
        {
          label: "Equip Speed",
          value: 0.94,
          modifier: -0.21,
          unit: "S",
        },
        {
          label: "Recoil",
          value: 90,
          modifier: -65,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "hardline-pr",
      weaponName: "Hardline PR",

      stats: [
        {
          label: "Moving Inaccuracy",
          value: 20.5,
          modifier: -20.5,
          unit: "%",
        },
        {
          label: "Equip Speed",
          value: 0.94,
          modifier: -0.21,
          unit: "S",
        },
        {
          label: "Recoil",
          value: 103.2,
          modifier: -79.2,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "repeater-hpr",
      weaponName: "Repeater HPR",

      stats: [
        {
          label: "Moving Inaccuracy",
          value: 20.5,
          modifier: -20.5,
          unit: "%",
        },
        {
          label: "Equip Speed",
          value: 0.94,
          modifier: -0.21,
          unit: "S",
        },
        {
          label: "Recoil",
          value: 57.8,
          modifier: -35.6,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "br33-volley-rifle",
      weaponName: "BR33 Volley Rifle",

      stats: [
        {
          label: "Moving Inaccuracy",
          value: 16.4,
          modifier: -16.4,
          unit: "%",
        },
        {
          label: "Equip Speed",
          value: 0.94,
          modifier: -0.21,
          unit: "S",
        },
        {
          label: "Recoil",
          value: 87.3,
          modifier: -57.3,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "twin-tap-hbr",
      weaponName: "Twin Tap HBR",

      stats: [
        {
          label: "Moving Inaccuracy",
          value: 81.8,
          modifier: -81.8,
          unit: "%",
        },
        {
          label: "Equip Speed",
          value: 0.94,
          modifier: -0.21,
          unit: "S",
        },
        {
          label: "Recoil",
          value: 68,
          modifier: -28,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "longshot",
      weaponName: "Longshot",

      stats: [
        {
          label: "Moving Inaccuracy",
          value: 54.5,
          modifier: -45.5,
          unit: "%",
        },
        {
          label: "Equip Speed",
          value: 0.9,
          modifier: -0.23,
          unit: "S",
        },
        {
          label: "Recoil",
          value: 60,
          modifier: -50,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "outland",
      weaponName: "Outland",

      stats: [
        {
          label: "Equip Speed",
          value: 1.7,
          modifier: -0.43,
          unit: "S",
        },
        {
          label: "Recoil",
          value: 95,
          modifier: -45,
          unit: "%",
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
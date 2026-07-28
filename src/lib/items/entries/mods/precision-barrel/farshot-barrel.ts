import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const farshotBarrel: ItemEntry = {
  id: "farshot-barrel",

  name: "Farshot Barrel",

  category: "mod",
  rarity: "superior",
  modSubcategory: "precision-barrel",

  icon: asset("items/icons/FarshotBarrel.png"),
  image: asset("items/icons/FarshotBarrel.png"),
  render: asset("items/icons/FarshotBarrel.png"),
  video: asset("items/videos/mods/FarshotBarrel.webm"),

  sellPrice: 540,

  effect: "Superior Precision Barrel Mod",

  description:
    "Greatly increases ADS accuracy and range.",

  lore:
    "A long-range precision barrel engineered for designated marksmen and reconnaissance operatives. Its extended rifling profile improves projectile stability over distance, tightening sighted shot dispersion while significantly extending effective engagement range.",

  highlightTerms: [
    "ADS accuracy",
    "range",
    "precision",
    "long distance",
    "marksman",
    "rifle barrel",
  ],

  tags: [
    "mod",
    "precision barrel",
    "farshot barrel",
    "ads accuracy",
    "range",
    "long range",
    "marksman",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "stryder-m1t",
      weaponName: "Stryder M1T",

      stats: [
        {
          label: "ADS Spread",
          value: 0.76,
          modifier: -0.49,
          unit: "°",
        },
        {
          label: "Range",
          value: 83,
          modifier: 21,
          unit: "M",
        },
      ],
    },

    {
      weaponId: "hardline-pr",
      weaponName: "Hardline PR",

      stats: [
        {
          label: "ADS Spread",
          value: 0.44,
          modifier: -0.25,
          unit: "°",
        },
        {
          label: "Range",
          value: 119,
          modifier: 45,
          unit: "M",
        },
      ],
    },

    {
      weaponId: "repeater-hpr",
      weaponName: "Repeater HPR",

      stats: [
        {
          label: "ADS Spread",
          value: 0.92,
          modifier: -0.44,
          unit: "°",
        },
        {
          label: "Range",
          value: 82,
          modifier: 45,
          unit: "M",
        },
      ],
    },

    {
      weaponId: "br33-volley-rifle",
      weaponName: "BR33 Volley Rifle",

      stats: [
        {
          label: "ADS Spread",
          value: 0.62,
          modifier: -0.20,
          unit: "°",
        },
        {
          label: "Range",
          value: 80,
          modifier: 32,
          unit: "M",
        },
      ],
    },

    {
      weaponId: "twin-tap-hbr",
      weaponName: "Twin Tap HBR",

      stats: [
        {
          label: "ADS Spread",
          value: 1.29,
          modifier: -0.15,
          unit: "°",
        },
        {
          label: "Range",
          value: 80,
          modifier: 32,
          unit: "M",
        },
      ],
    },

    {
      weaponId: "longshot",
      weaponName: "Longshot",

      stats: [
        {
          label: "Range",
          value: 220,
          modifier: 45,
          unit: "M",
        },
      ],
    },

    {
      weaponId: "outland",
      weaponName: "Outland",

      stats: [
        {
          label: "ADS Spread",
          value: 0.71,
          modifier: -0.47,
          unit: "°",
        },
        {
          label: "Range",
          value: 220,
          modifier: 45,
          unit: "M",
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
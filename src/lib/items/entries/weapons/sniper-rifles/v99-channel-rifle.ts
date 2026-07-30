import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const v99ChannelRifle: ItemEntry = {
  id: "v99-channel-rifle",

  name: "V99 Channel Rifle",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/v99-channel-rifle.png"),
  image: asset("items/icons/v99-channel-rifle.png"),
  render: asset("items/icons/v99-channel-rifle.png"),
  video: asset("items/videos/weapons/v99-channel-rifle.mp4"),

  sellPrice: 6000,

  description:
    "High-precision energy rifle capable of eliminating targets almost instantly at long range.",

  effect: "Standard Sniper Rifle",

  lore:
    "UESC-manufactured precision volt rifle optimized for long-distance engagements and high-energy ballistic penetration.",

    ammo: {
        itemId: "volt-cell",
        label: "Volt Cell",
        icon: asset("items/icons/volt-cell.png"),
    },

  possibleEffects: [
    {
      id: "enduring",
      label: "Enduring",
      description:
        "First 3 extractions increase value by 75% of base value each. After that, +20% per extraction.",

      simulation: {
        type: "enduring",

        firstExtractionBonusRate: 0.75,
        firstExtractionLimit: 3,

        laterExtractionBonusRate: 0.2,

        defaultExtractions: 1,
        maxExtractions: 10,
      },
    },
  ],

  stats: [
    {
      label: "Firepower",
      value: 120,
      max: 220,

      details: [
        {
          label: "Damage",
          value: "60.0",
        },
        {
          label: "Precision",
          value: "2.0",
        },
        {
          label: "Rate of Fire",
          value: "75 RPM",
        },
      ],
    },

    {
      label: "Accuracy",
      value: 71.2,
      max: 100,

      details: [
        {
          label: "Hipfire Spread",
          value: "6.75°",
        },
        {
          label: "ADS Spread",
          value: "0.65°",
        },
        {
          label: "Crouch Spread Bonus",
          value: "60.0%",
        },
        {
          label: "Moving Inaccuracy",
          value: "90.0%",
        },
      ],
    },

    {
      label: "Handling",
      value: 29,
      max: 100,

      details: [
        {
          label: "Equip Speed",
          value: "1.2S",
        },
        {
          label: "ADS Speed",
          value: "0.76S",
        },
        {
          label: "Weight",
          value: "38.0%",
        },
        {
          label: "Recoil",
          value: "95.0%",
        },
        {
          label: "Aim Assist",
          value: "0.65°",
        },
        {
          label: "Reload Speed",
          value: "4.06S",
        },
      ],
    },

    {
      label: "Range",
      value: 175,
      max: 200,
      unit: "M",
    },

    {
      label: "Volt Drain",
      value: 33.4,
      max: 100,
      unit: "%",
    },

    {
      label: "Zoom",
      value: 4.0,
      max: 8,
      unit: "X",
    },
  ],

  acceptedModSubcategories: [
    "chip",
    "sniper-optic",
    "volt-cell",
    "ion-dampener",

  ],

  tags: [
    "weapon",
    "sniper rifle",
    "energy weapon",
    "volt rifle",
    "precision",
    "long range",
    "uesc",
    "v99",
    "channel rifle",
  ],
};
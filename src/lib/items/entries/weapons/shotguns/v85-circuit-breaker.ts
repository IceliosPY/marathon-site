import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const v85CircuitBreaker: ItemEntry = {
  id: "v85-circuit-breaker",

  name: "V85 Circuit Breaker",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/V85CircuitBreaker.png"),
  image: asset("items/icons/V85CircuitBreaker.png"),
  render: asset("items/icons/V85CircuitBreaker.png"),
  video: asset("items/videos/weapons/V75.mp4"),

  sellPrice: 6000,

  description:
    "Fixed-pattern heavy volt shotgun. Can be charged up to three levels.",

  effect: "Standard Shotgun",

  lore:
    "Experimental volt-powered shotgun platform built for high-impact breach operations.",

  ammo: {
    itemId: "volt-cell",
    label: "Volt Cell",
    icon: asset("items/icons/volt-cell.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 220,
      max: 220,

      details: [
        {
          label: "Firepower",
          value: "220",
        },
        {
          label: "Damage",
          value: "18.3",
        },
        {
          label: "Precision",
          value: "1.2",
        },
        {
          label: "Rate of Fire",
          value: "85 RPM",
        },
      ],
    },

    {
      label: "Handling",
      value: 42,
      max: 100,

      details: [
        {
          label: "Equip Speed",
          value: "0.76S",
        },
        {
          label: "ADS Speed",
          value: "0.42S",
        },
        {
          label: "Weight",
          value: "32.0%",
        },
        {
          label: "Recoil",
          value: "86.5%",
        },
        {
          label: "Aim Assist",
          value: "2.95°",
        },
        {
          label: "Reload Speed",
          value: "4.1S",
        },
      ],
    },

    {
      label: "Spread Angle",
      value: 1.7,
      max: 10,
      unit: "°",
    },

    {
      label: "Range",
      value: 14,
      max: 20,
      unit: "M",
    },

    {
      label: "Volt Drain",
      value: 9.4,
      max: 20,
      unit: "%",
    },

    {
      label: "Zoom",
      value: 1.1,
      max: 3,
      unit: "X",
    },
  ],
  acceptedModSubcategories: [
    "chip",
    "shotgun-grip",
    "volt-cell",
  ],
  tags: [
    "weapon",
    "shotgun",
    "volt",
    "v85",
    "circuit breaker",
    "uesc",
    "breach",
    "heavy shotgun",
  ],
};
import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const cloudfeatherChamber: ItemEntry = {
  id: "cloudfeather-chamber",

  name: "Cloudfeather Chamber",

  category: "mod",
  rarity: "superior",
  modSubcategory: "volt-array",

  icon: asset("items/icons/CloudfeatherChamber.png"),
  image: asset("items/icons/CloudfeatherChamber.png"),
  render: asset("items/icons/CloudfeatherChamber.png"),
  video: asset("items/videos/mods/CloudfeatherChamber.webm"),

  sellPrice: 621,

  effect: "Superior Volt Array Mod",

  description:
    "A lightweight volt chamber that greatly increases magazine size, reload speed, and mobility.",

  lore:
    "Built around ultra-light energy distribution coils, the Cloudfeather Chamber reduces weapon mass while accelerating volt-cell cycling. Operators favor it for aggressive mobile engagements where rapid reloads and efficient energy consumption are critical.",

  highlightTerms: [
    "reload speed",
    "mobility",
    "lightweight",
    "volt drain",
    "magazine size",
    "volt array",
    "cloudfeather",
  ],

  weaponStatProfiles: [
    {
      weaponId: "v11-punch",
      weaponName: "V11 Punch",

      stats: [
        {
          label: "Weight",
          value: 26.0,
          modifier: -9.0,
          unit: "%",
        },
        {
          label: "Reload Speed",
          value: 3.60,
          modifier: -0.52,
          unit: "S",
        },
        {
          label: "Volt Drain",
          value: 4.5,
          modifier: -2.0,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "v22-volt-thrower",
      weaponName: "V22 Volt Thrower",

      stats: [
        {
          label: "Weight",
          value: 27.5,
          modifier: -11.2,
          unit: "%",
        },
        {
          label: "Reload Speed",
          value: 3.10,
          modifier: -0.30,
          unit: "S",
        },
        {
          label: "Volt Drain",
          value: 1.6,
          modifier: -0.9,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "v75-scar",
      weaponName: "V75 SCAR",

      stats: [
        {
          label: "Weight",
          value: 0,
          modifier: -13.0,
          unit: "%",
        },
        {
          label: "Reload Speed",
          value: 0,
          modifier: -0.67,
          unit: "S",
        },
        {
          label: "Volt Drain",
          value: 0,
          modifier: -1.4,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "v66-lookout",
      weaponName: "V66 Lookout",

      stats: [
        {
          label: "Weight",
          value: 39.4,
          modifier: -2.7,
          unit: "%",
        },
        {
          label: "Reload Speed",
          value: 3.76,
          modifier: -0.55,
          unit: "S",
        },
        {
          label: "Volt Drain",
          value: 3.4,
          modifier: -2.15,
          unit: "%",
        },
      ],
    },
  ],

  tags: [
    "mod",
    "superior",
    "volt array",
    "cloudfeather chamber",
    "reload speed",
    "weight",
    "mobility",
    "volt drain",
    "v11 punch",
    "v22 volt thrower",
    "v75 scar",
    "v66 lookout",
    "weapon mod",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
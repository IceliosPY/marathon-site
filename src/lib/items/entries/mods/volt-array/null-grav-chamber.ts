import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const nullGravChamber: ItemEntry = {
  id: "null-grav-chamber",

  name: "Null-Grav Chamber",

  category: "mod",
  rarity: "superior",
  modSubcategory: "volt-array",

  icon: asset("items/icons/NullGravChamber.png"),
  image: asset("items/icons/NullGravChamber.png"),
  render: asset("items/icons/NullGravChamber.png"),
  video: asset("items/videos/mods/NullGravChamber.webm"),

  sellPrice: 621,

  effect: "Superior Volt Array Mod",

  description:
    "Greatly increases magazine size and stability.",

  lore:
    "Experimental gravitic regulator designed to reduce internal energy turbulence. By stabilizing volt-cell discharge cycles, the chamber lowers recoil, extends effective range, and improves overall energy efficiency.",

  highlightTerms: [
    "magazine size",
    "stability",
    "recoil",
    "range",
    "volt drain",
    "volt array",
    "null grav",
  ],

  weaponStatProfiles: [
    {
      weaponId: "v11-punch",
      weaponName: "V11 Punch",

      stats: [
        {
          label: "Recoil",
          value: 76.5,
          modifier: -10.5,
          unit: "%",
        },
        {
          label: "Range",
          value: 23,
          modifier: 2,
          unit: "M",
        },
        {
          label: "Volt Drain",
          value: 3.25,
          modifier: -1.25,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "v22-volt-thrower",
      weaponName: "V22 Volt Thrower",

      stats: [
        {
          label: "Recoil",
          value: 85,
          modifier: -13.0,
          unit: "%",
        },
        {
          label: "Range",
          value: 23,
          modifier: 2,
          unit: "M",
        },
        {
          label: "Volt Drain",
          value: 1.0,
          modifier: -0.6,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "v75-scar",
      weaponName: "V75 SCAR",

      stats: [
        {
          label: "Recoil",
          value: 0,
          modifier: -27.0,
          unit: "%",
        },
        {
          label: "Range",
          value: 0,
          modifier: 4,
          unit: "M",
        },
        {
          label: "Volt Drain",
          value: 0,
          modifier: -1.1,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "v66-lookout",
      weaponName: "V66 Lookout",

      stats: [
        {
          label: "Recoil",
          value: 49.6,
          modifier: -16.8,
          unit: "%",
        },
        {
          label: "Range",
          value: 93,
          modifier: 5,
          unit: "M",
        },
        {
          label: "Volt Drain",
          value: 2.25,
          modifier: -1.15,
          unit: "%",
        },
      ],
    },
  ],

  tags: [
    "mod",
    "superior",
    "volt array",
    "null grav chamber",
    "v11 punch",
    "v22 volt thrower",
    "v75 scar",
    "v66 lookout",
    "recoil",
    "range",
    "volt drain",
    "stability",
    "weapon mod",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
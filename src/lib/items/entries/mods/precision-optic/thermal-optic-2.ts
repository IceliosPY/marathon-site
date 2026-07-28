import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const thermalOptic2: ItemEntry = {
  id: "thermal-optic-2",

  name: "Thermal Optic 2",

  category: "mod",
  rarity: "deluxe",
  modSubcategory: "precision-optic",

  icon: asset("items/icons/ThermalOptic2.png"),
  image: asset("items/icons/ThermalOptic2.png"),
  render: asset("items/icons/ThermalOptic2.png"),
  video: asset("items/videos/mods/ThermalOptic2.webm"),

  sellPrice: 207,

  effect: "Deluxe Precision Optic Mod",

  description:
    "Increases zoom and ADS accuracy.",

  lore:
    "A lighter thermal imaging scope designed to highlight hostile heat signatures while improving target acquisition.",

  specialEffects: [
    {
      name: "Thermal Sight",
      description:
        "This sight highlights hostile heat signatures.",
    },
  ],

  highlightTerms: [
    "thermal sight",
    "heat signatures",
    "zoom",
    "ADS accuracy",
    "ADS spread",
    "precision optic",
  ],

  weaponStatProfiles: [
    {
      weaponId: "stryder-m1t",
      weaponName: "Stryder M1T",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.26, unit: "°" },
        { label: "Zoom", value: 0, modifier: 0.4, unit: "X" },
      ],
    },

    {
      weaponId: "hardline-pr",
      weaponName: "Hardline PR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.10, unit: "°" },
        { label: "Zoom", value: 0, modifier: 0.6, unit: "X" },
      ],
    },

    {
      weaponId: "repeater-hpr",
      weaponName: "Repeater HPR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.24, unit: "°" },
        { label: "Zoom", value: 0, modifier: 0.6, unit: "X" },
      ],
    },

    {
      weaponId: "v66-lookout",
      weaponName: "V66 Lookout",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.10, unit: "°" },
        { label: "Zoom", value: 0, modifier: 0.4, unit: "X" },
      ],
    },

    {
      weaponId: "br33-volley-rifle",
      weaponName: "BR33 Volley Rifle",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.08, unit: "°" },
        { label: "Zoom", value: 0, modifier: 0.4, unit: "X" },
      ],
    },

    {
      weaponId: "twin-tap-hbr",
      weaponName: "Twin Tap HBR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.04, unit: "°" },
        { label: "Zoom", value: 0, modifier: 0.4, unit: "X" },
      ],
    },
  ],

  tags: [
    "mod",
    "optic",
    "thermal",
    "thermal sight",
    "precision optic",
    "ads accuracy",
    "ads spread",
    "zoom",
    "weapon mod",
    "deluxe",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
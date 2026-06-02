import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const thermalOptic: ItemEntry = {
  id: "thermal-optic",

  name: "Thermal Optic",

  category: "mod",
  rarity: "superior",
  modSubcategory: "precision-optic",

  icon: asset("items/icons/ThermalOptic.png"),
  image: asset("items/icons/ThermalOptic.png"),
  render: asset("items/icons/ThermalOptic.png"),
  video: asset("items/videos/mods/ThermalOptic.webm"),

  sellPrice: 621,

  effect: "Superior Precision Optic Mod",

  description:
    "Increases zoom and ADS accuracy, but slightly decreases ADS speed.",

  lore:
    "A thermal imaging scope designed to highlight hostile heat signatures. Particularly effective for target acquisition in low visibility environments.",

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
    "ADS speed",
    "precision optic",
  ],

  weaponStatProfiles: [
    {
      weaponId: "stryder-m1t",
      weaponName: "Stryder M1T",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.37, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.03, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.4, unit: "X" },
      ],
    },

    {
      weaponId: "hardline-pr",
      weaponName: "Hardline PR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.18, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.03, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.6, unit: "X" },
      ],
    },

    {
      weaponId: "repeater-hpr",
      weaponName: "Repeater HPR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.34, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.02, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.6, unit: "X" },
      ],
    },

    {
      weaponId: "v66-lookout",
      weaponName: "V66 Lookout",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.17, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.03, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.4, unit: "X" },
      ],
    },

    {
      weaponId: "br33-volley-rifle",
      weaponName: "BR33 Volley Rifle",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.14, unit: "°" },
        { label: "Zoom", value: 0, modifier: 0.4, unit: "X" },
      ],
    },

    {
      weaponId: "twin-tap-hbr",
      weaponName: "Twin Tap HBR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.08, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.03, unit: "S" },
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
    "ads speed",
    "heat signature",
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
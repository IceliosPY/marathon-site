import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const coldVigilanceScope: ItemEntry = {
  id: "cold-vigilance-scope",

  name: "Cold Vigilance Scope",

  category: "mod",
  rarity: "superior",
  modSubcategory: "precision-optic",

  icon: asset("items/icons/ColdVigilanceScope.png"),
  image: asset("items/icons/ColdVigilanceScope.png"),
  render: asset("items/icons/ColdVigilanceScope.png"),
  video: asset("items/videos/mods/ColdVigilanceScope.webm"),

  sellPrice: 621,

  effect: "Superior Precision Optic Mod",

  description:
    "Greatly increases zoom, ADS speed, and ADS accuracy.",

  lore:
    "A precision scope tuned for cold target acquisition, improving sight stability, ADS speed, and zoom for long-range engagements.",

  highlightTerms: [
    "cold vigilance scope",
    "zoom",
    "ADS speed",
    "ADS accuracy",
    "ADS spread",
    "precision optic",
  ],


  weaponStatProfiles: [
    {
      weaponId: "stryder-m1t",
      weaponName: "Stryder M1T",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.34, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.18, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.2, unit: "X" },
      ],
    },

    {
      weaponId: "hardline-pr",
      weaponName: "Hardline PR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.16, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.18, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.4, unit: "X" },
      ],
    },

    {
      weaponId: "repeater-hpr",
      weaponName: "Repeater HPR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.32, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.18, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.4, unit: "X" },
      ],
    },

    {
      weaponId: "v66-lookout",
      weaponName: "V66 Lookout",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.15, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.18, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.2, unit: "X" },
      ],
    },

    {
      weaponId: "br33-volley-rifle",
      weaponName: "BR33 Volley Rifle",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.13, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.20, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.2, unit: "X" },
      ],
    },

    {
      weaponId: "twin-tap-hbr",
      weaponName: "Twin Tap HBR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.07, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.18, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.2, unit: "X" },
      ],
    },
  ],

  tags: [
    "mod",
    "optic",
    "scope",
    "precision optic",
    "cold vigilance scope",
    "ads accuracy",
    "ads spread",
    "ads speed",
    "zoom",
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
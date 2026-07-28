import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const spScopeIII: ItemEntry = {
  id: "sp-scope-iii",

  name: "SP Scope III",

  category: "mod",
  rarity: "superior",
  modSubcategory: "sniper-optic",

  icon: asset("items/icons/SPScopeIII.png"),
  image: asset("items/icons/SPScopeIII.png"),
  render: asset("items/icons/SPScopeIII.png"),
  video: asset("items/videos/mods/SPScopeIII.webm"),

  sellPrice: 702,

  effect: "Superior Sniper Optic Mod",

  description:
    "Increases zoom and ADS accuracy. Decreases ADS speed.",

  lore:
    "A military-grade thermal scope designed for long-range target acquisition. Integrated heat-signature tracking improves target visibility at extreme distances.",

  highlightTerms: [
    "thermal sight",
    "ADS accuracy",
    "zoom",
    "heat signatures",
    "precision"
  ],

  tags: [
    "mod",
    "optic",
    "scope",
    "sniper optic",
    "thermal",
    "zoom",
    "ads accuracy",
    "weapon mod",
    "superior"
  ],

  weaponStatProfiles: [
    {
      weaponId: "longshot",
      weaponName: "Longshot",
      stats: [
        { label: "ADS Speed", value: 0, modifier: 0.04, unit: "S" },
        { label: "Aim Assist", value: 0, modifier: -0.05, unit: "°" },
        { label: "Range", value: 0, modifier: -5, unit: "M" }
      ]
    },

    {
      weaponId: "outland",
      weaponName: "Outland",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.42, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.01, unit: "S" },
        { label: "Aim Assist", value: 0, modifier: -0.18, unit: "°" },
        { label: "Range", value: 0, modifier: -5, unit: "M" }
      ]
    },

    {
      weaponId: "v99-channel-rifle",
      weaponName: "V99 Channel Rifle",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.30, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.04, unit: "S" },
        { label: "Aim Assist", value: 0, modifier: -0.20, unit: "°" },
        { label: "Range", value: 0, modifier: -5, unit: "M" }
      ]
    }
  ],

  specialEffects: [
    {
      name: "Thermal Sight",
      description:
        "This sight highlights hostile heat signatures.",
      color: "purple"
    }
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot"
    }
  ]
};
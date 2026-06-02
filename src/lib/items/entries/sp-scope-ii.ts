import type { ItemEntry } from "../types";
import { asset } from "../../assets";
//import { spScopeIII } from "./sp-scope-iii";

export const spScopeII: ItemEntry = {
  id: "sp-scope-ii",

  name: "SP Scope II",

  category: "mod",
  rarity: "deluxe",
  modSubcategory: "sniper-optic",

  // Réutilise les assets de SP Scope III
  //icon: spScopeIII.icon,
  //image: spScopeIII.image,
  //render: spScopeIII.render,
  //video: spScopeIII.video,
  icon: asset("items/icons/SPScopeIII.png"),
  image: asset("items/icons/SPScopeIII.png"),
  render: asset("items/icons/SPScopeIII.png"),
  video: asset("items/videos/mods/SPScopeIII.webm"),

  sellPrice: 234,

  effect: "Deluxe Sniper Optic Mod",

  description:
    "Increases zoom and ADS accuracy.",

  lore:
    "An enhanced long-range optic equipped with thermal imaging capabilities. Designed to improve target acquisition and highlight hostile heat signatures in low-visibility environments.",

  highlightTerms: [
    "ADS accuracy",
    "zoom",
    "thermal sight",
    "hostile heat signatures",
    "sniper optic"
  ],

  tags: [
    "mod",
    "optic",
    "scope",
    "sniper optic",
    "thermal sight",
    "ads accuracy",
    "weapon mod",
    "deluxe"
  ],

  weaponStatProfiles: [
    {
      weaponId: "v99-channel-rifle",
      weaponName: "V99 Channel Rifle",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.15, unit: "°" }
      ]
    },
    {
      weaponId: "outland",
      weaponName: "Outland",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.23, unit: "°" }
      ]
    },
    {
      weaponId: "longshot",
      weaponName: "Longshot",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.15, unit: "°" }
      ]
    }
  ],

  specialEffects: [
    {
      name: "Thermal Sight",
      description:
        "This sight highlights hostile heat signatures."
    }
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot"
    }
  ]
};
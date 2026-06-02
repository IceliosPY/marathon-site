import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const accuSightOptic: ItemEntry = {
  id: "accu-sight-optic",

  name: "Accu-Sight Optic",

  category: "mod",
  rarity: "superior",
  modSubcategory: "sniper-optic",

  icon: asset("items/icons/AccuSightOptic.png"),
  image: asset("items/icons/AccuSightOptic.png"),
  render: asset("items/icons/AccuSightOptic.png"),
  video: asset("items/videos/mods/AccuSightOptic.webm"),

  sellPrice: 621,

  effect: "Superior Sniper Optic Mod",

  description:
    "Increases zoom and greatly increases ADS speed and ADS accuracy.",


  highlightTerms: [
    "zoom",
    "ADS speed",
    "ADS accuracy",
    "sniper optic",
    "precision",
  ],

  tags: [
    "mod",
    "sniper optic",
    "optic",
    "scope",
    "zoom",
    "ads speed",
    "ads accuracy",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "v99-channel-rifle",
      weaponName: "V99 Channel Rifle",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.35, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.12, unit: "S" },
        { label: "Zoom", value: 0, modifier: 1.0, unit: "X" },
      ],
    },

    {
      weaponId: "longshot",
      weaponName: "Longshot",
      stats: [
        { label: "ADS Speed", value: 0, modifier: -0.12, unit: "S" },
        { label: "Zoom", value: 0, modifier: 1.0, unit: "X" },
      ],
    },

    {
      weaponId: "outland",
      weaponName: "Outland",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.47, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.04, unit: "S" },
        { label: "Zoom", value: 0, modifier: 1.0, unit: "X" },
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
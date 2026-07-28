import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const neuroOpticLens: ItemEntry = {
  id: "neuro-optic-lens",

  name: "Neuro-Optic Lens",

  category: "mod",
  rarity: "superior",
  modSubcategory: "sniper-optic",

  icon: asset("items/icons/NeuroOpticLens.png"),
  image: asset("items/icons/NeuroOpticLens.png"),
  render: asset("items/icons/NeuroOpticLens.png"),
  video: asset("items/videos/mods/NeuroOpticLens.webm"),

  sellPrice: 621,

  effect: "Superior Sniper Optic Mod",

  description:
    "Slightly increases zoom and greatly increases ADS speed.",

  lore:
    "An adaptive optic equipped with neural-assisted targeting software. It accelerates sight acquisition while allowing rapid zoom adjustments in combat.",

  highlightTerms: [
    "ADS speed",
    "zoom",
    "toggle zoom",
    "sniper optic",
    "precision"
  ],

  tags: [
    "mod",
    "optic",
    "scope",
    "sniper optic",
    "zoom",
    "ads speed",
    "weapon mod",
    "superior"
  ],

  weaponStatProfiles: [
    {
      weaponId: "v99-channel-rifle",
      weaponName: "V99 Channel Rifle",
      stats: [
        { label: "ADS Speed", value: 0, modifier: -0.36, unit: "S" },
        { label: "Zoom", value: 0, modifier: -0.5, unit: "X" }
      ]
    },

    {
      weaponId: "longshot",
      weaponName: "Longshot",
      stats: [
        { label: "ADS Speed", value: 0, modifier: -0.36, unit: "S" },
        { label: "Zoom", value: 0, modifier: -0.5, unit: "X" }
      ]
    },

    {
      weaponId: "outland",
      weaponName: "Outland",
      stats: [
        { label: "ADS Speed", value: 0, modifier: -0.12, unit: "S" },
        { label: "Zoom", value: 0, modifier: -0.5, unit: "X" }
      ]
    }
  ],

  specialEffects: [
    {
      name: "Toggle Zoom",
      description:
        "Press Toggle Zoom while aiming down sights to switch zoom levels."
    }
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot"
    }
  ]
};
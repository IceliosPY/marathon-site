import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const vigilantLens: ItemEntry = {
  id: "vigilant-lens",

  name: "Vigilant Lens",

  category: "mod",
  rarity: "superior",
  modSubcategory: "pistol-optic",

  icon: asset("items/icons/VigilantLens.png"),
  image: asset("items/icons/VigilantLens.png"),
  render: asset("items/icons/VigilantLens.png"),
  video: asset("items/videos/mods/VigilantLens.webm"),

  sellPrice: 459,

  effect: "Superior Pistol Optic Mod",

  description:
    "Greatly increases zoom, ADS speed, and ADS accuracy.",

  lore:
    "A compact pistol optic designed to improve target acquisition, ADS precision, and short-to-mid range sighting performance.",

  highlightTerms: [
    "vigilant lens",
    "zoom",
    "ADS speed",
    "ADS accuracy",
    "ADS spread",
    "pistol optic",
  ],

  tags: [
    "mod",
    "optic",
    "pistol optic",
    "zoom",
    "ads speed",
    "ads accuracy",
    "ads spread",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "ce-tactical-sidearm",
      weaponName: "CE Tactical Sidearm",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.39, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.10, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.7, unit: "X" },
      ],
    },

    {
      weaponId: "v11-punch",
      weaponName: "V11 Punch",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.51, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.10, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.7, unit: "X" },
      ],
    },

    {
      weaponId: "magnum-mc",
      weaponName: "Magnum MC",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.32, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.09, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.4, unit: "X" },
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
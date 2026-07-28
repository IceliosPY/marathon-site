import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const turboGenerator: ItemEntry = {
  id: "turbo-generator",

  name: "Turbo Generator",

  category: "mod",
  rarity: "superior",
  modSubcategory: "generator",

  icon: asset("items/icons/TurboGenerator.png"),
  image: asset("items/icons/TurboGenerator.png"),
  render: asset("items/icons/TurboGenerator.png"),
  video: asset("items/videos/mods/TurboGenerator.webm"),

  sellPrice: 621,

  effect: "Superior Generator Mod",

  description:
    "Greatly increases ADS speed and decreases charge time.",

  lore:
    "An overclocked energy regulator that accelerates weapon handling and power cycling. Favored by operators who rely on rapid target acquisition and fast charge recovery.",


  highlightTerms: [
    "ADS speed",
    "charge time",
    "generator",
    "energy regulator",
    "weapon handling",
    "turbo",
  ],

  weaponStatProfiles: [
    {
      weaponId: "v00-zeus-rg",
      weaponName: "V00 ZEUS RG",
      stats: [
        { label: "ADS Speed", value: 0, modifier: -0.20, unit: "S" },
        { label: "Charge Time", value: 0, modifier: -0.60, unit: "S" },
      ],
    },

    {
      weaponId: "ares-rg",
      weaponName: "ARES RG",
      stats: [
        { label: "ADS Speed", value: 0, modifier: -0.25, unit: "S" },
        { label: "Charge Time", value: 0, modifier: -0.45, unit: "S" },
      ],
    },
  ],

  tags: [
    "mod",
    "generator",
    "turbo",
    "ads speed",
    "charge time",
    "energy weapon",
    "railgun",
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
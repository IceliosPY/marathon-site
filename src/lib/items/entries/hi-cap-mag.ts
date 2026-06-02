import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const hiCapMag: ItemEntry = {
  id: "hi-cap-mag",

  name: "Hi-Cap Mag",

  category: "mod",
  rarity: "superior",
  modSubcategory: "precision-magazine",

  icon: asset("items/icons/HiCapMag.png"),
  image: asset("items/icons/HiCapMag.png"),
  render: asset("items/icons/HiCapMag.png"),
  video: asset("items/videos/mods/HiCapMag.webm"),

  sellPrice: 702,

  effect: "Superior Precision Magazine Mod",

  description:
    "Massively increases magazine size.",

  lore:
    "An expanded precision rifle magazine built for sustained fire. Reinforced feed geometry and extended capacity allow longer engagements before reloading.",

  highlightTerms: [
    "magazine",
    "magazine size",
    "capacity",
    "precision magazine",
  ],

  tags: [
    "mod",
    "magazine",
    "precision magazine",
    "capacity",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "stryder-m1t",
      weaponName: "Stryder M1T",
      stats: [
        { label: "Magazine", value: 0, modifier: 18 },
      ],
    },
  
    {
      weaponId: "hardline-pr",
      weaponName: "Hardline PR",
      stats: [
        { label: "Magazine", value: 0, modifier: 18 },
      ],
    },
  
    {
      weaponId: "br33-volley-rifle",
      weaponName: "BR33 Volley Rifle",
      stats: [
        { label: "Magazine", value: 0, modifier: 54 },
      ],
    },
  
    {
      weaponId: "twin-tap-hbr",
      weaponName: "Twin Tap HBR",
      stats: [
        { label: "Magazine", value: 0, modifier: 36 },
      ],
    },
  
    {
      weaponId: "longshot",
      weaponName: "Longshot",
      stats: [
        { label: "Magazine", value: 0, modifier: 9 },
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
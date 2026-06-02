import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const featherMag: ItemEntry = {
  id: "feather-mag",

  name: "Feather Mag",

  category: "mod",
  rarity: "superior",
  modSubcategory: "precision-magazine",

  icon: asset("items/icons/FeatherMag.png"),
  image: asset("items/icons/FeatherMag.png"),
  render: asset("items/icons/FeatherMag.png"),
  video: asset("items/videos/mods/FeatherMag.webm"),

  sellPrice: 621,

  effect: "Superior Precision Magazine Mod",

  description:
    "Greatly increases magazine size and reload speed.",

  highlightTerms: [
    "reload speed",
    "magazine",
    "magazine size",
    "reload",
    "capacity",
  ],

  tags: [
    "mod",
    "magazine",
    "reload speed",
    "precision magazine",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "stryder-m1t",
      weaponName: "Stryder M1T",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -1.27 },
        { label: "Magazine", value: 0, modifier: 8 },
      ],
    },

    {
      weaponId: "hardline-pr",
      weaponName: "Hardline PR",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -1.22 },
        { label: "Magazine", value: 0, modifier: 7 },
      ],
    },

    {
      weaponId: "br33-volley-rifle",
      weaponName: "BR33 Volley Rifle",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -1.06 },
        { label: "Magazine", value: 0, modifier: 24 },
      ],
    },

    {
      weaponId: "twin-tap-hbr",
      weaponName: "Twin Tap HBR",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.55 },
        { label: "Magazine", value: 0, modifier: 16 },
      ],
    },

    {
      weaponId: "longshot",
      weaponName: "Longshot",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -1.13 },
        { label: "Magazine", value: 0, modifier: 4 },
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
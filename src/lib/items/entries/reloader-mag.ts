import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const reloaderMag: ItemEntry = {
  id: "reloader-mag",

  name: "Reloader Mag",

  category: "mod",
  rarity: "superior",
  modSubcategory: "assault-magazine",

  icon: asset("items/icons/ReloaderMag.png"),
  image: asset("items/icons/ReloaderMag.png"),
  render: asset("items/icons/ReloaderMag.png"),
  video: asset("items/videos/mods/ReloaderMag.webm"),

  sellPrice: 621,

  effect: "Superior Assault Magazine Mod",

  description:
    "Greatly increases reload speed and magazine size.",

  lore:
    "A reinforced assault magazine built for faster cycling and improved ammunition capacity during sustained engagements.",

  highlightTerms: [
    "reload speed",
    "magazine",
    "magazine size",
    "assault magazine",
  ],

  tags: [
    "mod",
    "magazine",
    "assault magazine",
    "reload speed",
    "capacity",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "m77-assault-rifle",
      weaponName: "M77 Assault Rifle",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -1.01, unit: "S" },
        { label: "Magazine", value: 0, modifier: 18 },
      ],
    },

    {
      weaponId: "overrun-ar",
      weaponName: "Overrun AR",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.63, unit: "S" },
        { label: "Magazine", value: 0, modifier: 25 },
      ],
    },

    {
      weaponId: "impact-har",
      weaponName: "Impact H-AR",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -1.13, unit: "S" },
        { label: "Magazine", value: 0, modifier: 24 },
      ],
    },

    {
      weaponId: "copperhead-rf",
      weaponName: "Copperhead RF",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.63, unit: "S" },
        { label: "Magazine", value: 0, modifier: 32 },
      ],
    },

    {
      weaponId: "bully-smg",
      weaponName: "Bully SMG",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -1.13, unit: "S" },
        { label: "Magazine", value: 0, modifier: 33 },
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
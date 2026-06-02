import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const drumMag: ItemEntry = {
  id: "drum-mag",

  name: "Drum Mag",

  category: "mod",
  rarity: "superior",
  modSubcategory: "assault-magazine",

  icon: asset("items/icons/DrumMag.png"),
  image: asset("items/icons/DrumMag.png"),
  render: asset("items/icons/DrumMag.png"),
  video: asset("items/videos/mods/DrumMag.webm"),

  sellPrice: 702,

  effect: "Superior Assault Magazine Mod",

  description:
    "Massively increases magazine size.",

  lore:
    "A high-capacity drum magazine built for prolonged automatic fire. Its expanded ammunition reserve allows assault platforms to stay active through extended engagements.",

  highlightTerms: [
    "drum mag",
    "magazine",
    "magazine size",
    "capacity",
    "assault magazine",
  ],

  tags: [
    "mod",
    "magazine",
    "assault magazine",
    "drum magazine",
    "capacity",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "m77-assault-rifle",
      weaponName: "M77 Assault Rifle",
      stats: [
        { label: "Magazine", value: 0, modifier: 27 },
      ],
    },

    {
      weaponId: "overrun-ar",
      weaponName: "Overrun AR",
      stats: [
        { label: "Magazine", value: 0, modifier: 40 },
      ],
    },

    {
      weaponId: "impact-har",
      weaponName: "Impact H-AR",
      stats: [
        { label: "Magazine", value: 0, modifier: 36 },
      ],
    },

    {
      weaponId: "copperhead-rf",
      weaponName: "Copperhead RF",
      stats: [
        { label: "Magazine", value: 0, modifier: 50 },
      ],
    },

    {
      weaponId: "bully-smg",
      weaponName: "Bully SMG",
      stats: [
        { label: "Magazine", value: 0, modifier: 49 },
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
import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const hollowCaseRounds: ItemEntry = {
  id: "hollow-case-rounds",

  name: "Hollow-Case Rounds",

  category: "mod",
  rarity: "superior",
  modSubcategory: "assault-magazine",

  icon: asset("items/icons/HollowCaseRounds.png"),
  image: asset("items/icons/HollowCaseRounds.png"),
  render: asset("items/icons/HollowCaseRounds.png"),
  video: asset("items/videos/mods/HollowCaseRounds.webm"),

  sellPrice: 621,

  effect: "Superior Assault Magazine Mod",

  description:
    "Greatly increases magazine size, reload speed, and range.",

  lore:
    "A lightweight hollow-case magazine assembly designed to improve ammunition capacity while reducing reload friction. Its optimized casing geometry also helps preserve ballistic performance at range.",

  highlightTerms: [
    "hollow-case rounds",
    "magazine",
    "reload speed",
    "range",
    "assault magazine",
  ],

  tags: [
    "mod",
    "magazine",
    "assault magazine",
    "reload speed",
    "range",
    "capacity",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "m77-assault-rifle",
      weaponName: "M77 Assault Rifle",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.32, unit: "S" },
        { label: "Range", value: 0, modifier: 7, unit: "M" },
        { label: "Magazine", value: 0, modifier: 15 },
      ],
    },

    {
      weaponId: "overrun-ar",
      weaponName: "Overrun AR",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.2, unit: "S" },
        { label: "Range", value: 0, modifier: 8, unit: "M" },
        { label: "Magazine", value: 0, modifier: 22 },
      ],
    },

    {
      weaponId: "impact-har",
      weaponName: "Impact H-AR",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.35, unit: "S" },
        { label: "Range", value: 0, modifier: 30, unit: "M" },
        { label: "Magazine", value: 0, modifier: 20 },
      ],
    },

    {
      weaponId: "copperhead-rf",
      weaponName: "Copperhead RF",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.2, unit: "S" },
        { label: "Range", value: 0, modifier: 4, unit: "M" },
        { label: "Magazine", value: 0, modifier: 26 },
      ],
    },

    {
      weaponId: "bully-smg",
      weaponName: "Bully SMG",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.35, unit: "S" },
        { label: "Range", value: 0, modifier: 8, unit: "M" },
        { label: "Magazine", value: 0, modifier: 28 },
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
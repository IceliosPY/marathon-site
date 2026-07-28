import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const steadyRounds: ItemEntry = {
  id: "steady-rounds",

  name: "Steady Rounds",

  category: "mod",
  rarity: "superior",
  modSubcategory: "assault-magazine",

  icon: asset("items/icons/SteadyRounds.png"),
  image: asset("items/icons/SteadyRounds.png"),
  render: asset("items/icons/SteadyRounds.png"),
  video: asset("items/videos/mods/SteadyRounds.webm"),

  sellPrice: 621,

  effect: "Superior Assault Magazine Mod",

  description:
    "Greatly increases stability and magazine size.",

  lore:
    "A stability-focused assault magazine fitted with weighted feed components to reduce recoil while preserving extended ammunition capacity.",

  highlightTerms: [
    "stability",
    "recoil",
    "magazine",
    "magazine size",
    "assault magazine",
  ],

  tags: [
    "mod",
    "magazine",
    "assault magazine",
    "stability",
    "recoil",
    "capacity",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "m77-assault-rifle",
      weaponName: "M77 Assault Rifle",
      stats: [
        { label: "Recoil", value: 0, modifier: -30.0, unit: "%" },
        { label: "Magazine", value: 0, modifier: 12 },
      ],
    },

    {
      weaponId: "overrun-ar",
      weaponName: "Overrun AR",
      stats: [
        { label: "Recoil", value: 0, modifier: -28.5, unit: "%" },
        { label: "Magazine", value: 0, modifier: 17 },
      ],
    },

    {
      weaponId: "impact-har",
      weaponName: "Impact H-AR",
      stats: [
        { label: "Recoil", value: 0, modifier: -30.0, unit: "%" },
        { label: "Magazine", value: 0, modifier: 16 },
      ],
    },

    {
      weaponId: "copperhead-rf",
      weaponName: "Copperhead RF",
      stats: [
        { label: "Recoil", value: 0, modifier: -35.0, unit: "%" },
        { label: "Magazine", value: 0, modifier: 20 },
      ],
    },

    {
      weaponId: "bully-smg",
      weaponName: "Bully SMG",
      stats: [
        { label: "Recoil", value: 0, modifier: -22.8, unit: "%" },
        { label: "Magazine", value: 0, modifier: 23 },
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
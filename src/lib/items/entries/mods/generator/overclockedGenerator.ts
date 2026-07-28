import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const overclockedGenerator: ItemEntry = {
  id: "overclocked-generator",

  name: "Overclocked Generator",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "generator",

  icon: asset("items/icons/OverclockedGenerator.png"),
  image: asset("items/icons/OverclockedGenerator.png"),
  render: asset("items/icons/OverclockedGenerator.png"),
  video: asset("items/videos/mods/OverclockedGenerator.mp4"),

  sellPrice: 1620,

  effect: "Prestige Generator Mod",

  description:
    "A custom-made mod for the V00 Zeus RG. Increases stability, hipfire accuracy, and reduces charge time.",

  highlightTerms: [
    "spartan laser",
    "dual projectile",
    "charge time",
    "hipfire spread",
    "recoil",
    "zeus rg",
    "railgun",
  ],

  tags: [
    "mod",
    "generator mod",
    "prestige",
    "zeus rg",
    "railgun",
    "charge time",
    "recoil",
    "accuracy",
    "spartan laser",
    "weapon mod",
  ],

  prestigeFeature: {
    title: "Spartan Laser",
    description:
      "This weapon fires two projectiles per trigger pull.",
    color: "yellow",
  },

  stats: [
    {
      label: "Hipfire Spread",
      value: 4.1,
      modifier: -4.1,
      unit: "°",
    },
    {
      label: "Recoil",
      value: 100,
      modifier: -80,
      unit: "%",
    },
    {
      label: "Charge Time",
      value: 1.0,
      modifier: -0.55,
      unit: "S",
    },
  ],

  weaponStatProfiles: [
    {
      weaponId: "v00-zeus-rg",
      weaponName: "V00 ZEUS RG",

      stats: [
        {
          label: "Hipfire Spread",
          value: 4.1,
          modifier: -4.1,
          unit: "°",
        },
        {
          label: "Recoil",
          value: 100,
          modifier: -80,
          unit: "%",
        },
        {
          label: "Charge Time",
          value: 1.0,
          modifier: -0.55,
          unit: "S",
        },
      ],
    },
  ],

  sources: [
    {
      label: "Prestige Loot",
      kind: "world-loot",
    },
  ],
};
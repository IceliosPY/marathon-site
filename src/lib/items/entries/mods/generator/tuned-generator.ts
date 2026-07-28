import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const tunedGenerator: ItemEntry = {
  id: "tuned-generator",

  name: "Tuned Generator",

  category: "mod",
  rarity: "superior",
  modSubcategory: "generator",

  icon: asset("items/icons/TunedGenerator.png"),
  image: asset("items/icons/TunedGenerator.png"),
  render: asset("items/icons/TunedGenerator.png"),
  video: asset("items/videos/mods/TunedGenerator.mp4"),

  sellPrice: 621,

  effect: "Superior Generator Mod",

  description:
    "Greatly increases ready speed and movement speed with this weapon.",

  lore:
    "A recalibrated power generator optimized for rapid energy cycling. By reducing overall system mass and improving power distribution efficiency, the weapon becomes significantly faster to deploy and easier to maneuver.",

  highlightTerms: [
    "equip speed",
    "weight",
    "movement speed",
    "ready speed",
    "ARES RG",
    "V00 ZEUS RG",
  ],

  tags: [
    "mod",
    "generator mod",
    "superior",
    "equip speed",
    "movement speed",
    "weight reduction",
    "ARES RG",
    "V00 ZEUS RG",
    "weapon mod",
  ],

  stats: [
    {
      label: "Equip Speed",
      value: 0,
      modifier: -0.39,
      unit: "S",
    },
    {
      label: "Weight",
      value: 0,
      modifier: -18,
      unit: "%",
    },
  ],

  weaponStatProfiles: [
    {
      weaponId: "ares-rg",
      weaponName: "ARES RG",

      stats: [
        {
          label: "Equip Speed",
          value: 0.94,
          modifier: -0.39,
          unit: "S",
        },
        {
          label: "Weight",
          value: 38,
          modifier: -18,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "v00-zeus-rg",
      weaponName: "V00 ZEUS RG",

      stats: [
        {
          label: "Equip Speed",
          value: 0.94,
          modifier: -0.39,
          unit: "S",
        },
        {
          label: "Weight",
          value: 38,
          modifier: -18,
          unit: "%",
        },
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
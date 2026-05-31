import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const stabilizingGenerator: ItemEntry = {
  id: "stabilizing-generator",

  name: "Stabilizing Generator",

  category: "mod",
  rarity: "superior",
  modSubcategory: "generator",

  icon: asset("items/icons/StabilizingGenerator.png"),
  image: asset("items/icons/StabilizingGenerator.png"),
  render: asset("items/icons/StabilizingGenerator.png"),
  video: asset("items/videos/mods/StabilizingGenerator.mp4"),

  sellPrice: 621,

  effect: "Superior Generator Mod",

  description:
    "Greatly increases stability, range, and ready speed.",

  highlightTerms: [
    "stability",
    "recoil",
    "range",
    "equip speed",
    "railgun",
    "ARES RG",
    "V00 ZEUS RG",
  ],

  tags: [
    "mod",
    "generator mod",
    "superior",
    "stability",
    "recoil",
    "range",
    "railgun",
    "ARES RG",
    "V00 ZEUS RG",
    "weapon mod",
  ],

  stats: [
    {
      label: "Equip Speed",
      value: 0,
      modifier: -0.19,
      unit: "S",
    },
    {
      label: "Recoil",
      value: 0,
      modifier: -9.6,
      unit: "%",
    },
    {
      label: "Range",
      value: 0,
      modifier: 40,
      unit: "M",
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
          modifier: -0.19,
          unit: "S",
        },
        {
          label: "Recoil",
          value: 33.8,
          modifier: -9.6,
          unit: "%",
        },
        {
          label: "Range",
          value: 55,
          modifier: 40,
          unit: "M",
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
          modifier: -0.19,
          unit: "S",
        },
        {
          label: "Recoil",
          value: 100,
          modifier: -75,
          unit: "%",
        },
        {
          label: "Range",
          value: 55,
          modifier: 40,
          unit: "M",
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
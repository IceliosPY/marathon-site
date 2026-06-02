import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const optic14xIII: ItemEntry = {
  id: "optic-1-4x-iii",

  name: "Optic 1.4x III",

  category: "mod",
  rarity: "superior",
  modSubcategory: "lmg-optic",

  icon: asset("items/icons/Optic14xIII.png"),
  image: asset("items/icons/Optic14xIII.png"),
  render: asset("items/icons/Optic14xIII.png"),
  video: asset("items/videos/mods/Optic14xIII.webm"),

  sellPrice: 621,

  effect: "Superior LMG Optic Mod",

  description:
    "Greatly increases zoom, ADS accuracy, and accuracy while moving.",

  lore:
    "A reinforced LMG optic calibrated for sustained fire. Its stabilizing lens assembly improves target tracking while moving and keeps sight alignment tight under heavy recoil.",

  weaponStatProfiles: [
    {
      weaponId: "conquest-lmg",
      weaponName: "Conquest LMG",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.5, unit: "°" },
        { label: "Moving Inaccuracy", value: 0, modifier: -72.7, unit: "%" },
        { label: "Zoom", value: 0, modifier: 0.8, unit: "X" },
      ],
    },
    {
      weaponId: "retaliator-lmg",
      weaponName: "Retaliator LMG",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.14, unit: "°" },
        { label: "Moving Inaccuracy", value: 0, modifier: -29.1, unit: "%" },
        { label: "Zoom", value: 0, modifier: 0.8, unit: "X" },
      ],
    },
    {
      weaponId: "demolition-hmg",
      weaponName: "Demolition HMG",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.08, unit: "°" },
        { label: "Moving Inaccuracy", value: 0, modifier: -10.9, unit: "%" },
        { label: "Zoom", value: 0, modifier: 0.8, unit: "X" },
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
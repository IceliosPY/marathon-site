import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const leverOverhaulInterface: ItemEntry = {
  id: "lever-overhaul-interface",

  name: "Lever Overhaul Interface",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "precision-optic",

  icon: asset("items/icons/LeverOverhaulInterface.png"),
  image: asset("items/icons/LeverOverhaulInterface.png"),
  render: asset("items/icons/LeverOverhaulInterface.png"),
  video: asset("items/videos/mods/LeverOverhaulInterface.webm"),

  sellPrice: 1620,

  effect: "Prestige Precision Optic Mod",

  description:
    "A custom-made mod for the Repeater HPR. Increases reload speed and rounds reloaded at a time.",

  lore:
    "An advanced targeting and cycling interface engineered for lever-action precision platforms. The system rewards accuracy by accelerating firing cadence, turning every successful hit into momentum for the next shot.",

  highlightTerms: [
    "lever overhaul interface",
    "lever focus",
    "repeater hpr",
    "reload speed",
    "fire rate",
    "precision optic",
    "lever action",
  ],

  prestigeFeature: {
    title: "Lever Focus",
    description:
      "Shots on target increase fire rate. This degrades when a shot misses.",
    color: "yellow",
  },

  weaponStatProfiles: [
    {
      weaponId: "repeater-hpr",
      weaponName: "Repeater HPR",
      stats: [
        { label: "Hipfire Spread", value: 0, modifier: -1.27, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.13, unit: "S" },
        { label: "Reload Speed", value: 0, modifier: -0.16, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.9, unit: "X" },
      ],
    },
  ],

  tags: [
    "mod",
    "prestige",
    "precision optic",
    "lever overhaul interface",
    "lever focus",
    "repeater hpr",
    "reload speed",
    "fire rate",
    "ads speed",
    "zoom",
    "hipfire",
    "weapon mod",
  ],

  sources: [
    {
      label: "Prestige Loot",
      kind: "world-loot",
    },
  ],
};
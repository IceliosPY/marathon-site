import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const compressionChamber: ItemEntry = {
  id: "compression-chamber",

  name: "Compression Chamber",

  category: "mod",
  rarity: "superior",
  modSubcategory: "volt-cell",

  icon: asset("items/icons/CompressionChamber.png"),
  image: asset("items/icons/CompressionChamber.png"),
  render: asset("items/icons/CompressionChamber.png"),
  video: asset("items/videos/mods/CompressionChamber.webm"),

  sellPrice: 621,

  effect: "Superior Volt Cell Mod",

  description:
    "Greatly increases magazine size, reload speed, and movement speed with this weapon.",

  lore:
    "An advanced compression chamber that optimizes energy flow and storage density. By reducing internal mass and improving discharge efficiency, it enables faster reload cycles, improved mobility, and expanded energy reserves.",

  specialEffects: [
    {
      name: "Compressed Energy Core",
      description:
        "Reduces weapon weight while improving reload performance and power efficiency.",
    },
  ],

  highlightTerms: [
    "compression chamber",
    "weight",
    "reload speed",
    "volt drain",
    "energy efficiency",
    "movement speed",
    "volt cell",
  ],

  weaponStatProfiles: [
    {
      weaponId: "v99-channel-rifle",
      weaponName: "V99 Channel Rifle",
      stats: [
        { label: "Weight", value: 0, modifier: -6.8, unit: "%" },
        { label: "Reload Speed", value: 0, modifier: -0.68, unit: "S" },
        { label: "Volt Drain", value: 0, modifier: -11.4, unit: "%" },
      ],
    },

    {
      weaponId: "v00-zeus-rg",
      weaponName: "V00 ZEUS RG",
      stats: [
        { label: "Weight", value: 0, modifier: -6.8, unit: "%" },
        { label: "Reload Speed", value: 0, modifier: -0.59, unit: "S" },
        { label: "Volt Drain", value: 0, modifier: -10.9, unit: "%" },
      ],
    },

    {
      weaponId: "v85-circuit-breaker",
      weaponName: "V85 Circuit Breaker",
      stats: [
        { label: "Weight", value: 0, modifier: -6.8, unit: "%" },
        { label: "Reload Speed", value: 0, modifier: -0.68, unit: "S" },
        { label: "Volt Drain", value: 0, modifier: -11.4, unit: "%" },
      ],
    },
  ],

  tags: [
    "mod",
    "volt cell",
    "compression",
    "weight reduction",
    "reload speed",
    "volt drain",
    "movement speed",
    "energy efficiency",
    "weapon mod",
    "superior",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
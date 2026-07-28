import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const hiCapHeatSink: ItemEntry = {
  id: "hi-cap-heat-sink",

  name: "Hi-Cap Heat Sink",

  category: "mod",
  rarity: "superior",
  modSubcategory: "volt-cell",

  icon: asset("items/icons/HiCapHeatSink.png"),
  image: asset("items/icons/HiCapHeatSink.png"),
  render: asset("items/icons/HiCapHeatSink.png"),
  video: asset("items/videos/mods/HiCapHeatSink.webm"),

  sellPrice: 702,

  effect: "Superior Volt Cell Mod",

  description:
    "Massively increases energy capacity at the cost of higher reload time and increased volt consumption.",

  lore:
    "An oversized heat sink assembly engineered to store significantly more energy before requiring a reload. While it greatly extends sustained fire, the increased thermal mass slows recharge cycles and places heavier demands on the weapon's power reserves.",

  specialEffects: [
    {
      name: "High Capacity Reservoir",
      description:
        "Greatly increases available energy reserves for extended engagements.",
    },
  ],

  highlightTerms: [
    "heat sink",
    "energy capacity",
    "volt drain",
    "reload speed",
    "volt cell",
    "battery",
    "power reserve",
  ],

  weaponStatProfiles: [
    {
      weaponId: "v85-circuit-breaker",
      weaponName: "V85 Circuit Breaker",
      stats: [
        { label: "Reload Speed", value: 0, modifier: 0.25, unit: "S" },
        { label: "Volt Drain", value: 0, modifier: -5.4, unit: "%" },
      ],
    },

    {
      weaponId: "v00-zeus-rg",
      weaponName: "V00 ZEUS RG",
      stats: [
        { label: "Reload Speed", value: 0, modifier: 0.20, unit: "S" },
        { label: "Volt Drain", value: 0, modifier: -13.3, unit: "%" },
      ],
    },

    {
      weaponId: "v99-channel-rifle",
      weaponName: "V99 Channel Rifle",
      stats: [
        { label: "Reload Speed", value: 0, modifier: 0.23, unit: "S" },
        { label: "Volt Drain", value: 0, modifier: -19.4, unit: "%" },
      ],
    },
  ],

  tags: [
    "mod",
    "volt cell",
    "heat sink",
    "energy",
    "battery",
    "volt drain",
    "reload speed",
    "capacity",
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
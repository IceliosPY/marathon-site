import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const taperedHeatSink: ItemEntry = {
  id: "tapered-heat-sink",

  name: "Tapered Heat Sink",

  category: "mod",
  rarity: "superior",
  modSubcategory: "volt-cell",

  icon: asset("items/icons/tapered-heat-sink.png"),
  image: asset("items/icons/tapered-heat-sink.png"),
  render: asset("items/icons/tapered-heat-sink.png"),
  video: asset("items/videos/mods/tapered-heat-sink.mp4"),

  sellPrice: 621,

  effect: "Superior Volt Cell Mod",

  description:
    "Greatly increases reload speed and magazine size.",

  highlightTerms: [
    "reload speed",
    "magazine size",
    "volt drain",
  ],

  lore:
    "Refined thermal redistribution cell engineered for sustained energy cycling. The tapered cooling lattice reduces recharge bottlenecks while stabilizing high-capacity volt discharge.",

  tags: [
    "mod",
    "volt cell",
    "volt-cell mod",
    "reload speed",
    "magazine",
    "energy weapon",
    "heat sink",
    "v99 channel rifle",
    "v00 zeus rg",
    "v85 circuit breaker",
  ],

  weaponStatProfiles: [
    {
      weaponId: "v99-channel-rifle",
      weaponName: "V99 Channel Rifle",

      stats: [
        {
          label: "Reload Speed",
          value: 0,
          modifier: -0.68,
          unit: "S",
        },
        {
          label: "Volt Drain",
          value: 0,
          modifier: -14.4,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "v00-zeus-rg",
      weaponName: "V00 ZEUS RG",

      stats: [
        {
          label: "Reload Speed",
          value: 0,
          modifier: -0.59,
          unit: "S",
        },
        {
          label: "Volt Drain",
          value: 0,
          modifier: -11.8,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "v85-circuit-breaker",
      weaponName: "V85 Circuit Breaker",

      stats: [
        {
          label: "Reload Speed",
          value: 0,
          modifier: -0.74,
          unit: "S",
        },
        {
          label: "Volt Drain",
          value: 0,
          modifier: -4.6,
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
    {
      label: "UESC Armory",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "uesc-armory",
      },
    },
  ],
};
import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const farReachOptic: ItemEntry = {
  id: "far-reach-optic",

  name: "Far Reach Optic",

  category: "mod",
  rarity: "superior",
  modSubcategory: "assault-optic",

  icon: asset("items/icons/FarReachOptic.png"),
  image: asset("items/icons/FarReachOptic.png"),
  render: asset("items/icons/FarReachOptic.png"),
  video: asset("items/videos/mods/FarReachOptic.webm"),

  sellPrice: 621,

  effect: "Superior Assault Optic Mod",

  description:
    "Greatly increases zoom and range.",

  lore:
    "A long-range assault optic fitted with a compact laser rangefinder. Designed to extend effective engagement distance without sacrificing field usability.",

  highlightTerms: [
    "far reach optic",
    "rangefinder",
    "zoom",
    "range",
    "assault optic",
  ],

  tags: [
    "mod",
    "optic",
    "scope",
    "assault optic",
    "rangefinder",
    "zoom",
    "range",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "overrun-ar",
      weaponName: "Overrun AR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.14, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.04, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.1, unit: "X" },
      ],
    },
  
    {
      weaponId: "impact-har",
      weaponName: "Impact H-AR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.18, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.20, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.1, unit: "X" },
      ],
    },

    {
      weaponId: "v75-scar",
      weaponName: "V75 Scar",
      stats: [
        { label: "Range", value: 0, modifier: 17, unit: "M" },
        { label: "Zoom", value: 0, modifier: 0.5, unit: "X" },
      ],
    },

    {
      weaponId: "brrt-smg",
      weaponName: "BRRT SMG",
      stats: [
        { label: "Range", value: 0, modifier: 12, unit: "M" },
        { label: "Zoom", value: 0, modifier: 0.7, unit: "X" },
      ],
    },

    {
      weaponId: "copperhead-rf",
      weaponName: "Copperhead RF",
      stats: [
        { label: "Range", value: 0, modifier: 11, unit: "M" },
        { label: "Zoom", value: 0, modifier: 0.7, unit: "X" },
      ],
    },

    {
      weaponId: "bully-smg",
      weaponName: "Bully SMG",
      stats: [
        { label: "Range", value: 0, modifier: 17, unit: "M" },
        { label: "Zoom", value: 0, modifier: 0.7, unit: "X" },
      ],
    },
  ],

  specialEffects: [
    {
      name: "Rangefinder",
      description:
        "Uses laser pulses to measure distance to the target.",
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
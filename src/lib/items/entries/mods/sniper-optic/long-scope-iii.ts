import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const longScopeIII: ItemEntry = {
  id: "long-scope-iii",

  name: "Long Scope III",

  category: "mod",
  rarity: "superior",
  modSubcategory: "sniper-optic",

  icon: asset("items/icons/LongScopeIII.png"),
  image: asset("items/icons/LongScopeIII.png"),
  render: asset("items/icons/LongScopeIII.png"),
  video: asset("items/videos/mods/LongScopeIII.webm"),

  sellPrice: 621,

  effect: "Superior Sniper Optic Mod",

  description:
    "Greatly increases zoom and range.",

  lore:
    "A long-range optic fitted with laser rangefinding systems. Designed to extend target acquisition distance and improve precision engagement at extreme range.",

  highlightTerms: [
    "zoom",
    "range",
    "rangefinder",
    "sniper optic",
    "long range",
  ],

  tags: [
    "mod",
    "optic",
    "scope",
    "sniper optic",
    "zoom",
    "range",
    "rangefinder",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "longshot",
      weaponName: "Longshot",
      stats: [
        { label: "Range", value: 0, modifier: 22, unit: "M" },
        { label: "Zoom", value: 0, modifier: 3.0, unit: "X" },
      ],
    },

    {
      weaponId: "outland",
      weaponName: "Outland",
      stats: [
        { label: "Range", value: 0, modifier: 22, unit: "M" },
        { label: "Zoom", value: 0, modifier: 3.0, unit: "X" },
      ],
    },

    {
      weaponId: "v99-channel-rifle",
      weaponName: "V99 Channel Rifle",
      stats: [
        { label: "Range", value: 0, modifier: 22, unit: "M" },
        { label: "Zoom", value: 0, modifier: 3.0, unit: "X" },
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
import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const overchargeLens: ItemEntry = {
  id: "overcharge-lens",

  name: "Overcharge Lens",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "volt-dampener",

  icon: asset("items/icons/OverchargeLens.png"),
  image: asset("items/icons/OverchargeLens.png"),
  render: asset("items/icons/OverchargeLens.png"),
  video: asset("items/videos/mods/OverchargeLens.webm"),

  sellPrice: 1620,

  effect: "Prestige Volt Dampener Mod",

  description:
    "A custom-made mod for the V22 Volt Thrower. Increases range, accuracy when firing from the hip, and aim assist.",

  lore:
    "An experimental targeting lens designed for the V22 Volt Thrower. By overcharging target acquisition systems, it enhances close-range tracking and rewards sustained contact with explosive energy bursts.",

  highlightTerms: [
    "overcharge lens",
    "reactive burst",
    "hipfire",
    "aim assist",
    "range",
    "volt thrower",
    "explosive burst",
  ],

  prestigeFeature: {
    title: "Reactive Burst",
    description:
      "Consecutive hits on target create an explosive burst on the target.",
    color: "yellow",
  },

  weaponStatProfiles: [
    {
      weaponId: "v22-volt-thrower",
      weaponName: "V22 Volt Thrower",
      stats: [
        { label: "Hipfire Spread", value: 0, modifier: -0.16, unit: "°" },
        { label: "Aim Assist", value: 0, modifier: 1.00, unit: "°" },
        { label: "Range", value: 0, modifier: 2, unit: "M" },
      ],
    },
  ],

  tags: [
    "mod",
    "prestige",
    "volt dampener",
    "overcharge lens",
    "reactive burst",
    "hipfire",
    "aim assist",
    "range",
    "explosive",
    "v22 volt thrower",
    "weapon mod",
  ],

  sources: [
    {
      label: "Prestige Loot",
      kind: "world-loot",
    },
  ],
};
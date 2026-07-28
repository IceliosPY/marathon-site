import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const overclockedDelimiter: ItemEntry = {
  id: "overclocked-delimiter",
  
  name: "Overclocked Delimiter",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "shotgun-grip",
  icon: asset("items/icons/overclocked-delimiter.png"),
  image: asset("items/icons/overclocked-delimiter.png"),
  render: asset("items/icons/overclocked-delimiter.png"),
  video: asset("items/videos/mods/overclocked-delimiter.mp4"),

  sellPrice: 1620,

  effect: "Prestige Volt Cell Mod",

  description:
    "A custom-made mod for the V85 Circuit Breaker. Increases magazine size and reload speed.",

  highlightTerms: [
    "V85 Circuit Breaker",
    "magazine size",
    "reload speed",
    "third level of charge",
  ],

  prestigeFeature: {
    title: "Delimited Charge",
    description:
      "Adds a third level of charge. When fully charged, this weapon has greatly reduced spread, increased damage, and its projectiles ricochet and pierce hostiles.",
    color: "yellow",
  },

  lore: "Compatible Weapons: V85 Circuit Breaker",

  tags: [
    "mod",
    "volt cell mod",
    "v85",
    "v85 circuit breaker",
    "reload speed",
    "volt drain",
    "charge",
    "prestige",
    "weapon attachment",
  ],

  weaponStatProfiles: [
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
          modifier: -3,
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
      label: "Traxus Armory",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "traxus-armory",
      },
    },
  ],
};
import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const overclockedShield: ItemEntry = {
  id: "overclocked-shield",

  name: "Overclocked Shield",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "shield",

  icon: asset("items/icons/OverclockedShield.png"),
  image: asset("items/icons/OverclockedShield.png"),
  render: asset("items/icons/OverclockedShield.png"),
  video: asset("items/videos/mods/overclocked-shield.mp4"),

  sellPrice: 1620,

  effect: "Prestige Shield Mod",

  description:
    "A custom-made mod for the Demolition HMG. Increases stability and movement speed with this weapon.",

  weaponStatProfiles: [
    {
      weaponId: "demolition-hmg",
      weaponName: "Demolition HMG",
      stats: [
        { label: "Weight", value: 0, modifier: -4.5, unit: "%" },
        { label: "Recoil", value: 0, modifier: -6.1, unit: "%" },
      ],
    },
  ],

  specialEffects: [
    {
      name: "Overclocked Shield",
      description:
        "Activate an energy shield that absorbs incoming damage. When this shield is active, aiming down sights grants an increased rate of fire.",
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
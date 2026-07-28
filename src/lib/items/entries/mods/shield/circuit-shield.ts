import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const circuitShield: ItemEntry = {
  id: "circuit-shield",

  name: "Circuit Shield",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "shield",

  icon: asset("items/icons/CircuitShield.png"),
  image: asset("items/icons/CircuitShield.png"),
  render: asset("items/icons/CircuitShield.png"),
  video: asset("items/videos/mods/circuit-shield.mp4"),

  sellPrice: 1620,

  effect: "Prestige Shield Mod",

  description:
    "A custom-made mod for the Retaliator LMG. Increases stability.",

  weaponStatProfiles: [
    {
      weaponId: "retaliator-lmg",
      weaponName: "Retaliator LMG",
      stats: [
        { label: "Recoil", value: 0, modifier: -10.0, unit: "%" },
      ],
    },
  ],

  specialEffects: [
    {
      name: "Circuit Shield",
      description:
        "Activate an energy shield that absorbs incoming damage. Damage absorbed by this shield refunds ammo back to the magazine.",
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
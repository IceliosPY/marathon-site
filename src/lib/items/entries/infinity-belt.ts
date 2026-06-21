import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const infinityBelt: ItemEntry = {
  id: "infinity-belt",

  name: "Infinity Belt",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "belt-fed-magazine",

  icon: asset("items/icons/InfinityBelt.png"),
  image: asset("items/icons/InfinityBelt.png"),
  render: asset("items/icons/InfinityBelt.png"),
  video: asset("items/videos/mods/infinity-belt.mp4"),

  sellPrice: 1620,

  effect: "Prestige Belt-Fed Magazine Mod",

  description:
    "A custom-made mod for the Conquest LMG. Increases reload speed and magazine capacity.",

  weaponStatProfiles: [
    {
      weaponId: "conquest-lmg",
      weaponName: "Conquest LMG",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -1.55, unit: "s" },
        { label: "Magazine", value: 0, modifier: 90, unit: "" },
      ],
    },
  ],

  specialEffects: [
    {
      name: "Infinity Mag",
      description:
        "Eliminations grant ammo directly into the magazine and increase rate of fire for a short duration.",
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
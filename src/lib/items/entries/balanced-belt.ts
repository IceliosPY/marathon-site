import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const balancedBelt: ItemEntry = {
  id: "balanced-belt",

  name: "Balanced Belt",

  category: "mod",
  rarity: "superior",
  modSubcategory: "belt-fed-magazine",

  icon: asset("items/icons/BalancedBelt.png"),
  image: asset("items/icons/BalancedBelt.png"),
  render: asset("items/icons/BalancedBelt.png"),
  video: asset("items/videos/mods/BalancedBelt.webm"),

  sellPrice: 621,

  effect: "Superior Belt-Fed Magazine Mod",

  description:
    "Greatly increases magazine size, range, and reload speed.",

  lore:
    "A tuned belt-feed system balancing capacity, feed reliability, and extended effective range for sustained machine-gun fire.",

  weaponStatProfiles: [
    {
      weaponId: "conquest-lmg",
      weaponName: "Conquest LMG",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.31, unit: "S" },
        { label: "Range", value: 0, modifier: 20, unit: "M" },
        { label: "Magazine", value: 0, modifier: 60 },
      ],
    },
    {
      weaponId: "retaliator-lmg",
      weaponName: "Retaliator LMG",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.29, unit: "S" },
        { label: "Range", value: 0, modifier: 5, unit: "M" },
        { label: "Magazine", value: 0, modifier: 67 },
      ],
    },
    {
      weaponId: "demolition-hmg",
      weaponName: "Demolition HMG",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.26, unit: "S" },
        { label: "Range", value: 0, modifier: 20, unit: "M" },
        { label: "Magazine", value: 0, modifier: 40 },
      ],
    },
  ],

  sources: [{ label: "World Loot", kind: "world-loot" }],
};
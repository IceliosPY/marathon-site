import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const mipsSlugConverter: ItemEntry = {
  id: "mips-slug-converter",

  name: "MIPS Slug Converter",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "underbarrel",

  icon: asset("items/icons/MipsSlugConverter.png"),
  image: asset("items/icons/MipsSlugConverter.png"),
  render: asset("items/icons/MipsSlugConverter.png"),
  video: asset("items/videos/mods/MipsSlugConverter.webm"),

  sellPrice: 1620,

  effect: "Prestige Underbarrel Mod",

  description:
    "A custom-made mod for the WSTR Combat Shotgun. Increases rate of fire, stability, aim assist, range, and reduces pellet spread.",

  lore:
    "A precision underbarrel conversion system that reconfigures WSTR shells into high-powered slug projectiles, tightening spread and extending effective range.",

  highlightTerms: [
    "mips slug converter",
    "slug projectile",
    "rate of fire",
    "recoil",
    "aim assist",
    "range",
    "spread angle",
    "wstr combat shotgun",
  ],

  tags: [
    "mod",
    "underbarrel",
    "shotgun",
    "slug",
    "projectile",
    "range",
    "stability",
    "wstr combat shotgun",
    "weapon mod",
    "prestige",
  ],

  weaponStatProfiles: [
    {
      weaponId: "wstr-combat-shotgun",
      weaponName: "WSTR Combat Shotgun",
      stats: [
        { label: "Rate of Fire", value: 0, modifier: 57, unit: "RPM" },
        { label: "Recoil", value: 0, modifier: -9.0, unit: "%" },
        { label: "Aim Assist", value: 0, modifier: 3.10, unit: "°" },
        { label: "Range", value: 0, modifier: 1, unit: "M" },
        { label: "Spread Angle", value: 0, modifier: -0.63, unit: "°" },
      ],
    },
  ],

  specialEffects: [
    {
      name: "MIPS Slug Converter",
      description:
        "Press Convert shells to a high-powered slug projectile.",
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
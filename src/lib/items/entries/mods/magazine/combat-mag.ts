import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const combatMag: ItemEntry = {
  id: "combat-mag",

  name: "Combat Mag",

  category: "mod",
  rarity: "superior",
  modSubcategory: "magazine",

  icon: asset("items/icons/CombatMag.png"),
  image: asset("items/icons/CombatMag.png"),
  render: asset("items/icons/CombatMag.png"),
  video: asset("items/videos/mods/CombatMag.webm"),

  sellPrice: 621,

  effect: "Superior Precision Magazine Mod",

  description:
    "Greatly increases magazine size, reload speed, and range.",

  lore:
    "An enlarged combat magazine optimized for sustained engagements. The reinforced feed system improves reload efficiency while the ammunition configuration extends effective combat range.",

  highlightTerms: [
    "reload speed",
    "magazine",
    "range",
    "combat mag",
    "precision magazine",
    "ammo capacity",
  ],

  weaponStatProfiles: [
    {
      weaponId: "stryder-m1t",
      weaponName: "Stryder M1T",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.79, unit: "S" },
        { label: "Range", value: 0, modifier: 14, unit: "M" },
        { label: "Magazine", value: 0, modifier: 12 },
      ],
    },

    {
      weaponId: "hardline-pr",
      weaponName: "Hardline PR",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.70, unit: "S" },
        { label: "Range", value: 0, modifier: 20, unit: "M" },
        { label: "Magazine", value: 0, modifier: 11 },
      ],
    },

    {
      weaponId: "br33-volley-rifle",
      weaponName: "BR33 Volley Rifle",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.72, unit: "S" },
        { label: "Range", value: 0, modifier: 14, unit: "M" },
        { label: "Magazine", value: 0, modifier: 36 },
      ],
    },

    {
      weaponId: "twin-tap-hbr",
      weaponName: "Twin Tap HBR",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.31, unit: "S" },
        { label: "Range", value: 0, modifier: 14, unit: "M" },
        { label: "Magazine", value: 0, modifier: 24 },
      ],
    },

    {
      weaponId: "longshot",
      weaponName: "Longshot",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.65, unit: "S" },
        { label: "Range", value: 0, modifier: 20, unit: "M" },
        { label: "Magazine", value: 0, modifier: 6 },
      ],
    },
  ],

  tags: [
    "mod",
    "magazine",
    "combat mag",
    "reload speed",
    "range",
    "ammo capacity",
    "precision magazine",
    "weapon mod",
    "superior",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
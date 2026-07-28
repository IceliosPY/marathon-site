import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const stabilizingMag: ItemEntry = {
  id: "stabilizing-mag",

  name: "Stabilizing Mag",

  category: "mod",
  rarity: "superior",
  modSubcategory: "precision-magazine",

  icon: asset("items/icons/StabilizingMag.png"),
  image: asset("items/icons/StabilizingMag.png"),
  render: asset("items/icons/StabilizingMag.png"),
  video: asset("items/videos/mods/StabilizingMag.webm"),

  sellPrice: 621,

  effect: "Superior Precision Magazine Mod",

  description:
    "Greatly increases magazine size and stability.",

  lore:
    "A reinforced precision magazine designed to improve weapon balance and recoil control. Its weighted construction helps stabilize the rifle during sustained fire while increasing ammunition capacity.",

  highlightTerms: [
    "recoil",
    "stability",
    "magazine",
    "magazine size",
    "stabilization",
  ],

  tags: [
    "mod",
    "magazine",
    "stability",
    "recoil",
    "precision magazine",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "stryder-m1t",
      weaponName: "Stryder M1T",
      stats: [
        { label: "Recoil", value: 0, modifier: -45.0 },
        { label: "Magazine", value: 0, modifier: 10 },
      ],
    },

    {
      weaponId: "br33-volley-rifle",
      weaponName: "BR33 Volley Rifle",
      stats: [
        { label: "Recoil", value: 0, modifier: -45.4 },
        { label: "Magazine", value: 0, modifier: 30 },
      ],
    },

    {
      weaponId: "twin-tap-hbr",
      weaponName: "Twin Tap HBR",
      stats: [
        { label: "Recoil", value: 0, modifier: -15.6 },
        { label: "Magazine", value: 0, modifier: 20 },
      ],
    },
    {
        weaponId: "hardline-pr",
        weaponName: "Hardline PR",
        stats: [
          { label: "Recoil", value: 0, modifier: -61.6 },
          { label: "Magazine", value: 0, modifier: 9 },
        ],
      },
    {
      weaponId: "longshot",
      weaponName: "Longshot",
      stats: [
        { label: "Recoil", value: 0, modifier: -25.0 },
        { label: "Magazine", value: 0, modifier: 5 },
      ],
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
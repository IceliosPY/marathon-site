import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const stabilizingBarrel: ItemEntry = {
  id: "stabilizing-barrel",

  name: "Stabilizing Barrel",

  category: "mod",
  rarity: "superior",
  modSubcategory: "ion-dampener",

  icon: asset("items/icons/StabilizingBarrel.png"),
  image: asset("items/icons/StabilizingBarrel.png"),
  render: asset("items/icons/StabilizingBarrel.png"),
  video: asset("items/videos/mods/StabilizingBarrel.webm"),

  sellPrice: 540,

  effect: "Superior Ion Dampener Mod",

  description:
    "Greatly increases stability, range, and ADS accuracy.",

  lore:
    "A reinforced ion-dampened barrel designed to stabilize high-energy precision fire, improving recoil control and effective range.",

  highlightTerms: [
    "stabilizing barrel",
    "stability",
    "range",
    "ADS accuracy",
    "ADS spread",
    "recoil",
    "ion dampener",
  ],

  weaponStatProfiles: [
    {
      weaponId: "v99-channel-rifle",
      weaponName: "V99 Channel Rifle",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.20, unit: "°" },
        { label: "Recoil", value: 0, modifier: -45.0, unit: "%" },
        { label: "Range", value: 0, modifier: 30, unit: "M" },
      ],
    },
  ],

  tags: [
    "mod",
    "barrel",
    "ion dampener",
    "stabilizing barrel",
    "stability",
    "range",
    "ADS accuracy",
    "ADS spread",
    "recoil",
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
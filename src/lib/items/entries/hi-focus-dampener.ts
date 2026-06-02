import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const hiFocusDampener: ItemEntry = {
  id: "hi-focus-dampener",

  name: "Hi-Focus Dampener",

  category: "mod",
  rarity: "superior",
  modSubcategory: "volt-dampener",

  icon: asset("items/icons/HiFocusDampener.png"),
  image: asset("items/icons/HiFocusDampener.png"),
  render: asset("items/icons/HiFocusDampener.png"),
  video: asset("items/videos/mods/HiFocusDampener.webm"),

  sellPrice: 540,

  effect: "Superior Volt Dampener Mod",

  description:
    "Greatly increases stability and movement speed with this weapon.",

  highlightTerms: [
    "stability",
    "movement speed",
    "weight",
    "recoil",
    "volt dampener",
  ],

  weaponStatProfiles: [
    {
      weaponId: "v75-scar",
      weaponName: "V75 SCAR",
      stats: [
        { label: "Weight", value: 0, modifier: -15.0, unit: "%" },
        { label: "Recoil", value: 0, modifier: -81.0, unit: "%" },
      ],
    },
    {
      weaponId: "v11-punch",
      weaponName: "V11 Punch",
      stats: [
        { label: "Weight", value: 0, modifier: -12.0, unit: "%" },
        { label: "Recoil", value: 0, modifier: -31.5, unit: "%" },
      ],
    },
    {
      weaponId: "v22-volt-thrower",
      weaponName: "V22 Volt Thrower",
      stats: [
        { label: "Weight", value: 0, modifier: -15.0, unit: "%" },
        { label: "Recoil", value: 0, modifier: -25.0, unit: "%" },
      ],
    },
  ],

  tags: [
    "mod",
    "superior",
    "volt dampener",
    "hi-focus dampener",
    "v75 scar",
    "v11 punch",
    "v22 volt thrower",
    "stability",
    "movement speed",
    "weight",
    "recoil",
    "weapon mod",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
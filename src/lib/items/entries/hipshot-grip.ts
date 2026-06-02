import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const hipshotGrip: ItemEntry = {
  id: "hipshot-grip",

  name: "Hipshot Grip",

  category: "mod",
  rarity: "superior",
  modSubcategory: "shotgun-grip",

  icon: asset("items/icons/HipshotGrip.png"),
  image: asset("items/icons/HipshotGrip.png"),
  render: asset("items/icons/HipshotGrip.png"),
  video: asset("items/videos/mods/HipshotGrip.webm"),

  sellPrice: 540,

  effect: "Superior Shotgun Grip Mod",

  description:
    "Greatly increases accuracy when firing from the hip, accuracy while moving, and movement speed with this weapon.",

  lore:
    "A lightweight shotgun grip built for aggressive close-quarters combat. It improves hipfire control and movement handling, allowing the weapon to stay accurate while pushing forward or repositioning quickly.",

  highlightTerms: [
    "hipfire",
    "spread angle",
    "movement speed",
    "accuracy while moving",
    "shotgun grip",
    "close quarters",
    "mobility",
  ],

  weaponStatProfiles: [
    {
      weaponId: "wstr-combat-shotgun",
      weaponName: "WSTR Combat Shotgun",
      stats: [
        { label: "Weight", value: 0, modifier: -2.0, unit: "%" },
        { label: "Spread Angle", value: 0, modifier: -1.47, unit: "°" },
      ],
    },

    {
      weaponId: "misriah-2442",
      weaponName: "Misriah 2442",
      stats: [
        { label: "Weight", value: 0, modifier: -2.0, unit: "%" },
        { label: "Spread Angle", value: 0, modifier: -1.75, unit: "°" },
      ],
    },

    {
      weaponId: "v85-circuit-breaker",
      weaponName: "V85 Circuit Breaker",
      stats: [
        { label: "Weight", value: 0, modifier: -2.0, unit: "%" },
        { label: "Spread Angle", value: 0, modifier: -1.08, unit: "°" },
      ],
    },
  ],

  tags: [
    "mod",
    "superior",
    "shotgun grip",
    "hipshot grip",
    "hipfire",
    "spread angle",
    "movement speed",
    "close quarters",
    "accuracy",
    "weapon mod",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
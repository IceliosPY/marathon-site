import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const sturdyBraceGrip: ItemEntry = {
  id: "sturdy-brace-grip",

  name: "Sturdy Brace Grip",

  category: "mod",
  rarity: "superior",
  modSubcategory: "rifle-grip",

  icon: asset("items/icons/SturdyBraceGrip.png"),
  image: asset("items/icons/SturdyBraceGrip.png"),
  render: asset("items/icons/SturdyBraceGrip.png"),
  video: asset("items/videos/mods/SturdyBraceGrip.webm"),

  sellPrice: 540,

  effect: "Superior Rifle Grip Mod",

  description:
    "Massively increases stability and accuracy while moving.",

  lore:
    "A reinforced brace grip designed to stabilize assault rifles during mobile engagements, improving recoil control and reducing movement-based inaccuracy.",

  highlightTerms: [
    "stability",
    "accuracy while moving",
    "moving inaccuracy",
    "recoil",
    "rifle grip",
  ],

  tags: [
    "mod",
    "grip",
    "rifle grip",
    "stability",
    "moving accuracy",
    "recoil",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "m77-assault-rifle",
      weaponName: "M77 Assault Rifle",
      stats: [
        { label: "Moving Inaccuracy", value: 0, modifier: -29.1, unit: "%" },
        { label: "Recoil", value: 0, modifier: -42.0, unit: "%" },
      ],
    },

    {
      weaponId: "overrun-ar",
      weaponName: "Overrun AR",
      stats: [
        { label: "Moving Inaccuracy", value: 0, modifier: -72.7, unit: "%" },
        { label: "Recoil", value: 0, modifier: -39.9, unit: "%" },
      ],
    },

    {
      weaponId: "impact-har",
      weaponName: "Impact H-AR",
      stats: [
        { label: "Moving Inaccuracy", value: 0, modifier: -72.7, unit: "%" },
        { label: "Recoil", value: 0, modifier: -50.0, unit: "%" },
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
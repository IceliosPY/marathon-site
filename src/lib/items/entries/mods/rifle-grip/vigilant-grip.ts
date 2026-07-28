import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const vigilantGrip: ItemEntry = {
  id: "vigilant-grip",

  name: "Vigilant Grip",

  category: "mod",
  rarity: "superior",
  modSubcategory: "rifle-grip",

  icon: asset("items/icons/VigilantGrip.png"),
  image: asset("items/icons/VigilantGrip.png"),
  render: asset("items/icons/VigilantGrip.png"),
  video: asset("items/videos/mods/VigilantGrip.webm"),

  sellPrice: 540,

  effect: "Superior Rifle Grip Mod",

  description:
    "Greatly increases ready speed and stability.",

  lore:
    "A reinforced rifle grip designed to improve weapon readiness and recoil control during rapid engagements.",

  highlightTerms: [
    "vigilant grip",
    "ready speed",
    "equip speed",
    "stability",
    "recoil",
    "rifle grip",
  ],

  tags: [
    "mod",
    "grip",
    "rifle grip",
    "ready speed",
    "equip speed",
    "stability",
    "recoil",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "m77-assault-rifle",
      weaponName: "M77 Assault Rifle",
      stats: [
        { label: "Equip Speed", value: 0, modifier: -0.39, unit: "S" },
        { label: "Recoil", value: 0, modifier: -30.0, unit: "%" },
      ],
    },

    {
      weaponId: "overrun-ar",
      weaponName: "Overrun AR",
      stats: [
        { label: "Equip Speed", value: 0, modifier: -0.39, unit: "S" },
        { label: "Recoil", value: 0, modifier: -28.5, unit: "%" },
      ],
    },

    {
        weaponId: "impact-har",
        weaponName: "Impact H-AR",
        stats: [
          { label: "ADS Spread", value: 0, modifier: -0.18, unit: "°" },
          { label: "ADS Speed", value: 0, modifier: 0.20, unit: "S" },
          { label: "Zoom", value: 0, modifier: 0.1, unit: "X" },
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


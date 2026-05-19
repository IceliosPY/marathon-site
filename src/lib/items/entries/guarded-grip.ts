import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const guardedGrip: ItemEntry = {
  id: "guarded-grip",

  name: "Guarded Grip",

  category: "mod",
  rarity: "superior",

  icon: asset("items/icons/GuardedGrip.png"),
  image: asset("items/icons/GuardedGrip.png"),
  render: asset("items/icons/GuardedGrip.png"),
  video: asset("items/videos/mods/GuardedGrip.mp4"),

  sellPrice: 540,

  effect: "Superior Shotgun Grip Mod",

  description:
    "Greatly increases ready speed and stability.",

  highlightTerms: [
    "ready speed",
    "stability",
    "equip speed",
    "recoil",
  ],

  lore:
    "Stabilized tactical grip reducing recoil transfer while improving handling responsiveness.",

  tags: [
    "mod",
    "grip",
    "shotgun mod",
    "stability",
    "recoil",
    "handling",
    "equip speed",
    "shotgun",
  ],

  /*
    DEFAULT DISPLAY
  */

  stats: [
    {
      label: "Equip Speed",
      value: 0,
      modifier: -0.31,
      unit: "s",
    },
    {
      label: "Recoil",
      value: 0,
      modifier: -20,
      unit: "%",
    },
  ],

  /*
    MULTI-WEAPON PROFILES
  */

  weaponStatProfiles: [
    {
      weaponId: "wstr-combat-shotgun",
      weaponName: "WSTR Combat Shotgun",

      stats: [
        {
          label: "Equip Speed",
          value: 0.90,
          modifier: -0.28,
          unit: "s",
        },
        {
          label: "Recoil",
          value: 50.5,
          modifier: -18,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "misriah-2442",
      weaponName: "Misriah 2442",

      stats: [
        {
          label: "Equip Speed",
          value: 0.90,
          modifier: -0.40,
          unit: "s",
        },
        {
          label: "Recoil",
          value: 93,
          modifier: -28,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "v85-circuit-breaker",
      weaponName: "V85 Circuit Breaker",

      stats: [
        {
          label: "Equip Speed",
          value: 0.76,
          modifier: -0.31,
          unit: "s",
        },
        {
          label: "Recoil",
          value: 86.5,
          modifier: -20,
          unit: "%",
        },
      ],
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
    {
      label: "Traxus Armory",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "traxus-armory",
      },
    },
  ],
};
import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const quickdrawGrip: ItemEntry = {
  id: "quickdraw-grip",
  name: "Quickdraw Grip",

  category: "mod",
  rarity: "superior",

  icon: asset("items/icons/Quickdraw-grip.png"),
  image: asset("items/icons/Quickdraw-grip.png"),
  render: asset("items/icons/Quickdraw-grip.png"),
  video: asset("items/videos/QuickdrawGrip.mp4"),

  sellPrice: 540,

  effect: "Superior Shotgun Grip Mod",

  description: "Greatly increases movement and ready speeds with this weapon.",

  highlightTerms: ["movement", "ready speeds", "equip speed", "weight"],

  lore: "Compatible Weapons: WSTR Combat Shotgun, Misriah 2442, V85 Circuit Breaker",

  tags: [
    "mod",
    "grip",
    "shotgun mod",
    "handling",
    "equip speed",
    "movement",
    "shotgun",
    "wstr combat shotgun",
    "misriah 2442",
    "v85 circuit breaker",
  ],

  weaponStatProfiles: [
    {
      weaponId: "wstr-combat-shotgun",
      weaponName: "WSTR Combat Shotgun",
      stats: [
        {
          label: "Equip Speed",
          value: 0.9,
          modifier: -0.34,
          unit: "s",
        },
        {
          label: "Weight",
          value: 36,
          modifier: -16,
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
          value: 0.9,
          modifier: -0.45,
          unit: "s",
        },
        {
          label: "Weight",
          value: 36,
          modifier: -16,
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
          label: "Weight",
          value: 32,
          modifier: -14,
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
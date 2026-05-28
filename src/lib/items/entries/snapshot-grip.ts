import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const snapshotGrip: ItemEntry = {
  id: "snapshot-grip",
  name: "Snapshot Grip",

  category: "mod",
  rarity: "superior",
  modSubcategory: "shotgun-grip",

  icon: asset("items/icons/snapshot-grip.png"),
  image: asset("items/icons/snapshot-grip.png"),
  render: asset("items/icons/snapshot-grip.png"),
  video: asset("items/videos/mods/snapshot-grip.mp4"),

  sellPrice: 540,

  effect: "Superior Shotgun Grip Mod",

  description:
    "Greatly increases accuracy while moving and ADS speed.",

  highlightTerms: [
    "accuracy",
    "moving",
    "ADS speed",
  ],

  lore:
    "Compatible Weapons: WSTR Combat Shotgun, Misriah 2442, V85 Circuit Breaker",

  tags: [
    "mod",
    "shotgun grip",
    "snapshot grip",
    "accuracy",
    "movement",
    "ads speed",
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
          label: "ADS Speed",
          value: 0,
          modifier: -0.17,
          unit: "s",
        },
      ],
    },
    {
      weaponId: "misriah-2442",
      weaponName: "Misriah 2442",
      stats: [
        {
          label: "ADS Speed",
          value: 0,
          modifier: -0.17,
          unit: "s",
        },
      ],
    },
    {
      weaponId: "v85-circuit-breaker",
      weaponName: "V85 Circuit Breaker",
      stats: [
        {
          label: "ADS Speed",
          value: 0,
          modifier: -0.17,
          unit: "s",
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
import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const accuPointBarrel: ItemEntry = {
  id: "accu-point-barrel",

  name: "Accu-Point Barrel",

  category: "mod",
  rarity: "superior",
  modSubcategory: "ion-dampener",

  icon: asset("items/icons/AccuPointBarrel.png"),
  image: asset("items/icons/AccuPointBarrel.png"),
  render: asset("items/icons/AccuPointBarrel.png"),
  video: asset("items/videos/mods/AccuPointBarrel.webm"),

  sellPrice: 540,

  effect: "Superior Ion Dampener Mod",

  description:
    "Greatly increases ADS accuracy and aim assist.",

  lore:
    "A precision ion dampener barrel tuned to stabilize sight alignment and improve target acquisition during aimed fire.",

  highlightTerms: [
    "accu-point barrel",
    "ADS accuracy",
    "ADS spread",
    "aim assist",
    "ion dampener",
    "v66 lookout",
    "v99 channel rifle",
  ],

  weaponStatProfiles: [
    {
      weaponId: "v99-channel-rifle",
      weaponName: "V99 Channel Rifle",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.35, unit: "°" },
        { label: "Aim Assist", value: 0, modifier: 0.1, unit: "°" },
      ],
    },

    {
      weaponId: "v66-lookout",
      weaponName: "V66 Lookout",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.24, unit: "°" },
        { label: "Aim Assist", value: 0, modifier: 0.12, unit: "°" },
      ],
    },
  ],

  tags: [
    "mod",
    "ion dampener",
    "barrel",
    "accu-point barrel",
    "ADS accuracy",
    "ADS spread",
    "aim assist",
    "v66 lookout",
    "v99 channel rifle",
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
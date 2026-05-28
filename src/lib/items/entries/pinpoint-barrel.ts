import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const pinpointBarrel: ItemEntry = {
  id: "pinpoint-barrel",

  name: "Pinpoint Barrel",

  category: "mod",
  rarity: "superior",
  modSubcategory: "underbarrel",

  icon: asset("items/icons/pinpoint-barrel.png"),
  image: asset("items/icons/pinpoint-barrel.png"),
  render: asset("items/icons/pinpoint-barrel.png"),
  video: asset("items/videos/mods/pinpoint-barrel.mp4"),

  sellPrice: 540,

  effect: "Superior Underbarrel Mod",

  description:
    "Greatly increases stability and range.",

  highlightTerms: [
    "stability",
    "range",
    "recoil",
  ],

  lore:
    "Precision-balanced barrel assembly designed to stabilize spread patterns and improve long-range consistency during sustained engagements.",

  tags: [
    "mod",
    "underbarrel mod",
    "barrel",
    "stability",
    "recoil",
    "range",
    "weapon attachment",
    "wstr combat shotgun",
    "misriah 2442",
  ],

  weaponStatProfiles: [
    {
      weaponId: "wstr-combat-shotgun",
      weaponName: "WSTR Combat Shotgun",

      stats: [
        {
          label: "Recoil",
          value: 50.5,
          modifier: -22.5,
          unit: "%",
        },
        {
          label: "Range",
          value: 11,
          modifier: 2,
          unit: "M",
        },
      ],
    },

    {
      weaponId: "misriah-2442",
      weaponName: "Misriah 2442",

      stats: [
        {
          label: "Recoil",
          value: 93,
          modifier: -35,
          unit: "%",
        },
        {
          label: "Range",
          value: 11,
          modifier: 2,
          unit: "M",
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
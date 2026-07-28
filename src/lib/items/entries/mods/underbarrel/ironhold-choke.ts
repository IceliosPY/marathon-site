import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const ironholdChoke: ItemEntry = {
  id: "ironhold-choke",
  name: "Ironhold Choke",
  category: "mod",
  rarity: "superior",
  modSubcategory: "underbarrel",
  icon: asset("items/icons/ironhold-choke.png"),
  image: asset("items/icons/ironhold-choke.png"),
  render: asset("items/icons/ironhold-choke.png"),
  video: asset("items/videos/mods/IronholdChoke.mp4"),

  sellPrice: 540,

  effect: "Superior Underbarrel Mod",

  description: "Greatly increases aim assist and stability.",

  highlightTerms: ["aim assist", "stability"],

  lore: "Compatible Weapons: WSTR Combat Shotgun, Misriah 2442",

  tags: [
    "mod",
    "underbarrel mod",
    "aim assist",
    "stability",
    "recoil",
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
          value: 0,
          modifier: -18,
          unit: "%",
        },
        {
          label: "Aim Assist",
          value: 0,
          modifier: 3.6,
          unit: "°",
        },
      ],
    },
    {
      weaponId: "misriah-2442",
      weaponName: "Misriah 2442",
      stats: [
        {
          label: "Recoil",
          value: 0,
          modifier: -28,
          unit: "%",
        },
        {
          label: "Aim Assist",
          value: 0,
          modifier: 0.8,
          unit: "°",
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
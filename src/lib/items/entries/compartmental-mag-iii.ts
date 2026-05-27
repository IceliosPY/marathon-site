import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const compartmentalMagIII: ItemEntry = {
  id: "compartmental-mag-iii",
  name: "Compartmental Mag III",
  category: "mod",
  rarity: "superior",

  icon: asset("items/icons/compartmental-mag-iii.png"),
  image: asset("items/icons/compartmental-mag-iii.png"),
  render: asset("items/icons/compartmental-mag-iii.png"),
  video: asset("items/videos/mods/compartmental-mag-iii.mp4"),

  sellPrice: 540,

  effect: "Superior Magazine Mod",

  description: "Greatly increases magazine sizes and range.",

  highlightTerms: ["magazine sizes", "range"],

  lore: "Compatible Weapons: Misriah 2442",

  tags: [
    "mod",
    "magazine mod",
    "magazine",
    "magazine size",
    "range",
    "weapon attachment",
    "misriah 2442",
  ],

  weaponStatProfiles: [
    {
      weaponId: "misriah-2442",
      weaponName: "Misriah 2442",
      stats: [
        {
          label: "Range",
          value: 0,
          modifier: 2,
          unit: "M",
        },
        {
          label: "Magazine",
          value: 0,
          modifier: 3,
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
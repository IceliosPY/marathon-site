import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const kingmakerMag: ItemEntry = {
  id: "kingmaker-mag",

  name: "Kingmaker Mag",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "precision-magazine",

  icon: asset("items/icons/KingmakerMag.png"),
  image: asset("items/icons/KingmakerMag.png"),
  render: asset("items/icons/KingmakerMag.png"),
  video: asset("items/videos/mods/KingmakerMag.webm"),

  sellPrice: 1620,

  effect: "Prestige Precision Magazine Mod",

  description:
    "A unique mod for the Longshot. Increases reload speed and magazine size.",

  lore:
    "A handcrafted precision magazine designed for elite marksmen. Every headshot fuels the weapon's momentum, rewarding accuracy with increasing fire rate.",

  highlightTerms: [
    "kingmaker mag",
    "pure skill",
    "longshot",
    "reload speed",
    "magazine size",
    "headshots",
    "rate of fire",
    "precision magazine",
  ],

  prestigeFeature: {
    title: "Pure Skill",
    description:
      "Headshots increase rate of fire. Stacks up to three times.",
    color: "yellow",
  },

  weaponStatProfiles: [
    {
      weaponId: "longshot",
      weaponName: "Longshot",
      stats: [
        {
          label: "Reload Speed",
          value: 0,
          modifier: -1.13,
          unit: "S",
        },
        {
          label: "Magazine",
          value: 0,
          modifier: 9,
          unit: "",
        },
      ],
    },
  ],

  tags: [
    "mod",
    "prestige",
    "precision magazine",
    "kingmaker mag",
    "pure skill",
    "longshot",
    "reload speed",
    "magazine",
    "headshot",
    "rate of fire",
    "weapon mod",
  ],

  sources: [
    {
      label: "Prestige Loot",
      kind: "world-loot",
    },
  ],
};
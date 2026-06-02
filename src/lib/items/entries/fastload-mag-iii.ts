import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const fastloadMagIII: ItemEntry = {
  id: "fastload-mag-iii",

  name: "Fastload Mag III",

  category: "mod",
  rarity: "superior",
  modSubcategory: "magazine",

  icon: asset("items/icons/FastloadMagIII.png"),
  image: asset("items/icons/FastloadMagIII.png"),
  render: asset("items/icons/FastloadMagIII.png"),
  video: asset("items/videos/mods/FastloadMagIII.webm"),

  sellPrice: 540,

  effect: "Superior Magazine Mod",

  description:
    "Greatly increases reload speed and magazine size.",

  lore:
    "A reinforced magazine assembly designed for faster cycling and improved ammunition capacity without compromising handling reliability.",

  highlightTerms: [
    "fastload mag iii",
    "reload speed",
    "magazine size",
    "magazine",
    "misriah 2442",
    "weapon mod",
  ],

  weaponStatProfiles: [
    {
      weaponId: "misriah-2442",
      weaponName: "Misriah 2442",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.34, unit: "S" },
        { label: "Magazine", value: 0, modifier: 2, unit: "" },
      ],
    },
  ],

  tags: [
    "mod",
    "magazine",
    "fastload mag",
    "fastload mag iii",
    "reload speed",
    "magazine size",
    "misriah 2442",
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
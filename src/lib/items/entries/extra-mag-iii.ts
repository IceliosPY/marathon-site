import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const extraMagIII: ItemEntry = {
  id: "extra-mag-iii",

  name: "Extra Mag III",

  category: "mod",
  rarity: "superior",
  modSubcategory: "magazine",

  icon: asset("items/icons/ExtraMagIII.png"),
  image: asset("items/icons/ExtraMagIII.png"),
  render: asset("items/icons/ExtraMagIII.png"),
  video: asset("items/videos/mods/ExtraMagIII.webm"),

  sellPrice: 702,

  effect: "Superior Magazine Mod",

  description:
    "Greatly increases magazine size and reload speed.",

  lore:
    "An expanded magazine assembly designed for the Misriah 2442. It improves reload handling while adding extra shell capacity for longer sustained engagements.",

  highlightTerms: [
    "magazine",
    "magazine size",
    "reload speed",
    "misriah 2442",
    "shotgun",
    "sustained fire",
  ],

  weaponStatProfiles: [
    {
      weaponId: "misriah-2442",
      weaponName: "Misriah 2442",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.11, unit: "S" },
        { label: "Magazine", value: 0, modifier: 6, unit: "" },
      ],
    },
  ],

  tags: [
    "mod",
    "superior",
    "magazine",
    "extra mag",
    "reload speed",
    "magazine size",
    "misriah 2442",
    "shotgun mod",
    "weapon mod",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const ramPageMag: ItemEntry = {
  id: "ram-page-mag",

  name: "RAM-Page Mag",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "volt-array",

  icon: asset("items/icons/RamPageMag.png"),
  image: asset("items/icons/RamPageMag.png"),
  render: asset("items/icons/RamPageMag.png"),
  video: asset("items/videos/mods/RamPageMag.webm"),

  sellPrice: 1620,

  effect: "Prestige Volt Array Mod",

  description:
    "A custom-made mod for the V75 SCAR. Increases rate of fire, magazine size, and reload speed.",

  lore:
    "A high-output volt array built around the SM-5 Ragnarok system, designed to push sustained fire beyond normal thermal limits while improving magazine cycling.",

  highlightTerms: [
    "ram-page mag",
    "SM-5 Ragnarok",
    "rate of fire",
    "magazine size",
    "reload speed",
    "volt drain",
    "v75 scar",
  ],

  prestigeFeature: {
    title: "SM-5 Ragnarok",
    description:
      "Rate of fire no longer decreases as heat builds and projectiles ricochet off surfaces, tracking nearby targets.",
    color: "yellow",
  },

  weaponStatProfiles: [
    {
      weaponId: "v75-scar",
      weaponName: "V75 SCAR",
      stats: [
        { label: "Rate of Fire", value: 0, modifier: 300, unit: "RPM" },
        { label: "Reload Speed", value: 0, modifier: -0.44, unit: "S" },
        { label: "Volt Drain", value: 0, modifier: -1.1, unit: "%" },
      ],
    },
  ],

  tags: [
    "mod",
    "prestige",
    "volt array",
    "ram-page mag",
    "sm-5 ragnarok",
    "rate of fire",
    "reload speed",
    "magazine",
    "ricochet",
    "tracking",
    "v75 scar",
    "weapon mod",
  ],

  sources: [
    {
      label: "Prestige Loot",
      kind: "world-loot",
    },
  ],
};
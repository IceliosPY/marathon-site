import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const hiSpeedMag: ItemEntry = {
  id: "hi-speed-mag",

  name: "Hi-Speed Mag",

  category: "mod",
  rarity: "superior",
  modSubcategory: "pistol-magazine",

  icon: asset("items/icons/HiSpeedMag.png"),
  image: asset("items/icons/HiSpeedMag.png"),
  render: asset("items/icons/HiSpeedMag.png"),
  video: asset("items/videos/mods/HiSpeedMag.webm"),

  sellPrice: 378,

  effect: "Superior Pistol Magazine Mod",

  description:
    "Greatly increases reload speed and magazine size.",

  lore:
    "A lightweight high-speed pistol magazine designed to improve reload handling while slightly increasing ammunition capacity.",

  highlightTerms: [
    "hi-speed mag",
    "reload speed",
    "magazine",
    "magazine size",
    "pistol magazine",
    "ce tactical sidearm",
  ],

  tags: [
    "mod",
    "pistol magazine",
    "magazine",
    "reload speed",
    "capacity",
    "ce tactical sidearm",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "ce-tactical-sidearm",
      weaponName: "CE Tactical Sidearm",
      stats: [
        {
          label: "Reload Speed",
          value: 0,
          modifier: -0.52,
          unit: "S",
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
  ],
};
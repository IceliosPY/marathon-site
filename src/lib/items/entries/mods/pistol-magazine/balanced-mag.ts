import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const balancedMag: ItemEntry = {
  id: "balanced-mag",

  name: "Balanced Mag",

  category: "mod",
  rarity: "superior",
  modSubcategory: "pistol-magazine",

  icon: asset("items/icons/BalancedMag.png"),
  image: asset("items/icons/BalancedMag.png"),
  render: asset("items/icons/BalancedMag.png"),
  video: asset("items/videos/mods/BalancedMag.webm"),

  sellPrice: 378,

  effect: "Superior Pistol Magazine Mod",

  description:
    "Greatly increases magazine size and reload speed.",

  lore:
    "A carefully tuned sidearm magazine that strikes a balance between ammunition capacity and rapid reload performance. Popular among operators who value consistency over specialization.",

  highlightTerms: [
    "balanced mag",
    "magazine size",
    "reload speed",
    "pistol magazine",
    "ce tactical sidearm",
    "capacity",
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
          modifier: -0.22,
          unit: "S",
        },
        {
          label: "Magazine",
          value: 0,
          modifier: 5,
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
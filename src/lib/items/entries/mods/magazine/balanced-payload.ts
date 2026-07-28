import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const balancedPayload: ItemEntry = {
  id: "balanced-payload",

  name: "Balanced Payload",

  category: "mod",
  rarity: "superior",
  modSubcategory: "magazine",

  icon: asset("items/icons/balanced-payload.png"),
  image: asset("items/icons/balanced-payload.png"),
  render: asset("items/icons/balanced-payload.png"),
  video: asset("items/videos/mods/balanced-payload.mp4"),

  sellPrice: 621,

  effect: "Superior Magazine Mod",

  description:
    "Greatly increases magazine size, reload speed, and movement speed with this weapon.",

  highlightTerms: [
    "magazine size",
    "reload speed",
    "movement speed",
    "weight",
    "magazine",
  ],

  tags: [
    "mod",
    "magazine",
    "magazine mod",
    "reload speed",
    "movement speed",
    "weight",
    "ares rg",
    "railgun",
    "weapon attachment",
  ],

  weaponStatProfiles: [
    {
      weaponId: "ares-rg",
      weaponName: "ARES RG",
      stats: [
        {
          label: "Weight",
          value: 0,
          modifier: -2,
          unit: "%",
        },
        {
          label: "Reload Speed",
          value: 0,
          modifier: -0.65,
          unit: "S",
        },
        {
          label: "Magazine",
          value: 0,
          modifier: 2,
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
      label: "UESC Armory",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "uesc-armory",
      },
    },
  ],
};
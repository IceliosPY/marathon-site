import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const hiVelocityPayload: ItemEntry = {
  id: "hi-velocity-payload",

  name: "Hi-Velocity Payload",

  category: "mod",
  rarity: "superior",
  modSubcategory: "magazine",

  icon: asset("items/icons/hi-velocity-payload.png"),
  image: asset("items/icons/hi-velocity-payload.png"),
  render: asset("items/icons/hi-velocity-payload.png"),
  video: asset("items/videos/mods/hi-velocity-payload.mp4"),

  sellPrice: 621,

  effect: "Superior Magazine Mod",

  description:
    "Greatly increases magazine size and range.",

  highlightTerms: [
    "magazine size",
    "range",
  ],

  lore:
    "High-velocity payload assembly built for the ARES RG. The reinforced projectile feed improves ballistic range while expanding magazine capacity.",

  weaponStatProfiles: [
    {
      weaponId: "ares-rg",
      weaponName: "ARES RG",
      stats: [
        {
          label: "Range",
          value: 0,
          modifier: 15,
          unit: "M",
        },
        {
          label: "Magazine",
          value: 0,
          modifier: 4,
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

  tags: [
    "mod",
    "magazine",
    "magazine mod",
    "payload",
    "range",
    "ares rg",
    "railgun",
    "weapon attachment",
  ],
};
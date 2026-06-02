import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const foundationShield: ItemEntry = {
  id: "foundation-shield",

  name: "Foundation Shield",

  category: "mod",
  rarity: "superior",
  modSubcategory: "shield",

  icon: asset("items/icons/FoundationShield.png"),
  image: asset("items/icons/FoundationShield.png"),
  render: asset("items/icons/FoundationShield.png"),
  video: asset("items/videos/mods/FoundationShield.webm"),

  sellPrice: 621,

  effect: "Superior Shield Mod",

  description:
    "Greatly increases accuracy while crouched and ADS accuracy.",

  lore:
    "A reinforced shield module designed for heavy platforms. It anchors the weapon during defensive firing stances and projects a short-duration energy shield against incoming damage.",

  weaponStatProfiles: [
    {
      weaponId: "conquest-lmg",
      weaponName: "Conquest LMG",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.6, unit: "°" },
        { label: "Crouch Spread Bonus", value: 0, modifier: -60.0, unit: "%" },
      ],
    },
    {
      weaponId: "retaliator-lmg",
      weaponName: "Retaliator LMG",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.17, unit: "°" },
        { label: "Crouch Spread Bonus", value: 0, modifier: -45.0, unit: "%" },
      ],
    },
    {
      weaponId: "demolition-hmg",
      weaponName: "Demolition HMG",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.09, unit: "°" },
        { label: "Crouch Spread Bonus", value: 0, modifier: -45.0, unit: "%" },
      ],
    },
  ],

  specialEffects: [
    {
      name: "Assault Shield",
      description:
        "Activate an energy shield that absorbs incoming damage.",
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
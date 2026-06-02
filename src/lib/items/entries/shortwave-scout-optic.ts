import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const shortwaveScoutOptic: ItemEntry = {
  id: "shortwave-scout-optic",

  name: "Shortwave Scout Optic",

  category: "mod",
  rarity: "superior",
  modSubcategory: "assault-optic",

  icon: asset("items/icons/ShortwaveScoutOptic.png"),
  image: asset("items/icons/ShortwaveScoutOptic.png"),
  render: asset("items/icons/ShortwaveScoutOptic.png"),
  video: asset("items/videos/mods/ShortwaveScoutOptic.webm"),

  sellPrice: 702,

  effect: "Superior Assault Optic Mod",

  description:
    "Increases zoom and ADS accuracy. Decreases ADS speed.",

  lore:
    "A compact scout optic tuned for assault platforms. Its shortwave thermal imaging package improves target acquisition at range, at the cost of slower sight handling.",

  highlightTerms: [
    "shortwave scout optic",
    "thermal sight",
    "zoom",
    "ADS accuracy",
    "ADS speed",
    "assault optic",
  ],

  tags: [
    "mod",
    "optic",
    "scope",
    "assault optic",
    "thermal sight",
    "zoom",
    "ads accuracy",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "overrun-ar",
      weaponName: "Overrun AR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.14, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.04, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.1, unit: "X" },
      ],
    },
  
    {
      weaponId: "impact-har",
      weaponName: "Impact H-AR",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.18, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.20, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.1, unit: "X" },
      ],
    },

    {
      weaponId: "v75-scar",
      weaponName: "V75 Scar",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.13, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.04, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.1, unit: "X" },
      ],
    },

    {
      weaponId: "brrt-smg",
      weaponName: "BRRT SMG",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.35, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.03, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.3, unit: "X" },
      ],
    },

    {
      weaponId: "copperhead-rf",
      weaponName: "Copperhead RF",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.27, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.02, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.3, unit: "X" },
      ],
    },

    {
      weaponId: "bully-smg",
      weaponName: "Bully SMG",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.13, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.03, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.3, unit: "X" },
      ],
    },
  ],

  specialEffects: [
    {
      name: "Thermal Sight",
      description:
        "This sight highlights hostile heat signatures.",
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
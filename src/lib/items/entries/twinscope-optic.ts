import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const twinscopeOptic: ItemEntry = {
  id: "twinscope-optic",

  name: "Twinscope Optic",

  category: "mod",
  rarity: "superior",
  modSubcategory: "assault-optic",

  icon: asset("items/icons/TwinscopeOptic.png"),
  image: asset("items/icons/TwinscopeOptic.png"),
  render: asset("items/icons/TwinscopeOptic.png"),
  video: asset("items/videos/mods/TwinscopeOptic.webm"),

  sellPrice: 621,

  effect: "Superior Assault Optic Mod",

  description:
    "Greatly increases zoom, ADS speed, and ADS accuracy.",

  lore:
    "A dual-mode assault optic designed for rapid target acquisition and flexible zoom control during sustained engagements.",

  highlightTerms: [
    "twinscope optic",
    "toggle zoom",
    "ADS speed",
    "ADS accuracy",
    "zoom",
    "assault optic",
  ],

  tags: [
    "mod",
    "optic",
    "scope",
    "assault optic",
    "toggle zoom",
    "ads speed",
    "ads accuracy",
    "zoom",
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
        { label: "ADS Spread", value: 0, modifier: -0.09, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.10, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.1, unit: "X" },
      ],
    },

    {
      weaponId: "brrt-smg",
      weaponName: "BRRT SMG",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.25, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.08, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.3, unit: "X" },
      ],
    },

    {
      weaponId: "copperhead-rf",
      weaponName: "Copperhead RF",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.20, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.10, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.3, unit: "X" },
      ],
    },

    {
      weaponId: "bully-smg",
      weaponName: "Bully SMG",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.10, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: -0.08, unit: "S" },
        { label: "Zoom", value: 0, modifier: 0.3, unit: "X" },
      ],
    },
  ],

  specialEffects: [
    {
      name: "Toggle Zoom",
      description:
        "Press Toggle Zoom while aiming down sights to switch zoom levels.",
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
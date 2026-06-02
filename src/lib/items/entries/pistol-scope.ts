import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const pistolScope: ItemEntry = {
  id: "pistol-scope",

  name: "Pistol Scope",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "pistol-optic",

  icon: asset("items/icons/PistolScope.png"),
  image: asset("items/icons/PistolScope.png"),
  render: asset("items/icons/PistolScope.png"),
  video: asset("items/videos/mods/PistolScope.webm"),

  sellPrice: 1620,

  effect: "Prestige Pistol Optic Mod",

  description:
    "A custom-made mod for the Magnum MC. Greatly increases zoom and ADS speed.",

  lore:
    "Specialized high-zoom pistol optic designed for the Magnum MC. Its reinforced sighting module improves target acquisition while enabling precision shots that reward shield-breaking follow-up fire.",

  highlightTerms: [
    "high zoom optic",
    "ADS speed",
    "zoom",
    "shields",
    "magnum mc",
    "pistol optic",
  ],

  prestigeFeature: {
    title: "Shield Surge Optic",
    description:
      "Precision hits with this weapon restore a small amount of shields.",
    color: "yellow",
  },

  weaponStatProfiles: [
    {
      weaponId: "magnum-mc",
      weaponName: "Magnum MC",

      stats: [
        {
          label: "ADS Speed",
          value: 0.38,
          modifier: -0.2,
          unit: "S",
        },
        {
          label: "Zoom",
          value: 1.4,
          modifier: 1.1,
          unit: "X",
        },
      ],
    },
  ],

  tags: [
    "mod",
    "prestige",
    "pistol optic",
    "pistol scope",
    "magnum mc",
    "ads speed",
    "zoom",
    "shield surge",
    "precision hits",
    "weapon mod",
  ],

  sources: [
    {
      label: "Prestige Loot",
      kind: "world-loot",
    },
  ],
};
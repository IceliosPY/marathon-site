import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const rodeoMag: ItemEntry = {
  id: "rodeo-mag",

  name: "Rodeo Mag",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "assault-magazine",

  icon: asset("items/icons/RodeoMag.png"),
  image: asset("items/icons/RodeoMag.png"),
  render: asset("items/icons/RodeoMag.png"),
  video: asset("items/videos/mods/RodeoMag.webm"),

  sellPrice: 1620,

  effect: "Prestige Assault Magazine Mod",

  description:
    "A custom-made mod for the Bully SMG. Increases rate of fire, stability, and magazine size.",

  highlightTerms: [
    "rate of fire",
    "stability",
    "magazine",
    "bully smg",
    "adaptive feed",
    "sustained fire",
  ],

  tags: [
    "mod",
    "prestige",
    "assault magazine",
    "bully smg",
    "rate of fire",
    "stability",
    "magazine",
    "weapon mod",
  ],

  prestigeFeature: {
    title: "Rodeo Mag",
    description:
      "This weapon's fire rate greatly increases over time.",
    color: "yellow",
  },

  weaponStatProfiles: [
    {
      weaponId: "bully-smg",
      weaponName: "Bully SMG",

      stats: [
        {
          label: "Rate of Fire",
          value: 540,
          modifier: 60,
          unit: "RPM",
        },
        {
          label: "Recoil",
          value: 82,
          modifier: -13.2,
          unit: "%",
        },
        {
          label: "Magazine",
          value: 23,
          modifier: 49,
        },
      ],
    },
  ],

  sources: [
    {
      label: "Prestige Loot",
      kind: "world-loot",
    },
  ],
};
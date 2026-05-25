import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const fullAutoSelector: ItemEntry = {
  id: "full-auto-selector",

  name: "Full-Auto Selector",

  category: "mod",
  rarity: "prestige",

  icon: asset("items/icons/FullAutoSelector.png"),
  image: asset("items/icons/FullAutoSelector.png"),
  render: asset("items/icons/FullAutoSelector.png"),
  video: asset("items/videos/mods/FullAutoSelector.webm"),

  sellPrice: 1620,

  effect: "Prestige Shotgun Grip Mod",

  description:
    "A custom-made mod for the Misriah 2442. Increases rate of fire.",

  highlightTerms: [
    "full auto",
    "rate of fire",
    "spread angle",
    "misriah",
    "shotgun",
  ],

  lore:
    "Experimental selector assembly reworking the Misriah 2442 cycling system into a fully automatic close-quarters platform.",

  tags: [
    "mod",
    "shotgun mod",
    "misriah",
    "full auto",
    "rate of fire",
    "prestige",
    "weapon mod",
  ],

  stats: [
    {
      label: "Rate of Fire",
      value: 58,
      modifier: 92,
      unit: "RPM",
    },
    {
      label: "Spread Angle",
      value: 4.8,
      modifier: -1.25,
      unit: "°",
    },
  ],

  prestigeFeature: {
    title: "Full-Auto Selector",
    description: "This weapon fires full auto.",
    color: "yellow",
  },
  weaponStatProfiles: [
    {
      weaponId: "misriah-2442",
      weaponName: "Misriah 2442",

      stats: [
        {
          label: "Rate of Fire",
          value: 58,
          modifier: 92,
          unit: "RPM",
        },
        {
          label: "Spread Angle",
          value: 4.8,
          modifier: -1.25,
          unit: "°",
        },
      ],
    },
  ],


  sources: [
  {
    label: "Misriah 2442",
    kind: "other",
    target: {
      type: "page",
      id: "misriah-2442",
    },
  },
],
};
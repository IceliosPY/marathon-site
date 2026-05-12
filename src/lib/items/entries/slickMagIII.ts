import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const slickMagIII: ItemEntry = {
  id: "slick-mag-iii",
  name: "Slick Mag III",
  category: "mod",
  rarity: "superior",

  icon: asset("items/icons/SlickMagIII.png"),
  image: asset("items/icons/SlickMagIII.png"),
  render: asset("items/icons/SlickMagIII.png"),
  video: asset("items/videos/SlickMagIII.mp4"),

  sellPrice: 540,

  effect: "Superior Magazine Mod",

  description:
    "Greatly increases rate of fire and magazine size.",

  highlightTerms: [
    "rate of fire",
    "magazine size",
  ],

  lore: "Compatible Weapons: Misriah 2442",

  tags: [
    "mod",
    "magazine mod",
    "rate of fire",
    "magazine",
    "weapon attachment",
    "misriah 2442",
  ],

  stats: [
    {
      label: "Rate of Fire",
      value: 0,
      modifier: 44,
      unit: " RPM",
    },
    {
      label: "Magazine",
      value: 0,
      modifier: 2,
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
    {
      label: "Traxus Armory",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "Traxus-armory",
      },
    },
  ],
};
import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const earlyWarningSystem: ItemEntry = {
  id: "early-warning-system",

  name: "Early Warning System",

  category: "core",
  rarity: "prestige",

  icon: asset("items/icons/intuition.png"),
  image: asset("items/icons/intuition.png"),
  render: asset("items/icons/intuition.png"),
  video: asset("items/videos/cores/intuition.mp4"),

  sellPrice: 3000,
  buyPrice: 22500,

  effect: "Prestige Core",

  highlightTerms: [
    "hostile runner",
    "runner",
    "nearby",
    "hud",
    "alert",
    "detection",
    "recon",
  ],

  tags: [
    "core",
    "prestige core",
    "recon",
    "recon shell",
    "runner",
    "hostile runner",
    "detection",
    "awareness",
    "tracking",
    "hud",
    "alert",
  ],

  prestigeFeature: {
    title: "Early Warning System",
    description:
      "You receive an alert on your HUD when a hostile Runner is nearby.",
    color: "yellow",
  },

  sources: [
    {
      label: "Prestige Cache",
      kind: "activity",
    },
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
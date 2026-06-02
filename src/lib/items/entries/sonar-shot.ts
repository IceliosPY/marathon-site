import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const sonarShot: ItemEntry = {
  id: "sonar-shot",

  name: "Sonar Shot",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "ion-dampener",

  icon: asset("items/icons/SonarShot.png"),
  image: asset("items/icons/SonarShot.png"),
  render: asset("items/icons/SonarShot.png"),
  video: asset("items/videos/mods/SonarShot.webm"),

  sellPrice: 1620,

  effect: "Prestige Ion Dampener Mod",

  description:
    "A custom-made mod for the V66 Lookout. Greatly increases range and stability.",

  lore:
    "A precision ion dampener tuned for the V66 Lookout, stabilizing long-range fire while feeding target data into a sonar-pulse detection system.",

  highlightTerms: [
    "sonar shot",
    "precision eliminations",
    "sonar pulse",
    "revealing nearby hostiles",
    "range",
    "stability",
    "v66 lookout",
  ],

  prestigeFeature: {
    title: "Sonar Shot",
    description:
      "Precision eliminations or downs trigger a sonar pulse, revealing nearby hostiles if present.",
    color: "yellow",
  },

  weaponStatProfiles: [
    {
      weaponId: "v66-lookout",
      weaponName: "V66 Lookout",
      stats: [
        { label: "Recoil", value: 0, modifier: -29.6, unit: "%" },
        { label: "Range", value: 0, modifier: 17, unit: "M" },
      ],
    },
  ],

  tags: [
    "mod",
    "prestige",
    "ion dampener",
    "sonar shot",
    "v66 lookout",
    "precision eliminations",
    "sonar pulse",
    "reveal",
    "range",
    "recoil",
    "stability",
    "weapon mod",
  ],

  sources: [
    {
      label: "Prestige Loot",
      kind: "world-loot",
    },
  ],
};
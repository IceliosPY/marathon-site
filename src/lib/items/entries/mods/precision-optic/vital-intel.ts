import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const vitalIntel: ItemEntry = {
  id: "vital-intel",

  name: "Vital Intel",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "precision-optic",

  icon: asset("items/icons/vital-intel.png"),
  image: asset("items/icons/vital-intel.png"),
  render: asset("items/icons/vital-intel.png"),
  video: asset("items/videos/mods/vital-intel.mp4"),

  sellPrice: 1620,

  effect: "Prestige Precision Optic Mod",

  description:
    "A custom-made mod for the Stryder M1T. Greatly increases handling and ADS speed.",

  weaponStatProfiles: [
    {
      weaponId: "stryder-m1t",
      weaponName: "Stryder M1T",
      stats: [
        { label: "Equip Speed", value: 0, modifier: -0.14, unit: "S" },
        { label: "ADS Speed", value: 0, modifier: -0.07, unit: "S" },
      ],
    },
  ],

  specialEffects: [
    {
      name: "Threat Detector",
      description:
        "Enables Proximity Sensor on radar.",
    },
    {
      name: "Combat Awareness",
      description:
        "When hostiles are nearby, this weapon gains increased handling, aim assist, and equip speed.",
    },
  ],

  highlightTerms: [
    "Proximity Sensor",
    "handling",
    "aim assist",
    "equip speed",
    "hostiles nearby",
  ],

  lore:
    "An advanced reconnaissance package designed for Stryder operators. Integrated threat-analysis software continuously scans nearby movement and optimizes weapon responsiveness during close encounters.",

  tags: [
    "mod",
    "optic",
    "precision optic",
    "prestige",
    "stryder",
    "proximity sensor",
    "threat detector",
    "handling",
    "aim assist",
    "recon",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
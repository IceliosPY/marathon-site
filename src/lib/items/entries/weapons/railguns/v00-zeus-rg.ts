import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const v00ZeusRg: ItemEntry = {
  id: "v00-zeus-rg",

  name: "V00 ZEUS RG",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/v00-zeus-rg.png"),
  image: asset("items/icons/v00-zeus-rg.png"),
  render: asset("items/icons/v00-zeus-rg.png"),
  video: asset("items/videos/weapons/v00-zeus-rg.mp4"),

  modelParts: {
    body: asset("items/models/weapons/zeus/v002_Railgun_default.glb"),
    sight: asset("items/models/weapons/zeus/mod_sight_default.glb"),
    magazine: asset("items/models/weapons/zeus/mod_cell_default.glb"),
    barrel: asset("items/models/weapons/zeus/mod_generator_default.glb"),
  },

  sellPrice: 6000,

  description:
    "Anti-materiel railgun. Fires automatically once fully charged.",

  effect: "Standard Railgun",

  lore:
    "High-output UESC rail platform designed for anti-materiel engagements. Its automated discharge system releases a charged shot as soon as the weapon reaches full power.",

  ammo: {
    itemId: "volt-cell",
    label: "Volt Cell",
    icon: asset("items/icons/volt-cell.png"),
  },

  possibleEffects: [
    {
      id: "enduring",
      label: "Enduring",
      description:
        "First 3 extractions increase value by 75% of base value each. After that, +20% per extraction.",
      simulation: {
        type: "enduring",
        firstExtractionBonusRate: 0.75,
        firstExtractionLimit: 3,
        laterExtractionBonusRate: 0.2,
        defaultExtractions: 1,
        maxExtractions: 10,
      },
    },
  ],

  stats: [
    {
      label: "Firepower",
      value: 150,
      max: 220,
      details: [
        { label: "Damage", value: "100.0" },
        { label: "Precision", value: "1.5" },
        { label: "Rate of Fire", value: "90 RPM" },
      ],
    },

    {
      label: "Accuracy",
      value: 74.8,
      max: 100,
      details: [
        { label: "Hipfire Spread", value: "4.10°" },
        { label: "ADS Spread", value: "0.0°" },
        { label: "Crouch Spread Bonus", value: "60.0%" },
        { label: "Moving Inaccuracy", value: "90.9%" },
      ],
    },

    {
      label: "Handling",
      value: 40,
      max: 100,
      details: [
        { label: "Equip Speed", value: "0.94S" },
        { label: "ADS Speed", value: "0.55S" },
        { label: "Weight", value: "38.0%" },
        { label: "Recoil", value: "100.0%" },
        { label: "Aim Assist", value: "0.83°" },
        { label: "Reload Speed", value: "3.50S" },
        { label: "Charge Time", value: "1.0S" },
      ],
    },

    {
      label: "Range",
      value: 55,
      max: 200,
      unit: "M",
    },

    {
      label: "Volt Drain",
      value: 20,
      max: 100,
      unit: "%",
    },

    {
      label: "Zoom",
      value: 2.0,
      max: 8,
      unit: "X",
    },
  ],

  acceptedModSubcategories: [
    "chip",
    "generator",
    "volt-cell",
  ],

  tags: [
    "weapon",
    "railgun",
    "anti-materiel",
    "energy weapon",
    "volt weapon",
    "charged",
    "uesc",
    "v00",
    "zeus",
  ],
};
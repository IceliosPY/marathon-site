import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const twinTapHbr: ItemEntry = {
  id: "twin-tap-hbr",

  name: "Twin Tap HBR",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/TwinTapHBR.png"),
  image: asset("items/icons/TwinTapHBR.png"),
  render: asset("items/icons/TwinTapHBR.png"),
  video: asset("items/videos/weapons/TwinTapHBR.mp4"),

  modelParts: {
    body: asset("items/models/weapons/twintap/v004_Burst_heavy_01_default.glb"),
    sight: asset("items/models/weapons/twintap/mod_sight_default.glb"),
    magazine: asset("items/models/weapons/twintap/mod_magazine_default.glb"),
    barrel: asset("items/models/weapons/twintap/mod_barrel_default.glb"),
  },

  sellPrice: 2800,

  description:
    "Burst-fire heavy ballistic precision rifle with dual-round delivery system.",

  effect: "Standard Precision Rifle",

  lore:
    "High-impact precision platform engineered around a twin-shot burst mechanism, delivering exceptional stopping power with disciplined trigger control.",

  ammo: {
    itemId: "heavy-rounds",
    label: "Heavy Rounds",
    icon: asset("items/icons/heavy-rounds.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 28.9,
      max: 220,
      details: [
        { label: "Firepower", value: "28.9" },
        { label: "Damage", value: "17.0" },
        { label: "Precision", value: "1.7" },
        { label: "Rate of Fire", value: "420 RPM" },
      ],
    },
    {
      label: "Accuracy",
      value: 59.8,
      max: 100,
      details: [
        { label: "Hipfire Spread", value: "2.24°" },
        { label: "ADS Spread", value: "1.29°" },
        { label: "Crouch Spread Bonus", value: "0.0%" },
        { label: "Moving Inaccuracy", value: "81.8%" },
      ],
    },
    {
      label: "Handling",
      value: 51,
      max: 100,
      details: [
        { label: "Equip Speed", value: "0.94S" },
        { label: "ADS Speed", value: "0.35S" },
        { label: "Weight", value: "28.0%" },
        { label: "Recoil", value: "68.0%" },
        { label: "Aim Assist", value: "1.61°" },
        { label: "Reload Speed", value: "2.37S" },
      ],
    },
    {
      label: "Range",
      value: 48,
      max: 100,
      unit: "M",
    },
    {
      label: "Magazine",
      value: 20,
      max: 60,
    },
    {
      label: "Zoom",
      value: 1.4,
      max: 4,
      unit: "X",
    },
  ],

  acceptedModSubcategories: [
    "chip",
    "precision-optic",
    "precision-magazine",
    "precision-barrel",
  ],

  tags: [
    "weapon",
    "precision rifle",
    "heavy ballistic rifle",
    "burst fire",
    "twin tap",
    "hbr",
    "uesc",
    "heavy rounds",
  ],
};
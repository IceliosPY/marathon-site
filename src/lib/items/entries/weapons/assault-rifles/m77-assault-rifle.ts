import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const m77AssaultRifle: ItemEntry = {
  id: "m77-assault-rifle",
  name: "M77 Assault Rifle",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/M77AssaultRifle.png"),
  image: asset("items/icons/M77AssaultRifle.png"),
  render: asset("items/icons/M77AssaultRifle.png"),
  video: asset("items/videos/weapons/M77AssaultRifle.mp4"),

  modelParts: {
    body: asset("items/models/weapons/m77/v002_Auto_light_01_default.glb"),
    sight: asset("items/models/weapons/m77/mod_sight_default.glb"),
    magazine: asset("items/models/weapons/m77/mod_mag_default.glb"),
    barrel: asset("items/models/weapons/m77/mod_barrel_default.glb"),
  },

  sellPrice: 1200,
  buyPrice: 3000,

  description:
    "Ballistic assault rifle. Press Toggle the built-in flip scope for high precision.",

  effect: "Standard Assault Rifle",

  lore:
    "Dependable ballistic assault rifle equipped with a built-in flip scope for improved precision at medium range.",

  ammo: {
    itemId: "light-rounds",
    label: "Light Rounds",
    icon: asset("items/icons/light-rounds.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 24.0,
      max: 220,
      details: [
        { label: "Firepower", value: "24.0" },
        { label: "Damage", value: "16.0" },
        { label: "Precision", value: "1.5" },
        { label: "Rate of Fire", value: "450 RPM" },
      ],
    },
    {
      label: "Accuracy",
      value: 59.3,
      max: 100,
      details: [
        { label: "Hipfire Spread", value: "2.15°" },
        { label: "ADS Spread", value: "0.98°" },
        { label: "Crouch Spread Bonus", value: "80.0%" },
        { label: "Moving Inaccuracy", value: "32.7%" },
      ],
    },
    {
      label: "Handling",
      value: 38,
      max: 100,
      details: [
        { label: "Equip Speed", value: "0.94S" },
        { label: "ADS Speed", value: "0.5S" },
        { label: "Weight", value: "32.0%" },
        { label: "Recoil", value: "114.0%" },
        { label: "Aim Assist", value: "1.96°" },
        { label: "Reload Speed", value: "2.60S" },
      ],
    },
    {
      label: "Range",
      value: 46,
      max: 200,
      unit: "M",
    },
    {
      label: "Magazine",
      value: 24,
      max: 60,
    },
    {
      label: "Zoom",
      value: 1.2,
      max: 6.0,
      unit: "X",
    },
  ],

  acceptedModSubcategories: ["chip", "assault-magazine", "assault-barrel"],

  tags: [
    "weapon",
    "assault rifle",
    "m77",
    "ballistic",
    "standard",
    "medium range",
    "uesc",
    "light rounds",
  ],
};
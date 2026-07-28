import type { ItemEntry } from "../types";
import { asset } from "@/lib/assets";

export const conquestLMG: ItemEntry = {
  id: "conquest-lmg",

  name: "Conquest LMG",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/ConquestLMG.png"),
  image: asset("items/icons/ConquestLMG.png"),
  render: asset("items/icons/ConquestLMG.png"),
  video: asset("items/videos/weapons/ConquestLMG.mp4"),

  sellPrice: 480,

  description:
    "Light machine gun with ramping rate of fire. Stability is increased while firing from crouched position.",

  effect: "Standard Machine Gun",

  lore:
    "A lightweight belt-fed machine gun designed for sustained suppressive fire. Its firing system rewards committed fire patterns, while its frame becomes more controllable from crouched firing positions.",

  ammo: {
    itemId: "light-rounds",
    label: "light Rounds",
    icon: asset("items/icons/light-rounds.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 24.0,
      max: 220,
      details: [
        { label: "Damage", value: "16.0" },
        { label: "Precision", value: "1.5" },
        { label: "Rate of Fire", value: "540 RPM" },
      ],
    },

    {
      label: "Accuracy",
      value: 49.9,
      max: 100,
      details: [
        { label: "Hipfire Spread", value: "2.80°" },
        { label: "ADS Spread", value: "0.85°" },
        { label: "Crouch Spread Bonus", value: "70.0%" },
        { label: "Moving Inaccuracy", value: "90.9%" },
      ],
    },

    {
      label: "Handling",
      value: 22,
      max: 100,
      details: [
        { label: "Equip Speed", value: "1.2S" },
        { label: "ADS Speed", value: "0.8S" },
        { label: "Weight", value: "47.5%" },
        { label: "Recoil", value: "90.0%" },
        { label: "Aim Assist", value: "1.40°" },
        { label: "Reload Speed", value: "6.40S" },
      ],
    },

    {
      label: "Range",
      value: 60,
      max: 200,
      unit: "M",
    },

    {
      label: "Magazine",
      value: 36,
      max: 100,
    },

    {
      label: "Zoom",
      value: 1.2,
      max: 6.0,
      unit: "X",
    },
  ],

  acceptedModSubcategories: [
    "chip",
    "belt-fed-magazine",
    "lmg-optic",
    "shield",
  ],

  tags: [
    "weapon",
    "machine gun",
    "light machine gun",
    "conquest lmg",
    "lmg",
    "automatic",
    "sustained fire",
    "belt fed",
    "uesc",
    "heavy rounds",
  ],
};
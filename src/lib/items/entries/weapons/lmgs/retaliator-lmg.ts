import type { ItemEntry } from "../types";
import { asset } from "@/lib/assets";

export const retaliatorLMG: ItemEntry = {
  id: "retaliator-lmg",

  name: "Retaliator LMG",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/RetaliatorLMG.png"),
  image: asset("items/icons/RetaliatorLMG.png"),
  render: asset("items/icons/RetaliatorLMG.png"),
  video: asset("items/videos/weapons/RetaliatorLMG.mp4"),

  sellPrice: 200,

  description:
    "Belt-fed light machine gun with high rate of fire.",

  effect: "Standard Machine Gun",

  lore:
    "A belt-fed light machine gun built for aggressive sustained fire. Its high rate of fire and large magazine make it reliable for pressure and suppression, though its heavier handling demands controlled positioning.",

  ammo: {
    itemId: "heavy-rounds",
    label: "Heavy Rounds",
    icon: asset("items/icons/heavy-rounds.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 16.4,
      max: 220,
      details: [
        { label: "Damage", value: "11.8" },
        { label: "Precision", value: "1.4" },
        { label: "Rate of Fire", value: "600 RPM" },
      ],
    },
    {
      label: "Accuracy",
      value: 49.8,
      max: 100,
      details: [
        { label: "Hipfire Spread", value: "3.49°" },
        { label: "ADS Spread", value: "0.98°" },
        { label: "Crouch Spread Bonus", value: "80.0%" },
        { label: "Moving Inaccuracy", value: "32.7%" },
      ],
    },
    {
      label: "Handling",
      value: 25,
      max: 100,
      details: [
        { label: "Equip Speed", value: "1.41S" },
        { label: "ADS Speed", value: "0.62S" },
        { label: "Weight", value: "47.0%" },
        { label: "Recoil", value: "80.0%" },
        { label: "Aim Assist", value: "1.96°" },
        { label: "Reload Speed", value: "6.03S" },
      ],
    },
    {
      label: "Range",
      value: 51,
      max: 200,
      unit: "M",
    },
    {
      label: "Magazine",
      value: 44,
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
    "retaliator lmg",
    "lmg",
    "belt fed",
    "high rate of fire",
    "automatic",
    "uesc",
    "heavy rounds",
  ],
};
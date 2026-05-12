import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const biotoxicDisinsector: ItemEntry = {
  id: "biotoxic-disinjector",
  name: "Biotoxic Disinjector",
  category: "weapon",
  rarity: "contraband",

  icon: asset("items/icons/biotoxic.png"),
  image: asset("items/icons/biotoxic.png"),
  render: asset("items/icons/biotoxic.png"),
  video: asset("items/videos/biotoxic-disinsector.mp4"),

  buyPrice: undefined,
  sellPrice: 7777,

  description: "A strange hybrid of human and alien technology.",
  effect: "Contraband hybrid weapon.",
  lore: "A strange hybrid of human and alien technology.",

  sources: [
    {
      label: "Compiler",
      kind: "world-loot",
    },
  ],

  ammo: {
    itemId: "hyphatic-gel",
    label: "Hyphatic Gel",
    icon: asset("items/icons/hyphatic-gel.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 17.6,
      max: 100,
      details: [
        { label: "Damage", value: "13.0" },
        { label: "Precision", value: "1.35" },
        { label: "Rate of Fire", value: "216 RPM" },
      ],
    },
    {
      label: "Accuracy",
      value: 59.4,
      max: 100,
      details: [
        { label: "Hipfire Spread", value: "0.65°" },
        { label: "Crouch Spread Bonus", value: "85.0%" },
        { label: "Moving Inaccuracy", value: "77.3%" },
      ],
    },
    {
      label: "Handling",
      value: 33,
      max: 100,
      details: [
        { label: "Equip Speed", value: "0.85S" },
        { label: "Weight", value: "36.0%" },
        { label: "Recoil", value: "85.0%" },
        { label: "Aim Assist", value: "1.81°" },
        { label: "Reload Speed", value: "3.2S" },
      ],
    },
    {
      label: "Range",
      value: 33,
      max: 100,
      unit: "M",
    },
  ],

  tags: [
    "hybrid",
    "alien",
    "human",
    "biotoxic",
    "contraband",
    "weapon",
  ],
};
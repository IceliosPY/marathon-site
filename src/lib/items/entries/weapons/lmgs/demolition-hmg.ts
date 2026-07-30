import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const demolitionHMG: ItemEntry = {
  id: "demolition-hmg",

  name: "Demolition HMG",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/DemolitionHMG.png"),
  image: asset("items/icons/DemolitionHMG.png"),
  render: asset("items/icons/DemolitionHMG.png"),
  video: asset("items/videos/weapons/DemolitionHMG.mp4"),

  sellPrice: 1200,

  description:
    "Heavy machine gun with moderate rate of fire.",

  effect: "Standard Heavy Machine Gun",

  lore:
    "A devastating support weapon chambered for anti-armor ammunition. The Demolition HMG trades fire rate for overwhelming impact, delivering punishing shots capable of shredding fortifications and heavily armored targets.",

  ammo: {
    itemId: "anti-armor-rounds",
    label: "Anti-Armor Rounds",
    icon: asset("items/icons/anti-armor-rounds.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 45.8,
      max: 220,
      details: [
        { label: "Damage", value: "30.5" },
        { label: "Precision", value: "1.5" },
        { label: "Rate of Fire", value: "225 RPM" },
      ],
    },

    {
      label: "Accuracy",
      value: 63.8,
      max: 100,
      details: [
        { label: "Hipfire Spread", value: "1.52°" },
        { label: "ADS Spread", value: "1.16°" },
        { label: "Crouch Spread Bonus", value: "80.0%" },
        { label: "Moving Inaccuracy", value: "20.5%" },
      ],
    },

    {
      label: "Handling",
      value: 31,
      max: 100,
      details: [
        { label: "Equip Speed", value: "1.2S" },
        { label: "ADS Speed", value: "0.76S" },
        { label: "Weight", value: "47.0%" },
        { label: "Recoil", value: "57.7%" },
        { label: "Aim Assist", value: "1.78°" },
        { label: "Reload Speed", value: "5.46S" },
      ],
    },

    {
      label: "Range",
      value: 65,
      max: 200,
      unit: "M",
    },

    {
      label: "Magazine",
      value: 20,
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
    "heavy machine gun",
    "hmg",
    "demolition hmg",
    "anti armor",
    "support weapon",
    "heavy rounds",
    "uesc",
    "automatic",
    "machine gun",
  ],
};
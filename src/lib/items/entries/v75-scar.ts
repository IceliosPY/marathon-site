import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const v75Scar: ItemEntry = {
  id: "v75-scar",

  name: "V75 Scar",

  category: "weapon",
  rarity: "standard",

  icon: asset("items/icons/V75Scar.png"),
  image: asset("items/icons/V75Scar.png"),
  render: asset("items/icons/V75Scar.png"),
  video: asset("items/videos/weapons/V75Scar.mp4"),

  sellPrice: 200,

  description:
    "Volt-actuated assault rifle with tracking projectiles. Sustained fire overheats the weapon, lowering its rate of fire.",

  effect: "Standard Assault Rifle",

  lore:
    "A volt-actuated rifle platform designed around guided projectile behavior. Its tracking system rewards controlled bursts, while extended fire strains the weapon and reduces output.",

  ammo: {
    itemId: "volt-rounds",
    label: "Volt Rounds",
    icon: asset("items/icons/volt-rounds.png"),
  },

  stats: [
    {
      label: "Firepower",
      value: 20.3,
      max: 40,
      details: [
        { label: "Damage", value: "14.5" },
        { label: "Precision", value: "1.4" },
        { label: "Rate of Fire", value: "120 RPM" },
      ],
    },

    {
      label: "Accuracy",
      value: 59.3,
      max: 100,
      details: [
        { label: "Hipfire Spread", value: "1.89°" },
        { label: "ADS Spread", value: "1.36°" },
        { label: "Crouch Spread Bonus", value: "80.0%" },
        { label: "Moving Inaccuracy", value: "20.5%" },
      ],
    },

    {
      label: "Handling",
      value: 42,
      max: 100,
      details: [
        { label: "Equip Speed", value: "0.89S" },
        { label: "ADS Speed", value: "0.36S" },
        { label: "Weight", value: "27.0%" },
        { label: "Recoil", value: "91.0%" },
        { label: "Aim Assist", value: "2.88°" },
        { label: "Reload Speed", value: "4.14S" },
      ],
    },

    {
      label: "Range",
      value: 46,
      max: 100,
      unit: "M",
    },

    {
      label: "Volt Drain",
      value: 2.5,
      max: 10,
      unit: "%",
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
    "volt-array",
    "assault-optic",
    "volt-dampener",
  ],

  tags: [
    "weapon",
    "assault rifle",
    "v75 scar",
    "volt",
    "tracking projectiles",
    "overheat",
    "uesc",
  ],
};
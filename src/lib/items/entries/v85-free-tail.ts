import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const v85FreeTail: ItemEntry = {
  id: "v85-free-tail",
  name: "V85 Free-Tail",
  category: "weapon",
  rarity: "prestige",

  icon: asset("items/icons/v85-free-tail.png"),
  image: asset("items/icons/v85-free-tail.png"),
  render: asset("items/icons/v85-free-tail.png"),
  video: asset("items/videos/v85-free-tail.mp4"),

  sellPrice: 10401,

  description:
    "A modified V85 Circuit Breaker, adjusted for increased charge and fire rates.",

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],

  ammo: {
    itemId: "volt-cell",
    label: "Volt Cell",
    icon: asset("items/icons/volt-cell.png"),
  },

  possibleEffects: [
    {
      id: "unique",
      label: "Unique",
      description:
        "This weapon uses unique upgrades; its mod slots are locked.",
    },
  ],

  stats: [
    {
      label: "Firepower",
      value: 220,
      max: 250,
      details: [
        { label: "Firepower", value: "220" },
        { label: "Damage", value: "18.3" },
        { label: "Precision", value: "1.2" },
        { label: "Rate of Fire", value: "109 RPM" },
      ],
    },
    {
      label: "Handling",
      value: 54,
      max: 100,
      details: [
        { label: "Equip Speed", value: "0.45S" },
        { label: "ADS Speed", value: "0.40S" },
        { label: "Weight", value: "18.0%" },
        { label: "Recoil", value: "81.5%" },
        { label: "Aim Assist", value: "3.05°" },
        { label: "Reload Speed", value: "3.12S" },
      ],
    },
    {
      label: "Spread Angle",
      value: 1.5,
      max: 10,
      unit: "°",
    },
    {
      label: "Range",
      value: 15,
      max: 100,
      unit: "M",
    },
    {
      label: "Volt Drain",
      value: 6.4,
      max: 100,
      unit: "%",
    },
    {
      label: "Zoom",
      value: 1.1,
      max: 10,
      unit: "X",
    },
  ],

  tags: ["v85", "free-tail", "shotgun", "prestige", "unique", "weapon"],
};
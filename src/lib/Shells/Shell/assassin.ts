// assassin.ts

import type { Shell } from "../types";
import { asset } from "../../assets";

export const assassin: Shell = {
  id: "assassin",
  name: "Assassin",
  class: "Stealth",
  manufacturer: "UESC Black Division",
  status: "Active",

  summary:
    "Advanced infiltration shell specialized in stealth elimination and covert operations.",

  portrait: asset("shells/assassin/portrait.png"),
  background: asset("shells/assassin/background.png"),

  abilities: [
    {
      id: "smoke-screen",
      name: "Smoke Screen",
      type: "prime",
      description: "Prime Ability",
      icon: asset("shells/assassin/abilities/assassin-prime.png"),
    },
    {
      id: "active-camo",
      name: "Active Camo",
      type: "tactical",
      description: "Tactical Ability",
      icon: asset("shells/assassin/abilities/assassin-tactical.png"),
    },
    {
      id: "shadow-dive",
      name: "Shadow Dive",
      type: "trait",
      description: "Trait 1",
      icon: asset("shells/assassin/abilities/assassin-trait1.png"),
    },
    {
      id: "shroud",
      name: "Shroud",
      type: "trait",
      description: "Trait 2",
      icon: asset("shells/assassin/abilities/assassin-trait2.png"),
    },
  ],
};
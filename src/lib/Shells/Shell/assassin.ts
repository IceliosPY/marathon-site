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

  quote: "[breath] At last.",

  portrait: asset("shells/assassin/portrait.png"),
  background: asset("shells/assassin/background.jpg"),

  abilities: [
    {
      id: "smoke-screen",
      name: "Smoke Screen",
      type: "prime",
      description: "Prime Ability",
    },
    {
      id: "active-camo",
      name: "Active Camo",
      type: "tactical",
      description: "Tactical Ability",
    },
    {
      id: "shadow-dive",
      name: "Shadow Dive",
      type: "trait",
      description: "Trait 1",
    },
    {
      id: "shroud",
      name: "Shroud",
      type: "trait",
      description: "Trait 2",
    },
  ],
};
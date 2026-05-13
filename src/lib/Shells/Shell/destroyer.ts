// destroyer.ts

import type { Shell } from "../types";
import { asset } from "../../assets";

export const destroyer: Shell = {
  id: "destroyer",

  name: "Destroyer",

  class: "Assault",

  manufacturer: "UESC",

  status: "Active",

  summary:
    "Heavy assault shell designed for breach, suppression and frontal engagements.",

  portrait: asset("shells/destroyer/portrait.png"),

  background: asset("shells/destroyer/background.png"),

  quote: "Destroyers seek conflict.",

  preview: {
    role: "Combat specialist",

    tech: "Offense / Defense",

    intro: "Destroyers seek conflict.",

    body:
      "Advanced weapons systems, a personal defense barricade, and increased movement abilities allow Destroyers to take the fight to any threat or rival they encounter during a run.",

    code:
      "[excerpt, UESC threat eval: rnnr.dstryr.fileID55430c_p496]",
  },

  abilities: [
    {
      id: "search-and-destroy",
      name: "Search and Destroy",
      type: "prime",
      description: "Marks hostile targets and enhances offensive pressure.",
      icon: asset("shells/destroyer/abilities/destroyer-prime.png"),
    },
    {
      id: "riot-barricade",
      name: "Riot Barricade",
      type: "tactical",
      description: "Deploys a forward defensive barrier.",
      icon: asset("shells/destroyer/abilities/destroyer-tactical.png"),
    },
    {
      id: "thruster",
      name: "Thruster",
      type: "trait",
      description: "Grants burst directional movement.",
      icon: asset("shells/destroyer/abilities/destroyer-trait1.png"),
    },
    {
      id: "tactical-sprint",
      name: "Tactical Sprint",
      type: "trait",
      description: "Allows rapid repositioning during combat.",
      icon: asset("shells/destroyer/abilities/destroyer-trait2.png"),
    },
  ],
};
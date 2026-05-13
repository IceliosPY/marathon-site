// thief.ts

import type { Shell } from "../types";
import { asset } from "../../assets";

export const thief: Shell = {
  id: "thief",

  name: "Thief",

  class: "Extraction",

  manufacturer: "Black Market Variant",

  status: "Active",

  summary:
    "Highly mobile infiltration shell optimized for theft, extraction and opportunistic combat.",

  portrait: asset("shells/thief/portrait.png"),

  background: asset("shells/thief/background.png"),

  quote: "A Thief always keeps their eyes on the prize.",

  preview: {
    role: "Covert acquisitions",

    tech: "Advanced heist mechanics",

    intro: "A Thief always keeps their eyes on the prize.",

    body:
      "Use enhanced visors and piloted drones to remotely locate and acquire valuable loot. Steal from a zone or rival Runners. Then make an escape or push the advantage with the Thief's deployable grapple device.",

    code:
      "[excerpt, UESC threat eval: rnnr.thf.fileID70064c_p223]",
  },

  abilities: [
    {
      id: "pickpocket-drone",
      name: "Pickpocket Drone",
      type: "prime",
      description: "Prime Ability",
      icon: asset("shells/thief/abilities/thief-prime.png"),
    },
    {
      id: "grapple-device",
      name: "Grapple Device",
      type: "tactical",
      description: "Tactical Ability",
      icon: asset("shells/thief/abilities/thief-tactical.png"),
    },
    {
      id: "x-ray-visor",
      name: "X-Ray Visor",
      type: "trait",
      description: "Trait 1",
      icon: asset("shells/thief/abilities/thief-trait1.png"),
    },
    {
      id: "the-finer-things",
      name: "The Finer Things",
      type: "trait",
      description: "Trait 2",
      icon: asset("shells/thief/abilities/thief-trait2.png"),
    },
  ],
};
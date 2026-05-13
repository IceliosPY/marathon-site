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

  abilities: [
    {
      id: "pickpocket-drone",
      name: "Pickpocket Drone",
      type: "prime",
      description: "Prime Ability",
      icon: asset("shells/icons/thief-prime.png"),
    },
    {
      id: "grapple-device",
      name: "Grapple Device",
      type: "tactical",
      description: "Tactical Ability",
      icon: asset("shells/icons/thief-tactical.png"),
    },
    {
      id: "x-ray-visor",
      name: "X-Ray Visor",
      type: "trait",
      description: "Trait 1",
      icon: asset("shells/icons/thief-trait1.png"),
    },
    {
      id: "the-finer-things",
      name: "The Finer Things",
      type: "trait",
      description: "Trait 2",
      icon: asset("shells/icons/thief-trait2.png"),
    },
  ],
};
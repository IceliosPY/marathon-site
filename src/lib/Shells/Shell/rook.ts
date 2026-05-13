// recon.ts

import type { Shell } from "../types";
import { asset } from "../../assets";

export const rook: Shell = {
  id: "Rook",
  name: "Rook",
  class: "Rook",
  manufacturer: "UESC Surveillance Systems",
  status: "Active",

  summary:
    "Long-range reconnaissance shell focused on tracking, detection and battlefield intelligence.",


  portrait: asset("shells/Rook/portrait.png"),
  background: asset("shells/Rook/background.jpg"),

  abilities: [
    {
      id: "echo-pulse",
      name: "Echo Pulse",
      type: "prime",
      description: "Prime Ability",
    },
    {
      id: "tracker-drone",
      name: "Tracker Drone",
      type: "tactical",
      description: "Tactical Ability",
    },
    {
      id: "interrogation",
      name: "Interrogation",
      type: "trait",
      description: "Trait 1",
    },
    {
      id: "stalker-protocol",
      name: "Stalker Protocol",
      type: "trait",
      description: "Trait 2",
    },
  ],
};
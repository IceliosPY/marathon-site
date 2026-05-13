// recon.ts

import type { Shell } from "../types";
import { asset } from "../../assets";

export const recon: Shell = {
  id: "recon",
  name: "Recon",
  class: "Intel",
  manufacturer: "UESC Surveillance Systems",
  status: "Active",

  summary:
    "Long-range reconnaissance shell focused on tracking, detection and battlefield intelligence.",

  portrait: asset("shells/recon/portrait.png"),
  background: asset("shells/recon/background.png"),

  abilities: [
    {
      id: "echo-pulse",
      name: "Echo Pulse",
      type: "prime",
      description: "Prime Ability",
      icon: asset("shells/icons/recon-prime.png"),
    },
    {
      id: "tracker-drone",
      name: "Tracker Drone",
      type: "tactical",
      description: "Tactical Ability",
      icon: asset("shells/icons/recon-tactical.png"),
    },
    {
      id: "interrogation",
      name: "Interrogation",
      type: "trait",
      description: "Trait 1",
      icon: asset("shells/icons/recon-trait1.png"),
    },
    {
      id: "stalker-protocol",
      name: "Stalker Protocol",
      type: "trait",
      description: "Trait 2",
      icon: asset("shells/icons/recon-trait2.png"),
    },
  ],
};
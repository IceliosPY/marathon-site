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

  quote: "Recons use intel as a weapon.",

  preview: {
    role: "Intel specialist",

    tech: "Threat detection",

    intro: "Recons use intel as a weapon.",

    body:
      "Everything about Recon shells is geared toward identifying threats and providing insight into enemy locations and movements: Mark hostiles. Track wounded targets. Deploy a tracker drone to engage threats in unexpected ways.",

    code:
      "[excerpt, UESC threat eval: rnnr.rcn.fileID38406c_p471]",
  },

  abilities: [
    {
      id: "echo-pulse",
      name: "Echo Pulse",
      type: "prime",
      description: "Prime Ability",
      icon: asset("shells/recon/abilities/recon-prime.png"),
    },
    {
      id: "tracker-drone",
      name: "Tracker Drone",
      type: "tactical",
      description: "Tactical Ability",
      icon: asset("shells/recon/abilities/recon-tactical.png"),
    },
    {
      id: "interrogation",
      name: "Interrogation",
      type: "trait",
      description: "Trait 1",
      icon: asset("shells/recon/abilities/recon-trait1.png"),
    },
    {
      id: "stalker-protocol",
      name: "Stalker Protocol",
      type: "trait",
      description: "Trait 2",
      icon: asset("shells/recon/abilities/recon-trait2.png"),
    },
  ],
};
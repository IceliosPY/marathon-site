// triage.ts

import type { Shell } from "../types";
import { asset } from "../../assets";

export const triage: Shell = {
  id: "triage",

  name: "Triage",

  class: "Support",

  manufacturer: "UESC Medical Engineering",

  status: "Active",

  summary:
    "Combat medical shell designed for recovery, sustain and emergency battlefield intervention.",

  portrait: asset("shells/triage/portrait.png"),

  background: asset("shells/triage/background.png"),

  quote: "Triage saves lives.",

  preview: {
    role: "Field medic",

    tech: "Damage mitigation",

    intro: "Triage saves lives.",

    body:
      "Deployable healing drones and onboard reboot abilities allow Triage Runners and their crews to keep running after taking damage. Mend health and shields and even reboot crewmates at a distance to survive and fight again and again.",

    code:
      "[excerpt, UESC threat eval: rnnr.trge.fileID70064c_p392]",
  },

  abilities: [
    {
      id: "reboot-plus",
      name: "Reboot+",
      type: "prime",
      description: "Prime Ability",
      icon: asset("shells/triage/abilities/triage-prime.png"),
    },
    {
      id: "med-drone",
      name: "Med-Drone",
      type: "tactical",
      description: "Tactical Ability",
      icon: asset("shells/triage/abilities/triage-tactical.png"),
    },
    {
      id: "shareware-exe",
      name: "Shareware.exe",
      type: "trait",
      description: "Trait 1",
      icon: asset("shells/triage/abilities/triage-trait1.png"),
    },
    {
      id: "battery-overcharge",
      name: "Battery Overcharge",
      type: "trait",
      description: "Trait 2",
      icon: asset("shells/triage/abilities/triage-trait2.png"),
    },
  ],
};
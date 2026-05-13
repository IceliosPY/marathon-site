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
  background: asset("shells/triage/background.jpg"),

  abilities: [
    {
      id: "reboot-plus",
      name: "Reboot+",
      type: "prime",
      description: "Prime Ability",
    },
    {
      id: "med-drone",
      name: "Med-Drone",
      type: "tactical",
      description: "Tactical Ability",
    },
    {
      id: "shareware-exe",
      name: "Shareware.exe",
      type: "trait",
      description: "Trait 1",
    },
    {
      id: "battery-overcharge",
      name: "Battery Overcharge",
      type: "trait",
      description: "Trait 2",
    },
  ],
};
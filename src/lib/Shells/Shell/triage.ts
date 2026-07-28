// triage.ts

import type { Shell } from "../types";
import { asset } from "@/lib/assets";

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

  quote: "No one gets left behind.",

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

      details:
        "[A] Press: Ready your shell's emergency defibrillator systems.\n\n🖱 Hold: <span class='hl'>Lock on</span> to downed crew members or hostile targets and fire your Reboot+ device at them, which <span class='hl'>revives</span> crew members and <span class='hl'>EMPs</span> hostiles.\n\nWhile active, press [A] again to cancel.",

      icon: asset(
        "shells/triage/abilities/triage-prime.png"
      ),
    },

    {
      id: "med-drone",

      name: "Med-Drone",

      type: "tactical",

      description: "Tactical Ability",

      details:
        "[F] Press: Deploy a floating medical drone that attaches to crew members and <span class='hl'>restores health</span> or <span class='hl'>recharges shields</span>, and prevents them from bleeding out while downed.",

      icon: asset(
        "shells/triage/abilities/triage-tactical.png"
      ),
    },

    {
      id: "shareware-exe",

      name: "Shareware.exe",

      type: "trait",

      description: "Trait 1",

      details:
        "Benefits from medical consumables are shared between crew members with <span class='hl'>Med-Drone</span> attached to them.",

      icon: asset(
        "shells/triage/abilities/triage-trait1.png"
      ),
    },

    {
      id: "battery-overcharge",

      name: "Battery Overcharge",

      type: "trait",

      description: "Trait 2",

      details:
        "[U]: Divert energy from your cooling systems to <span class='hl'>boost the performance of your weapons</span> at the cost of generating additional heat.\n\nWhile active, breaking a target's shield with a volt weapon <span class='hl'>EMPs</span> them.",

      icon: asset(
        "shells/triage/abilities/triage-trait2.png"
      ),
    },
  ],
};
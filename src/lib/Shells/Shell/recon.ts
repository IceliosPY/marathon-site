// recon.ts

import type { Shell } from "../types";
import { asset } from "@/lib/assets";

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

  quote: "Find the pattern in the chaos.",

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

      details:
        "[A]: Activate your shell's <span class='hl'>advanced detection systems</span>, releasing a series of <span class='hl'>sonar pulses</span> that reveal the location of nearby hostiles.",

      icon: asset(
        "shells/recon/abilities/recon-prime.png"
      ),
    },

    {
      id: "tracker-drone",

      name: "Tracker Drone",

      type: "tactical",

      description: "Tactical Ability",

      details:
        "[F]: Deploy a mechanized <span class='hl'>microbot</span> that tracks down nearby hostiles and explodes, <span class='hl'>Overheating</span> any targets caught in the blast.",

      icon: asset(
        "shells/recon/abilities/recon-tactical.png"
      ),
    },

    {
      id: "interrogation",

      name: "Interrogation",

      type: "trait",

      description: "Trait 1",

      details:
        "When pinged by a hostile Runner, you automatically receive a <span class='hl'>warning</span> in your shell's HUD.\n\nPerforming a <span class='hl'>finisher</span> on a Runner <span class='hl'>pings</span> their crew.",

      icon: asset(
        "shells/recon/abilities/recon-trait1.png"
      ),
    },

    {
      id: "stalker-protocol",

      name: "Stalker Protocol",

      type: "trait",

      description: "Trait 2",

      details:
        "After breaking a target's shields, they leave behind a <span class='hl'>lingering holographic trail</span> for a short time.",

      icon: asset(
        "shells/recon/abilities/recon-trait2.png"
      ),
    },
  ],
};
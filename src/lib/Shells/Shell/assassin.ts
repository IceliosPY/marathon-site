// assassin.ts

import type { Shell } from "../types";
import { asset } from "@/lib/assets";

export const assassin: Shell = {
  id: "assassin",

  name: "Assassin",

  class: "Stealth",

  manufacturer: "UESC Black Division",

  status: "Active",

  summary:
    "Advanced infiltration shell specialized in stealth elimination and covert operations.",

  portrait: asset("shells/assassin/portrait.png"),

  background: asset("shells/assassin/background.png"),

  quote: "[breath] At last.",

  preview: {
    role: "Shadow agent",

    tech: "Invisibility systems",

    intro: "Assassins are lethal shadows.",

    body:
      "Active Camo and synthetic smoke deployment allows for unseen strikes or the perfect cover during hostile engagements. The ability to move undetected makes Assassins valued allies and lethal enemies.",

    code:
      "[excerpt, UESC threat eval: rnnr.assn.fileID70064c_p223]",
  },

  abilities: [
    {
      id: "smoke-screen",

      name: "Smoke Screen",

      type: "prime",

      description: "Prime Ability",

      details:
  "[A]: Throw a smoke disc that emits a <span class='hl'>line of smoke fields</span> in front of you.",

      icon: asset(
        "shells/assassin/abilities/assassin-prime.png"
      ),
    },

    {
      id: "active-camo",

      name: "Active Camo",

      type: "tactical",

      description: "Tactical Ability",

      details:
        "[F]: Activate your shell's camouflage systems, pulling a shroud of <span class='hl'>invisibility</span> over yourself.\n\nPerforming offensive actions, taking damage, and using abilities or consumables <span class='hl'>briefly disrupts your invisibility.</span>",

      icon: asset(
        "shells/assassin/abilities/assassin-tactical.png"
      ),
    },

    {
      id: "shadow-dive",

      name: "Shadow Dive",

      type: "trait",

      description: "Trait 1",

      details:
        "[V] Hold: Activate while <span class='hl'>Airborne</span> to slam a smoke disc into the ground, deploying a <span class='hl'>smoke field.</span>",

      icon: asset(
        "shells/assassin/abilities/assassin-trait1.png"
      ),
    },

    {
      id: "shroud",

      name: "Shroud",

      type: "trait",

      description: "Trait 2",

      details:
        "Your shell automatically activates its camouflage systems when entering any <span class='hl'>smoke field</span>, making you <span class='hl'>invisible.</span>.\n\nInvisibility persists for a short time after leaving the smoke field.",

      icon: asset(
        "shells/assassin/abilities/assassin-trait2.png"
      ),
    },
  ],
};
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

  quote: "The best loot is the one they never notice missing.",

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

      details:
        "[A]: Deploy a <span class='hl'>remotely piloted</span> flying drone with a limited lifespan.\n\nWhile piloting the drone:\n\n🖱: Fire a <span class='hl'>hooked tether</span> that can eject the highest-value item from target inventories, collect and store loose loot, and open doors.\n\n[E]: Exit the drone and return to your shell.\n\nAt any point while the drone is still active, activate the ability again to <span class='hl'>continue piloting</span> the drone.",

      icon: asset(
        "shells/thief/abilities/thief-prime.png"
      ),
    },

    {
      id: "grapple-device",

      name: "Grapple Device",

      type: "tactical",

      description: "Tactical Ability",

      details:
        "[F]: Launch a <span class='hl'>grapple device</span> in your aim direction, propelling yourself toward it.",

      icon: asset(
        "shells/thief/abilities/thief-tactical.png"
      ),
    },

    {
      id: "x-ray-visor",

      name: "X-Ray Visor",

      type: "trait",

      description: "Trait 1",

      details:
        "[U]: Activate your <span class='hl'>visor</span>, highlighting hostiles and containers in the color of the <span class='hl'>most valuable item</span> they're storing. Containers are revealed through walls, while hostiles require line of sight.\n\nWhile active, aiming at a hostile for a short time <span class='hl'>Hacks</span> their optics, disrupting their vision until you look away.",

      icon: asset(
        "shells/thief/abilities/thief-trait1.png"
      ),
    },

    {
      id: "the-finer-things",

      name: "The Finer Things",

      type: "trait",

      description: "Trait 2",

      details:
        "Gain increased <span class='hl'>weapon handling</span> and accelerated Grapple Device <span class='hl'>recharge rate</span> based on the number of items in your <span class='hl'>Backpack</span>.",

      icon: asset(
        "shells/thief/abilities/thief-trait2.png"
      ),
    },
  ],
};
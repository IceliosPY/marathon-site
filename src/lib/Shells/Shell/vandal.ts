// vandal.ts

import type { Shell } from "../types";
import { asset } from "../../assets";

export const vandal: Shell = {
  id: "vandal",

  name: "Vandal",

  class: "Disruption",

  manufacturer: "Unknown",

  status: "Active",

  summary:
    "Aggressive movement shell built for speed, pressure and chaos.",

  portrait: asset("shells/vandal/portrait.png"),

  background: asset("shells/vandal/background.png"),

  quote: "I can outrun anything.",

  preview: {
    role: "Combat anarchist",

    tech: "Enhanced movement",

    intro: "Vandals are troublemakers.",

    body:
      "Amplified movement abilities help cover ground at incredible speeds, changing any encounter in their favor. Microjets allow a secondary jump to reach higher ground. And a built-in Disrupt Cannon provides instant offense or defense when it is charged and ready to fire.",

    code:
      "[excerpt, UESC threat eval: rnnr.vndl.fileID63112c_p324]",
  },

  abilities: [
    {
      id: "amplify",

      name: "Amplify",

      type: "prime",

      description: "Prime Ability",

      details:
        "[A]: Overcharge your <span class='hl'>movement systems</span>, reducing the heat generated from your movement abilities while increasing your <span class='hl'>movement speed</span> and <span class='hl'>weapon dexterity</span>.",

      icon: asset(
        "shells/vandal/abilities/vandal-prime.png"
      ),
    },

    {
      id: "disrupt-cannon",

      name: "Disrupt Cannon",

      type: "tactical",

      description: "Tactical Ability",

      details:
        "[F] Press: Transform your arm into a <span class='hl'>cannon</span> and fire a high-powered energy projectile that deals damage and <span class='hl'>pushes</span> targets away.\n\n[F] Hold: <span class='hl'>Overcharge</span> your arm cannon, greatly increasing the <span class='hl'>size</span> and <span class='hl'>damage</span> of the blast.",

      icon: asset(
        "shells/vandal/abilities/vandal-tactical.png"
      ),
    },

    {
      id: "microjets",

      name: "Microjets",

      type: "trait",

      description: "Trait 1",

      details:
        "[Space]: Activate while airborne to perform <span class='hl'>another jump</span> at the cost of <span class='hl'>generating additional heat</span>.",

      icon: asset(
        "shells/vandal/abilities/vandal-trait1.png"
      ),
    },

    {
      id: "power-slide",

      name: "Power Slide",

      type: "trait",

      description: "Trait 2",

      details:
        "Grants a <span class='hl'>supercharged slide</span> that generates additional heat.",

      icon: asset(
        "shells/vandal/abilities/vandal-trait2.png"
      ),
    },
  ],
};
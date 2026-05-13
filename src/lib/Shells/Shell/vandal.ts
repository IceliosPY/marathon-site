// vandal.ts

import type { Shell } from "../types";
import { asset } from "../../assets";

export const vandal: Shell = {
  id: "vandal",

  name: "Vandal",

  class: "Disruption",

  manufacturer: "Unknown",

  status: "Active",

  summary: "I can outrun anything.",

  portrait: asset("shells/vandal/portrait.png"),

  background: asset("shells/vandal/background.png"),

  quote: "Vandals are troublemakers.",

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
      icon: asset("shells/vandal/abilities/vandal-prime.png"),
    },
    {
      id: "disrupt-cannon",
      name: "Disrupt Cannon",
      type: "tactical",
      description: "Tactical Ability",
      icon: asset("shells/vandal/abilities/vandal-tactical.png"),
    },
    {
      id: "microjets",
      name: "Microjets",
      type: "trait",
      description: "Trait 1",
      icon: asset("shells/vandal/abilities/vandal-trait1.png"),
    },
    {
      id: "power-slide",
      name: "Power Slide",
      type: "trait",
      description: "Trait 2",
      icon: asset("shells/vandal/abilities/vandal-trait2.png"),
    },
  ],
};
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
  background: asset("shells/vandal/background.jpg"),

  abilities: [
    {
      id: "amplify",
      name: "Amplify",
      type: "prime",
      description: "Prime Ability",
    },
    {
      id: "disrupt-cannon",
      name: "Disrupt Cannon",
      type: "tactical",
      description: "Tactical Ability",
    },
    {
      id: "microjets",
      name: "Microjets",
      type: "trait",
      description: "Trait 1",
    },
    {
      id: "power-slide",
      name: "Power Slide",
      type: "trait",
      description: "Trait 2",
    },
  ],
};
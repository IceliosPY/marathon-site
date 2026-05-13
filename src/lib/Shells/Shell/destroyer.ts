import type { Shell } from "../types";
import { asset } from "../../assets";

export const destroyer: Shell = {
  id: "destroyer",
  name: "Destroyer",
  class: "Assault",
  manufacturer: "UESC",
  status: "Active",
  summary: "Heavy assault shell designed for breach, suppression and frontal engagements.",

  portrait: asset("shells/destroyer/portrait.png"),
  background: asset("shells/destroyer/background.jpg"),

  abilities: [
    {
      id: "search-and-destroy",
      name: "Search and Destroy",
      type: "prime",
      description: "Marks hostile targets and enhances offensive pressure.",
    },
    {
      id: "riot-barricade",
      name: "Riot Barricade",
      type: "tactical",
      description: "Deploys a forward defensive barrier.",
    },
    {
      id: "thruster",
      name: "Thruster",
      type: "trait",
      description: "Grants burst directional movement.",
    },
    {
      id: "tactical-sprint",
      name: "Tactical Sprint",
      type: "trait",
      description: "Allows rapid repositioning during combat.",
    },
  ],
};
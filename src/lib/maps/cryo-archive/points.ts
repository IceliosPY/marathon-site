import type { MapPoint } from "../types";

export const cryoArchivePoints: MapPoint[] = [
  {
    id: "cryo-control",
    label: "Cryo Control",
    description: "Primary cryogenic monitoring systems.",

    x: 52,
    y: 41,

    kind: "area",
    category: "location",
  },

  {
    id: "preservation-wing",
    label: "Preservation",
    description: "Long-term cryogenic preservation storage.",

    x: 67,
    y: 58,

    kind: "area",
    category: "location",
  },
];
import type { MapEntry } from "../types";
import { direMarshPoints } from "./points";

export const direMarshMap: MapEntry = {
  id: "dire-marsh",
  name: "DIRE MARSH",
  code: "MAP-01",
  threat: "MEDIUM",
  location: "New Cascadia Colony Agricultural Production",
  description:
    "The Dire Marsh facilities focused on the research and active development of hybrid food sources. Evidence of a quarantine operation indicates a dark period in colony history. Apparent point of emergence of the Anomaly.",
  previewImage: "/maps/dire-marsh/card.png",
  video: "/maps/dire-marsh/preview.mp4",
  mapImage: "/maps/dire-marsh/map.jpg",
  points: direMarshPoints,
};
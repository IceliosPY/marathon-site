import type { MapEntry } from "../types";
import { asset } from "../../assets";
import { direMarshPoints } from "./points";

export const direMarshMap: MapEntry = {
  id: "dire-marsh",
  name: "DIRE MARSH",
  code: "MAP-01",
  threat: "MEDIUM",
  location: "New Cascadia Colony Agricultural Production",
  description:
    "The Dire Marsh facilities focused on the research and active development of hybrid food sources. Evidence of a quarantine operation indicates a dark period in colony history. Apparent point of emergence of the Anomaly.",
  previewImage: asset("maps/dire-marsh/card.png"),
  video: asset("maps/dire-marsh/preview.mp4"),
  mapImage: asset("maps/dire-marsh/map.jpg"),
  points: direMarshPoints,
};
import type { MapEntry } from "../types";
import { perimeterPoints } from "./points";

export const perimeterMap: MapEntry = {
  id: "perimeter",
  name: "PERIMETER",
  code: "MAP-02",
  threat: "LOW",
  location: "New Cascadia Colony Research Expansion",
  description:
    "Originally part of colony expansion efforts, site shows signs of developmental redirection toward radiological and geological surveillance.",
  previewImage: "/maps/perimeter/card.png",
  video: "/maps/perimeter/preview.mp4",
  mapImage: "/maps/perimeter/map.png",
  points: perimeterPoints,
};
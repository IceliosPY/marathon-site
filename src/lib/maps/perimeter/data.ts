import type { MapEntry } from "../types";
import { asset } from "../../assets";
import { perimeterPoints } from "./points";

export const perimeterMap: MapEntry = {
  id: "perimeter",
  name: "PERIMETER",
  code: "MAP-02",
  threat: "LOW",
  location: "New Cascadia Colony Research Expansion",
  description:
    "Originally part of colony expansion efforts, site shows signs of developmental redirection toward radiological and geological surveillance.",
  previewImage: asset("maps/perimeter/card.png"),
  video: asset("maps/perimeter/preview.mp4"),
  mapImage: asset("maps/perimeter/map.png"),
  points: perimeterPoints,
};
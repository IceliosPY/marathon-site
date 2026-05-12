import type { MapEntry } from "../types";
import { asset } from "../../assets";
import { outpostPoints } from "./points";

export const outpostMap: MapEntry = {
  id: "outpost",
  name: "OUTPOST",
  code: "MAP-03",
  threat: "HIGH",
  location: "New Cascadia Landing Site and UESC Base",
  description:
    "A forward operating base for initial planetary colonization efforts, including temporary housing and an orientation area. Degraded cloud-seeding tech periodically covers the area with hazardous rain.",
  previewImage: asset("maps/outpost/card.png"),
  video: asset("maps/outpost/preview.mp4"),
  mapImage: asset("maps/outpost/map.png"),
  points: outpostPoints,
};
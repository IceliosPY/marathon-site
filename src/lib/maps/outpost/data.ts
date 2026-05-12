import type { MapEntry } from "../types";
import { outpostPoints } from "./points";

export const outpostMap: MapEntry = {
  id: "outpost",
  name: "OUTPOST",
  code: "MAP-03",
  threat: "HIGH",
  location: "New Cascadia Landing Site and UESC Base",
  description:
    "A forward operating base for initial planetary colonization efforts, including temporary housing and an orientation area. Degraded cloud-seeding tech periodically covers the area with hazardous rain.",
  previewImage: "/maps/outpost/card.png",
  video: "/maps/outpost/preview.mp4",
  mapImage: "/maps/outpost/map.png",
  points: outpostPoints,
};
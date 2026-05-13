import type { MapEntry } from "../types";
import { asset } from "../../assets";
import { cryoArchivePoints } from "./points";

export const cryoArchiveMap: MapEntry = {
  id: "cryo-archive",
  name: "Cryo Archive",
  code: "CRYO",
  threat: "HIGH",

  location: "UESC Marathon",
  description:
    "Cryogenic preservation sectors deep inside the Marathon vessel.",

  previewImage: asset("maps/cryo-archive/card.jpg"),
  video: asset("maps/cryo-archive/preview.mp4"),
  mapImage: asset("maps/cryo-archive/map.jpg"),

  points: cryoArchivePoints,
};
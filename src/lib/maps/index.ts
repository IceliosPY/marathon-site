import type { MapEntry } from "./types";

import { perimeterMap } from "./perimeter/data";
import { direMarshMap } from "./dire-marsh/data";
import { outpostMap } from "./outpost/data";
import { cryoArchiveMap } from "./cryo-archive/Data";

export type {
  MapPoint,
  MapEntry,
  MapPointKind,
  MapPointCategory,
} from "./types";

export const mapsData: MapEntry[] = [
  perimeterMap,
  direMarshMap,
  outpostMap,
  cryoArchiveMap,
];
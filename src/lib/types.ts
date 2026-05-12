export type MapPointCategory =
  | "location"
  | "mission"
  | "loot"
  | "enemy"
  | "other";

export type MapPointKind =
  // LOCATIONS
  | "area"
  | "dcon"
  | "exfil"
  | "guarded-exfil"
  | "locked-room"
  | "spawn"

  // MISSIONS
  | "activity"
  | "contract"

  // LOOT
  | "container"
  | "loose-loot"
  | "health"
  | "supply"
  | "key"
  | "treasure"
  | "lockbox"
  | "vault"

  // ENEMIES
  | "priority"

  // OTHER
  | "objective"
  | "nice-spot";

export type MapPoint = {
  id: string;
  label: string;
  description: string;
  x: number;
  y: number;

  kind: MapPointKind;
  category: MapPointCategory;
};

export type MapEntry = {
  id: string;
  name: string;
  code: string;
  threat: "LOW" | "MEDIUM" | "HIGH" | "VERY HIGH";
  location: string;
  description: string;
  previewImage: string;
  video: string;
  mapImage: string;
  points: MapPoint[];
};
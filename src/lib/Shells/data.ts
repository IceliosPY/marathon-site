import type { Shell } from "./types";

import { assassin } from "./Shell/assassin";
import { destroyer } from "./Shell/destroyer";
import { recon } from "./Shell/recon";
import { triage } from "./Shell/triage";
import { vandal } from "./Shell/vandal";
import { thief } from "./Shell/thief";

export const shellsData: Shell[] = [
  destroyer,
  assassin,
  recon,
  thief,
  triage,
  vandal,
];
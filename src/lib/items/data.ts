import type { ItemEntry } from "./types";

import { protectorV2 } from "./entries/protector-v2";
import { protectorV3 } from "./entries/protector-v3";
import { reinforcedShieldsV1 } from "./entries/reinforced-shields-v1";
import { biotoxicDisinsector } from "./entries/biotoxic-disinsector";
import { v85FreeTail } from "./entries/v85-free-tail";
import { hurricane } from "./entries/hurricane";
import { insurancePlan } from "./entries/insurance-plan";
import { stackOverflow } from "./entries/stack-overflow";
import { triggerDiscipline } from "./entries/trigger-discipline";
import { backgroundProcess } from "./entries/background-process";
import { compilerTrace } from "./entries/compiler-trace";
import { colonistDnaVial } from "./entries/colonist-dna-vial";
import { swarmDirective } from "./entries/swarm-directive";
import { lightRounds } from "./entries/light-rounds";
import { heavyRounds } from "./entries/heavy-rounds";
import { voltCell } from "./entries/volt-cells";
import { slickMagIII } from "./entries/slickMagIII";
import { rocketStart } from "./entries/rocket-start";
import { hyphaticGel } from "./entries/hyphatic-gel";
import { ironholdChoke } from "./entries/ironhold-choke";
import { quickdrawGrip } from "./entries/quickdraw-grip";
import { misriah2442 } from "./entries/misriah2442";
import { wstrCombatShotgun } from "./entries/wstr-combat-shotgun";
import { v85CircuitBreaker } from "./entries/v85-circuit-breaker";
import { guardedGrip } from "./entries/guarded-grip";
import { fullAutoSelector } from "./entries/fullautoselector";
import { dnaAccessCard } from "./entries/dna-access-card";
import { lab06CryoArchive06 } from "./entries/lab-06-cryo-archive-06";
import { xs24AmmoPackPlus } from "./entries/24xs-ammo-pack-plus";
import { medPack24XS } from "./entries/24xs-med-pack-plus";
import { perimeterKey1 } from "./entries/perimeter-key-1";
import { medPack24XS2 } from "./entries/24xs-med-pack";
import { compilerGanglion } from "./entries/compiler-ganglion";
import { sneakPack24XS } from "./entries/24xs-sneak-pack-plus";
import { spectreArmor } from "./entries/spectre-armor";
import { reinforcedShieldsV2 } from "./entries/reinforced-shields-v2";
import { commendationGenerator } from "./entries/commendation-generator";
import { synapseCube } from "./entries/synapse-cube";

export const itemsData: ItemEntry[] = [
  synapseCube,
  commendationGenerator,
  reinforcedShieldsV2,
  spectreArmor,
  sneakPack24XS,
  compilerGanglion,
  medPack24XS2,
  perimeterKey1,
  medPack24XS,
  xs24AmmoPackPlus,
  lab06CryoArchive06,
  dnaAccessCard,
  fullAutoSelector,
  guardedGrip,
  v85CircuitBreaker,
  misriah2442,
  wstrCombatShotgun,
  quickdrawGrip,
  ironholdChoke,
  rocketStart,
  hyphaticGel,
  slickMagIII,
  voltCell,
  heavyRounds,
  lightRounds,
  swarmDirective,
  backgroundProcess,
  colonistDnaVial,
  compilerTrace,
  triggerDiscipline,
  hurricane,
  insurancePlan,
  stackOverflow,
  protectorV2,
  biotoxicDisinsector,
  protectorV3,
  reinforcedShieldsV1,
  v85FreeTail,
];
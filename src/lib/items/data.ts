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


export const itemsData: ItemEntry[] = [
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
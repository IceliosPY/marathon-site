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
import { cryoMaintenance01 } from "./entries/cryo-maintenance-cryo-archive-01";
import { generatorRoomCryoArchive02 } from "./entries/generator-room-cryo-archive-02";
import { pumpStationCryoArchive03 } from "./entries/pump-station-cryo-archive-03";
import { cryoMonitoringCryoArchive04 } from "./entries/cryo-monitoring-cryo-archive-04";
import { secretCargoCryoArchive05 } from "./entries/secret-cargo-cryo-archive-05";
import { xs24BasePack } from "./entries/24xs-base-pack";
import { hazardCapsule } from "./entries/hazard-capsule";
import { alienAlloy } from "./entries/alien-alloy";
import { advancedPatchKit } from "./entries/advanced-patch-kit";
import { advancedShieldCharge } from "./entries/advanced-shield-charge";
import { selfRevive } from "./entries/self-revive";
import { compartmentalMagIII } from "./entries/compartmental-mag-iii";
import { battleRunner } from "./entries/battle-runner";
import { overclockedDelimiter } from "./entries/overclocked-delimiter";
import { snapshotGrip } from "./entries/snapshot-grip";
import { pinpointBarrel } from "./entries/pinpoint-barrel";
import { blueBlood } from "./entries/blue-blood";
import { taperedHeatSink } from "./entries/tapered-heat-sink";
import { v99ChannelRifle } from "./entries/v99-channel-rifle";
import { v00ZeusRg } from "./entries/v00-zeus-rg";
import { airCooledChamber } from "./entries/air-cooled-chamber";
import { samaritan } from "./entries/samaritan";
import { doubleDose } from "./entries/double-dose";
import { aresRG } from "./entries/ares-rg";
import { balancedPayload } from "./entries/balanced-payload";
import { hiVelocityPayload } from "./entries/hi-velocity-payload";
import { impactShockwave } from "./entries/impact-shockwave";
import { tunedGenerator } from "./entries/tuned-generator";
import { stabilizingGenerator } from "./entries/stabilizing-generator";
import { overclockedGenerator } from "./entries/overclockedGenerator";
import { copperheadRf } from "./entries/copperhead-rf";
import { magnumMc } from "./entries/magnum-mc";
import { ceTacticalSidearm } from "./entries/ce-tactical-sidearm";
import { brrtSmg } from "./entries/brrtSmg";
import { bullySmg } from "./entries/bully-smg";
import { ironholdBarrel } from "./entries/ironhold-barrel";
import { rodeoMag } from "./entries/rodeoMag";
import { pistolScope } from "./entries/pistol-scope";
import { punishment } from "./entries/punishment";
import { weightedBarrel } from "./entries/weighted-barrel";
import { nanoSuppressor } from "./entries/nano-suppressor";
import { bubbleShield } from "./entries/bubble-shield";
import { empGrenade } from "./entries/emp-grenade";
import { panaceaKit } from "./entries/panacea-kit";
import { direMarshKey1 } from "./entries/dire-marsh-key-1";
import { direMarshKey2 } from "./entries/dire-marsh-key-2";
import { direMarshKey3 } from "./entries/dire-marsh-key-3";
import { direMarshKey4 } from "./entries/dire-marsh-key-4";
import { direMarshKey5 } from "./entries/dire-marsh-key-5";
import { direMarshKey6 } from "./entries/dire-marsh-key-6";
import { direMarshKey7 } from "./entries/dire-marsh-key-7";
import { perimeterKey2 } from "./entries/perimeter-key-2";
import { perimeterKey3 } from "./entries/perimeter-key-3";
import { stryderM1T } from "./entries/stryder-m1t-precision";
import { br33VolleyRifle } from "./entries/br33-volley-rifle";
import { twinTapHbr } from "./entries/twin-tap-hbr";
import { outland } from "./entries/outland";
import { hardlinePr } from "./entries/hardline-pr";
import { longshot } from "./entries/longshot";
import { repeaterHpr } from "./entries/repeater-hpr";
import { steadyBarrel } from "./entries/steady-barrel";
import { farshotBarrel } from "./entries/farshot-barrel";
import { truShotBarrel } from "./entries/tru-shot-barrel";
import { impulseBrake } from "./entries/impulse-brake";
import { accuSightOptic } from "./entries/accu-sight-optic";
import { neuroOpticLens } from "./entries/neuro-optic-lens";
import { spScopeIII } from "./entries/sp-scope-iii";
import { spScopeII } from "./entries/sp-scope-ii";
import { longScopeIII } from "./entries/long-scope-iii";
import { hiCapMag } from "./entries/hi-cap-mag";
import { featherMag } from "./entries/feather-mag";
import { stabilizingMag } from "./entries/stabilizing-mag";
import { chargeCoupledOptic } from "./entries/charge-coupled-optic";
import { m77AssaultRifle } from "./entries/m77-assault-rifle";
import { intervalMag } from "./entries/interval-mag";
import { qTapRegenOptic } from "./entries/q-tap-regen-optic";
import { lockoutMuzzleBrake } from "./entries/lockout-muzzle-brake";
import { stoppingMag } from "./entries/stopping-mag";
import { ghostMuzzle } from "./entries/ghost-muzzle";
import { flechetteSplitAction } from "./entries/flechette-split-action";
import { hiSpeedMag } from "./entries/hi-speed-mag";
import { balancedMag } from "./entries/balanced-mag";
import { v75Scar } from "./entries/v75-scar";
import { overrunAr } from "./entries/overrun-ar";
import { mipsSlugConverter } from "./entries/mips-slug-converter";
import { shortwaveScoutOptic } from "./entries/shortwave-scout-optic";
import { farReachOptic } from "./entries/far-reach-optic";
import { twinscopeOptic } from "./entries/twinscope-optic";
import { vigilantGrip } from "./entries/vigilant-grip";
import { impactHAR } from "./entries/impactHAR";
import { sturdyBraceGrip } from "./entries/sturdy-brace-grip";
import { reloaderMag } from "./entries/reloader-mag";
import { steadyRounds } from "./entries/steady-rounds";
import { drumMag } from "./entries/drum-mag";
import { hollowCaseRounds } from "./entries/hollow-case-rounds";
import { adaptiveMag } from "./entries/adaptive-mag";
import { precisionBarrel } from "./entries/precision-barrel";
import { conquestLMG } from "./entries/conquest-lmg";
import { retaliatorLMG } from "./entries/retaliator-lmg";
import { demolitionHMG } from "./entries/demolition-hmg";
import { megaBelt } from "./entries/mega-belt";
import { cloudfeatherBelt } from "./entries/cloudfeather-belt";
import { balancedBelt } from "./entries/balanced-belt";
import { turboBelt } from "./entries/turbo-belt";
import { accuSightLens } from "./entries/accu-sight-lens";
import { optic14xIII } from "./entries/optic-1-4x-iii";
import { foundationShield } from "./entries/foundation-shield";
import { controlShield } from "./entries/control-shield";
import { duelistShield } from "./entries/duelist-shield";
import { balancedShield } from "./entries/balanced-shield";
import { infinityBelt } from "./entries/infinity-belt";
import { overclockedShield } from "./entries/overclocked-shield";
import { circuitShield } from "./entries/circuit-shield";
import { endlessRunner } from "./entries/endless-runner";
import { drrvish } from "./entries/drrvish";
import { fiveFingerDiscount } from "./entries/five-finger-discount";
import { saltWages } from "./entries/salt-wages";
import { outlandSuppressor } from "./entries/outland-suppressor";
import { commonEnemy } from "./entries/common-enemy";
import { vitalIntel } from "./entries/vital-intel";
import { fistOfPhobos } from "./entries/fist-of-phobos";
import { v22VoltThrower } from "./entries/v22-volt-thrower";
import { v11Punch } from "./entries/v11-punch";
import { v66Lookout } from "./entries/v66-lookout";
import { thermalSurgeBattery } from "./entries/thermal-surge-battery";
import { hiFocusDampener } from "./entries/hi-focus-dampener";
import { oracleLens } from "./entries/oracle-lens";
import { nullGravChamber } from "./entries/null-grav-chamber";
import { cloudfeatherChamber } from "./entries/cloudfeather-chamber";
import { suppressionDampener } from "./entries/suppression-dampener";
import { hipshotDampener } from "./entries/hipshot-dampener";
import { vigilantLens } from "./entries/vigilant-lens";
import { duelistLens } from "./entries/duelist-lens";
import { ramPageMag } from "./entries/ram-page-mag";
import { sonarShot } from "./entries/sonar-shot";
import { overchargeLens } from "./entries/overcharge-lens";
import { adrenalFeedbackRounds } from "./entries/adrenal-feedback-rounds";
import { leverOverhaulInterface } from "./entries/lever-overhaul-interface";
import { kingmakerMag } from "./entries/kingmaker-mag";
import { rangefinderOptic } from "./entries/rangefinder-optic";
import { hiZoomOptic } from "./entries/hi-zoom-optic";
import { thermalOptic } from "./entries/thermal-optic";
import { coldVigilanceScope } from "./entries/cold-vigilance-scope";
import { thermalOptic2 } from "./entries/thermal-optic-2";
import { combatMag } from "./entries/combat-mag";
import { turboGenerator } from "./entries/turbo-generator";
import { hiCapHeatSink } from "./entries/hi-cap-heat-sink";
import { compressionChamber } from "./entries/compression-chamber";
import { fastloadMagIII } from "./entries/fastload-mag-iii";
import { accuPointBarrel } from "./entries/accu-point-barrel";
import { rocksteadyBarrel } from "./entries/rocksteady-barrel";
import { quickfireBarrel } from "./entries/quickfire-barrel";
import { stabilizingBarrel } from "./entries/stabilizing-barrel";
import { clearEyedLens } from "./entries/clear-eyed-lens";
import { m77Omnipositor } from "./entries/m77-omnipositor";
import { intuition } from "./entries/intuition";
import { earlyWarningSystem } from "./entries/early-warning-system";
import { hipshotGrip } from "./entries/hipshot-grip";
import {afterburner} from "./entries/afterburner";

export const itemsData: ItemEntry[] = [
  afterburner,
  hipshotGrip,
  earlyWarningSystem,
  intuition,
  m77Omnipositor,
  clearEyedLens,
  stabilizingBarrel,
  quickfireBarrel,
  rocksteadyBarrel,
  accuPointBarrel,
  fastloadMagIII,
  compressionChamber,
  hiCapHeatSink,
  turboGenerator,
  combatMag,
  thermalOptic2,
  coldVigilanceScope,
  thermalOptic,
  hiZoomOptic,
  rangefinderOptic,
  kingmakerMag,
  leverOverhaulInterface,
  adrenalFeedbackRounds,
  overchargeLens,
  sonarShot,
  ramPageMag,
  duelistLens,
  vigilantLens,
  hipshotDampener,
  suppressionDampener,
  cloudfeatherChamber,
  nullGravChamber,
  oracleLens,
  hiFocusDampener,
  thermalSurgeBattery,
  v66Lookout,
  v11Punch,
  v22VoltThrower,
  fistOfPhobos,
  vitalIntel,
  commonEnemy,
  outlandSuppressor,
  saltWages,
  fiveFingerDiscount,
  drrvish,
  endlessRunner,
  circuitShield,
  overclockedShield,
  infinityBelt,
  balancedShield,
  duelistShield,
  controlShield,
  foundationShield,
  optic14xIII,
  accuSightLens,
  turboBelt,
  balancedBelt,
  cloudfeatherBelt,
  megaBelt,
  demolitionHMG,
  retaliatorLMG,
  conquestLMG,
  precisionBarrel,
  adaptiveMag,
  hollowCaseRounds,
  drumMag,
  steadyRounds,
  reloaderMag,
  sturdyBraceGrip,
  vigilantGrip,
  twinscopeOptic,
  farReachOptic,
  shortwaveScoutOptic,
  mipsSlugConverter,
  overrunAr,
  v75Scar,
  balancedMag,
  hiSpeedMag,
  flechetteSplitAction,
  ghostMuzzle,
  stoppingMag,
  impactHAR,
  lockoutMuzzleBrake,
  qTapRegenOptic,
  intervalMag,
  m77AssaultRifle,
  chargeCoupledOptic,
  stabilizingMag,
  featherMag,
  hiCapMag,
  longScopeIII,
  spScopeII,
  spScopeIII,
  neuroOpticLens,
  accuSightOptic,
  impulseBrake,
  truShotBarrel,
  farshotBarrel,
  steadyBarrel,
  repeaterHpr,
  longshot,
  hardlinePr,
  outland,
  twinTapHbr,
  br33VolleyRifle,
  stryderM1T,
  perimeterKey3,
  direMarshKey7,
  direMarshKey6,
  direMarshKey5,
  perimeterKey2,
  direMarshKey4,
  direMarshKey3,
  direMarshKey2,
  direMarshKey1,
  panaceaKit,
  empGrenade,
  bubbleShield,
  nanoSuppressor,
  weightedBarrel,
  punishment,
  pistolScope,
  rodeoMag,
  ironholdBarrel,
  bullySmg,
  brrtSmg,
  ceTacticalSidearm,
  magnumMc,
  copperheadRf,
  overclockedGenerator,
  stabilizingGenerator,
  tunedGenerator,
  impactShockwave,
  hiVelocityPayload,
  balancedPayload,
  aresRG,
  doubleDose,
  samaritan,
  airCooledChamber,
  v00ZeusRg,
  v99ChannelRifle,
  taperedHeatSink,
  blueBlood,
  pinpointBarrel,
  snapshotGrip,
  overclockedDelimiter,
  battleRunner,
  compartmentalMagIII,
  selfRevive,
  advancedShieldCharge,
  advancedPatchKit,
  alienAlloy,
  hazardCapsule,
  xs24BasePack,
  secretCargoCryoArchive05,
  cryoMonitoringCryoArchive04,
  pumpStationCryoArchive03,
  generatorRoomCryoArchive02,
  cryoMaintenance01,
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
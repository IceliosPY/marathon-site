import type { ItemEntry } from "./types";

/* =========================
   ASSAULT RIFLES
========================= */
import { impactHAR } from "./entries/weapons/assault-rifles/impactHAR";
import { m77AssaultRifle } from "./entries/weapons/assault-rifles/m77-assault-rifle";
import { overrunAr } from "./entries/weapons/assault-rifles/overrun-ar";
import { v75Scar } from "./entries/weapons/assault-rifles/v75-scar";

/* =========================
   PRECISION RIFLES
========================= */
import { br33VolleyRifle } from "./entries/weapons/precision-rifles/br33-volley-rifle";
import { hardlinePr } from "./entries/weapons/precision-rifles/hardline-pr";
import { repeaterHpr } from "./entries/weapons/precision-rifles/repeater-hpr";
import { stryderM1T } from "./entries/weapons/precision-rifles/stryder-m1t-precision";
import { twinTapHbr } from "./entries/weapons/precision-rifles/twin-tap-hbr";
import { v66Lookout } from "./entries/weapons/precision-rifles/v66-lookout";

/* =========================
   SMGS
========================= */
import { brrtSmg } from "./entries/weapons/smgs/brrtSmg";
import { bullySmg } from "./entries/weapons/smgs/bully-smg";
import { copperheadRf } from "./entries/weapons/smgs/copperhead-rf";
import { v22VoltThrower } from "./entries/weapons/smgs/v22-volt-thrower";

/* =========================
   LMGS
========================= */
import { conquestLMG } from "./entries/weapons/lmgs/conquest-lmg";
import { demolitionHMG } from "./entries/weapons/lmgs/demolition-hmg";
import { retaliatorLMG } from "./entries/weapons/lmgs/retaliator-lmg";

/* =========================
   RAILGUNS
========================= */
import { aresRG } from "./entries/weapons/railguns/ares-rg";
import { v00ZeusRg } from "./entries/weapons/railguns/v00-zeus-rg";

/* =========================
   SHOTGUNS
========================= */
import { misriah2442 } from "./entries/weapons/shotguns/misriah2442";
import { v85CircuitBreaker } from "./entries/weapons/shotguns/v85-circuit-breaker";
import { wstrCombatShotgun } from "./entries/weapons/shotguns/wstr-combat-shotgun";

/* =========================
   SNIPER RIFLES
========================= */
import { longshot } from "./entries/weapons/sniper-rifles/longshot";
import { outland } from "./entries/weapons/sniper-rifles/outland";
import { v99ChannelRifle } from "./entries/weapons/sniper-rifles/v99-channel-rifle";

/* =========================
   PISTOLS
========================= */
import { ceTacticalSidearm } from "./entries/weapons/pistols/ce-tactical-sidearm";
import { magnumMc } from "./entries/weapons/pistols/magnum-mc";
import { v11Punch } from "./entries/weapons/pistols/v11-punch";

/* =========================
   UNIQUE WEAPONS
========================= */
import { biotoxicDisinsector } from "./entries/weapons/unique/biotoxic-disinsector";
import { drrvish } from "./entries/weapons/unique/drrvish";
import { fistOfPhobos } from "./entries/weapons/unique/fist-of-phobos";
import { m77Omnipositor } from "./entries/weapons/unique/m77-omnipositor";
import { saltWages } from "./entries/weapons/unique/salt-wages";
import { v85FreeTail } from "./entries/weapons/unique/v85-free-tail";

/* =========================
   CHIPS
========================= */
import { afterburner } from "./entries/mods/chip/afterburner";
import { backgroundProcess } from "./entries/mods/chip/background-process";
import { battleRunner } from "./entries/mods/chip/battle-runner";
import { blueBlood } from "./entries/mods/chip/blue-blood";
import { commonEnemy } from "./entries/mods/chip/common-enemy";
import { endlessRunner } from "./entries/mods/chip/endless-runner";
import { fiveFingerDiscount } from "./entries/mods/chip/five-finger-discount";
import { hurricane } from "./entries/mods/chip/hurricane";
import { insurancePlan } from "./entries/mods/chip/insurance-plan";
import { punishment } from "./entries/mods/chip/punishment";
import { rocketStart } from "./entries/mods/chip/rocket-start";
import { stackOverflow } from "./entries/mods/chip/stack-overflow";
import { swarmDirective } from "./entries/mods/chip/swarm-directive";
import { triggerDiscipline } from "./entries/mods/chip/trigger-discipline";

/* =========================
   ASSAULT BARRELS
========================= */
import { accuPointBarrel } from "./entries/mods/assault-barrel/accu-point-barrel";

/* =========================
   CQC BARRELS
========================= */
import { flechetteSplitAction } from "./entries/mods/cqc-barrel/flechette-split-action";
import { ghostMuzzle } from "./entries/mods/cqc-barrel/ghost-muzzle";
import { ironholdBarrel } from "./entries/mods/cqc-barrel/ironhold-barrel";
import { nanoSuppressor } from "./entries/mods/cqc-barrel/nano-suppressor";
import { precisionBarrel } from "./entries/mods/cqc-barrel/precision-barrel";
import { weightedBarrel } from "./entries/mods/cqc-barrel/weighted-barrel";

/* =========================
   PRECISION BARRELS
========================= */
import { farshotBarrel } from "./entries/mods/precision-barrel/farshot-barrel";
import { impulseBrake } from "./entries/mods/precision-barrel/impulse-brake";
import { lockoutMuzzleBrake } from "./entries/mods/precision-barrel/lockout-muzzle-brake";
import { outlandSuppressor } from "./entries/mods/precision-barrel/outland-suppressor";
import { steadyBarrel } from "./entries/mods/precision-barrel/steady-barrel";
import { truShotBarrel } from "./entries/mods/precision-barrel/tru-shot-barrel";

/* =========================
   UNDERBARRELS
========================= */
import { ironholdChoke } from "./entries/mods/underbarrel/ironhold-choke";
import { pinpointBarrel } from "./entries/mods/underbarrel/pinpoint-barrel";

/* =========================
   ASSAULT MAGAZINES
========================= */
import { adaptiveMag } from "./entries/mods/assault-magazine/adaptive-mag";
import { drumMag } from "./entries/mods/assault-magazine/drum-mag";
import { hollowCaseRounds } from "./entries/mods/assault-magazine/hollow-case-rounds";
import { intervalMag } from "./entries/mods/assault-magazine/interval-mag";
import { reloaderMag } from "./entries/mods/assault-magazine/reloader-mag";
import { rodeoMag } from "./entries/mods/assault-magazine/rodeoMag";
import { steadyRounds } from "./entries/mods/assault-magazine/steady-rounds";
import { stoppingMag } from "./entries/mods/assault-magazine/stopping-mag";

/* =========================
   BELT-FED MAGAZINES
========================= */
import { balancedBelt } from "./entries/mods/belt-fed-magazine/balanced-belt";
import { cloudfeatherBelt } from "./entries/mods/belt-fed-magazine/cloudfeather-belt";
import { infinityBelt } from "./entries/mods/belt-fed-magazine/infinity-belt";
import { megaBelt } from "./entries/mods/belt-fed-magazine/mega-belt";
import { turboBelt } from "./entries/mods/belt-fed-magazine/turbo-belt";

/* =========================
   MAGAZINES
========================= */
import { balancedPayload } from "./entries/mods/magazine/balanced-payload";
import { combatMag } from "./entries/mods/magazine/combat-mag";
import { compartmentalMagIII } from "./entries/mods/magazine/compartmental-mag-iii";
import { fastloadMagIII } from "./entries/mods/magazine/fastload-mag-iii";
import { fullAutoSelector } from "./entries/mods/magazine/fullautoselector";
import { hiVelocityPayload } from "./entries/mods/magazine/hi-velocity-payload";
import { impactShockwave } from "./entries/mods/magazine/impact-shockwave";
import { slickMagIII } from "./entries/mods/magazine/slickMagIII";

/* =========================
   PISTOL MAGAZINES
========================= */
import { balancedMag } from "./entries/mods/pistol-magazine/balanced-mag";
import { hipshotDampener } from "./entries/mods/pistol-magazine/hipshot-dampener";
import { hiSpeedMag } from "./entries/mods/pistol-magazine/hi-speed-mag";

/* =========================
   PRECISION MAGAZINES
========================= */
import { adrenalFeedbackRounds } from "./entries/mods/precision-magazine/adrenal-feedback-rounds";
import { featherMag } from "./entries/mods/precision-magazine/feather-mag";
import { hiCapMag } from "./entries/mods/precision-magazine/hi-cap-mag";
import { kingmakerMag } from "./entries/mods/precision-magazine/kingmaker-mag";
import { stabilizingMag } from "./entries/mods/precision-magazine/stabilizing-mag";

/* =========================
   ASSAULT OPTICS
========================= */
import { farReachOptic } from "./entries/mods/assault-optic/far-reach-optic";
import { shortwaveScoutOptic } from "./entries/mods/assault-optic/shortwave-scout-optic";
import { twinscopeOptic } from "./entries/mods/assault-optic/twinscope-optic";

/* =========================
   LMG OPTICS
========================= */
import { accuSightLens } from "./entries/mods/lmg-optic/accu-sight-lens";
import { clearEyedLens } from "./entries/mods/lmg-optic/clear-eyed-lens";
import { optic14xIII } from "./entries/mods/lmg-optic/optic-1-4x-iii";

/* =========================
   PISTOL OPTICS
========================= */
import { duelistLens } from "./entries/mods/pistol-optic/duelist-lens";
import { oracleLens } from "./entries/mods/pistol-optic/oracle-lens";
import { pistolScope } from "./entries/mods/pistol-optic/pistol-scope";
import { vigilantLens } from "./entries/mods/pistol-optic/vigilant-lens";

/* =========================
   PRECISION OPTICS
========================= */
import { coldVigilanceScope } from "./entries/mods/precision-optic/cold-vigilance-scope";
import { hiZoomOptic } from "./entries/mods/precision-optic/hi-zoom-optic";
import { leverOverhaulInterface } from "./entries/mods/precision-optic/lever-overhaul-interface";
import { qTapRegenOptic } from "./entries/mods/precision-optic/q-tap-regen-optic";
import { rangefinderOptic } from "./entries/mods/precision-optic/rangefinder-optic";
import { thermalOptic } from "./entries/mods/precision-optic/thermal-optic";
import { thermalOptic2 } from "./entries/mods/precision-optic/thermal-optic-2";
import { vitalIntel } from "./entries/mods/precision-optic/vital-intel";

/* =========================
   SNIPER OPTICS
========================= */
import { accuSightOptic } from "./entries/mods/sniper-optic/accu-sight-optic";
import { chargeCoupledOptic } from "./entries/mods/sniper-optic/charge-coupled-optic";
import { longScopeIII } from "./entries/mods/sniper-optic/long-scope-iii";
import { neuroOpticLens } from "./entries/mods/sniper-optic/neuro-optic-lens";
import { spScopeII } from "./entries/mods/sniper-optic/sp-scope-ii";
import { spScopeIII } from "./entries/mods/sniper-optic/sp-scope-iii";

/* =========================
   RIFLE GRIPS
========================= */
import { sturdyBraceGrip } from "./entries/mods/rifle-grip/sturdy-brace-grip";
import { vigilantGrip } from "./entries/mods/rifle-grip/vigilant-grip";

/* =========================
   SHOTGUN GRIPS
========================= */
import { guardedGrip } from "./entries/mods/shotgun-grip/guarded-grip";
import { hipshotGrip } from "./entries/mods/shotgun-grip/hipshot-grip";
import { overclockedDelimiter } from "./entries/mods/shotgun-grip/overclocked-delimiter";
import { quickdrawGrip } from "./entries/mods/shotgun-grip/quickdraw-grip";
import { snapshotGrip } from "./entries/mods/shotgun-grip/snapshot-grip";

/* =========================
   GENERATORS
========================= */
import { overclockedGenerator } from "./entries/mods/generator/overclockedGenerator";
import { stabilizingGenerator } from "./entries/mods/generator/stabilizing-generator";
import { tunedGenerator } from "./entries/mods/generator/tuned-generator";
import { turboGenerator } from "./entries/mods/generator/turbo-generator";

/* =========================
   VOLT ARRAYS
========================= */
import { cloudfeatherChamber } from "./entries/mods/volt-array/cloudfeather-chamber";
import { nullGravChamber } from "./entries/mods/volt-array/null-grav-chamber";
import { ramPageMag } from "./entries/mods/volt-array/ram-page-mag";
import { thermalSurgeBattery } from "./entries/mods/volt-array/thermal-surge-battery";

/* =========================
   VOLT CELLS
========================= */
import { airCooledChamber } from "./entries/mods/volt-cell/air-cooled-chamber";
import { compressionChamber } from "./entries/mods/volt-cell/compression-chamber";
import { hiCapHeatSink } from "./entries/mods/volt-cell/hi-cap-heat-sink";
import { taperedHeatSink } from "./entries/mods/volt-cell/tapered-heat-sink";

/* =========================
   VOLT DAMPENERS
========================= */
import { hiFocusDampener } from "./entries/mods/volt-dampener/hi-focus-dampener";
import { overchargeLens } from "./entries/mods/volt-dampener/overcharge-lens";
import { suppressionDampener } from "./entries/mods/volt-dampener/suppression-dampener";

/* =========================
   ION DAMPENERS
========================= */
import { quickfireBarrel } from "./entries/mods/ion-dampener/quickfire-barrel";
import { rocksteadyBarrel } from "./entries/mods/ion-dampener/rocksteady-barrel";
import { sonarShot } from "./entries/mods/ion-dampener/sonar-shot";
import { stabilizingBarrel } from "./entries/mods/ion-dampener/stabilizing-barrel";

/* =========================
   SHIELDS
========================= */
import { balancedShield } from "./entries/mods/shield/balanced-shield";
import { circuitShield } from "./entries/mods/shield/circuit-shield";
import { controlShield } from "./entries/mods/shield/control-shield";
import { duelistShield } from "./entries/mods/shield/duelist-shield";
import { foundationShield } from "./entries/mods/shield/foundation-shield";
import { overclockedShield } from "./entries/mods/shield/overclocked-shield";

/* =========================
   CONSUMABLES
========================= */
import { advancedPatchKit } from "./entries/consumables/advanced-patch-kit";
import { advancedShieldCharge } from "./entries/consumables/advanced-shield-charge";
import { panaceaKit } from "./entries/consumables/panacea-kit";
import { selfRevive } from "./entries/consumables/self-revive";

/* =========================
   EQUIPMENT
========================= */
import { bubbleShield } from "./entries/equipment/bubble-shield";
import { commendationGenerator } from "./entries/commendation-generator";
import { empGrenade } from "./entries/equipment/emp-grenade";
import { medPack24XS } from "./entries/equipment/24xs-med-pack-plus";
import { medPack24XS2 } from "./entries/equipment/24xs-med-pack";
import { protectorV2 } from "./entries/equipment/protector-v2";
import { protectorV3 } from "./entries/equipment/protector-v3";
import { reinforcedShieldsV1 } from "./entries/equipment/reinforced-shields-v1";
import { reinforcedShieldsV2 } from "./entries/equipment/reinforced-shields-v2";
import { sneakPack24XS } from "./entries/equipment/24xs-sneak-pack-plus";
import { spectreArmor } from "./entries/equipment/spectre-armor";
import { xs24AmmoPackPlus } from "./entries/equipment/24xs-ammo-pack-plus";
import { xs24BasePack } from "./entries/equipment/24xs-base-pack";

/* =========================
   AMMO
========================= */
import { heavyRounds } from "./entries/ammo/heavy-rounds";
import { hyphaticGel } from "./entries/ammo/hyphatic-gel";
import { lightRounds } from "./entries/ammo/light-rounds";
import { voltCell } from "./entries/ammo/volt-cells";

/* =========================
   SALVAGE
========================= */
import { alienAlloy } from "./entries/salvage/alien-alloy";
import { compilerGanglion } from "./entries/salvage/compiler-ganglion";
import { hazardCapsule } from "./entries/salvage/hazard-capsule";
import { synapseCube } from "./entries/salvage/synapse-cube";
import { droneResin } from "./entries/salvage/droneResin";
import { unstableGel } from "./entries/salvage/unstableGel";
import { unstableBiomass } from "./entries/salvage/unstableBiomass";
import { unstableGunmetal } from "./entries/salvage/unstableGunmetal";
import { fractalCircuit } from "./entries/salvage/fractalCircuit";
import { droneNode } from "./entries/salvage/droneNode";
import { unstableDiode } from "./entries/salvage/unstableDiode";
import { unstableLead } from "./entries/salvage/unstableLead";
import { reclaimedBiostripping } from "./entries/salvage/reclaimedBiostripping";
/* =========================
   VALUABLES
========================= */
import { compilerTrace } from "./entries/valuable/compiler-trace";

/* =========================
   KEYS
========================= */
import { cryoMaintenance01 } from "./entries/keys/cryo-maintenance-cryo-archive-01";
import { cryoMonitoringCryoArchive04 } from "./entries/keys/cryo-monitoring-cryo-archive-04";
import { direMarshKey1 } from "./entries/keys/dire-marsh-key-1";
import { direMarshKey2 } from "./entries/keys/dire-marsh-key-2";
import { direMarshKey3 } from "./entries/keys/dire-marsh-key-3";
import { direMarshKey4 } from "./entries/keys/dire-marsh-key-4";
import { direMarshKey5 } from "./entries/keys/dire-marsh-key-5";
import { direMarshKey6 } from "./entries/keys/dire-marsh-key-6";
import { direMarshKey7 } from "./entries/keys/dire-marsh-key-7";
import { dnaAccessCard } from "./entries/keys/dna-access-card";
import { generatorRoomCryoArchive02 } from "./entries/keys/generator-room-cryo-archive-02";
import { lab06CryoArchive06 } from "./entries/keys/lab-06-cryo-archive-06";
import { perimeterKey1 } from "./entries/keys/perimeter-key-1";
import { perimeterKey2 } from "./entries/keys/perimeter-key-2";
import { perimeterKey3 } from "./entries/keys/perimeter-key-3";
import { pumpStationCryoArchive03 } from "./entries/keys/pump-station-cryo-archive-03";
import { secretCargoCryoArchive05 } from "./entries/keys/secret-cargo-cryo-archive-05";

/* =========================
   CORES
========================= */
import { doubleDose } from "./entries/cores/double-dose";
import { earlyWarningSystem } from "./entries/cores/early-warning-system";
import { intuition } from "./entries/cores/intuition";
import { samaritan } from "./entries/cores/samaritan";

/* =========================
   SPECIAL
========================= */
import { colonistDnaVial } from "./entries/special/colonist-dna-vial";

export const itemsData: ItemEntry[] = [
  /* =========================
     ASSAULT RIFLES
  ========================= */

  impactHAR,
  m77AssaultRifle,
  overrunAr,
  v75Scar,

  /* =========================
     PRECISION RIFLES
  ========================= */

  br33VolleyRifle,
  hardlinePr,
  repeaterHpr,
  stryderM1T,
  twinTapHbr,
  v66Lookout,

  /* =========================
     SMGS
  ========================= */

  brrtSmg,
  bullySmg,
  copperheadRf,
  v22VoltThrower,

  /* =========================
     LMGS
  ========================= */

  conquestLMG,
  demolitionHMG,
  retaliatorLMG,

  /* =========================
     RAILGUNS
  ========================= */

  aresRG,
  v00ZeusRg,

  /* =========================
     SHOTGUNS
  ========================= */

  misriah2442,
  v85CircuitBreaker,
  wstrCombatShotgun,

  /* =========================
     SNIPER RIFLES
  ========================= */

  longshot,
  outland,
  v99ChannelRifle,

  /* =========================
     PISTOLS
  ========================= */

  ceTacticalSidearm,
  magnumMc,
  v11Punch,

  /* =========================
     UNIQUE WEAPONS
  ========================= */

  biotoxicDisinsector,
  drrvish,
  fistOfPhobos,
  m77Omnipositor,
  saltWages,
  v85FreeTail,

  /* =========================
     CHIPS
  ========================= */

  afterburner,
  backgroundProcess,
  battleRunner,
  blueBlood,
  commonEnemy,
  endlessRunner,
  fiveFingerDiscount,
  hurricane,
  insurancePlan,
  punishment,
  rocketStart,
  stackOverflow,
  swarmDirective,
  triggerDiscipline,

  /* =========================
     ASSAULT BARRELS
  ========================= */

  accuPointBarrel,

  /* =========================
     CQC BARRELS
  ========================= */

  flechetteSplitAction,
  ghostMuzzle,
  ironholdBarrel,
  nanoSuppressor,
  precisionBarrel,
  weightedBarrel,

  /* =========================
     PRECISION BARRELS
  ========================= */

  farshotBarrel,
  impulseBrake,
  lockoutMuzzleBrake,
  outlandSuppressor,
  steadyBarrel,
  truShotBarrel,

  /* =========================
     UNDERBARRELS
  ========================= */

  ironholdChoke,
  pinpointBarrel,

  /* =========================
     ASSAULT MAGAZINES
  ========================= */

  adaptiveMag,
  drumMag,
  hollowCaseRounds,
  intervalMag,
  reloaderMag,
  rodeoMag,
  steadyRounds,
  stoppingMag,

  /* =========================
     BELT-FED MAGAZINES
  ========================= */

  balancedBelt,
  cloudfeatherBelt,
  infinityBelt,
  megaBelt,
  turboBelt,

  /* =========================
     MAGAZINES
  ========================= */

  balancedPayload,
  combatMag,
  compartmentalMagIII,
  fastloadMagIII,
  fullAutoSelector,
  hiVelocityPayload,
  impactShockwave,
  slickMagIII,

  /* =========================
     PISTOL MAGAZINES
  ========================= */

  balancedMag,
  hipshotDampener,
  hiSpeedMag,

  /* =========================
     PRECISION MAGAZINES
  ========================= */

  adrenalFeedbackRounds,
  featherMag,
  hiCapMag,
  kingmakerMag,
  stabilizingMag,

  /* =========================
     ASSAULT OPTICS
  ========================= */

  farReachOptic,
  shortwaveScoutOptic,
  twinscopeOptic,

  /* =========================
     LMG OPTICS
  ========================= */

  accuSightLens,
  clearEyedLens,
  optic14xIII,

  /* =========================
     PISTOL OPTICS
  ========================= */

  duelistLens,
  oracleLens,
  pistolScope,
  vigilantLens,

  /* =========================
     PRECISION OPTICS
  ========================= */

  coldVigilanceScope,
  hiZoomOptic,
  leverOverhaulInterface,
  qTapRegenOptic,
  rangefinderOptic,
  thermalOptic,
  thermalOptic2,
  vitalIntel,

  /* =========================
     SNIPER OPTICS
  ========================= */

  accuSightOptic,
  chargeCoupledOptic,
  longScopeIII,
  neuroOpticLens,
  spScopeII,
  spScopeIII,

  /* =========================
     RIFLE GRIPS
  ========================= */

  sturdyBraceGrip,
  vigilantGrip,

  /* =========================
     SHOTGUN GRIPS
  ========================= */

  guardedGrip,
  hipshotGrip,
  overclockedDelimiter,
  quickdrawGrip,
  snapshotGrip,

  /* =========================
     GENERATORS
  ========================= */

  overclockedGenerator,
  stabilizingGenerator,
  tunedGenerator,
  turboGenerator,

  /* =========================
     VOLT ARRAYS
  ========================= */

  cloudfeatherChamber,
  nullGravChamber,
  ramPageMag,
  thermalSurgeBattery,

  /* =========================
     VOLT CELLS
  ========================= */

  airCooledChamber,
  compressionChamber,
  hiCapHeatSink,
  taperedHeatSink,

  /* =========================
     VOLT DAMPENERS
  ========================= */

  hiFocusDampener,
  overchargeLens,
  suppressionDampener,

  /* =========================
     ION DAMPENERS
  ========================= */

  quickfireBarrel,
  rocksteadyBarrel,
  sonarShot,
  stabilizingBarrel,

  /* =========================
     SHIELDS
  ========================= */

  balancedShield,
  circuitShield,
  controlShield,
  duelistShield,
  foundationShield,
  overclockedShield,

  /* =========================
     CONSUMABLES
  ========================= */

  advancedPatchKit,
  advancedShieldCharge,
  panaceaKit,
  selfRevive,

  /* =========================
     EQUIPMENT
  ========================= */

  bubbleShield,
  commendationGenerator,
  empGrenade,
  medPack24XS,
  medPack24XS2,
  protectorV2,
  protectorV3,
  reinforcedShieldsV1,
  reinforcedShieldsV2,
  sneakPack24XS,
  spectreArmor,
  xs24AmmoPackPlus,
  xs24BasePack,

  /* =========================
     AMMO
  ========================= */

  heavyRounds,
  hyphaticGel,
  lightRounds,
  voltCell,

  /* =========================
     SALVAGE
  ========================= */

  alienAlloy,
  compilerGanglion,
  hazardCapsule,
  synapseCube,
  droneResin,
  unstableGel,
  unstableBiomass,
  unstableGunmetal,
  fractalCircuit,
  droneNode,
  unstableDiode,
  unstableLead,
  reclaimedBiostripping,
  /* =========================
     VALUABLES
  ========================= */

  compilerTrace,

  /* =========================
     KEYS
  ========================= */

  cryoMaintenance01,
  cryoMonitoringCryoArchive04,
  direMarshKey1,
  direMarshKey2,
  direMarshKey3,
  direMarshKey4,
  direMarshKey5,
  direMarshKey6,
  direMarshKey7,
  dnaAccessCard,
  generatorRoomCryoArchive02,
  lab06CryoArchive06,
  perimeterKey1,
  perimeterKey2,
  perimeterKey3,
  pumpStationCryoArchive03,
  secretCargoCryoArchive05,

  /* =========================
     CORES
  ========================= */

  doubleDose,
  earlyWarningSystem,
  intuition,
  samaritan,

  /* =========================
     SPECIAL
  ========================= */

  colonistDnaVial,

];
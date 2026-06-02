import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const intervalMag: ItemEntry = {
  id: "interval-mag",

  name: "Interval Mag",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "assault-magazine",

  icon: asset("items/icons/IntervalMag.png"),
  image: asset("items/icons/IntervalMag.png"),
  render: asset("items/icons/IntervalMag.png"),
  video: asset("items/videos/mods/IntervalMag.webm"),

  sellPrice: 1620,

  effect: "Prestige Assault Magazine Mod",

  description:
    "A custom-made mod for the M77 Assault Rifle. Increases range, magazine size, reload speed, aim assist, and accuracy when firing from the hip.",

  lore:
    "A bespoke assault magazine assembly tuned for interval-fire discipline, improving reload flow, range control, and sustained precision with the M77 platform.",

  highlightTerms: [
    "range",
    "magazine size",
    "reload speed",
    "aim assist",
    "hip",
    "interval link",
    "iron sights",
    "midrange scope",
  ],

  tags: [
    "mod",
    "assault magazine",
    "magazine",
    "m77 assault rifle",
    "range",
    "reload speed",
    "aim assist",
    "hipfire",
    "prestige",
  ],

  weaponStatProfiles: [
    {
      weaponId: "m77-assault-rifle",
      weaponName: "M77 Assault Rifle",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.14, unit: "°" },
        { label: "Aim Assist", value: 0, modifier: 0.05, unit: "°" },
        { label: "Reload Speed", value: 0, modifier: -0.5, unit: "S" },
        { label: "Range", value: 0, modifier: 2, unit: "M" },
        { label: "Magazine", value: 0, modifier: 18 },
      ],
    },
  ],

  specialEffects: [
    {
      name: "Interval Link",
      description:
        "Land precision hits with iron sights to build stacks. Press Equip a midrange scope, slowing rate of fire but increasing stability, range, and precision damage, draining stacks over time.",
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const accuSightLens: ItemEntry = {
  id: "accu-sight-lens",

  name: "Accu-Sight Lens",

  category: "mod",
  rarity: "superior",
  modSubcategory: "lmg-optic",

  icon: asset("items/icons/AccuSightLens.png"),
  image: asset("items/icons/AccuSightLens.png"),
  render: asset("items/icons/AccuSightLens.png"),
  video: asset("items/videos/mods/AccuSightLens.webm"),

  sellPrice: 702,

  effect: "Superior LMG Optic Mod",

  description:
    "Increases zoom, range, and ADS accuracy. Decreases ADS speed.",

  lore:
    "A calibrated optic lens built for machine guns, combining thermal target acquisition with extended-range sighting for sustained-fire platforms.",

  weaponStatProfiles: [
    {
      weaponId: "conquest-lmg",
      weaponName: "Conquest LMG",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.5, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.1, unit: "S" },
        { label: "Range", value: 0, modifier: 50, unit: "M" },
        { label: "Zoom", value: 0, modifier: 1.2, unit: "X" },
      ],
    },
    {
      weaponId: "retaliator-lmg",
      weaponName: "Retaliator LMG",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.14, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.05, unit: "S" },
        { label: "Range", value: 0, modifier: 12, unit: "M" },
        { label: "Zoom", value: 0, modifier: 1.2, unit: "X" },
      ],
    },
    {
      weaponId: "demolition-hmg",
      weaponName: "Demolition HMG",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.08, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.02, unit: "S" },
        { label: "Range", value: 0, modifier: 50, unit: "M" },
        { label: "Zoom", value: 0, modifier: 1.2, unit: "X" },
      ],
    },
  ],

  specialEffects: [
    {
      name: "Thermal Sight",
      description:
        "This sight highlights hostile heat signatures.",
    },
  ],

  sources: [{ label: "World Loot", kind: "world-loot" }],
};
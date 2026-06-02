import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const qTapRegenOptic: ItemEntry = {
  id: "q-tap-regen-optic",

  name: "Q-Tap Regen Optic",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "precision-optic",

  icon: asset("items/icons/QTapRegenOptic.png"),
  image: asset("items/icons/QTapRegenOptic.png"),
  render: asset("items/icons/QTapRegenOptic.png"),
  video: asset("items/videos/mods/QTapRegenOptic.webm"),

  sellPrice: 1620,

  effect: "Prestige Precision Optic Mod",

  description:
    "A custom-made mod for the Twin Tap HBR. Increases rounds per burst to four.",

  lore:
    "A regenerative optic package designed for the Twin Tap HBR. Its targeting loop rewards controlled burst fire during critical survival windows.",

  highlightTerms: [
    "q-tap regen optic",
    "health regeneration",
    "rounds per burst",
    "twin tap hbr",
    "precision optic",
  ],

  tags: [
    "mod",
    "optic",
    "precision optic",
    "twin tap hbr",
    "burst",
    "health regeneration",
    "weapon mod",
    "prestige",
  ],

  weaponStatProfiles: [
    {
      weaponId: "twin-tap-hbr",
      weaponName: "Twin Tap HBR",
      stats: [
        { label: "Firepower", value: 0, modifier: -7.9 },
        { label: "Damage", value: 0, modifier: -3.0 },
        { label: "Precision", value: 0, modifier: -0.2 },
        { label: "ADS Speed", value: 0, modifier: -0.07, unit: "S" },
        { label: "Recoil", value: 0, modifier: -6.2, unit: "%" },
        { label: "Range", value: 0, modifier: 10, unit: "M" },
        { label: "Zoom", value: 0, modifier: 1.1, unit: "X" },
      ],
    },
  ],

  specialEffects: [
    {
      name: "Q-Tap Regen Optic",
      description:
        "While health is very low, hit all rounds in a burst to start health regeneration.",
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
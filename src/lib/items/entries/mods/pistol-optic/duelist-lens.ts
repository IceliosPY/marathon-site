import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const duelistLens: ItemEntry = {
  id: "duelist-lens",

  name: "Duelist Lens",

  category: "mod",
  rarity: "superior",
  modSubcategory: "pistol-optic",

  icon: asset("items/icons/DuelistLens.png"),
  image: asset("items/icons/DuelistLens.png"),
  render: asset("items/icons/DuelistLens.png"),
  video: asset("items/videos/mods/DuelistLens.webm"),

  sellPrice: 459,

  effect: "Superior Pistol Optic Mod",

  description:
    "Increases zoom, range, and ADS accuracy while reducing ADS speed.",

  lore:
    "A thermal-enhanced targeting optic built for precision engagements. The Duelist Lens highlights hostile heat signatures and extends effective engagement range at the cost of slower target acquisition.",

  highlightTerms: [
    "duelist lens",
    "thermal sight",
    "zoom",
    "range",
    "ads accuracy",
    "ads speed",
    "pistol optic",
  ],

  tags: [
    "mod",
    "optic",
    "thermal sight",
    "pistol optic",
    "zoom",
    "range",
    "ads accuracy",
    "ads speed",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "ce-tactical-sidearm",
      weaponName: "CE Tactical Sidearm",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.60, unit: "°" },
        { label: "Range", value: 0, modifier: 2, unit: "M" },
        { label: "Zoom", value: 0, modifier: 1.2, unit: "X" },
      ],
    },

    {
      weaponId: "v11-punch",
      weaponName: "V11 Punch",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.68, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.03, unit: "S" },
        { label: "Range", value: 0, modifier: 2, unit: "M" },
        { label: "Zoom", value: 0, modifier: 1.2, unit: "X" },
      ],
    },

    {
      weaponId: "magnum-mc",
      weaponName: "Magnum MC",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.50, unit: "°" },
        { label: "ADS Speed", value: 0, modifier: 0.02, unit: "S" },
        { label: "Range", value: 0, modifier: 2, unit: "M" },
        { label: "Zoom", value: 0, modifier: 0.9, unit: "X" },
      ],
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
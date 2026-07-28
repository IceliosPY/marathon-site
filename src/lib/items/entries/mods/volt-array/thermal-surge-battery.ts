import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const thermalSurgeBattery: ItemEntry = {
  id: "thermal-surge-battery",

  name: "Thermal Surge Battery",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "volt-array",

  icon: asset("items/icons/ThermalSurgeBattery.png"),
  image: asset("items/icons/ThermalSurgeBattery.png"),
  render: asset("items/icons/ThermalSurgeBattery.png"),
  video: asset("items/videos/mods/ThermalSurgeBattery.webm"),

  sellPrice: 1620,

  effect: "Prestige Volt Array Mod",

  description:
    "A custom-made mod for the V11 Punch. Increases reload speed and magazine size.",

  lore:
    "Specialized thermal battery array designed for the V11 Punch. Its charged-shot system improves reload cycling and reduces volt drain while enabling shots to track and overheat hostile targets.",

  highlightTerms: [
    "charged shots",
    "track",
    "Overheat",
    "reload speed",
    "volt drain",
    "v11 punch",
    "volt array",
  ],

  prestigeFeature: {
    title: "Thermal Surge Battery",
    description:
      "Charged shots track towards and Overheat hostiles.",
    color: "yellow",
  },

  weaponStatProfiles: [
    {
      weaponId: "v11-punch",
      weaponName: "V11 Punch",

      stats: [
        {
          label: "Reload Speed",
          value: 3.60,
          modifier: -0.52,
          unit: "S",
        },
        {
          label: "Volt Drain",
          value: 4.5,
          modifier: -2.0,
          unit: "%",
        },
      ],
    },
  ],

  tags: [
    "mod",
    "prestige",
    "volt array",
    "thermal surge battery",
    "v11 punch",
    "reload speed",
    "volt drain",
    "charged shots",
    "tracking",
    "overheat",
    "weapon mod",
  ],

  sources: [
    {
      label: "Prestige Loot",
      kind: "world-loot",
    },
  ],
};
import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const adaptiveMag: ItemEntry = {
  id: "adaptive-mag",

  name: "Adaptive Mag",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "assault-magazine",

  icon: asset("items/icons/AdaptiveMag.png"),
  image: asset("items/icons/AdaptiveMag.png"),
  render: asset("items/icons/AdaptiveMag.png"),
  video: asset("items/videos/mods/AdaptiveMag.webm"),

  sellPrice: 1620,

  effect: "Prestige Assault Magazine Mod",

  description:
    "A custom-made mod for the Overrun AR. Increases reload speed and magazine size.",

  lore:
    "An adaptive assault magazine designed for rapid cycling and flexible fire control. Its reinforced feed system supports extended bursts while maintaining fast reload handling.",

  highlightTerms: [
    "adaptive mag",
    "select fire",
    "burst-fire",
    "reload speed",
    "magazine",
    "overrun ar",
  ],

  tags: [
    "mod",
    "magazine",
    "assault magazine",
    "reload speed",
    "burst fire",
    "weapon mod",
    "overrun ar",
    "prestige",
  ],

  weaponStatProfiles: [
    {
      weaponId: "overrun-ar",
      weaponName: "Overrun AR",
      stats: [
        { label: "Reload Speed", value: 0, modifier: -0.24, unit: "S" },
        { label: "Magazine", value: 0, modifier: 30 },
      ],
    },
  ],

  specialEffects: [
    {
      name: "Select Fire",
      description:
        "Press: Toggle burst-fire mode. Body shots increase precision and aim assist for a short time.",
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
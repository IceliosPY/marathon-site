import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const dynamicCompounds: ItemEntry = {
  id: "dynamic-compounds",

  name: "Dynamic Compounds",

  category: "salvage",
  rarity: "enhanced",

  icon: asset("items/icons/dynamic-compounds.png"),
  image: asset("items/icons/dynamic-compounds.png"),
  render: asset("items/icons/dynamic-compounds.png"),
  video: asset("items/videos/salvage/dynamic-compounds.mp4"),

  sellPrice: 2400,

  effect: "Enhanced Salvage",

  description:
    "Compound Salvage. Reactive chemicals valued for their use in explosives manufacturing.\n\nSources\nDire Marsh\n• Complex\nOutpost\n• Airfield\n• Pinwheel Base\nCryo Archive\n• Index\nMunitions Crate\n\nUsage\nMIDA Upgrades and Barters",

  highlightTerms: [
    "Sources",
    "Usage",
  ],

  sources: [
    {
      label: "Dire Marsh - Complex",
      kind: "world-loot",
    },
    {
      label: "Outpost - Airfield",
      kind: "world-loot",
    },
    {
      label: "Outpost - Pinwheel Base",
      kind: "world-loot",
    },
    {
      label: "Cryo Archive - Index",
      kind: "world-loot",
    },
    {
      label: "Munitions Crate",
      kind: "world-loot",
    },
  ],

  tags: [
    "salvage",
    "enhanced",
    "dynamic",
    "compounds",
    "compound",
    "chemical",
    "reactive",
    "explosives",
    "dire marsh",
    "complex",
    "outpost",
    "airfield",
    "pinwheel base",
    "cryo archive",
    "index",
    "munitions crate",
    "mida",
  ],
};
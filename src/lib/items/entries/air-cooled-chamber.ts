import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const airCooledChamber: ItemEntry = {
  id: "air-cooled-chamber",

  name: "Air-Cooled Chamber",

  category: "mod",
  rarity: "superior",
  modSubcategory: "volt-cell",

  icon: asset("items/icons/air-cooled-chamber.png"),
  image: asset("items/icons/air-cooled-chamber.png"),
  render: asset("items/icons/air-cooled-chamber.png"),
  video: asset("items/videos/mods/air-cooled-chamber.mp4"),

  sellPrice: 621,

  effect: "Superior Volt Cell Mod",

  description:
    "Greatly increases reload speed and magazine size.",

  highlightTerms: [
    "reload speed",
    "magazine size",
    "volt drain",
  ],

  lore:
    "Air-cooled volt chamber designed to vent excess thermal buildup during sustained charge cycles, improving reload efficiency and reducing energy loss.",

  tags: [
    "mod",
    "volt cell",
    "volt-cell mod",
    "reload speed",
    "magazine",
    "energy weapon",
    "air cooled",
    "v99 channel rifle",
    "v00 zeus rg",
    "v85 circuit breaker",
  ],

  weaponStatProfiles: [
    {
      weaponId: "v99-channel-rifle",
      weaponName: "V99 Channel Rifle",
      stats: [
        {
          label: "Reload Speed",
          value: 0,
          modifier: -1.58,
          unit: "S",
        },
        {
          label: "Volt Drain",
          value: 0,
          modifier: -7.4,
          unit: "%",
        },
      ],
    },
    {
      weaponId: "v00-zeus-rg",
      weaponName: "V00 ZEUS RG",
      stats: [
        {
          label: "Reload Speed",
          value: 0,
          modifier: -1.19,
          unit: "S",
        },
        {
          label: "Volt Drain",
          value: 0,
          modifier: -8.8,
          unit: "%",
        },
      ],
    },
    {
      weaponId: "v85-circuit-breaker",
      weaponName: "V85 Circuit Breaker",
      stats: [
        {
          label: "Reload Speed",
          value: 0,
          modifier: -1.23,
          unit: "S",
        },
        {
          label: "Volt Drain",
          value: 0,
          modifier: -1.8,
          unit: "%",
        },
      ],
    },
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
    {
      label: "UESC Armory",
      kind: "vendor",
      target: {
        type: "vendor",
        id: "uesc-armory",
      },
    },
  ],
};
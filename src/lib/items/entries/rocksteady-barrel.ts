import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const rocksteadyBarrel: ItemEntry = {
  id: "rocksteady-barrel",

  name: "Rocksteady Barrel",

  category: "mod",
  rarity: "superior",
  modSubcategory: "ion-dampener",

  icon: asset("items/icons/RocksteadyBarrel.png"),
  image: asset("items/icons/RocksteadyBarrel.png"),
  render: asset("items/icons/RocksteadyBarrel.png"),
  video: asset("items/videos/mods/RocksteadyBarrel.webm"),

  sellPrice: 540,

  effect: "Superior Ion Dampener Mod",

  description:
    "Greatly increases accuracy while crouched, ADS accuracy, and range.",

  lore:
    "A reinforced precision barrel assembly engineered to remain exceptionally stable when firing from supported or crouched positions. Favored by marksmen engaging targets at extended distances.",

  highlightTerms: [
    "rocksteady barrel",
    "ADS accuracy",
    "ADS spread",
    "crouch spread bonus",
    "range",
    "precision",
    "ion dampener",
  ],

  weaponStatProfiles: [
    {
      weaponId: "v66-lookout",
      weaponName: "V66 Lookout",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.1, unit: "°" },
        { label: "Crouch Spread Bonus", value: 0, modifier: -50, unit: "%" },
        { label: "Range", value: 0, modifier: 17, unit: "M" },
      ],
    },

    {
      weaponId: "v99-channel-rifle",
      weaponName: "V99 Channel Rifle",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.15, unit: "°" },
        { label: "Crouch Spread Bonus", value: 0, modifier: -45, unit: "%" },
        { label: "Range", value: 0, modifier: 40, unit: "M" },
      ],
    },
  ],

  tags: [
    "mod",
    "ion dampener",
    "barrel",
    "rocksteady barrel",
    "ADS accuracy",
    "ADS spread",
    "range",
    "crouch spread bonus",
    "marksman",
    "weapon mod",
    "superior",
  ],

  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
  ],
};
import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const ironholdBarrel: ItemEntry = {
  id: "ironhold-barrel",

  name: "Ironhold Barrel",

  category: "mod",
  rarity: "superior",
  modSubcategory: "cqc-barrel",

  icon: asset("items/icons/IronholdBarrel.png"),
  image: asset("items/icons/IronholdBarrel.png"),
  render: asset("items/icons/IronholdBarrel.png"),
  video: asset("items/videos/mods/IronholdBarrel.webm"),

  sellPrice: 540,

  effect: "Superior CQC Barrel Mod",

  description:
    "Greatly increases stability, ready speed, and accuracy while crouched.",


  highlightTerms: [
    "stability",
    "recoil",
    "ready speed",
    "crouch accuracy",
    "cqc",
    "barrel",
  ],

  tags: [
    "mod",
    "cqc barrel",
    "stability",
    "recoil reduction",
    "crouch accuracy",
    "weapon mod",
    "superior",
  ],

  weaponStatProfiles: [
    {
      weaponId: "ce-tactical-sidearm",
      weaponName: "CE Tactical Sidearm",

      stats: [
        {
          label: "Crouch Spread Bonus",
          value: 90,
          modifier: -18,
          unit: "%",
        },
        {
          label: "Equip Speed",
          value: 0.8,
          modifier: -0.19,
          unit: "S",
        },
        {
          label: "Recoil",
          value: 43,
          modifier: -18,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "magnum-mc",
      weaponName: "Magnum MC",

      stats: [
        {
          label: "Crouch Spread Bonus",
          value: 90,
          modifier: -18,
          unit: "%",
        },
        {
          label: "Equip Speed",
          value: 0.8,
          modifier: -0.19,
          unit: "S",
        },
        {
          label: "Recoil",
          value: 128.8,
          modifier: -82.8,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "brrt-smg",
      weaponName: "BRRT SMG",

      stats: [
        {
          label: "Crouch Spread Bonus",
          value: 85,
          modifier: -15,
          unit: "%",
        },
        {
          label: "Equip Speed",
          value: 0.9,
          modifier: -0.18,
          unit: "S",
        },
        {
          label: "Recoil",
          value: 143.6,
          modifier: -87.6,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "copperhead-rf",
      weaponName: "Copperhead RF",

      stats: [
        {
          label: "Crouch Spread Bonus",
          value: 85,
          modifier: -15,
          unit: "%",
        },
        {
          label: "Equip Speed",
          value: 0.9,
          modifier: -0.18,
          unit: "S",
        },
        {
          label: "Recoil",
          value: 90,
          modifier: -65,
          unit: "%",
        },
      ],
    },

    {
      weaponId: "bully-smg",
      weaponName: "Bully SMG",

      stats: [
        {
          label: "Crouch Spread Bonus",
          value: 80,
          modifier: -20,
          unit: "%",
        },
        {
          label: "Equip Speed",
          value: 0.9,
          modifier: -0.18,
          unit: "S",
        },
        {
          label: "Recoil",
          value: 82,
          modifier: -42,
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
  ],
};
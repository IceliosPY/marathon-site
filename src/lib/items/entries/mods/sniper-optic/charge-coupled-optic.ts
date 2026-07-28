import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const chargeCoupledOptic: ItemEntry = {
  id: "charge-coupled-optic",

  name: "Charge-Coupled Optic",

  category: "mod",
  rarity: "prestige",
  modSubcategory: "sniper-optic",

  icon: asset("items/icons/ChargeCoupledOptic.png"),
  image: asset("items/icons/ChargeCoupledOptic.png"),
  render: asset("items/icons/ChargeCoupledOptic.png"),
  video: asset("items/videos/mods/ChargeCoupledOptic.webm"),

  sellPrice: 1620,

  effect: "Prestige Sniper Optic Mod",

  description:
    "A unique mod for the V99 Channel Rifle. Increases ADS accuracy.",

  lore:
    "A charge-linked targeting assembly that synchronizes with the V99's energy cycle. While aiming down sights, photometric amplification improves target acquisition and accelerates charge buildup.",

  highlightTerms: [
    "ADS accuracy",
    "ADS spread",
    "charge rate",
    "channel rifle",
    "photometric amplifier",
  ],

  tags: [
    "mod",
    "optic",
    "sniper optic",
    "ads",
    "accuracy",
    "v99",
    "prestige",
    "unique",
  ],
  
  prestigeFeature: {
    title: "Photometric Amplifier",
    description: "Charge rate is increased while aiming down sights.",
    color: "yellow",
  },

  weaponStatProfiles: [
    {
      weaponId: "v99-channel-rifle",
      weaponName: "V99 Channel Rifle",
      stats: [
        { label: "ADS Spread", value: 0, modifier: -0.20 },
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
import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const xs24AmmoPackPlus: ItemEntry = {
  id: "24xs-ammo-pack-plus",

  name: "24XS AMMO PACK+",

  category: "backpack",
  rarity: "prestige",

  icon: asset("items/icons/ammopackg.png"),
  image: asset("items/icons/ammopackg.png"),
  render: asset("items/icons/ammopackg.png"),
  video: asset("items/videos/backpacks/24XSAmmoPackPlus.mp4"),

  sellPrice: 5000,

  effect: "Prestige Backpack",

  description:
    "+24 Slots\n+ Stowed weapon automatically reloads 10% of its magazine every second.\n+ Generate ammo after eliminating a target.",




  sources: [
    {
      label: "World Loot",
      kind: "world-loot",
    },
    {
        label: "Cyac market",
        kind: "vendor",
        target: {
          type: "vendor",
          id: "armory",
        },
    },
  ],

  tags: [
    "backpack",
    "ammo",
    "prestige",
    "storage",
    "combat",
    "reload",
    "uesc",
    "unique",
  ],
};
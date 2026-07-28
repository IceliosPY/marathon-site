import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const lab06CryoArchive06: ItemEntry = {
  id: "lab-06-cryo-archive-06",

  name: "LAB 06 [CRYO ARCHIVE 06]",

  category: "key",
  rarity: "contraband",

  icon: asset("items/icons/DNAAccessCard.png"),
  image: asset("items/icons/DNAAccessCard.png"),
  render: asset("items/icons/DNAAccessCard.png"),
  video: asset("items/videos/keys/DNAAccessCard.mp4"),

  sellPrice: 3000,

  effect: "Contraband Key",

  description:
    "reSTRi#Ted ACCeS8\n\nP0w#R..........#/8\nC00l!ng.......#/1\nRefui?e#.\nSci#nc# Te#m Acc#ss Cod#",


  sources: [
    {
      label: "Cryo Archive",
      kind: "world-loot",
    },
  ],

  tags: [
    "key",
    "lab",
    "archive",
    "cryo",
    "dna",
    "access",
    "contraband",
    "uesc",
  ],
};
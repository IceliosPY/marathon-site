import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const cryoMaintenance01: ItemEntry = {
  id: "cryo-maintenance-cryo-archive-01",

  name: "CRYO MAINTENANCE [CRYO ARCHIVE 01]",

  category: "key",
  rarity: "superior",

  icon: asset("items/icons/DNAAccessCard.png"),
  image: asset("items/icons/DNAAccessCard.png"),
  render: asset("items/icons/DNAAccessCard.png"),
  video: asset("items/videos/keys/DNAAccessCard.mp4"),

  sellPrice: 900,

  effect: "Superior Key",

  description:
    "ReSTR!Ct#D aCC#S5\n\nP0w#R..........#/8\nC00l!ng.......#/1",

  sources: [
    {
      label: "Cryo Archive",
      kind: "world-loot",
    },
  ],

  tags: [
    "key",
    "maintenance",
    "archive",
    "cryo",
    "dna",
    "access",
    "superior",
    "uesc",
  ],
};
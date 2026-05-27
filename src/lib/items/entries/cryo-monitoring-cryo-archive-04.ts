import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const cryoMonitoringCryoArchive04: ItemEntry = {
  id: "cryo-monitoring-cryo-archive-04",

  name: "CRYO MONITORING [CRYO ARCHIVE 04]",

  category: "key",
  rarity: "prestige",

  icon: asset("items/icons/DNAAccessCard.png"),
  image: asset("items/icons/DNAAccessCard.png"),
  render: asset("items/icons/DNAAccessCard.png"),
  video: asset("items/videos/keys/DNAAccessCard.mp4"),

  sellPrice: 2000,

  effect: "Prestige Key",

  description:
    "R#stRIcTEd acCEs6\n\nP0w#R..........#/8\nC00l!ng.......#/1\nRe#uire#:\nColoni## Cred#nt##als",

  sources: [
    {
      label: "Cryo Archive",
      kind: "world-loot",
    },
  ],

  tags: [
    "key",
    "cryo",
    "monitoring",
    "archive",
    "cryo archive",
    "dna",
    "access",
    "prestige",
    "uesc",
  ],
};
import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const pumpStationCryoArchive03: ItemEntry = {
  id: "pump-station-cryo-archive-03",

  name: "PUMP STATION [CRYO ARCHIVE 03]",

  category: "key",
  rarity: "prestige",

  icon: asset("items/icons/DNAAccessCard.png"),
  image: asset("items/icons/DNAAccessCard.png"),
  render: asset("items/icons/DNAAccessCard.png"),
  video: asset("items/videos/keys/DNAAccessCard.mp4"),

  sellPrice: 2000,

  effect: "Prestige Key",

  description:
    "rESTR!ct#d aCceS5\n\nPoWEr..........#/8\nc00LinG.......#/1\nRed#lr#s:\nUE5C P#mp Cred##ti#als",

  sources: [
    {
      label: "Cryo Archive",
      kind: "world-loot",
    },
  ],

  tags: [
    "key",
    "pump",
    "station",
    "archive",
    "cryo",
    "dna",
    "access",
    "prestige",
    "uesc",
  ],
};
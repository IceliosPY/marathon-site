import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const generatorRoomCryoArchive02: ItemEntry = {
  id: "generator-room-cryo-archive-02",

  name: "GENERATOR ROOM [CRYO ARCHIVE 02]",

  category: "key",
  rarity: "superior",

  icon: asset("items/icons/DNAAccessCard.png"),
  image: asset("items/icons/DNAAccessCard.png"),
  render: asset("items/icons/DNAAccessCard.png"),
  video: asset("items/videos/keys/DNAAccessCard.mp4"),

  sellPrice: 900,

  effect: "Superior Key",

  description:
    "R#STr!CteD AcC#s4\n\nPoWEr..........#/8\nc00LinG.......#/1",

  sources: [
    {
      label: "Cryo Archive",
      kind: "world-loot",
    },
  ],

  tags: [
    "key",
    "generator",
    "room",
    "archive",
    "cryo",
    "dna",
    "access",
    "superior",
    "uesc",
  ],
};
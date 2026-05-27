import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const secretCargoCryoArchive05: ItemEntry = {
  id: "secret-cargo-cryo-archive-05",

  name: "SECRET CARGO [CRYO ARCHIVE 05]",

  category: "key",
  rarity: "prestige",

  icon: asset("items/icons/DNAAccessCard.png"),
  image: asset("items/icons/DNAAccessCard.png"),
  render: asset("items/icons/DNAAccessCard.png"),
  video: asset("items/videos/keys/DNAAccessCard.mp4"),

  sellPrice: 2000,

  effect: "Prestige Key",

  description:
    "R#stRIcTEd acCEs4\n\nP0w#R..........#/8\nC00l!ng.......#/1\nRe#uire#:\nTran#uil##y Cr#denti#ls",

  sources: [
    {
      label: "Cryo Archive",
      kind: "world-loot",
    },
  ],

  tags: [
    "key",
    "cryo",
    "cargo",
    "secret cargo",
    "archive",
    "cryo archive",
    "dna",
    "access",
    "prestige",
    "uesc",
  ],
};
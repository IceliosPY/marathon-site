import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const dnaAccessCard: ItemEntry = {
  id: "dna-access-card",

  name: "DNA Access Card",

  category: "key",
  rarity: "superior",

  icon: asset("items/icons/DNAAccessCard.png"),
  image: asset("items/icons/DNAAccessCard.png"),
  render: asset("items/icons/DNAAccessCard.png"),
  video: asset("items/videos/keys/DNAAccessCard.mp4"),

  sellPrice: 1440,
  
  description:
  "Single-use access card. Use to print a unique DNA Sequence at one of the DNA Sequencers located on the Marathon's Cryo Archive deck, ALERT: DNA Network Access required. Collect AI subroutines 01-06 to unlock DNA Network Access.",

  sources: [
    {
      label: "Cryo Archive",
      kind: "map-point",
      target: {
        type: "map",
        id: "cryo-archive",
      },
    },
    {
      label: "Vault loots",
      kind: "world-loot",
    },
  ],

  highlightTerms: [
    "DNA Sequencers",
    "DNA Sequence",
    "DNA Network Access",
    "Cryo Archive",
    "AI subroutines",
  ],

  tags: [
    "key",
    "access card",
    "dna",
    "cryo archive",
    "uesc",
    "security",
    "single use",
    "sequence",
  ],
};
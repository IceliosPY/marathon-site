import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const flechetteSplitAction: ItemEntry = {
    id: "flechette-split-action",
  
    name: "Flechette Split Action",
  
    category: "mod",
    rarity: "prestige",
    modSubcategory: "cqc-barrel",
  
    icon: asset("items/icons/FlechetteSplitAction.png"),
    image: asset("items/icons/FlechetteSplitAction.png"),
    render: asset("items/icons/FlechetteSplitAction.png"),
    video: asset("items/videos/mods/FlechetteSplitAction.webm"),
  
    sellPrice: 1620,
  
    effect: "Prestige CQC Barrel Mod",
  
    description:
      "A custom-made mod for the BRRT SMG. Increases stability, handling, and accuracy when firing from the hip.",
  
    lore:
      "An experimental split-action barrel assembly designed to compress burst dispersion into an exceptionally tight pattern. Favored by operators who rely on overwhelming close-range engagements.",
  
    highlightTerms: [
      "flechette split action",
      "hypertemporal shot",
      "burst fire",
      "tight spread",
      "hipfire",
      "recoil",
      "brrt smg",
    ],
  
    tags: [
      "mod",
      "cqc barrel",
      "barrel",
      "brrt smg",
      "hipfire",
      "burst fire",
      "stability",
      "weapon mod",
      "prestige",
    ],
  
    weaponStatProfiles: [
      {
        weaponId: "brrt-smg",
        weaponName: "BRRT SMG",
        stats: [
          {
            label: "Hipfire Spread",
            value: 0,
            modifier: -0.08,
            unit: "°",
          },
          {
            label: "Equip Speed",
            value: 0,
            modifier: -0.05,
            unit: "S",
          },
          {
            label: "Recoil",
            value: 0,
            modifier: -39.2,
            unit: "%",
          },
        ],
      },
    ],
  
    specialEffects: [
      {
        name: "Hypertemporal Shot",
        description:
          "Fire all 5 rounds of a burst at once in a tight spread.",
      },
    ],
  
    sources: [
      {
        label: "World Loot",
        kind: "world-loot",
      },
    ],
  };
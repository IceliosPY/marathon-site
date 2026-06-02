import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const ghostMuzzle: ItemEntry = {
    id: "ghost-muzzle",
  
    name: "Ghost Muzzle",
  
    category: "mod",
    rarity: "prestige",
    modSubcategory: "cqc-barrel",
  
    icon: asset("items/icons/GhostMuzzle.png"),
    image: asset("items/icons/GhostMuzzle.png"),
    render: asset("items/icons/GhostMuzzle.png"),
    video: asset("items/videos/mods/GhostMuzzle.webm"),
  
    sellPrice: 1620,
  
    effect: "Prestige CQC Barrel Mod",
  
    description:
      "A custom-made mod for the CE Tactical Sidearm. Increases accuracy when firing from the hip, stability, aim assist, recoil direction, and movement speed with this weapon.",
  
    lore:
      "An advanced suppressor system designed for covert operators. The Ghost Muzzle dampens report and recoil while enhancing close-quarters weapon control, making it ideal for stealth eliminations.",
  
    highlightTerms: [
      "ghost muzzle",
      "spiderbite suppressor",
      "suppressed",
      "stealth",
      "hipfire",
      "recoil",
      "aim assist",
      "ce tactical sidearm",
    ],
  
    tags: [
      "mod",
      "cqc barrel",
      "barrel",
      "suppressor",
      "stealth",
      "ce tactical sidearm",
      "hipfire",
      "weapon mod",
      "prestige",
    ],
  
    weaponStatProfiles: [
      {
        weaponId: "ce-tactical-sidearm",
        weaponName: "CE Tactical Sidearm",
        stats: [
          {
            label: "Hipfire Spread",
            value: 0,
            modifier: -0.79,
            unit: "°",
          },
          {
            label: "Weight",
            value: 0,
            modifier: -2.0,
            unit: "%",
          },
          {
            label: "Recoil",
            value: 0,
            modifier: -18.0,
            unit: "%",
          },
          {
            label: "Aim Assist",
            value: 0,
            modifier: 0.23,
            unit: "°",
          },
        ],
      },
    ],
  
    specialEffects: [
      {
        name: "Spiderbite Suppressor",
        description:
          "Silences this weapon's shots. Eliminations with this weapon cause you to become briefly invisible.",
      },
    ],
  
    sources: [
      {
        label: "World Loot",
        kind: "world-loot",
      },
    ],
  };
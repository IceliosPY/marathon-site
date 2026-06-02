import type { ItemEntry } from "../types";
import { asset } from "../../assets";

export const duelistShield: ItemEntry = {
    id: "duelist-shield",
  
    name: "Duelist Shield",
  
    category: "mod",
    rarity: "superior",
    modSubcategory: "shield",
  
    icon: asset("items/icons/DuelistShield.png"),
    image: asset("items/icons/DuelistShield.png"),
    render: asset("items/icons/DuelistShield.png"),
    video: asset("items/videos/mods/DuelistShield.webm"),
  
    sellPrice: 621,
  
    effect: "Superior Shield Mod",
  
    description: "Greatly increases accuracy while moving and ADS speed.",
  
    lore:
      "A mobile shield unit designed for aggressive machine-gun users. It improves weapon control during movement while keeping the assault shield ready for incoming fire.",
  
    weaponStatProfiles: [
      {
        weaponId: "conquest-lmg",
        weaponName: "Conquest LMG",
        stats: [
          { label: "Moving Inaccuracy", value: 0, modifier: -81.8, unit: "%" },
          { label: "ADS Speed", value: 0, modifier: -0.35, unit: "S" },
        ],
      },
      {
        weaponId: "retaliator-lmg",
        weaponName: "Retaliator LMG",
        stats: [
          { label: "Moving Inaccuracy", value: 0, modifier: -32.7, unit: "%" },
          { label: "ADS Speed", value: 0, modifier: -0.30, unit: "S" },
        ],
      },
      {
        weaponId: "demolition-hmg",
        weaponName: "Demolition HMG",
        stats: [
          { label: "Moving Inaccuracy", value: 0, modifier: -12.3, unit: "%" },
          { label: "ADS Speed", value: 0, modifier: -0.22, unit: "S" },
        ],
      },
    ],
  
    specialEffects: [
      {
        name: "Assault Shield",
        description:
          "Activate an energy shield that absorbs incoming damage.",
      },
    ],
  
    sources: [
      {
        label: "World Loot",
        kind: "world-loot",
      },
    ],
  };
import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const lockoutMuzzleBrake: ItemEntry = {
    id: "lockout-muzzle-brake",
  
    name: "Lockout Muzzle Brake",
  
    category: "mod",
    rarity: "prestige",
    modSubcategory: "precision-barrel",
  
    icon: asset("items/icons/LockoutMuzzleBrake.png"),
    image: asset("items/icons/LockoutMuzzleBrake.png"),
    render: asset("items/icons/LockoutMuzzleBrake.png"),
    video: asset("items/videos/mods/LockoutMuzzleBrake.webm"),
  
    sellPrice: 1620,
  
    effect: "Prestige Precision Barrel Mod",
  
    description:
      "A custom-made mod for the BR33 Volley Rifle. Suppresses fire. Increases movement speed.",
  
    lore:
      "A specialized muzzle brake tuned for the BR33 Volley Rifle. It improves control during hipfire while reducing weapon weight for faster movement.",
  
    highlightTerms: [
      "lockout muzzle brake",
      "hipfire",
      "accuracy",
      "stability",
      "range",
      "movement speed",
      "br33 volley rifle",
    ],
  
    tags: [
      "mod",
      "barrel",
      "precision barrel",
      "muzzle brake",
      "br33 volley rifle",
      "hipfire",
      "movement speed",
      "weapon mod",
      "prestige",
    ],
  
    weaponStatProfiles: [
      {
        weaponId: "br33-volley-rifle",
        weaponName: "BR33 Volley Rifle",
        stats: [
          { label: "Hipfire Spread", value: 0, modifier: -1.8, unit: "°" },
          { label: "Weight", value: 0, modifier: -18.0, unit: "%" },
        ],
      },
    ],
  
    specialEffects: [
      {
        name: "Lockout Muzzle Brake",
        description:
          "While firing from the hip, this weapon has greatly increased accuracy, stability, and range.",
      },
    ],
  
    sources: [
      {
        label: "World Loot",
        kind: "world-loot",
      },
    ],
  };
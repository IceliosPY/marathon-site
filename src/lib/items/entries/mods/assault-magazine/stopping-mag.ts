import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const stoppingMag: ItemEntry = {
    id: "stopping-mag",
  
    name: "Stopping Mag",
  
    category: "mod",
    rarity: "prestige",
    modSubcategory: "assault-magazine",
  
    icon: asset("items/icons/StoppingMag.png"),
    image: asset("items/icons/StoppingMag.png"),
    render: asset("items/icons/StoppingMag.png"),
    video: asset("items/videos/mods/StoppingMag.webm"),
  
    sellPrice: 1620,
  
    effect: "Prestige Assault Magazine Mod",
  
    description:
      "A custom-made mod for the Impact H-AR. Increases magazine size and reload speed.",
  

  
    highlightTerms: [
      "stopping mag",
      "hot rounds",
      "reload speed",
      "magazine size",
      "impact h-ar",
      "heat",
    ],
  
    tags: [
      "mod",
      "assault magazine",
      "magazine",
      "reload speed",
      "impact h-ar",
      "hot rounds",
      "heat",
      "weapon mod",
      "prestige",
    ],
  
    weaponStatProfiles: [
      {
        weaponId: "impact-har",
        weaponName: "Impact H-AR",
        stats: [
          {
            label: "Reload Speed",
            value: 0,
            modifier: -1.13,
            unit: "S",
          },
          {
            label: "Magazine",
            value: 0,
            modifier: 36,
          },
        ],
      },
    ],
  
    specialEffects: [
      {
        name: "Hot Rounds",
        description:
          "Fires charged rounds that generate heat on targets.",
      },
    ],
  
    sources: [
      {
        label: "World Loot",
        kind: "world-loot",
      },
    ],
  };
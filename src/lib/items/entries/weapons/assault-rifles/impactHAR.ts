import type { ItemEntry } from "@/lib/items/types";
import { asset } from "@/lib/assets";

export const impactHAR: ItemEntry = {
    id: "impact-har",
  
    name: "Impact H-AR",
  
    category: "weapon",
    rarity: "standard",
  
    icon: asset("items/icons/ImpactHAR.png"),
    image: asset("items/icons/ImpactHAR.png"),
    render: asset("items/icons/ImpactHAR.png"),
    video: asset("items/videos/weapons/ImpactHAR.mp4"),
  
    sellPrice: 9800,
  
    description:
      "Heavy assault rifle with reinforced frame and high-caliber firing system.",
  
    effect: "Standard Assault Rifle",
  
    lore:
      "Built around a reinforced receiver and high-caliber ammunition, the Impact H-AR delivers powerful shots with excellent stopping power. Its heavier construction makes it harder to handle while rewarding disciplined fire.",
  
    ammo: {
      itemId: "heavy-rounds",
      label: "Heavy Rounds",
      icon: asset("items/icons/heavy-rounds.png"),
    },
  
    stats: [
      {
        label: "Firepower",
        value: 28.8,
        max: 220,
  
        details: [
          {
            label: "Damage",
            value: "18.0",
          },
          {
            label: "Precision",
            value: "1.6",
          },
          {
            label: "Rate of Fire",
            value: "400 RPM",
          },
        ],
      },
  
      {
        label: "Accuracy",
        value: 48.5,
        max: 100,
  
        details: [
          {
            label: "Hipfire Spread",
            value: "3.30°",
          },
          {
            label: "ADS Spread",
            value: "0.48°",
          },
          {
            label: "Crouch Spread Bonus",
            value: "80.0%",
          },
          {
            label: "Moving Inaccuracy",
            value: "90.9%",
          },
        ],
      },
  
      {
        label: "Handling",
        value: 41,
        max: 100,
  
        details: [
          {
            label: "Equip Speed",
            value: "0.94S",
          },
          {
            label: "ADS Speed",
            value: "0.8S",
          },
          {
            label: "Weight",
            value: "32.0%",
          },
          {
            label: "Recoil",
            value: "80.0%",
          },
          {
            label: "Aim Assist",
            value: "1.18°",
          },
          {
            label: "Reload Speed",
            value: "2.79S",
          },
        ],
      },
  
      {
        label: "Range",
        value: 60,
        max: 200,
        unit: "M",
      },
  
      {
        label: "Magazine",
        value: 18,
        max: 60,
      },
  
      {
        label: "Zoom",
        value: 1.2,
        max: 6.0,
        unit: "X",
      },
    ],
  
    acceptedModSubcategories: [
      "chip",
      "assault-magazine",
      "assault-optic",
      "rifle-grip",
    ],
  
    tags: [
      "weapon",
      "assault rifle",
      "impact h-ar",
      "heavy rifle",
      "automatic",
      "uesc",
      "heavy rounds",
      "high caliber",
    ],
  };
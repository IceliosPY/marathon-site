import type { ItemEntry } from "./types";
import { itemRarityColors, priorityGradient } from "./rarities";

export function getItemStyle(item: ItemEntry) {
  if (item.isPriority) {
    return {
      background: priorityGradient,
      color: "#000",
      border: "none",
    };
  }

  return {
    border: `1px solid ${itemRarityColors[item.rarity]}`,
    color: itemRarityColors[item.rarity],
  };
}

export function getItemById(items: ItemEntry[], id: string) {
  return items.find((item) => item.id === id);
}
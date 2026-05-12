import type { ItemRarity } from "./types";

export const itemRarityColors: Record<ItemRarity, string> = {
  standard: "#ffffff",
  enhanced: "#4caf50",
  deluxe: "#2196f3",
  superior: "#9c27b0",
  prestige: "#ffd700",
  contraband: "#ff3b3b",
  priority : "#C0FE04",
};

export const priorityGradient =
  "linear-gradient(90deg, #4caf50, #ffd700)";
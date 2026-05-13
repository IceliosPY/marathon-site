export type ShellAbilityType =
  | "prime"
  | "tactical"
  | "trait"
  | "passive";

export type ShellAbility = {
  id: string;
  name: string;

  type: ShellAbilityType;

  description: string;

  icon?: string;
};

export type ShellPreview = {
  role: string;

  tech: string;

  intro: string;

  body: string;

  code?: string;
};

export type Shell = {
  id: string;

  name: string;

  class: string;

  manufacturer: string;

  status: string;

  summary: string;

  portrait: string;

  background: string;

  quote?: string;

  preview: ShellPreview;

  abilities: ShellAbility[];
};
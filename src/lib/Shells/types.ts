export type ShellAbility = {
    id: string;
    name: string;
    type: "prime" | "tactical" | "trait" | "passive";
    description: string;
    icon?: string;
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
  
    abilities: ShellAbility[];
  };
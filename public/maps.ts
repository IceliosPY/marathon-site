export type MapPoint = {
    id: string;
    label: string;
    description: string;
    x: number;
    y: number;
  };
  
  export type MapEntry = {
    id: string;
    name: string;
    code: string;
    threat: "LOW" | "MEDIUM" | "HIGH";
    location: string;
    description: string;
    previewImage: string;
    video: string;
    mapImage: string;
    points: MapPoint[];
  };
  
  export const mapsData: MapEntry[] = [

    {
        id: "perimeter",
        name: "PERIMETER",
        code: "MAP-02",
        threat: "LOW",
        location: "New Cascadia Colony Research Expansion",
        description:
          "Originally part of colony expansion efforts, site shows signs of developmental redirection toward radiological and geological surveillance.",
        previewImage: "/img/maps/perimetercard.png",
        video: "/videos/maps/perimeter.mp4",
        mapImage: "/img/maps/perimetermap.png",
        points: [
          {
            id: "survey-yard",
            label: "Survey Yard",
            description: "Observation and material analysis area.",
            x: 26,
            y: 58,
          },
          {
            id: "geo-station",
            label: "Geo Station",
            description: "Geological monitoring node.",
            x: 54,
            y: 39,
          },
        ],
      },
    {
      id: "dire-marsh",
      name: "DIRE MARSH",
      code: "MAP-01",
      threat: "MEDIUM",
      location: "New Cascadia Colony Agricultural Production",
      description:
        "The Dire Marsh facilities focused on the research and active development of hybrid food sources. Evidence of a quarantine operation indicates a dark period in colony history. Apparent point of emergence of the Anomaly.",
      previewImage: "/img/maps/diremarshcard.png",
      video: "/videos/maps/Diremarsh.mp4",
      mapImage: "/img/maps/dire-marsh-map.png",
      points: [
        {
          id: "research-wing",
          label: "Research Wing",
          description: "Primary agricultural research sector.",
          x: 28,
          y: 34,
        },
        {
          id: "quarantine-block",
          label: "Quarantine Block",
          description: "Sealed zone tied to containment operations.",
          x: 63,
          y: 46,
        },
      ],
    },
    
    {
      id: "outpost",
      name: "OUTPOST",
      code: "MAP-03",
      threat: "HIGH",
      location: "New Cascadia Landing Site and UESC Base",
      description:
        "A forward operating base for initial planetary colonization efforts, including temporary housing and an orientation area. Degraded cloud-seeding tech periodically covers the area with hazardous rain.",
      previewImage: "/img/maps/outpostcard.png",
      video: "/videos/maps/outpost.mp4",
      mapImage: "/img/maps/outpost-map.png",
      points: [
        {
          id: "landing-pad",
          label: "Landing Pad",
          description: "Main insertion platform.",
          x: 32,
          y: 30,
        },
        {
          id: "orientation-block",
          label: "Orientation Block",
          description: "Housing and onboarding area.",
          x: 50,
          y: 56,
        },
      ],
    },
  ];
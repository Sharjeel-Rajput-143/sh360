/**
 * Extra reference photography for each service, shown as a small showcase gallery
 * on the homepage capabilities section and on each service detail page.
 * Licensed stock photography (Unsplash), not photos of completed SH360 projects.
 */
export type ShowcaseImage = { src: string; alt: string };

export const showcase: Record<string, ShowcaseImage[]> = {
  "electrical-engineering": [
    {
      src: "https://images.unsplash.com/photo-1758101755915-462eddc23f57",
      alt: "Electrician testing an electrical panel with a multimeter",
    },
    {
      src: "https://images.unsplash.com/photo-1780034766312-73825064806c",
      alt: "Open industrial electrical control panel with wiring and modules",
    },
    {
      src: "https://images.unsplash.com/photo-1783419752280-46a2073ef7dc",
      alt: "Open electrical control panel with wires and circuit breakers",
    },
    {
      src: "https://images.unsplash.com/photo-1576446468729-7674e99608f5",
      alt: "Close-up of white circuit breakers in a distribution board",
    },
  ],
  "iot-smart-automation": [
    {
      src: "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3",
      alt: "Smart thermostat mounted on a wall, showing the current temperature",
    },
    {
      src: "https://images.unsplash.com/photo-1519558260268-cde7e03a0152",
      alt: "Smart speaker on a shelf next to a smartphone used for home control",
    },
    {
      src: "https://images.unsplash.com/photo-1558002038-1055907df827",
      alt: "Smartphone held up to a smart lock mounted on a door",
    },
    {
      src: "https://images.unsplash.com/photo-1757524492552-d47a66a2b63e",
      alt: "Modern house exterior at dusk with lit windows and connected lighting",
    },
  ],
  "ev-charging": [
    {
      src: "https://images.unsplash.com/photo-1671785253964-bdb43087ed99",
      alt: "Car plugged into a home EV charging station",
    },
    {
      src: "https://images.unsplash.com/photo-1775259928422-779c18e32007",
      alt: "Electric car charging at a modern home with rooftop solar panels",
    },
    {
      src: "https://images.unsplash.com/photo-1752830132482-def8649b6432",
      alt: "Wall-mounted EV charger connected outdoors",
    },
    {
      src: "https://images.unsplash.com/photo-1646753005675-bb29b53507f5",
      alt: "Person connecting a charging cable to an electric car",
    },
  ],
  plumbing: [
    {
      src: "https://images.unsplash.com/photo-1676210134188-4c05dd172f89",
      alt: "Plumber working on a pipe inside a wall cavity",
    },
    {
      src: "https://images.unsplash.com/photo-1676210134190-3f2c0d5cf58d",
      alt: "Plumber servicing a water heater",
    },
    {
      src: "https://images.unsplash.com/photo-1768321913920-d3ac011e0683",
      alt: "Exposed plumbing pipes and fittings inside a wall",
    },
    {
      src: "https://images.unsplash.com/photo-1650551182991-b07558247564",
      alt: "Pipes and shut-off valves in a utility space",
    },
  ],
  carpentry: [
    {
      src: "https://images.unsplash.com/photo-1788296817269-8df0458ab799",
      alt: "Woodworking tools laid out on a workbench in a sunlit workshop",
    },
    {
      src: "https://images.unsplash.com/photo-1779031242515-205111711b23",
      alt: "Carpenter working on a piece of wood with hand tools",
    },
    {
      src: "https://images.unsplash.com/photo-1631396326646-c06a935ff3a6",
      alt: "Carpenter working on a chair in a workshop",
    },
    {
      src: "https://images.unsplash.com/photo-1547609434-b732edfee020",
      alt: "Carpenter sawing a wooden board",
    },
  ],
  cleaning: [
    {
      src: "https://images.unsplash.com/photo-1646980241033-cd7abda2ee88",
      alt: "Cleaner carrying a caddy and broom up a tiled staircase",
    },
    {
      src: "https://images.unsplash.com/photo-1713110824336-f78c320dcf8e",
      alt: "Gloved hands cleaning upholstery",
    },
    {
      src: "https://images.unsplash.com/photo-1647381518264-97ff1835026f",
      alt: "Cleaner standing in a kitchen holding a broom",
    },
    {
      src: "https://images.unsplash.com/photo-1758273705627-937374bfa978",
      alt: "Cleaner vacuuming a bright, modern living room",
    },
  ],
  "property-maintenance": [
    {
      src: "https://images.unsplash.com/photo-1676311396794-f14881e9daaa",
      alt: "A variety of maintenance tools laid out on a table",
    },
    {
      src: "https://images.unsplash.com/photo-1786204697642-328c597b6f05",
      alt: "Applying sealant to a window frame during a maintenance visit",
    },
    {
      src: "https://images.unsplash.com/photo-1731168273756-e02cae42265b",
      alt: "Cutting tile with an angle grinder during a repair",
    },
    {
      src: "https://images.unsplash.com/photo-1599619585752-c3edb42a414c",
      alt: "Paint roller resting in a tray of white paint",
    },
  ],
};

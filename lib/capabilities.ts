/** Concise homepage scopes; technical depth stays in the existing service guides. */
export const capabilities = [
  {
    slug: "electrical-engineering",
    title: "Electrical Engineering",
    description:
      "Wiring and rewiring, distribution-board upgrades, circuit protection, lighting and socket installations. Fault finding, inspection and maintenance depend on the condition of the existing system.",
    primary: true,
  },
  {
    slug: "iot-smart-automation",
    title: "IoT & Smart Automation",
    description:
      "Smart lighting, switches and sensors, device setup and supported integrations. Existing equipment, network coverage and the routines you need determine what can work together.",
    primary: true,
  },
  {
    slug: "ev-charging",
    title: "EV Charging",
    description:
      "Electrical supply assessment, charger positioning, cable routing, circuit protection and equipment setup. Vehicle, charger and parking details help define the installation requirements.",
    primary: true,
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    description:
      "Leak investigation, tap and fixture replacement, accessible pipework repairs and drainage troubleshooting. Share the affected fitting and where the issue occurs.",
    primary: false,
  },
  {
    slug: "carpentry",
    title: "Carpentry",
    description:
      "Door and frame adjustments, cabinet and shelving fitting, furniture assembly and wooden-fixture repairs. Materials, dimensions and access are confirmed before work is agreed.",
    primary: false,
  },
  {
    slug: "cleaning",
    title: "Cleaning",
    description:
      "General and deep cleaning, kitchens and bathrooms, move-in/out and post-maintenance cleaning. Rooms, surfaces and property condition define the scope.",
    primary: false,
  },
  {
    slug: "property-maintenance",
    title: "Property Maintenance",
    description:
      "Fixture and fitting repairs, hardware adjustments, minor electrical and plumbing upkeep, and coordinated repair tasks. Start with a prioritized list of defects.",
    primary: false,
  },
] as const;

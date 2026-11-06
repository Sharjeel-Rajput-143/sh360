export type Service = {
  slug: string;
  title: string;
  short: string;
  eyebrow: string;
  heading: string;
  intro: string;
  category?: string;
  image: string;
  tasks: [string, string][];
  requirements: string[];
  materials: string;
  extra: string;
  faq: [string, string][];
};
export const services: Service[] = [
  {
    slug: "electrical-engineering",
    title: "Electrical Engineering",
    short: "Electrical",
    eyebrow: "01 / Electrical infrastructure",
    heading: "Powering the way your space works.",
    intro:
      "From the distribution board to the last lighting point, a dependable electrical system starts with understanding the property and the demands placed on it.",
    category: "electrical",
    image: "electrical",
    tasks: [
      [
        "Wiring & installation",
        "Plan cable routes, install wiring and connect switches, sockets and equipment for new work or alterations.",
      ],
      [
        "Distribution & protection",
        "Review the existing board, circuit arrangement and protection before defining any replacement or additional circuits.",
      ],
      [
        "Fault finding & repairs",
        "Investigate symptoms such as tripping circuits, damaged fittings or loss of power to identify the underlying issue.",
      ],
      [
        "Lighting & power",
        "Discuss lighting positions, switching and socket requirements, including the condition of existing connections.",
      ],
      [
        "Inspection & maintenance",
        "Review accessible equipment and reported concerns, then agree the checks and remedial work appropriate to the property.",
      ],
    ],
    requirements: [
      "Describe the fault or planned change and the rooms affected.",
      "Share a photo of the distribution board without opening covers.",
      "Mention recent alterations, access restrictions and equipment loads.",
    ],
    materials:
      "Cable selection, protective devices and fittings depend on the supply, circuit design, installation conditions and applicable local requirements.",
    extra:
      "Concealed damage, an unsuitable existing board, restricted routes or additional making-good can change the scope. Inspection is needed before confirming technical suitability.",
    faq: [
      [
        "Can an existing property be upgraded?",
        "Share the existing installation details and intended additions. The condition and capacity of the system must be reviewed before an upgrade is agreed.",
      ],
      [
        "What should I do about a tripping circuit?",
        "Avoid repeatedly resetting a circuit that continues to trip. Describe when it happens and arrange an assessment; do not open electrical enclosures.",
      ],
    ],
  },
  {
    slug: "iot-smart-automation",
    title: "IoT & Smart Automation",
    short: "Smart automation",
    eyebrow: "02 / Connected technology",
    heading: "A connected space. A simpler everyday.",
    intro:
      "Useful automation connects the things you already use: lighting, sensors and controls. Start with the outcome you want, then assess the devices and infrastructure needed to achieve it.",
    image: "smart",
    tasks: [
      [
        "Smart lighting & controls",
        "Discuss room-by-room switching, dimming, schedules and scene control, with attention to compatible lamps and wiring.",
      ],
      [
        "Smart home integration",
        "Review existing devices, control apps and communication protocols before proposing how systems might work together.",
      ],
      [
        "Sensors & connected devices",
        "Explore occupancy, opening or environmental sensing based on a specific use case and suitable device placement.",
      ],
      [
        "Remote monitoring & control",
        "Consider connectivity, user permissions and available device functions for access when away from the property.",
      ],
      [
        "Configuration & integration",
        "Plan setup, pairing, routines and user handover around compatible equipment. SH360 does not claim a proprietary platform.",
      ],
    ],
    requirements: [
      "List device brands, model numbers and the apps already in use.",
      "Explain the routines or controls you want to simplify.",
      "Describe Wi-Fi coverage, network access and existing wiring.",
    ],
    materials:
      "Protocol support, network reliability, power requirements, cloud dependencies and software support affect compatibility. Capability and service availability are confirmed during inquiry.",
    extra:
      "Incompatible devices, weak wireless coverage, missing neutral conductors or additional hubs may require changes beyond basic configuration.",
    faq: [
      [
        "Can you work with my existing smart devices?",
        "Compatibility depends on the model, protocol and available integrations. Send a device list before purchasing additional equipment.",
      ],
      [
        "Will everything work without internet?",
        "Some devices support local control while others rely on a cloud service. Discuss offline behavior and privacy preferences during scoping.",
      ],
    ],
  },
  {
    slug: "ev-charging",
    title: "EV Charging Solutions",
    short: "EV charging",
    eyebrow: "03 / Electric mobility",
    heading: "Ready for the road ahead.",
    intro:
      "An EV charger is part of the building’s electrical system. Capacity, parking position, cable routing and protection all need consideration before equipment is installed.",
    category: "ev-charger",
    image: "ev",
    tasks: [
      [
        "Residential charging",
        "Review a home parking location and charging needs to establish a practical installation route.",
      ],
      [
        "Commercial charging inquiries",
        "Discuss parking use, access and anticipated demand. Commercial scope and availability require site-specific confirmation.",
      ],
      [
        "Supply assessment",
        "Review available electrical information and existing loads before determining whether supply changes are needed.",
      ],
      [
        "Installation & setup",
        "Agree the charger position, dedicated circuit and appropriate protection, then configure supported charging functions.",
      ],
      [
        "Charging support",
        "Describe charging faults, connection problems or repeated tripping, with charger model and any displayed messages.",
      ],
    ],
    requirements: [
      "Provide the vehicle and charger model, if selected.",
      "Share parking and distribution-board photos, plus an approximate route.",
      "Confirm property ownership or installation permission.",
    ],
    materials:
      "Charger compatibility, supply capacity, environmental protection, earthing and circuit protection must be assessed for the actual site.",
    extra:
      "Board upgrades, a long cable route, groundwork, permissions or supply modifications may add work. Charging speed cannot be promised before assessment.",
    faq: [
      [
        "Can I supply my own charger?",
        "Send the exact model and installation documentation first. Compatibility and suitability must be checked before an installation is agreed.",
      ],
      [
        "Is a site assessment necessary?",
        "Photos can start the conversation, but electrical capacity, route and installation conditions may require an on-site review.",
      ],
    ],
  },
  {
    slug: "plumbing",
    title: "Plumbing",
    short: "Plumbing",
    eyebrow: "04 / Water & fixtures",
    heading: "Reliable water systems. Practical repairs.",
    intro:
      "A dripping fitting, slow drain or planned fixture change needs a clear understanding of the pipework, access and condition of the existing installation.",
    category: "plumbing",
    image: "plumbing",
    tasks: [
      [
        "Leaks & pipework",
        "Locate reported leaks and assess accessible joints, valves and pipework before agreeing repair or modification.",
      ],
      [
        "Taps, sinks & fixtures",
        "Discuss replacement fittings, connection sizes and the condition of existing supplies and waste connections.",
      ],
      [
        "Kitchen & bathroom plumbing",
        "Review fixture positions and accessible supply and drainage routes for installation or repair.",
      ],
      [
        "Drainage troubleshooting",
        "Describe slow discharge, recurring blockage or visible leakage so the appropriate investigation can be agreed.",
      ],
      [
        "Plumbing maintenance",
        "Review worn fittings and accessible valves as part of a defined maintenance visit.",
      ],
    ],
    requirements: [
      "Share photos of the affected fitting and accessible pipework.",
      "Explain when the issue occurs and whether water can be isolated.",
      "Mention concealed connections, access panels and previous repairs.",
    ],
    materials:
      "Replacement fittings must match connection sizes, pipe materials and installation conditions. Agree customer-supplied items before booking.",
    extra:
      "Concealed leaks, damaged substrates, inaccessible pipes or extensive drainage work may require a separate scope.",
    faq: [
      [
        "Can you replace a tap I have purchased?",
        "Share the model and photos of the existing fitting so connection and mounting requirements can be reviewed.",
      ],
      [
        "What information helps with a leak?",
        "Show the visible location and describe when it occurs. Avoid removing finishes or disturbing concealed services.",
      ],
    ],
  },
  {
    slug: "carpentry",
    title: "Carpentry",
    short: "Carpentry",
    eyebrow: "05 / Interiors & joinery",
    heading: "Made to fit the way you live.",
    intro:
      "Doors, cabinets and shelving need careful fitting to remain useful. Tell us what needs adjusting, repairing or installing so the practical scope can be confirmed.",
    image: "carpentry",
    tasks: [
      [
        "Doors & frames",
        "Discuss sticking doors, loose hinges, damaged frames and adjustments to existing timber fittings.",
      ],
      [
        "Cabinets & shelving",
        "Review wall construction, fixing positions and dimensions for suitable cabinet or shelf installation.",
      ],
      [
        "Furniture assembly & fitting",
        "Share product instructions, item quantities and the intended location to scope assembly and fixing.",
      ],
      [
        "Wooden fixture repairs",
        "Assess accessible damaged or loose components and whether repair or replacement is appropriate.",
      ],
      [
        "Interior adjustments",
        "Discuss hardware changes, alignment and minor interior woodwork maintenance.",
      ],
    ],
    requirements: [
      "Send photos, approximate dimensions and the item material.",
      "Provide assembly instructions or product links where available.",
      "Confirm access, fixing permissions and the intended finish.",
    ],
    materials:
      "Timber condition, sheet materials, suitable fixings and hardware compatibility influence the work. Carpentry availability and exact capability require confirmation.",
    extra:
      "Structural alterations, bespoke fabrication, extensive finishing or hidden damage require separate review and are not assumed included.",
    faq: [
      [
        "Do you offer bespoke furniture?",
        "Bespoke fabrication is not confirmed in the current catalog. Share your requirements so SH360 can clarify the work it can undertake.",
      ],
      [
        "Can shelves be installed on any wall?",
        "Wall construction, hidden services and intended loads must be considered before choosing fixings.",
      ],
    ],
  },
  {
    slug: "cleaning",
    title: "Cleaning",
    short: "Cleaning",
    eyebrow: "06 / Everyday environments",
    heading: "A fresh start for your space.",
    intro:
      "A useful cleaning brief identifies the rooms, surfaces and level of buildup. Agree the areas and tasks first, whether it is regular care, a move or a post-maintenance clean.",
    category: "cleaning",
    image: "interior",
    tasks: [
      [
        "General property cleaning",
        "Agree rooms, accessible surfaces, floors and routine tasks based on the condition of the property.",
      ],
      [
        "Kitchens & bathrooms",
        "Identify fixtures, splashbacks and surfaces needing attention, including material-specific care requirements.",
      ],
      [
        "Deep cleaning",
        "Discuss detailed cleaning of buildup and hard-to-reach areas within the agreed access limits.",
      ],
      [
        "Office & commercial inquiries",
        "Share workspace size, operating hours and access requirements; commercial availability is confirmed in advance.",
      ],
      [
        "Move & post-maintenance cleaning",
        "Describe vacancy, remaining furniture, dust and debris so preparation and exclusions are clear.",
      ],
    ],
    requirements: [
      "List rooms, approximate floor area and current condition.",
      "Share photos and any delicate materials or known stains.",
      "Confirm water, electricity, access and whether the space is occupied.",
    ],
    materials:
      "Cleaning products and methods need to suit the surface. Discuss sensitive finishes, pets and material-care instructions before work.",
    extra:
      "Hazardous materials, specialist remediation, inaccessible high areas or heavy construction debris are not assumed within routine cleaning.",
    faq: [
      [
        "What is included in a deep clean?",
        "The room list, surfaces and specific tasks should be agreed before work. The scope depends on condition and access.",
      ],
      [
        "Can cleaning follow another maintenance job?",
        "Include both services in the inquiry so access, sequencing and the final cleaning scope can be discussed.",
      ],
    ],
  },
  {
    slug: "property-maintenance",
    title: "Property Maintenance",
    short: "Maintenance",
    eyebrow: "07 / Complete property care",
    heading: "Small details. A better working building.",
    intro:
      "A clear list of defects makes maintenance easier to coordinate. Group the issues across your property and establish which tasks can be handled together.",
    category: "maintenance",
    image: "interior",
    tasks: [
      [
        "Property condition review",
        "Describe visible defects and recurring concerns so a practical inspection scope can be agreed.",
      ],
      [
        "Fixtures & fittings",
        "Review loose, damaged or worn fittings and the parts or access needed for repair.",
      ],
      [
        "Electrical & plumbing upkeep",
        "Combine minor issues with the relevant technical assessment rather than treating every symptom as a separate job.",
      ],
      [
        "Doors, cabinets & hardware",
        "Identify alignment, hinge, handle and fixing problems for adjustment or replacement review.",
      ],
      [
        "Multi-service repairs",
        "Plan related tasks and any subsequent making-good or cleaning around the property’s use.",
      ],
    ],
    requirements: [
      "Prepare a room-by-room list and clear photos.",
      "Identify priority issues, occupancy and access arrangements.",
      "Mention prior repairs and parts already purchased.",
    ],
    materials:
      "Matching replacement parts, existing finishes and access constraints affect maintenance planning. Each trade’s scope must be agreed.",
    extra:
      "Hidden deterioration, major replacements, specialist equipment and structural issues may need separate investigation or a different provider.",
    faq: [
      [
        "Can I request several repairs together?",
        "Yes, list each issue in one inquiry. SH360 can review the tasks and confirm what can be included.",
      ],
      [
        "Do you offer ongoing maintenance?",
        "The catalog includes an annual maintenance inquiry. Frequency, tasks and commercial terms need to be agreed for the property.",
      ],
    ],
  },
];
export const generalFaq: [string, string][] = [
  [
    "Which services can I discuss with SH360?",
    "Electrical engineering, smart automation, EV charging, plumbing, carpentry, cleaning and property maintenance. Exact scope and availability are confirmed against your requirements.",
  ],
  [
    "Can I request more than one service?",
    "Select all relevant services in the inquiry and describe each task. Related work can be reviewed together before a scope is agreed.",
  ],
  [
    "Will my property need a site assessment?",
    "Photos and a description can help start a review. Electrical capacity, concealed work, complex access or larger installations may need an on-site assessment.",
  ],
  [
    "Can you integrate an existing smart-home system?",
    "Share the brands, model numbers and apps in use. Compatibility and supported functions must be checked before an integration is proposed.",
  ],
  [
    "How is a quotation determined?",
    "Work involved, property condition, access, materials and any required preparation affect a quote. Additional work should be clarified as part of the scope.",
  ],
  [
    "Can I supply an EV charger?",
    "Share the model and documentation first. Site suitability and compatibility must be reviewed before an installation is agreed.",
  ],
  [
    "Do you work with homes and businesses?",
    "Both residential and commercial requirements can be discussed. Confirm property type, location and required work so SH360 can clarify its operating scope.",
  ],
  [
    "How do I submit an inquiry?",
    "Complete the form to prepare a WhatsApp message. Review and send it in WhatsApp. Photos and documents can be attached there; no message is sent automatically.",
  ],
];
export const processSteps = [
  [
    "Tell us what you need",
    "Share your property, the issue or project, and any helpful photos.",
  ],
  [
    "Review the requirements",
    "Clarify existing systems, access and whether a site review is needed.",
  ],
  [
    "Define the scope",
    "Discuss tasks, materials, exclusions and quotation details before work.",
  ],
  [
    "Carry out the work",
    "Coordinate access and the agreed work around the property.",
  ],
  [
    "Review & handover",
    "Review the completed scope and relevant operating or care information.",
  ],
];

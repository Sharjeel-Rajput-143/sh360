/** Conceptual system illustrations and licensed reference photos, never project evidence. */
export const serviceMedia: Record<string, { src: string; alt: string; kind: "illustration" | "photo" }> = {
  "electrical-engineering": { src: "/visuals/electrical.webp", alt: "Cutaway with a distribution board, wall-contained cable routes, sockets and ceiling lights", kind: "illustration" },
  "iot-smart-automation": { src: "/story/smart-office.webp", alt: "Office sectional model with ceiling sensor, lighting controls, network tray and equipment cupboard", kind: "illustration" },
  "ev-charging": { src: "/visuals/ev.webp", alt: "Garage cutaway with a wall-mounted charger, parked electric vehicle and supply route", kind: "illustration" },
  plumbing: { src: "/visuals/plumbing.webp", alt: "Kitchen and bathroom section exposing pipe risers, valves and fixture connections", kind: "illustration" },
  carpentry: { src: "/story/carpentry.webp", alt: "Woodwork being measured and cut at a mitre saw inside a property", kind: "photo" },
  cleaning: { src: "/story/cleaning.webp", alt: "Professional cleaning trolley and vacuum equipment in a property corridor", kind: "photo" },
  "property-maintenance": { src: "/story/maintenance.webp", alt: "Cordless drill on a work surface during property repairs", kind: "photo" },
};
export const technicalScopes: Record<string, string[]> = {
  "electrical-engineering": ["Distribution & protection", "Wiring routes", "Lighting & sockets"],
  "iot-smart-automation": ["Controls & sensors", "Device compatibility", "Network coverage"],
  "ev-charging": ["Supply assessment", "Charger position", "Cable routing"],
};
export const propertyApplications = [
  { id:"residential", title:"Residential Properties", src:"/story/residential.webp", alt:"Modern residential property with occupied living areas", description:"Plan work around the way a home is lived in, from individual rooms to changes across the property.", labels:["Occupied rooms and daily routines", "Existing fittings and finish protection", "Access to the affected area"] },
  { id:"commercial", title:"Commercial Properties", src:"/story/commercial.webp", alt:"Retail premises with merchandise, displays and overhead lighting", description:"Describe the use of the premises and where the proposed work may affect customers, trading or existing equipment.", labels:["Trading areas and customer access", "Landlord permissions where relevant", "Existing systems and proposed changes"] },
  { id:"workplace", title:"Offices & Workplaces", src:"/story/workplace.webp", alt:"Office shared areas and a corridor leading to workspaces", description:"Identify the work areas, equipment and shared spaces involved so access and occupancy can be considered together.", labels:["Workstations and shared areas", "Equipment and network dependencies", "Staff access and working arrangements"] },
  { id:"managed", title:"Managed Properties", src:"/story/managed.webp", alt:"Apartment building with multiple homes and balconies", description:"Bring reported defects and planned improvements into one brief, with a named contact and clear access arrangements.", labels:["Prioritized defects by property", "Approvals and responsible contacts", "Tenant access and site information"] },
];

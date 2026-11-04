export const SITE = {
  // Default website name. The owner can change it from the admin panel (Website), which then takes over.
  brand: "SH360",
  tagline: "Electrical Solutions & Home Services",
  // International format, digits only: +92 305 1987143 -> 923051987143
  whatsappNumber: "923051987143",
  phoneDisplay: "+92 305 1987143",
  // Optional. When set, product links are added to the WhatsApp message.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "",
} as const;

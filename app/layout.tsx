import type { ReactNode } from "react";
import { preconnect } from "react-dom";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { BrandProvider } from "@/components/BrandProvider";
import { getCatalog } from "@/lib/catalog";
import "./globals.css";
import "./sh360-revamp.css";
import "./public-design.css";
import "./industrial-design.css";
import "./capability-concepts.css";

const sans = localFont({
  src: "./fonts/dm-sans-latin.woff2",
  weight: "100 1000",
  variable: "--font-sans",
  display: "swap",
});
const serif = localFont({
  src: "./fonts/fraunces-latin.woff2",
  weight: "100 900",
  variable: "--font-serif",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const THEME_SCRIPT = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.setAttribute("data-theme",t)}catch(e){}})()`;

const description =
  "Electrical engineering, smart automation, EV charging and property services — designed around the way your space works.";

export async function generateMetadata(): Promise<Metadata> {
  const { brand } = await getCatalog();
  const title = `${brand} | Electrical Engineering, IoT & Integrated Services`;
  return {
    metadataBase: new URL(siteUrl),
    title,
    description,
    openGraph: { title, description, type: "website", siteName: brand },
  };
}

export const viewport: Viewport = {
  themeColor: "#081722",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { brand } = await getCatalog();
  preconnect("https://images.unsplash.com");
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${sans.variable} ${serif.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        <BrandProvider brand={brand}>{children}</BrandProvider>
      </body>
    </html>
  );
}

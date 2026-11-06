import { SITE } from "./site";
import type { Product } from "./products";

export type AdSource = { source?: string; campaign?: string };

const clean = (value: string | null) => value?.trim().slice(0, 60) || undefined;

/** Reads Meta/UTM tracking params so we know which ad the enquiry came from. */
export function readAdSource(search: string): AdSource | undefined {
  const params = new URLSearchParams(search);
  const source = clean(params.get("utm_source"));
  const campaign = clean(params.get("utm_campaign"));
  if (source || campaign) return { source, campaign };
  if (params.get("fbclid")) return { source: "Meta Ads" };
  return undefined;
}

function chatUrl(text: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(text)}`;
}

function sourceLine(ad?: AdSource): string | null {
  if (!ad) return null;
  const parts = [ad.source, ad.campaign].filter(Boolean);
  return parts.length ? `Came from: ${parts.join(" / ")}` : null;
}

/**
 * Link added to the message so the shop owner sees the product photo.
 * With a site URL it points to the product page (WhatsApp shows a preview card with the photo);
 * otherwise it falls back to the direct image URL.
 */
function productLink(product: Product): string | null {
  if (SITE.url) return `${SITE.url.replace(/\/$/, "")}/p/${product.id}`;
  return product.image.startsWith("http") ? product.image : null;
}

export function productWhatsappUrl(
  product: Product,
  brand: string,
  ad?: AdSource,
): string {
  const lines = [
    `Hello ${brand}! 👋`,
    "I'd like to get a quote for this service:",
    "",
    `*Service:* ${product.title}`,
    `*Code:* ${product.id}`,
    `*Category:* ${product.categoryLabel}`,
    `*Details:* ${product.description}`,
  ];
  if (product.specs.length)
    lines.push(`*Includes:* ${product.specs.join(", ")}`);
  const link = productLink(product);
  if (link) lines.push(`*Photo:* ${link}`);
  const source = sourceLine(ad);
  if (source) lines.push("", source);
  lines.push(
    "",
    "Please share the price and earliest availability. Thank you!",
  );
  return chatUrl(lines.join("\n"));
}

export function generalWhatsappUrl(brand: string, ad?: AdSource): string {
  const lines = [
    `Hello ${brand}! 👋`,
    "I'm interested in electrical engineering, smart automation, EV charging or property services. Please help me discuss the scope and availability.",
  ];
  const source = sourceLine(ad);
  if (source) lines.push("", source);
  return chatUrl(lines.join("\n"));
}

/** Keep campaign context during internal service navigation within this tab. */
export function inquiryAdSource(): AdSource | undefined {
  if (typeof window === "undefined") return undefined;
  const current = readAdSource(window.location.search);
  try {
    if (current) {
      window.sessionStorage.setItem(
        "sh360-inquiry-source",
        JSON.stringify(current),
      );
      return current;
    }
    const saved = JSON.parse(
      window.sessionStorage.getItem("sh360-inquiry-source") || "null",
    );
    if (!saved || typeof saved !== "object") return undefined;
    return readAdSource(
      new URLSearchParams({
        utm_source: typeof saved.source === "string" ? saved.source : "",
        utm_campaign: typeof saved.campaign === "string" ? saved.campaign : "",
      }).toString(),
    );
  } catch {
    return current;
  }
}

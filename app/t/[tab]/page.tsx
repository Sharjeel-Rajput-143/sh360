import type { Metadata } from "next";
import { redirect } from "next/navigation";
import CatalogView from "@/components/CatalogView";
import { getCatalog } from "@/lib/catalog";

type Props = { params: Promise<{ tab: string }> };

// One pre-built page per category. Visitors never see this URL: proxy.ts serves it for `/?tab=<category>`.
export async function generateStaticParams() {
  const { categories } = await getCatalog();
  return categories.map((c) => ({ tab: c.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tab } = await params;
  return { alternates: { canonical: `/?tab=${tab}` } };
}

export default async function TabPage({ params }: Props) {
  const { tab } = await params;
  const catalog = await getCatalog();
  if (!catalog.categories.some((c) => c.id === tab)) redirect("/");
  return <CatalogView catalog={catalog} initialCategory={tab} />;
}

import { getCatalog } from "@/lib/catalog";
import CatalogView from "@/components/CatalogView";
export const metadata = {
  title: "Service catalog & guides | SH360",
  description:
    "Explore electrical engineering, automation, EV charging and property services. Search and save services, then discuss your requirements.",
};
export default async function ServicesPage() {
  return <CatalogView catalog={await getCatalog()} />;
}

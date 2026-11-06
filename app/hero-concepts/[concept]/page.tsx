import { notFound } from "next/navigation";
import Link from "next/link";
import PublicShell from "@/components/PublicShell";
import HeroConcept, {
  heroConcepts,
  type HeroConceptKey,
} from "@/components/HeroConcepts";
import { getCatalog } from "@/lib/catalog";
export function generateStaticParams() {
  return Object.keys(heroConcepts).map((concept) => ({ concept }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ concept: string }>;
}) {
  const { concept } = await params;
  return {
    title: Object.hasOwn(heroConcepts, concept)
      ? `${heroConcepts[concept as HeroConceptKey].name} — archived proposal | SH360`
      : "Concept not found",
  };
}
export default async function ConceptPage({
  params,
}: {
  params: Promise<{ concept: string }>;
}) {
  const { concept } = await params;
  if (!Object.hasOwn(heroConcepts, concept)) notFound();
  const key = concept as HeroConceptKey,
    info = heroConcepts[key],
    catalog = await getCatalog();
  return (
    <PublicShell catalog={catalog}>
      <main id="main" className="hc-review">
        <div className="hc-review-bar">
          <div className="px-wrap">
            <div>
              <p>HERO DESIGN ARCHIVED / NOT APPROVED</p>
              <strong>
                {key.toUpperCase()}. {info.name}
              </strong>
            </div>
            <nav aria-label="Hero concept navigation">
              {Object.entries(heroConcepts).map(([id, item]) => (
                <Link
                  key={id}
                  href={`/hero-concepts/${id}`}
                  aria-label={`Concept ${id.toUpperCase()}: ${item.name}`}
                  aria-current={id === key ? "page" : undefined}
                >
                  {id.toUpperCase()}
                  <span>{item.name}</span>
                </Link>
              ))}
              <Link href="/hero-concepts">Compare all ↗</Link>
            </nav>
          </div>
        </div>
        <HeroConcept concept={key} brand={catalog.brand} />
        <aside className="hc-review-notes px-wrap">
          <div>
            <p className="ix-eyebrow">COMPOSITION</p>
            <p>{info.approach}</p>
          </div>
          <div>
            <p className="ix-eyebrow">MOBILE BEHAVIOR</p>
            <p>{info.mobile}</p>
          </div>
          <p className="hc-approval-note">
            This earlier proposal was not approved. The homepage now implements
            the separately specified Engineering Blueprint direction.
          </p>
        </aside>
      </main>
    </PublicShell>
  );
}

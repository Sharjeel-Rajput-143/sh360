import { notFound } from "next/navigation";
import Link from "next/link";
import { services } from "@/lib/services";
import { getCatalog } from "@/lib/catalog";
import PublicShell from "@/components/PublicShell";
import { Scene, FAQ, Process } from "@/components/Editorial";
import InquiryForm from "@/components/InquiryForm";
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  return {
    title: s ? `${s.title} | SH360` : "Service not found",
    description: s?.intro,
  };
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((s) => s.slug === slug);
  if (!s) notFound();
  const catalog = await getCatalog();
  const products = catalog.products.filter((p) => p.category === s.category);
  return (
    <PublicShell catalog={catalog}>
      <main id="main" className={`px-service-page px-service-${s.image}`}>
        <section className="px-service-hero px-section">
          <div className="px-wrap">
            <div className="px-breadcrumb">
              <Link href="/">Home</Link>
              <span>/</span>
              <Link href="/#solutions">Services</Link>
              <span>/ {s.title}</span>
            </div>
            <div className="px-service-hero-grid">
              <div>
                <p className="px-label">{s.eyebrow.toUpperCase()}</p>
                <h1>{s.heading}</h1>
                <p>{s.intro}</p>
                <Link href="#contact" className="px-button">
                  Discuss {s.short.toLowerCase()} <span>↗</span>
                </Link>
              </div>
              {s.slug === "property-maintenance" ? (
                <div className="ix-maintenance-brief">
                  <p className="ix-eyebrow">A COORDINATED WORK PLAN</p>
                  <ol>
                    <li>
                      <span>01</span>Room-by-room defect list
                    </li>
                    <li>
                      <span>02</span>Access and priority review
                    </li>
                    <li>
                      <span>03</span>Tasks and materials agreed
                    </li>
                    <li>
                      <span>04</span>Work, review and handover
                    </li>
                  </ol>
                  <p>
                    Verified SH360 maintenance photography is pending. No
                    illustrative work is presented as a completed project.
                  </p>
                </div>
              ) : (
                <Scene
                  name={s.image}
                  priority
                  alt={`Conceptual ${s.title.toLowerCase()} architectural study`}
                />
              )}
            </div>
          </div>
        </section>
        <section className="px-section">
          <div className="px-wrap px-service-scope">
            <div>
              <p className="px-label">UNDERSTAND THE WORK</p>
              <h2>
                {s.title}
                <br />
                in practical terms.
              </h2>
              <p>
                These are starting points for a conversation. The exact tasks,
                availability and suitability for your property are confirmed
                before work is agreed.
              </p>
            </div>
            <div>
              {s.tasks.map(([a, b], i) => (
                <article className="px-scope-task" key={a}>
                  <span>0{i + 1}</span>
                  <div>
                    <h3>{a}</h3>
                    <p>{b}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="px-section px-preparation">
          <div className="px-wrap">
            <p className="px-label">BEFORE WE START</p>
            <h2>
              A better brief.
              <br />A clearer scope.
            </h2>
            <div className="px-prep-grid">
              <div>
                <h3>What to share</h3>
                <ul>
                  {s.requirements.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Equipment & materials</h3>
                <p>{s.materials}</p>
                <h3>What may add work</h3>
                <p>{s.extra}</p>
              </div>
              <div>
                <h3>Typically scoped together</h3>
                <p>
                  Review of your requirements, the agreed installation or repair
                  tasks, relevant materials and a final review of the work. A
                  quotation should identify inclusions and exclusions.
                </p>
                <h3>Property considerations</h3>
                <p>
                  Homes, workplaces, commercial and managed properties have
                  different access, occupancy and permission needs. Confirm your
                  location and property type when inquiring.
                </p>
              </div>
            </div>
          </div>
        </section>
        {products.length > 0 && (
          <section className="px-section">
            <div className="px-wrap">
              <p className="px-label">FROM THE SERVICE CATALOG</p>
              <h2>Explore specific work.</h2>
              <div className="px-related">
                {products.map((p) => (
                  <Link href={`/p/${p.id}`} key={p.id}>
                    <span>{p.id}</span>
                    <h3>{p.title}</h3>
                    <span>View service & request a quote ↗</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        <Process />
        <section className="px-section">
          <div className="px-wrap px-faq-grid">
            <div>
              <p className="px-label">SERVICE QUESTIONS</p>
              <h2>Good to know.</h2>
            </div>
            <FAQ items={s.faq} />
          </div>
        </section>
        <InquiryForm initialService={s.title} />
        <div className="px-wrap px-next-services">
          <p className="px-label">CONNECTED EXPERTISE</p>
          {services
            .filter((x) => x.slug !== s.slug)
            .map((x) => (
              <Link key={x.slug} href={`/services/${x.slug}`}>
                {x.title} ↗
              </Link>
            ))}
        </div>
      </main>
    </PublicShell>
  );
}

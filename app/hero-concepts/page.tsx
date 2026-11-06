import Link from "next/link";
import Image from "next/image";
import { heroConcepts } from "@/components/HeroConcepts";
import PublicShell from "@/components/PublicShell";
import { getCatalog } from "@/lib/catalog";
export const metadata = { title: "Archived hero proposals | SH360" };
export default async function ConceptIndex() {
  return (
    <PublicShell catalog={await getCatalog()}>
      <main id="main" className="hc-index px-wrap">
        <p className="ix-eyebrow">SH360 / HERO DESIGN ARCHIVE</p>
        <h1>
          Earlier proposals.
          <br />
          Preserved for reference.
        </h1>
        <p className="hc-index-intro">
          These three earlier proposals were rejected and are retained as an
          archive. The homepage now implements the separately specified
          Engineering Blueprint direction. These are not current design options.
        </p>
        <div className="hc-index-list">
          {Object.entries(heroConcepts).map(([key, concept]) => (
            <article key={key}>
              <div className="hc-index-title">
                <span>{key.toUpperCase()}</span>
                <div>
                  <h2>{concept.name}</h2>
                  <p>{concept.approach}</p>
                  <Link href={`/hero-concepts/${key}`} className="ix-button">
                    Open interactive concept ↗
                  </Link>
                  <div className="hc-screenshot-links">
                    <a
                      href={`/hero-previews/${key}-desktop.jpg`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Desktop screenshot ↗
                    </a>
                    <a
                      href={`/hero-previews/${key}-mobile.jpg`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Mobile screenshot ↗
                    </a>
                  </div>
                </div>
              </div>
              <Link
                className="hc-index-image"
                href={`/hero-concepts/${key}`}
                aria-label={`Open ${concept.name}`}
              >
                <Image
                  src={`/hero-previews/${key}-desktop.jpg`}
                  width={1440}
                  height={1000}
                  alt={`Rendered desktop proposal for ${concept.name}`}
                  unoptimized
                />
              </Link>
            </article>
          ))}
        </div>
        <p className="hc-index-end">
          None of these proposals was approved or applied to the homepage.
        </p>
        <Link href="/" className="ix-text-link">
          Return to the current homepage ↗
        </Link>
      </main>
    </PublicShell>
  );
}

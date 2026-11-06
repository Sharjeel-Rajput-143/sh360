import Link from "next/link";
import Image from "next/image";
import { heroConcepts } from "@/components/HeroConcepts";
import PublicShell from "@/components/PublicShell";
import { getCatalog } from "@/lib/catalog";
export const metadata = { title: "Hero concepts — pending approval | SH360" };
export default async function ConceptIndex() {
  return (
    <PublicShell catalog={await getCatalog()}>
      <main id="main" className="hc-index px-wrap">
        <p className="ix-eyebrow">SH360 / HERO DESIGN REVIEW</p>
        <h1>
          Three compositions.
          <br />
          One decision to make.
        </h1>
        <p className="hc-index-intro">
          These are proposals, not an approved direction. All three retain the
          current theme, company positioning and licensed reference photograph
          so you can compare the layout itself. The live homepage hero has not
          been replaced.
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
          Approval remains pending. A concept will only replace the homepage
          hero after you choose and approve it.
        </p>
        <Link href="/" className="ix-text-link">
          Return to the current homepage ↗
        </Link>
      </main>
    </PublicShell>
  );
}

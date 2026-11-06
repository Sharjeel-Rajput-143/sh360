import Link from "next/link";

/** Existing homepage hero. Rejected/pending review; kept unchanged until a concept is approved. */
export default function TemporaryHomeHero({ brand }: { brand: string }) {
  return (
    <section className="ed-hero" id="top" aria-labelledby="ed-title">
      <div className="px-wrap">
        <div className="ed-hero-rule">
          <p className="ix-eyebrow">
            {brand} / ENGINEERING & INTEGRATED SERVICES
          </p>
          <span>RESIDENTIAL & COMMERCIAL INQUIRIES</span>
        </div>
        <h1 id="ed-title">
          Engineering the Spaces
          <br className="ed-desktop-break" /> We Live and Work In.
        </h1>
        <div className="ed-hero-lower">
          <div className="ed-hero-intro">
            <p>
              Electrical engineering, smart automation, EV charging and
              essential property services — brought together through one
              technical partner.
            </p>
            <div className="ed-hero-actions">
              <Link href="/services" className="ix-button">
                Explore Our Services <span aria-hidden="true">↗</span>
              </Link>
              <Link href="#contact" className="ix-text-link">
                Discuss a Project ↗
              </Link>
            </div>
          </div>
          <figure className="ed-hero-photo">
            <picture>
              <source
                type="image/webp"
                srcSet="/photography/electrical-installation-640.webp 640w, /photography/electrical-installation-1280.webp 1280w, /photography/electrical-installation-1920.webp 1920w"
                sizes="(max-width: 900px) calc(100vw - 40px), (max-width: 1440px) 66vw, 950px"
              />
              <img
                src="/photography/electrical-installation-1280.webp"
                width={1280}
                height={853}
                alt="Electrical technician using a test meter at an installed switchboard"
                fetchPriority="high"
              />
            </picture>
            <figcaption>
              <span>
                Electrical installation testing / representative photograph
              </span>
              <span>
                <a
                  href="https://commons.wikimedia.org/wiki/File:Man-electrical-technician-working-switchboard-with-fuses.jpg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cláudio Marques Unip. LDA
                </a>{" "}
                ·{" "}
                <a
                  href="https://creativecommons.org/licenses/by-sa/4.0/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CC BY-SA 4.0
                </a>{" "}
                · cropped
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

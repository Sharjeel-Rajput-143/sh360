import Image from "next/image";
import Link from "next/link";
import { capabilities } from "@/lib/capabilities";
import { showcase } from "@/lib/showcase";

/** A compact reference-photo gallery for every capability, grouped by category. */
export default function CapabilitiesShowcase() {
  return (
    <div className="sg-home">
      <p className="ix-eyebrow">MORE EXAMPLES, BY CATEGORY</p>
      <div className="sg-home-grid">
        {capabilities.map((c) => {
          const images = showcase[c.slug]?.slice(0, 4) ?? [];
          if (images.length === 0) return null;
          return (
            <article className="sg-home-card" key={c.slug}>
              <div className="sg-grid sg-grid-compact">
                {images.map((image, i) => (
                  <figure className="sg-item" key={image.src}>
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={400}
                      height={300}
                      sizes="(max-width:700px) 25vw, 11vw"
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </figure>
                ))}
              </div>
              <h3>
                <Link href={`/services/${c.slug}`}>
                  {c.title} <span aria-hidden="true">↗</span>
                </Link>
              </h3>
            </article>
          );
        })}
      </div>
      <p className="sg-note">
        Reference photography illustrating the type of work for each category. Not completed SH360 projects.
      </p>
    </div>
  );
}

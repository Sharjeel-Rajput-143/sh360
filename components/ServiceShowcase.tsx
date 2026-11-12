import Image from "next/image";
import { showcase } from "@/lib/showcase";

/** A small reference-photo gallery for one service, used on its detail page. */
export default function ServiceShowcase({ slug, title }: { slug: string; title: string }) {
  const images = showcase[slug];
  if (!images || images.length === 0) return null;
  return (
    <section className="sg-section px-section" aria-labelledby="sg-heading">
      <div className="px-wrap">
        <p className="px-label">EXAMPLES OF THIS WORK</p>
        <h2 id="sg-heading">{title} in the field.</h2>
        <div className="sg-grid">
          {images.map((image, i) => (
            <figure className="sg-item" key={image.src}>
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                sizes="(max-width:700px) 50vw, 23vw"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </figure>
          ))}
        </div>
        <p className="sg-note">
          Reference photography illustrating the type of work. Not completed SH360 projects.
        </p>
      </div>
    </section>
  );
}

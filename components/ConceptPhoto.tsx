/** The same licensed photograph is used across proposals to compare composition fairly. */
export default function ConceptPhoto({
  className = "",
}: {
  className?: string;
}) {
  return (
    <figure className={`hc-photo ${className}`}>
      <picture>
        <source
          type="image/webp"
          srcSet="/photography/electrical-installation-640.webp 640w, /photography/electrical-installation-1280.webp 1280w, /photography/electrical-installation-1920.webp 1920w"
          sizes="(max-width:700px) calc(100vw - 40px), 1280px"
        />
        <img
          src="/photography/electrical-installation-1280.webp"
          width={1280}
          height={853}
          alt="Reference photograph of a technician testing an installed electrical switchboard"
          fetchPriority="high"
        />
      </picture>
      <figcaption>
        <span>Reference photography · not a SH360 project</span>
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
  );
}

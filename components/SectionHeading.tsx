import type { ReactNode } from "react";
/** Shared twelve-column section introduction for the public homepage. */
export default function SectionHeading({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <header className="ed-section-heading">
      <p className="ix-eyebrow">{label}</p>
      <div>
        <h2>{title}</h2>
        {children && <p>{children}</p>}
      </div>
    </header>
  );
}

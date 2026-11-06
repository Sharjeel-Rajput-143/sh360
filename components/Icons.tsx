import Image from "next/image";
import type { IconName } from "@/lib/products";

type IconProps = { className?: string };

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function ChevronIcon({ className, direction }: IconProps & { direction: "left" | "right" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true" focusable="false">
      <path d={direction === "left" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
    </svg>
  );
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true" focusable="false">
      <circle cx="11" cy="11" r="6.5" />
      <path d="M16 16l4.5 4.5" />
    </svg>
  );
}

export function HomeIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true" focusable="false">
      <path d="M3 11l9-7.5 9 7.5" />
      <path d="M5.5 9.5V19a1 1 0 0 0 1 1H10v-5.5h4V20h3.5a1 1 0 0 0 1-1V9.5" />
    </svg>
  );
}

export function GridIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true" focusable="false">
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.8" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.8" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.8" />
      <rect x="13.5" y="13.5" width="7" height="7" rx="1.8" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true" focusable="false">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export function HeartIcon({ className, filled }: IconProps & { filled?: boolean }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      {...stroke}
      fill={filled ? "currentColor" : "none"}
      aria-hidden="true"
      focusable="false"
    >
      <path d="M12 20.5s-7.5-4.6-9.2-9.4A5.2 5.2 0 0 1 12 6.6a5.2 5.2 0 0 1 9.2 4.5c-1.7 4.8-9.2 9.4-9.2 9.4z" />
    </svg>
  );
}

export function SunIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6" />
    </svg>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true" focusable="false">
      <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4 8.5 8.5 0 1 0 20 14.5z" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true" focusable="false">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function CategoryIcon({ icon, className }: IconProps & { icon: IconName }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true" focusable="false">
      {icon === "electrical" && (
        <path d="M13 2 4 14h7l-1 8 10-12h-7l0-8z" fill="currentColor" stroke="none" />
      )}
      {icon === "plumbing" && (
        <>
          <path d="M14.8 6.2a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l2.9-2.9a5 5 0 0 1-6.8 6.8l-6.6 6.6a1.7 1.7 0 0 1-2.4-2.4l6.6-6.6a5 5 0 0 1 6.8-6.8l-3.5 3.5-1.4-1.4z" />
        </>
      )}
      {icon === "cleaning" && (
        <>
          <rect x="9" y="9" width="7" height="12" rx="1.6" />
          <path d="M11.2 9V5.3A1.3 1.3 0 0 1 12.5 4h.5a1.3 1.3 0 0 1 1.3 1.3V9" />
          <path d="M6.5 5.5h2M3.5 9l1.6 1.6M3.5 13.5h2M4.3 18l1.6-1.6" />
        </>
      )}
      {icon === "ev-charger" && (
        <>
          <rect x="6" y="7" width="9" height="10" rx="2" />
          <path d="M9 3.5v3.5M12 3.5v3.5M10.2 10.2h1.6v2.3H10.2zM10.5 17v2.5M9.3 19.5h2.4" />
          <path d="M15 10h2a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-2" />
        </>
      )}
      {icon === "maintenance" && (
        <>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 3.5v2.3M12 18.2v2.3M4.9 4.9l1.6 1.6M17.5 17.5l1.6 1.6M3.5 12h2.3M18.2 12h2.3M4.9 19.1l1.6-1.6M17.5 6.5l1.6-1.6" />
        </>
      )}
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M8 5.2v13.6a1 1 0 0 0 1.5.86l11-6.8a1 1 0 0 0 0-1.72l-11-6.8A1 1 0 0 0 8 5.2z" />
    </svg>
  );
}

export type FeatureIconName = "leaf" | "ruler" | "chat" | "truck";

export function FeatureIcon({ name, className }: IconProps & { name: FeatureIconName }) {
  return (
    <svg className={className} viewBox="0 0 24 24" {...stroke} aria-hidden="true" focusable="false">
      {name === "leaf" && (
        <>
          <path d="M5 19c0-8 5-14 14-14 0 9-6 14-14 14z" />
          <path d="M5 19c3-5 6-8 10-10" />
        </>
      )}
      {name === "ruler" && (
        <>
          <rect x="3" y="8" width="18" height="8" rx="1.5" />
          <path d="M7 8v3M11 8v4M15 8v3M19 8v4" />
        </>
      )}
      {name === "chat" && <path d="M4 5h16v11H9l-5 4z" />}
      {name === "truck" && (
        <>
          <path d="M2 6h11v10H2zM13 9h5l3 3v4h-8z" />
          <circle cx="7" cy="18" r="1.8" />
          <circle cx="17" cy="18" r="1.8" />
        </>
      )}
    </svg>
  );
}

export function LogoMark({ className }: IconProps) {
  return (
    <Image
      src="/logo-mark.png"
      unoptimized
      alt=""
      width={96}
      height={96}
      className={className}
      priority
    />
  );
}

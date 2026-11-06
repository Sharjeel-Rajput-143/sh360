"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
};

// Use the original architectural study when a catalog photo is unavailable.
const FALLBACK = "/visuals/building.webp";

export default function ProductImage({ src, alt, sizes, priority }: Props) {
  const [failed, setFailed] = useState(false);

  return (
    <Image
      src={failed ? FALLBACK : src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className="media-img"
      unoptimized={failed || src.startsWith("/")}
      onError={() => setFailed(true)}
    />
  );
}

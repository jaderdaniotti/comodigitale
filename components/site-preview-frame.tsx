"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type SitePreviewFrameProps = {
  url?: string;
  fallbackSrc?: string;
  alt: string;
  viewportWidth: number;
  viewportHeight: number;
  sizes?: string;
  lazy?: boolean;
};

export function SitePreviewFrame({
  url,
  fallbackSrc,
  alt,
  viewportWidth,
  viewportHeight,
  sizes,
  lazy = false,
}: SitePreviewFrameProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.2);
  const [inView, setInView] = useState(!lazy);
  const [showIframe, setShowIframe] = useState(Boolean(url) && !lazy);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => {
      setScale(el.clientWidth / viewportWidth);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [viewportWidth]);

  useEffect(() => {
    if (!lazy) {
      setInView(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "280px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [lazy]);

  useEffect(() => {
    setShowIframe(Boolean(url) && inView);
  }, [url, inView]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden bg-cream/5">
      {fallbackSrc ? (
        <Image
          src={fallbackSrc}
          alt={alt}
          fill
          unoptimized
          sizes={sizes}
          className="object-cover object-top"
        />
      ) : null}

      {url && showIframe ? (
        <iframe
          src={url}
          title={alt}
          loading="lazy"
          tabIndex={-1}
          referrerPolicy="no-referrer"
          className="absolute top-0 left-0 origin-top-left border-0 bg-white"
          style={{
            width: viewportWidth,
            height: viewportHeight,
            transform: `scale(${scale})`,
            pointerEvents: "none",
          }}
          onError={() => setShowIframe(false)}
        />
      ) : null}
    </div>
  );
}

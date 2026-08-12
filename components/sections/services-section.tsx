"use client";

import ScrollExpand from "@/components/scroll-expand";
import { useTheme } from "@/components/theme-provider";
import { scrollExpandSection } from "@/lib/home-content";
import { cn } from "@/lib/cn";

export function ServicesSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="servizi"
      className={cn(isDark ? "bg-ink" : "bg-cream")}
      aria-label="Servizi"
    >
      <ScrollExpand
        key={theme}
        src={
          isDark
            ? scrollExpandSection.imageSrcDark
            : scrollExpandSection.imageSrcLight
        }
        alt={scrollExpandSection.imageAlt}
        title={scrollExpandSection.title}
        scrollHint={scrollExpandSection.scrollHint}
        useWindowScroll
        startWidth={38}
        startHeight={52}
        startRadius={28}
        endRadius={0}
        mediaZoom={1.28}
        scrollDistance={1.15}
        holdDistance={0.4}
        overlayScrim={isDark ? 0.7 : 0.25}
        mediaTintClassName={isDark ? "bg-ink/55" : "bg-cream/60"}
        titleClassName={
          isDark
            ? "text-white [text-shadow:0_2px_28px_rgba(0,0,0,0.75)]"
            : "text-ink [text-shadow:0_2px_20px_rgba(246,245,243,0.55)]"
        }
        hintClassName={isDark ? "text-white/70" : "text-ink"}
        className="min-h-0"
      >
        <ul className="mx-auto flex w-fit max-w-full flex-col items-stretch gap-3 sm:gap-4 md:gap-5">
          {scrollExpandSection.services.map((service) => (
            <li
              key={service.label}
              className={cn(
                "flex items-center gap-3 sm:gap-3.5",
                "font-display text-[clamp(1.6rem,5.5vw,4.25rem)] font-semibold leading-none tracking-tight",
                isDark
                  ? "text-white [text-shadow:0_2px_24px_rgba(0,0,0,0.65)]"
                  : "text-ink",
              )}
            >
              <span
                aria-hidden
                className={cn(
                  "inline-flex size-[0.85em] shrink-0 items-center justify-center rounded-full",
                  isDark ? "bg-cream" : "bg-ink",
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element -- emoji-style service icon */}
                <img
                  src={service.icon}
                  alt=""
                  className="size-[0.62em] object-contain"
                />
              </span>
              <span className="text-left">{service.label}</span>
            </li>
          ))}
        </ul>
      </ScrollExpand>
    </section>
  );
}

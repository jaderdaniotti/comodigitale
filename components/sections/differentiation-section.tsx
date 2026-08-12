"use client";

import ScrollStack, { ScrollStackItem } from "@/components/scroll-stack";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { useTheme } from "@/components/theme-provider";
import { differentiation } from "@/lib/home-content";
import { cn } from "@/lib/cn";

export function DifferentiationSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="bg-background text-foreground">
      <div className="page-shell pt-20 lg:pt-28">
        <Reveal className="mx-auto max-w-4xl text-center">
          <SectionLabel className="justify-center">Perché noi</SectionLabel>
          <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-tight">
            {differentiation.title}
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-[clamp(1.05rem,2.2vw,1.35rem)] leading-relaxed text-muted">
            {differentiation.body}
          </p>
        </Reveal>
      </div>

      {/* Contained height required: ScrollStack uses its own Lenis scroller (h-full). */}
      <div className="page-shell h-[100svh]">
        <ScrollStack className="mx-auto max-w-4xl">
          {differentiation.points.map((point) => (
            <ScrollStackItem
              key={point.title}
              itemClassName={cn(
                "flex flex-col justify-center gap-4 border border-border shadow-none",
                isDark
                  ? "bg-cream/[0.08] text-cream"
                  : "bg-ink/[0.05] text-ink",
              )}
            >
              <div className="flex items-center gap-3 sm:gap-4">
                <span
                  aria-hidden
                  className={cn(
                    "inline-flex size-12 shrink-0 items-center justify-center rounded-full sm:size-14",
                    isDark ? "bg-cream" : "bg-ink",
                  )}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- emoji-style icon */}
                  <img
                    src={point.icon}
                    alt=""
                    className="size-8 object-contain sm:size-9"
                  />
                </span>
                <h3 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-none tracking-tight">
                  {point.title}
                </h3>
              </div>
              <p
                className={cn(
                  "max-w-xl text-[clamp(1rem,2vw,1.2rem)] leading-relaxed",
                  isDark ? "text-cream/70" : "text-ink/65",
                )}
              >
                {point.description}
              </p>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}

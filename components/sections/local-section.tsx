"use client";

import { MapPin } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { localSection } from "@/lib/home-content";

export function LocalSection() {
  return (
    <section
      id="chi-siamo"
      className="bg-background py-24 text-foreground lg:py-32"
    >
      <div className="page-shell grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal>
          <SectionLabel>Chi siamo</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.05] tracking-tight">
            {localSection.title}
            <br />
            {localSection.titleLine2}
          </h2>
          <p className="mt-6 max-w-lg leading-relaxed text-muted">
            {localSection.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {localSection.areas.map((area) => (
              <span
                key={area}
                className="rounded-full border border-border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-muted"
              >
                {area}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-foreground/[0.04] text-foreground">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(227,255,4,0.15),transparent_65%)]" />
            <div className="relative text-center">
              <MapPin className="mx-auto h-10 w-10 text-foreground" />
              <p className="mt-4 font-display text-2xl font-semibold">Como</p>
              <p className="mt-2 text-sm text-muted">
                Lago di Como · Lombardia
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

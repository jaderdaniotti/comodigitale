"use client";

import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { technologies } from "@/lib/home-content";

export function TechSection() {
  return (
    <section className="border-y border-border bg-background py-16 lg:py-20">
      <Reveal className="page-shell text-center" delay={0.12}>
        <SectionLabel className="justify-center">Stack</SectionLabel>
        <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-tight">
          {technologies.title}
        </h2>
        <p className="mt-6 font-display text-[clamp(0.75rem,1.8vw,0.95rem)] font-semibold uppercase tracking-[0.18em] text-muted">
          {technologies.stack.join(" · ")}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted">
          {technologies.body}
        </p>
      </Reveal>
    </section>
  );
}

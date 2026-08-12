"use client";

import { Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { testimonial } from "@/lib/home-content";

export function TestimonialsSection() {
  return (
    <section className="bg-background py-24 text-foreground lg:py-32">
      <div className="page-shell">
        <Reveal>
          <SectionLabel>Testimonianze</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,4vw,2.8rem)] font-semibold tracking-tight">
            Le parole dei nostri clienti.
          </h2>
        </Reveal>

        <Reveal delay={0.18} className="mt-12 max-w-4xl">
          <blockquote>
            <p className="text-[clamp(1.25rem,3vw,2rem)] font-medium leading-snug tracking-tight">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <footer className="mt-8">
              <p className="font-display font-semibold">{testimonial.name}</p>
              <p className="mt-1 text-sm text-muted">{testimonial.role}</p>
            </footer>
          </blockquote>

          <div className="mt-10 flex gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-0.5 text-foreground">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

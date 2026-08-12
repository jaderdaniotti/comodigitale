"use client";

import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { processSteps } from "@/lib/home-content";

export function ProcessSection() {
  return (
    <section id="processo" className="bg-background py-24 text-foreground lg:py-32">
      <div className="page-shell">
        <Reveal>
          <SectionLabel>Processo</SectionLabel>
          <h2 className="font-display max-w-2xl text-[clamp(2rem,4.5vw,3rem)] font-semibold leading-[1.05] tracking-tight">
            Dal primo messaggio al lancio.
          </h2>
        </Reveal>

        <ol className="mt-14 space-y-0">
          {processSteps.map((step, index) => (
            <li
              key={step.number}
              className="relative border-t border-border py-8 first:border-t-0 first:pt-0"
            >
              <Reveal delay={0.1 + index * 0.05}>
                <div className="grid gap-4 md:grid-cols-[5rem_1fr] md:items-start">
                  <p className="font-display text-2xl font-semibold text-foreground/30">
                    {step.number}
                  </p>
                  <div>
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
              {index < processSteps.length - 1 ? (
                <ArrowDown className="absolute bottom-0 left-10 hidden h-4 w-4 text-muted md:block" />
              ) : null}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

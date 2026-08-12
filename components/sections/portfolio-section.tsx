"use client";

import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { portfolioProjects } from "@/lib/home-content";
import { cn } from "@/lib/cn";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="bg-background py-24 text-foreground lg:py-32">
      <div className="page-shell">
        <Reveal>
          <SectionLabel>Portfolio</SectionLabel>
          <h2 className="font-display max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.02] tracking-tight">
            Non raccontiamo quello che sappiamo fare.
            <br />
            Te lo mostriamo.
          </h2>
          <p className="mt-4 max-w-xl text-muted">
            Una selezione dei nostri progetti.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
          {portfolioProjects.map((project, index) => (
            <Reveal
              key={project.title}
              delay={0.12 + index * 0.06}
              className={cn(
                project.size === "large" ? "md:col-span-2" : "md:col-span-1",
              )}
            >
              <a
                href="#contatti"
                className={cn(
                  "group relative flex min-h-[260px] flex-col justify-end overflow-hidden rounded-[1.75rem] border border-border p-6 transition duration-300 hover:scale-[1.01]",
                  project.accent
                    ? "bg-accent text-ink"
                    : "bg-foreground/[0.04] text-foreground",
                )}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(227,255,4,0.12),transparent_50%)] opacity-0 transition group-hover:opacity-100" />
                <p className="relative text-[11px] font-semibold uppercase tracking-[0.18em] opacity-60">
                  {project.tags}
                </p>
                <h3 className="relative mt-2 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {project.title}
                </h3>
                <Button
                  as="span"
                  variant="link"
                  className="relative mt-4 opacity-0 transition group-hover:opacity-100"
                >
                  Vedi progetto
                </Button>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Button href="#contatti" variant="linkAccent" className="mt-10">
            Vedi tutti i progetti
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

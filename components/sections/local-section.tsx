import { BrandLogo } from "@/components/brand-logo";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { localSection } from "@/lib/home-content";

export function LocalSection() {
  return (
    <section
      id="chi-siamo"
      className="bg-background py-24 text-foreground lg:py-10 border-y border-border"
    >
      <div className="page-shell grid min-w-0 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <Reveal className="min-w-0">
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
          <div className="relative aspect-square overflow-hidden">
            <BrandLogo fill className="scale-[1]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

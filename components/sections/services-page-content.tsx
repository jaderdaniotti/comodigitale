"use client";

import type { ComponentType } from "react";
import {
  Briefcase,
  Building2,
  CalendarCheck,
  ClipboardList,
  Dumbbell,
  Hammer,
  Heart,
  House,
  IdCard,
  LayoutTemplate,
  MapPinned,
  Megaphone,
  Music,
  PartyPopper,
  Rocket,
  SlidersHorizontal,
  Tent,
  Trophy,
  UtensilsCrossed,
  Zap,
} from "lucide-react";
import { Button } from "@/components/button";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import SplitText from "@/components/split-text";
import FlowingMenu from "@/components/flowing-menu";
import {
  serviceGroups,
  serviceHighlights,
  serviceIndexItems,
  serviceOffers,
  servicesPage,
} from "@/lib/services-content";

const icons: Record<string, ComponentType<{ className?: string }>> = {
  heart: Heart,
  tent: Tent,
  utensils: UtensilsCrossed,
  house: House,
  briefcase: Briefcase,
  trophy: Trophy,
  music: Music,
  building: Building2,
  party: PartyPopper,
  hammer: Hammer,
  megaphone: Megaphone,
  layout: LayoutTemplate,
  zap: Zap,
  dumbbell: Dumbbell,
  clipboard: ClipboardList,
  sliders: SlidersHorizontal,
  calendar: CalendarCheck,
  "id-card": IdCard,
  map: MapPinned,
  rocket: Rocket,
};

export function ServicesPageContent() {
  return (
    <>
      <section className="bg-hero pt-16 pb-20 text-foreground lg:pt-24 lg:pb-28">
        <div className="page-shell">
          <Reveal>
            <SectionLabel>{servicesPage.eyebrow}</SectionLabel>
          </Reveal>
          <h1 className="font-display mt-0 max-w-4xl text-[clamp(2.2rem,5.5vw,4.25rem)] font-semibold leading-[1.04] tracking-tight">
            <SplitText
              tag="span"
              text={servicesPage.title}
              className="block w-full font-display text-[clamp(2.2rem,5.5vw,4.25rem)] font-semibold leading-[1.04] tracking-tight"
              delay={40}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-80px"
              textAlign="left"
            />
            <SplitText
              tag="span"
              text={servicesPage.titleLine2}
              className="block w-full font-display text-[clamp(2.2rem,5.5vw,4.25rem)] font-semibold leading-[1.04] tracking-tight"
              delay={30}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-80px"
              textAlign="left"
            />
          </h1>
          <Reveal>
            <p className="mt-8 max-w-2xl text-[clamp(1.05rem,2vw,1.25rem)] leading-relaxed text-muted">
              {servicesPage.body}
            </p>
            <div className="mt-10">
              <Button href="#contatti">{servicesPage.cta}</Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-background text-foreground">
        <div className="page-shell pt-16 pb-8 lg:pt-20">
          <Reveal>
            <SectionLabel>Indice</SectionLabel>
            <h2 className="font-display max-w-3xl text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.05] tracking-tight">
              Tutti i servizi web.
            </h2>
          </Reveal>
        </div>
        <FlowingMenu items={[...serviceIndexItems]} speed={12} />
      </section>

      <section className="border-y border-border bg-background py-20 text-foreground lg:py-28">
        <div className="page-shell">
          <Reveal>
            <SectionLabel>In evidenza</SectionLabel>
            <h2 className="font-display max-w-3xl text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.05] tracking-tight">
              Tre modi per partire, a seconda di tempi e obiettivi.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {serviceHighlights.map((item, index) => (
              <Reveal key={item.slug} delay={0.1 + index * 0.06}>
                <article className="flex h-full flex-col rounded-[1.5rem] border border-border bg-foreground/[0.03] p-7">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
                    0{index + 1}
                  </p>
                  <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 flex-1 leading-relaxed text-muted">
                    {item.body}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-[0.1em] text-muted"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {serviceGroups.map((group) => {
        const offers = serviceOffers.filter((item) => item.group === group.id);
        return (
          <section
            key={group.id}
            className="border-b border-border bg-background py-20 text-foreground lg:py-28"
          >
            <div className="page-shell">
              <Reveal>
                <SectionLabel>{group.label}</SectionLabel>
                <h2 className="font-display max-w-3xl text-[clamp(1.8rem,4vw,3rem)] font-semibold leading-[1.05] tracking-tight">
                  {group.title}
                </h2>
              </Reveal>
              <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {offers.map((offer, index) => {
                  const Icon = icons[offer.icon] ?? LayoutTemplate;
                  return (
                    <Reveal key={offer.slug} delay={0.06 + (index % 3) * 0.05}>
                      <article
                        id={offer.slug}
                        className="flex h-full scroll-mt-28 flex-col rounded-[1.5rem] border border-border bg-foreground/[0.03] p-6"
                      >
                        <span className="inline-flex size-11 items-center justify-center rounded-full border border-border">
                          <Icon className="h-5 w-5" />
                        </span>
                        <h3 className="font-display mt-5 text-xl font-semibold tracking-tight">
                          {offer.title}
                        </h3>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                          {offer.summary}
                        </p>
                        <ul className="mt-5 flex flex-wrap gap-2">
                          {offer.features.slice(0, 5).map((feature) => (
                            <li
                              key={feature}
                              className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted"
                            >
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </article>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <FinalCtaSection />
    </>
  );
}

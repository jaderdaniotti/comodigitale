"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { hero, heroMockups } from "@/lib/home-content";

const AUTOPLAY_MS = 4500;

function MockupSlide({
  desktopSrc,
  mobileSrc,
  name,
}: {
  desktopSrc: string;
  mobileSrc: string;
  name: string;
}) {
  const [desktopOk, setDesktopOk] = useState(true);
  const [mobileOk, setMobileOk] = useState(true);

  return (
    <div className="relative w-full pb-[12%] pt-2">
      {/* Desktop frame — fills most of the column */}
      <div className="relative z-10 w-[88%] overflow-hidden rounded-2xl border border-border bg-ink text-cream shadow-2xl lg:rounded-[1.25rem]">
        <div className="flex items-center gap-1.5 border-b border-cream/10 bg-ink px-3 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-accent" />
          <span className="h-2.5 w-2.5 rounded-full bg-cream/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-cream/25" />
          <span className="ml-2 truncate text-[11px] text-cream/40">
            {name}
          </span>
        </div>
        <div className="relative aspect-[16/10] bg-cream/5">
          {desktopOk ? (
            <Image
              src={desktopSrc}
              alt={`${name} — desktop`}
              fill
              unoptimized
              sizes="(min-width: 1024px) 55vw, 90vw"
              className="object-cover object-top"
              onError={() => setDesktopOk(false)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cream/5 to-cream/10">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cream/50">
                Desktop · 1440×900
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Mobile frame — overlaps bottom-right of desktop */}
      <div className="absolute bottom-0 right-0 z-20 w-[32%] max-w-[220px] overflow-hidden rounded-[1.5rem] border border-border bg-ink text-cream shadow-xl sm:max-w-[260px] lg:w-[30%] lg:max-w-[280px] lg:rounded-[1.75rem]">
        <div className="mx-auto mt-2 h-1.5 w-10 rounded-full bg-cream/20" />
        <div className="relative mx-1.5 mt-2 mb-1.5 aspect-[390/844] overflow-hidden rounded-[1.15rem] bg-cream/5">
          {mobileOk ? (
            <Image
              src={mobileSrc}
              alt={`${name} — mobile`}
              fill
              unoptimized
              sizes="280px"
              className="object-cover object-top"
              onError={() => setMobileOk(false)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-accent/20 to-cream/10">
              <span className="px-2 text-center text-[9px] font-semibold uppercase tracking-[0.14em] text-cream/50">
                Mobile
                <br />
                390×844
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function HeroVisual() {
  const slides = heroMockups.slice(0, 3);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const go = useCallback(
    (dir: -1 | 1) => {
      setIndex((i) => (i + dir + slides.length) % slides.length);
    },
    [slides.length],
  );

  useEffect(() => {
    if (paused || slides.length <= 1) return;
    const id = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [paused, go, slides.length]);

  const current = slides[index];

  return (
    <div
      className="relative w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current.name}
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -16 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <MockupSlide
            name={current.name}
            desktopSrc={current.desktopSrc}
            mobileSrc={current.mobileSrc}
          />
        </motion.div>
      </AnimatePresence>

      <div className="mt-5 flex items-center gap-2">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Progetto precedente"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background text-foreground transition hover:border-foreground/40"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Progetto successivo"
          className="flex h-11 w-11 items-center justify-center rounded-md border border-border bg-background text-foreground transition hover:border-foreground/40"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        <div className="ml-2 flex gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.name}
              type="button"
              aria-label={`Vai a ${s.name}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-foreground" : "w-1.5 bg-foreground/25"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-hero pt-8 text-foreground lg:pt-12"
    >
      <div className="page-shell grid gap-10 pb-16 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.25fr)] lg:items-center lg:gap-8 lg:pb-24 xl:gap-10">
        <Reveal delay={0.05} y={16}>
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-muted">
            {hero.eyebrow}
          </p>

          <h1 className="font-display max-w-xl text-[clamp(2.2rem,4.8vw,3.75rem)] font-semibold leading-[1.04] tracking-tight">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-lg text-[clamp(1rem,2vh,1.15rem)] leading-relaxed text-muted">
            {hero.subheadline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#contatti">{hero.ctaPrimary}</Button>
            <Button href="#servizi" variant="outline" arrow="down">
              {hero.ctaSecondary}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="min-w-0 w-full">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

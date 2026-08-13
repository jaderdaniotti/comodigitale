"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";
import { SectionLabel } from "@/components/section-label";
import { useTheme } from "@/components/theme-provider";
import { differentiation } from "@/lib/home-content";
import { cn } from "@/lib/cn";

const STICKY_TOP = "6rem";

export function DifferentiationSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="bg-background py-20 text-foreground lg:py-10 border-y border-border">
      <div className="page-shell">
        <Reveal className="mx-auto max-w-5xl text-center">
          <SectionLabel className="justify-center">Perché noi</SectionLabel>
          <h2 className="font-display text-[clamp(2.4rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-tight">
            {differentiation.title}
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-[clamp(1.05rem,2.2vw,1.35rem)] leading-relaxed text-muted">
            {differentiation.body}
          </p>
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-5xl lg:mt-16">
          {differentiation.points.map((point, index) => {
            const fromLeft = index % 2 === 0;
            const enterX = fromLeft ? -56 : 56;

            return (
              <div
                key={point.title}
                className="sticky mb-[35vh]"
                style={{ top: STICKY_TOP, zIndex: index + 1 }}
              >
                <motion.article
                  className={cn(
                    "flex min-h-[min(72vh,680px)] flex-col items-center justify-center gap-5 rounded-[2rem] border border-border px-6 py-10 text-center shadow-[0_18px_50px_rgba(0,0,0,0.12)] sm:min-h-[min(78vh,760px)] sm:gap-7 sm:px-14 sm:py-14 lg:min-h-[min(74vh,820px)] lg:gap-8 lg:rounded-[2.5rem] lg:px-16 lg:py-16",
                    isDark
                      ? "bg-[#121410] text-cream"
                      : "bg-[#EFEEEA] text-ink",
                  )}
                  initial={{ opacity: 0, x: enterX }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-5 lg:gap-6">
                    <span
                      aria-hidden
                      className={cn(
                        "inline-flex size-[4rem] shrink-0 items-center justify-center rounded-full sm:size-[5.25rem] lg:size-24",
                        isDark ? "bg-cream" : "bg-ink",
                      )}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element -- emoji-style icon */}
                      <img
                        src={point.icon}
                        alt=""
                        className="size-11 object-contain sm:size-14 lg:size-16"
                      />
                    </span>
                    <h3 className="font-display text-center text-[clamp(2.4rem,9vw,4.25rem)] font-semibold leading-[0.95] tracking-tight">
                      {point.title}
                    </h3>
                  </div>
                  <p
                    className={cn(
                      "max-w-3xl text-[clamp(1.25rem,2.8vw,1.85rem)] leading-snug",
                      isDark ? "text-cream/70" : "text-ink/65",
                    )}
                  >
                    {point.description}
                  </p>
                </motion.article>
              </div>
            );
          })}
          {/* Lets the last sticky card release cleanly into the next section */}
          <div className="h-[20vh]" aria-hidden />
        </div>
      </div>
    </section>
  );
}

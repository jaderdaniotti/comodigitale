"use client";

import CurvedLoop from "@/components/curved-loop";
import { Reveal } from "@/components/reveal";
import { authorityStrip } from "@/lib/home-content";

export function AuthorityStripSection() {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden border-y border-border bg-background pt-5 text-foreground lg:pt-7">
      <Reveal delay={0.12} className="w-full">
        <CurvedLoop
          marqueeText={authorityStrip.marqueeText}
          speed={2}
          curveAmount={0}
          direction="left"
          interactive
          className="tracking-[0.04em]"
        />
      </Reveal>
    </section>
  );
}

"use client";

import { FormEvent, useState } from "react";
import { Mail, MessageCircle } from "lucide-react";
import { Button } from "@/components/button";
import { Reveal } from "@/components/reveal";
import { finalCta, site } from "@/lib/home-content";

export function FinalCtaSection() {
  const [sent, setSent] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section id="contatti" className="bg-background py-24 text-foreground lg:py-32">
      <div className="page-shell">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.02] tracking-tight">
            {finalCta.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {finalCta.body}
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <form
            onSubmit={onSubmit}
            className="mx-auto mt-12 max-w-xl rounded-[1.75rem] border border-border bg-foreground/[0.03] p-6 md:p-8"
          >
            {sent ? (
              <p className="text-center font-display text-xl font-semibold">
                Grazie. Ti ricontattiamo a breve.
              </p>
            ) : (
              <div className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Nome
                  </span>
                  <input
                    required
                    name="nome"
                    className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition focus:border-foreground/40"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Email
                  </span>
                  <input
                    required
                    type="email"
                    name="email"
                    className="h-11 w-full rounded-xl border border-border bg-background px-4 text-sm outline-none transition focus:border-foreground/40"
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                    Raccontaci il progetto
                  </span>
                  <textarea
                    required
                    name="messaggio"
                    rows={4}
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-foreground/40"
                  />
                </label>
                <Button type="submit" className="w-full">
                  {finalCta.cta}
                </Button>
              </div>
            )}
          </form>
        </Reveal>

        <Reveal delay={0.22} className="mt-10 text-center">
          <p className="text-sm text-muted">{finalCta.alt}</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-6">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium transition hover:opacity-70"
            >
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium transition hover:opacity-70"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

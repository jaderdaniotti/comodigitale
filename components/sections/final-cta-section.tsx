import { Mail, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { finalCta, site } from "@/lib/home-content";

export function FinalCtaSection() {
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
          <div className="mx-auto mt-12 max-w-2xl rounded-[1.75rem] border border-border bg-foreground/[0.03] p-6 md:p-8">
            <ContactForm />
          </div>
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

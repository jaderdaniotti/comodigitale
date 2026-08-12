"use client";

import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { footerLinks, site } from "@/lib/home-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-16 text-foreground">
      <div className="page-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/#hero" className="inline-flex items-center gap-3">
            <BrandLogo />
            <span className="font-display text-sm font-semibold">{site.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {site.tagline}
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Servizi
          </p>
          <ul className="mt-4 space-y-2">
            {footerLinks.services.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm transition hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Agenzia
          </p>
          <ul className="mt-4 space-y-2">
            {footerLinks.agency.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm transition hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Contatti
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>{site.location}</li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition hover:text-foreground"
              >
                {site.email}
              </a>
            </li>
            <li>{site.phoneDisplay}</li>
          </ul>
        </div>
      </div>

      <div className="page-shell mt-12 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {site.year} {site.name}
        </p>
        <p>
          Privacy · Cookie · P.IVA {site.piva}
        </p>
      </div>
    </footer>
  );
}

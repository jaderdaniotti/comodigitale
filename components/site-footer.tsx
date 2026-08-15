import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { CookieManageButton } from "@/components/cookie-consent";
import { footerLegal, navItems, site } from "@/lib/home-content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-16 text-foreground">
      <div className="page-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <BrandLogo />
            <span className="font-display text-sm font-semibold">{site.name}</span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Navigazione">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted">
            Navigazione
          </p>
          <ul className="mt-4 space-y-2">
            {navItems.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm transition hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

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
            <li>
              <a
                href={`https://wa.me/${site.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-foreground"
              >
                {site.phoneDisplay}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="page-shell mt-12 flex flex-col gap-3 border-t border-border pt-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {site.year} {site.name}
        </p>
        <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
          {footerLegal.map((link, index) => (
            <span key={link.href} className="inline-flex items-center gap-2">
              {index > 0 ? <span aria-hidden>·</span> : null}
              <Link
                href={link.href}
                className="transition hover:text-foreground"
              >
                {link.label}
              </Link>
            </span>
          ))}
          <span aria-hidden>·</span>
          <CookieManageButton className="transition hover:text-foreground" />
        </p>
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Moon, Sun } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/button";
import { SiteMenu } from "@/components/site-menu";
import { useTheme } from "@/components/theme-provider";
import { navItems, site } from "@/lib/home-content";
import { cn } from "@/lib/cn";

type SiteHeaderProps = {
  className?: string;
};

export function SiteHeader({ className }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { toggleTheme, theme } = useTheme();

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 border-b border-foreground/10 bg-background",
          className,
        )}
      >
        <div className="page-shell flex h-[4.5rem] min-w-0 items-center justify-between gap-4 md:h-[5.25rem]">
          <Link
            href="/#hero"
            className="flex items-center gap-3 text-foreground"
            aria-label={site.name}
          >
            <BrandLogo priority />
            <span className="font-display hidden text-lg uppercase font-semibold tracking-tight sm:inline">
              {site.name}
            </span>
          </Link>

          <nav className="hidden items-center gap-7 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/75 transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                theme === "light" ? "Passa al tema scuro" : "Passa al tema chiaro"
              }
              title={theme === "light" ? "Tema scuro" : "Tema chiaro"}
              className="flex h-10 w-10 items-center justify-center rounded-md border border-foreground/15 text-foreground transition hover:border-foreground/40"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>

            <Button
              href="/#contatti"
              size="sm"
              className="hidden md:inline-flex"
            >
              Parliamo del tuo progetto
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Apri navigazione"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-foreground/15 text-foreground transition hover:border-foreground/40 xl:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <SiteMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}

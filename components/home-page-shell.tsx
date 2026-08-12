"use client";

import { MessageCircle } from "lucide-react";
import { AuthorityStripSection } from "@/components/sections/authority-strip-section";
import { CaseStudySection } from "@/components/sections/case-study-section";
import { DifferentiationSection } from "@/components/sections/differentiation-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LocalSection } from "@/components/sections/local-section";
// import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TechSection } from "@/components/sections/tech-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { IntroSplash } from "@/components/intro-splash";
import { ScrollToTopOnLoad } from "@/components/scroll-to-top-on-load";
import { ThemeProvider } from "@/components/theme-provider";
import { site } from "@/lib/home-content";

export function HomePageShell() {
  return (
    <ThemeProvider>
      <ScrollToTopOnLoad />
      <IntroSplash />
      <div className="relative min-h-dvh bg-background text-foreground">
        <SiteHeader />

        <main>
          <HeroSection />
          <AuthorityStripSection />
          <ServicesSection />
          {/* <PortfolioSection /> */}
          <DifferentiationSection />
          <ProcessSection />
          <TechSection />
          <TestimonialsSection />
          <CaseStudySection />
          <LocalSection />
          <FinalCtaSection />
        </main>

        <SiteFooter />

        <a
          href={`https://wa.me/${site.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Scrivici su WhatsApp"
          className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full border-2 border-background bg-[#67C15E] text-white shadow-lg transition hover:scale-105 lg:right-8"
        >
          <MessageCircle className="h-6 w-6 fill-current" />
        </a>
      </div>
    </ThemeProvider>
  );
}

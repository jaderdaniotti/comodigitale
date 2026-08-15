import { AuthorityStripSection } from "@/components/sections/authority-strip-section";
import { DifferentiationSection } from "@/components/sections/differentiation-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LocalSection } from "@/components/sections/local-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ProcessSection } from "@/components/sections/process-section";
import { ServicesSection } from "@/components/sections/services-section";
import { TechSection } from "@/components/sections/tech-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { IntroSplash } from "@/components/intro-splash";
import { ScrollToTopOnLoad } from "@/components/scroll-to-top-on-load";

export function HomePageShell() {
  return (
    <>
      <ScrollToTopOnLoad />
      <IntroSplash />
      <main>
        <HeroSection />
        <AuthorityStripSection />
        <ServicesSection />
        <PortfolioSection />
        <DifferentiationSection />
        <ProcessSection />
        <TechSection />
        <TestimonialsSection />
        <LocalSection />
        <FinalCtaSection />
      </main>
    </>
  );
}

import type { Metadata } from "next";
import { InnerPageShell } from "@/components/inner-page-shell";
import { ContactPageContent } from "@/components/sections/contact-page-content";

export const metadata: Metadata = {
  title: "Contatti — comodigitale",
  description:
    "Hai un'idea? Parliamone. Raccontaci il progetto: siti web, e-commerce, automazioni e digitalizzazione a Como.",
};

export default function ContattiPage() {
  return (
    <InnerPageShell>
      <ContactPageContent />
    </InnerPageShell>
  );
}

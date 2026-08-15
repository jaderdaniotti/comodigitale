import type { Metadata } from "next";
import { InnerPageShell } from "@/components/inner-page-shell";
import { ServicesPageContent } from "@/components/sections/services-page-content";
import { pageSeo } from "@/lib/seo";

const title = "Servizi — comodigitale";
const description =
  "Siti verticali, landing, prenotazioni, preventivi e digitalizzazione per aziende e professionisti a Como. Dal matrimonio al ristorante, dal B&B all’artigiano.";

export const metadata: Metadata = {
  title,
  description,
  ...pageSeo("/servizi", { title, description }),
};

export default function ServiziPage() {
  return (
    <InnerPageShell>
      <ServicesPageContent />
    </InnerPageShell>
  );
}

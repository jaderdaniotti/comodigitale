import type { Metadata } from "next";
import { InnerPageShell } from "@/components/inner-page-shell";
import { ServicesPageContent } from "@/components/sections/services-page-content";

export const metadata: Metadata = {
  title: "Servizi — comodigitale",
  description:
    "Siti verticali, landing, prenotazioni, preventivi e digitalizzazione per aziende e professionisti a Como. Dal matrimonio al ristorante, dal B&B all’artigiano.",
};

export default function ServiziPage() {
  return (
    <InnerPageShell>
      <ServicesPageContent />
    </InnerPageShell>
  );
}

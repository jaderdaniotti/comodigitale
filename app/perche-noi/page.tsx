import type { Metadata } from "next";
import { InnerPageShell } from "@/components/inner-page-shell";
import { WhyUsPageContent } from "@/components/sections/why-us-page-content";

export const metadata: Metadata = {
  title: "Perché noi — comodigitale",
  description:
    "Tecnologia moderna e codice proprietario, quando serve. Scegliamo la soluzione più adatta al progetto: sviluppo su misura o piattaforma.",
};

export default function PercheNoiPage() {
  return (
    <InnerPageShell>
      <WhyUsPageContent />
    </InnerPageShell>
  );
}

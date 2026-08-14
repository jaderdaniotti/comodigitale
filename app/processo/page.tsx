import type { Metadata } from "next";
import { InnerPageShell } from "@/components/inner-page-shell";
import { ProcessPageContent } from "@/components/sections/process-page-content";

export const metadata: Metadata = {
  title: "Processo — comodigitale",
  description:
    "Da un'idea a qualcosa di reale. Discovery, strategy, design, sviluppo, lancio e supporto: un processo chiaro dal primo contatto alla consegna.",
};

export default function ProcessoPage() {
  return (
    <InnerPageShell>
      <ProcessPageContent />
    </InnerPageShell>
  );
}

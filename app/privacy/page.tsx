import type { Metadata } from "next";
import { InnerPageShell } from "@/components/inner-page-shell";
import { LegalPageContent } from "@/components/sections/legal-page-content";
import { privacyPage } from "@/lib/legal-pages";
import { pageSeo } from "@/lib/seo";

const title = "Privacy — comodigitale";
const description =
  "Informativa privacy di comodigitale: come trattiamo i dati personali raccolti tramite sito, form e canali di contatto.";

export const metadata: Metadata = {
  title,
  description,
  ...pageSeo("/privacy", { title, description }),
};

export default function PrivacyPage() {
  return (
    <InnerPageShell>
      <LegalPageContent page={privacyPage} />
    </InnerPageShell>
  );
}

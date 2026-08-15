import type { Metadata } from "next";
import { HomePageShell } from "@/components/home-page-shell";
import { pageSeo } from "@/lib/seo";

const title = "comodigitale — Realizzazione siti web a Como";
const description =
  "Web agency a Como: siti internet, e-commerce, brand, SEO locale, social e contenuti per PMI, professionisti e hospitality.";

export const metadata: Metadata = {
  title,
  description,
  ...pageSeo("/", { title, description }),
};

export default function Home() {
  return <HomePageShell />;
}

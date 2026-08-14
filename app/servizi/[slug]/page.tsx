import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InnerPageShell } from "@/components/inner-page-shell";
import { ServiceDetailContent } from "@/components/sections/service-detail-content";
import { getServicePage, servicePages } from "@/lib/service-pages";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) {
    return { title: "Servizio — comodigitale" };
  }
  return {
    title: `${page.name} — comodigitale`,
    description: page.description,
  };
}

export default async function ServicePageRoute({ params }: ServicePageProps) {
  const { slug } = await params;
  const page = getServicePage(slug);
  if (!page) notFound();

  return (
    <InnerPageShell>
      <ServiceDetailContent page={page} />
    </InnerPageShell>
  );
}

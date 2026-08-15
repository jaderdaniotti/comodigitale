import { ImageResponse } from "next/og";
import { OpenGraphCard } from "@/lib/opengraph-card";
import { getServicePage } from "@/lib/service-pages";

export const socialImageSize = {
  width: 1200,
  height: 630,
};

export const socialImageContentType = "image/png";
export const defaultSocialImageAlt = "Comodigitale — Web agency a Como";

export function defaultSocialImage() {
  return new ImageResponse(
    (
      <OpenGraphCard
        title="comodigitale"
        subtitle="Siti web, e-commerce e soluzioni digitali"
      />
    ),
    { ...socialImageSize },
  );
}

export async function serviceSocialImage(params: Promise<{ slug: string }>) {
  const { slug } = await params;
  const page = getServicePage(slug);
  const title = page?.name ?? "comodigitale";
  const subtitle = page
    ? "Web agency a Como"
    : "Siti web, e-commerce e soluzioni digitali";

  return new ImageResponse(
    <OpenGraphCard title={title} subtitle={subtitle} />,
    { ...socialImageSize },
  );
}

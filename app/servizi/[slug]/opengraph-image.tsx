import {
  serviceSocialImage,
  socialImageContentType,
  socialImageSize,
} from "@/lib/social-image";

export const alt = "Comodigitale — servizio";
export const size = socialImageSize;
export const contentType = socialImageContentType;

export default async function ServiceOpenGraphImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return serviceSocialImage(params);
}

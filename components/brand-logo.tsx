"use client";

import Image from "next/image";
import { themeLogos, useTheme } from "@/components/theme-provider";
import { site } from "@/lib/home-content";
import { cn } from "@/lib/cn";

type BrandLogoProps = {
  className?: string;
  priority?: boolean;
};

export function BrandLogo({ className, priority }: BrandLogoProps) {
  const { logoSrc, theme, mounted } = useTheme();
  const src = mounted ? logoSrc : themeLogos.dark;

  return (
    <Image
      src={src}
      alt={site.name}
      width={72}
      height={72}
      priority={priority}
      unoptimized
      className={cn("h-16 w-16 object-contain md:h-[4.5rem] md:w-[4.5rem]", className)}
      key={mounted ? theme : "ssr"}
    />
  );
}

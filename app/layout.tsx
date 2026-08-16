import type { Metadata, Viewport } from "next";
import { Poppins, Unbounded } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { CookieConsent } from "@/components/cookie-consent";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { WhatsAppFab } from "@/components/whatsapp-fab";
import {
  BRAND_CREAM,
  BRAND_INK,
  OG_LOCALE,
  OG_SITE_NAME,
  SITE_URL,
} from "@/lib/seo";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: OG_SITE_NAME,
  verification: {
    google: "Q4lrwvAMc0dWtKWPBikWM4Nbx6GFQH0RN8jzQrvJ7FA",
  },
  openGraph: {
    type: "website",
    locale: OG_LOCALE,
    siteName: OG_SITE_NAME,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: BRAND_CREAM },
    { media: "(prefers-color-scheme: dark)", color: BRAND_INK },
  ],
};

const themeInitScript = `
(() => {
  try {
    const key = 'comodigitale-theme';
    const stored = localStorage.getItem(key);
    const theme = stored === 'light' ? 'light' : 'dark';
    if (stored === 'accent') localStorage.setItem(key, 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch {}
})();
`;

const scrollTopInitScript = `
(() => {
  try {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
    window.scrollTo(0, 0);
  } catch {}
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="it"
      data-theme="dark"
      className={`${poppins.variable} ${unbounded.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script dangerouslySetInnerHTML={{ __html: scrollTopInitScript }} />
      </head>
      <body className="min-h-full flex flex-col font-sans" suppressHydrationWarning>
        <ThemeProvider>
          <div className="relative min-h-dvh bg-background text-foreground">
            <SiteHeader />
            {children}
            <SiteFooter />
            <CookieConsent />
            <WhatsAppFab />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

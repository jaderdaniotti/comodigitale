import type { Metadata } from "next";
import { Poppins, Unbounded } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const unbounded = Unbounded({
  variable: "--font-unbounded",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "comodigitale — Realizzazione siti web a Como",
  description:
    "Web agency a Como: siti internet, e-commerce, brand, SEO locale, social e contenuti per PMI, professionisti e hospitality.",
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
        {children}
      </body>
    </html>
  );
}

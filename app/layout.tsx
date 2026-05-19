import type { Metadata } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "MELBET Jordan Landing",
  description: "Compliance-gated MELBET Jordan landing package with Arabic and English content.",
};

const documentLocaleBootstrap = `
  (function () {
    var locale = new URLSearchParams(window.location.search).get("lang") === "en" ? "en" : "ar";
    var dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
    document.body.dir = dir;
  })();
`;

const englishBodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-english-body",
  display: "swap",
});

const englishDisplayFont = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-english-display",
  display: "swap",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: documentLocaleBootstrap }} />
      </head>
      <body className={`${englishBodyFont.variable} ${englishDisplayFont.variable}`}>{children}</body>
    </html>
  );
}

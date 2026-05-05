import type { Metadata } from "next";
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: documentLocaleBootstrap }} />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — Custom web, mobile & software development`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "web application development",
    "custom software development",
    "product development",
    "Next.js agency",
    "React agency",
  ],
  authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    url: site.url,
    title: `${site.name} — Custom web, mobile & software development`,
    description: site.description,
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Custom web, mobile & software development`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
    >
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: site.url,
              description: site.description,
              email: site.email,
              sameAs: Object.values(site.social).filter(Boolean),
            }),
          }}
        />
      </body>
    </html>
  );
}

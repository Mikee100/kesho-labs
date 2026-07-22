import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SITE_URL, SITE_NAME, SITE_EMAIL, SITE_GITHUB } from "@/lib/site";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  email: SITE_EMAIL,
  sameAs: [SITE_GITHUB],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  description:
    "Software studio in Nairobi, Kenya building SaaS platforms, point-of-sale systems, and e-commerce websites for businesses.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Kesho Labs — We build the software your business runs on",
    template: "%s · Kesho Labs",
  },
  description:
    "Software studio in Nairobi, Kenya. We build custom SaaS platforms, point-of-sale (POS) systems, and e-commerce websites for retail, restaurants, and service businesses.",
  keywords: [
    "software company Nairobi",
    "custom software development Kenya",
    "POS system Kenya",
    "point of sale software Kenya",
    "e-commerce website Kenya",
    "SaaS development Kenya",
    "software studio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Kesho Labs — We build the software your business runs on",
    description:
      "Cloud platforms, point-of-sale systems, and online stores — designed, built, and shipped end-to-end from Nairobi.",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Kesho Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kesho Labs — We build the software your business runs on",
    description:
      "Cloud platforms, point-of-sale systems, and online stores — designed, built, and shipped end-to-end from Nairobi.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem("theme")==="dark"){document.documentElement.classList.add("dark")}}catch(e){}`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

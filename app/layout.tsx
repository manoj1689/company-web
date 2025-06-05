import type React from "react"
import type { Metadata } from "next"

import "./globals.css"
import Script from "next/script"

import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({
  subsets: ["latin", "latin-ext"], // You can add others like "cyrillic", "greek" if needed
  weight: ["300", "400", "500", "600", "700", "800"], // Choose weights you need
  variable: "--font-open-sans", // Optional if using with Tailwind CSS
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eram Labs - Smart, Innovative, AI Driven",
  description:
    "Smart, innovative, AI-driven solutions to accelerate your digital transformation. Web development, mobile apps, digital marketing, and data analytics services.",
  keywords: "digital transformation, AI solutions, web development, mobile apps, digital marketing, data analytics, AI-driven",
  authors: [{ name: "Eram Labs" }],
  openGraph: {
    title: "Eram Labs - Smart, Innovative, AI Driven",
    description: "Smart, innovative, AI-driven solutions to accelerate your digital transformation.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://www.eramlabs.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eram Labs - AI Driven Digital Transformation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eram Labs - Smart, Innovative, AI Driven",
    description: "Smart, innovative, AI-driven solutions to accelerate your digital transformation.",
    images: ["https://www.eramlabs.com/og-image.jpg"],
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Script id="chatwoot" strategy="lazyOnload">
        {`
          window.chatwootSettings = { hideMessageBubble: true };

          (function(d,t) {
            var BASE_URL="https://app.chatwoot.com";
            var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=BASE_URL+"/packs/js/sdk.js";
            g.defer = true;
            g.async = true;
            s.parentNode.insertBefore(g,s);
            g.onload=function(){
              window.chatwootSDK.run({
                websiteToken: '2nkC9U7GF85EpST166fiu3ku',
                baseUrl: BASE_URL
              })
            }
          })(document,"script");
        `}
      </Script>
      <body className={openSans.className}>{children}</body>
    </html>
  )
}
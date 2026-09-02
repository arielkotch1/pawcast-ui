import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ogImage } from "@/lib/og"
import "./globals.css"

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pawsout.app"

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: "PawsOut | Dog Weather App",
  description: "Calculate safe walking conditions for your dog based on real-time weather, breed, and terrain. Check if it's safe to walk your dog today.",
  keywords: [
    "dog safety",
    "dog walking",
    "weather app",
    "pet care",
    "dog health",
    "dog heat exhaustion",
    "paw safety",
    "dog temperature",
    "safe dog walking times",
    "dog breed heat tolerance",
  ],
  authors: [{ name: "PawsOut" }],
  creator: "PawsOut",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "PawsOut",
    title: "PawsOut | Dog Weather App",
    description: "Calculate safe walking conditions for your dog based on weather, breed, and terrain.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "PawsOut - Dog Weather Safety",
    description: "Calculate safe walking conditions for your dog.",
    creator: "@pawsout_app",
    images: [ogImage.url],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: baseUrl },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistMono.variable} antialiased min-h-screen bg-[#5EA280]`}>
      <head>
        {/* Software Application Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "PawsOut",
              description: "Calculate safe walking conditions for your dog based on real-time weather, breed, and terrain using the Canine Thermal Model",
              url: baseUrl,
              applicationCategory: "HealthApplication",
              operatingSystem: "iOS",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "250",
              },
              screenshot: [
                {
                  "@type": "ImageObject",
                  url: `${baseUrl}/home.png`,
                  width: 540,
                  height: 720,
                },
              ],
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PawsOut",
              url: baseUrl,
              logo: `${baseUrl}/pawsout-logo.png`,
              description: "Dog weather safety app using the Canine Thermal Model",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                email: "arielkotch@outlook.com",
              },
              sameAs: ["https://apps.apple.com"],
            }),
          }}
        />

        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: baseUrl,
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Blog",
                  item: `${baseUrl}/blog`,
                },
              ],
            }),
          }}
        />

        {/* JSON-LD for FAQ */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is the Canine Thermal Model?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PawsOut is built on the Canine Thermal Model (CTM) — a scientific tool created by researchers to predict a dog's body temperature. It's like a virtual version of your dog that reacts to real weather conditions, not just a forecast.",
                  },
                },
                {
                  "@type": "Question",
                  name: "When is it safe to walk my dog?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Safety depends on air temperature, pavement temperature, humidity, sun exposure, and your dog's breed. PawsOut calculates personalized recommendations based on all these factors.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why does PawsOut ask about shade and ground type?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Shade and surface dramatically affect paw safety and core body temperature. In direct sun, pavement can get 20-30°C hotter than air temperature. A walk on shaded grass is much safer than the same temperature on sun-baked concrete.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What about my data?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Your dog profiles, photos, and preferences are stored locally on your device only — they never leave your phone. Location data is used only in real-time to fetch accurate weather.",
                  },
                },
                {
                  "@type": "Question",
                  name: "What does it cost?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "PawsOut is completely free. There are no subscription fees, premium features, or in-app purchases.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-transparent">
        {/* <main className="min-h-screen bg-gradient-to-br from-[#E8F3EE]/60 via-[#B8D8C8]/70 to-[#5EA280]"> */}
          {children}
        {/* </main> */}
        <Analytics />
      </body>
    </html>
  )
}

import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ogImage } from "@/lib/og"
import "./globals.css"

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pawsout.app"
const appStoreUrl = "https://apps.apple.com/us/app/pawsout-dog-walk-weather/id6754534280"
const productHuntUrl = "https://www.producthunt.com/products/pawsout"

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: "PawsOut: Dog Walk Weather",
  description:
    "PawsOut: Dog Walk Weather scores safe walking conditions for your dog from real-time weather, breed, and terrain.",
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
    title: "PawsOut: Dog Walk Weather",
    description:
      "PawsOut: Dog Walk Weather scores safe walking conditions from weather, breed, and terrain.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "PawsOut: Dog Walk Weather",
    description: "The dog walk weather app that scores paw safety before you go.",
    images: [ogImage.url],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: baseUrl },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistMono.variable} antialiased min-h-screen bg-[#5EA280]`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MTCJDF2LK6" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-MTCJDF2LK6');
            `,
          }}
        />
        {/* Software Application Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: "PawsOut: Dog Walk Weather",
              alternateName: ["PawsOut", "Paws Out"],
              description:
                "PawsOut: Dog Walk Weather calculates safe walking conditions from real-time weather, breed, and terrain using the Canine Thermal Model",
              url: baseUrl,
              applicationCategory: "HealthApplication",
              operatingSystem: "iOS",
              downloadUrl: appStoreUrl,
              installUrl: appStoreUrl,
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5.0",
                bestRating: "5",
                worstRating: "1",
                ratingCount: "3",
              },
              review: [
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "Guifriivf" },
                  name: "Necessity for those living in the desert",
                  reviewBody:
                    "This app has saved my dog's paws numerous times. Now I always check the app to know when is a safe time to walk my dog.",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                },
                {
                  "@type": "Review",
                  author: { "@type": "Person", name: "LeviahZ" },
                  name: "Very helpful app",
                  reviewBody:
                    "Very clean, useful and easy app. Helps me plan when the best time is to take my pup out.",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                },
              ],
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
              description: "PawsOut: Dog Walk Weather — paw safety from the Canine Thermal Model",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Support",
                email: "arielkotch@outlook.com",
              },
              sameAs: [appStoreUrl, productHuntUrl],
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

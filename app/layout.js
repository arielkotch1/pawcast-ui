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
              "@type": "MobileApplication",
              name: "PawsOut",
              description: "Calculate safe walking conditions for your dog based on real-time weather, breed, and terrain using the Canine Thermal Model",
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
              sameAs: [appStoreUrl],
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

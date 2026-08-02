import { Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://pawsout.app"

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: "PawsOut | Dog Weather App",
  description: "Calculate safe walking conditions for your dog based on real-time weather, breed, and terrain. Protect your pup with thermal analysis.",
  keywords: ["dog safety", "dog walking", "weather app", "pet care", "dog health"],
  authors: [{ name: "PawsOut" }],
  creator: "PawsOut",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    siteName: "PawsOut",
    title: "PawsOut | Dog Weather App",
    description: "Calculate safe walking conditions for your dog based on weather, breed, and terrain.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "PawsOut" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "PawsOut - Dog Weather Safety",
    description: "Calculate safe walking conditions for your dog.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: baseUrl },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistMono.variable} antialiased min-h-screen bg-[#5EA280]`}>
      <body className="min-h-screen bg-transparent">
        {/* <main className="min-h-screen bg-gradient-to-br from-[#E8F3EE]/60 via-[#B8D8C8]/70 to-[#5EA280]"> */}
          {children}
        {/* </main> */}
        <Analytics />
      </body>
    </html>
  )
}

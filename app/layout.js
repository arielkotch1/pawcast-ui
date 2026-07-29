import { Geist_Mono } from "next/font/google"
import "./globals.css"

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
})

export const metadata = {
  title: "Pawsout",
  description: "Dog Walk Weather",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistMono.variable} antialiased min-h-screen bg-[#5EA280]`}>
      <body className="min-h-screen bg-transparent">
        {/* <main className="min-h-screen bg-gradient-to-br from-[#E8F3EE]/60 via-[#B8D8C8]/70 to-[#5EA280]"> */}
          {children}
        {/* </main> */}
      </body>
    </html>
  )
}

import pawsoutLogo from "@/public/pawsout-logo.png"
import Image from "next/image"
import HomeScreen from "@/public/home.png"
import FloatingNav from "@/components/FloatingNav"
import { Apple, ArrowRight, CloudSun, Dog, Star, ThermometerSun } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent">
      {" "}
      <FloatingNav />
      {/* Main Content */}
      <main className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <p className="text-xs font-semibold text-gray-500 tracking-widest mb-8">
              PAWSOUT · IOS
            </p>

            {/* Headline */}
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Because dogs feels weather <em className="italic">differently.</em>
              {/* Is it safe to walk your <em className="not-italic">dog</em> right now? */}
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-lg">
              PawCast is built on the Canine Thermal Model (CTM) — a tool created by scientists to
              predict a dog's body temperature. Think of it as a virtual version of your dog that
              reacts to the weather, not just a forecast.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-highlight text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                <span className="text-xl leading-none"></span>
                Download on Apple
              </a>
              {/* <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:border-gray-600 hover:bg-gray-50 transition-colors"
              >
                See the engine
                <ArrowRight className="w-5 h-5" />
              </a> */}
            </div>

            {/* Footer Stats */}
            <div className="flex flex-col items-start gap-3 text-sm text-gray-600 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex items-center gap-2">
                <CloudSun className="h-4 w-4" />
                <span className="font-semibold">Real-time weather</span>
              </div>

              <div className="flex items-center gap-2">
                <ThermometerSun className="h-4 w-4" />
                <span className="font-semibold">Pavement heat</span>
              </div>

              <div className="flex items-center gap-2">
                <Dog className="h-4 w-4" />
                <span className="font-semibold">Breed-based insights</span>
              </div>
            </div>
          </div>

          {/* Right Side - Phone Mockup */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-xs">
              {/* iPhone Frame */}
              <div className="bg-black rounded-3xl p-3 shadow-2xl" style={{ aspectRatio: "9/19" }}>
                <Image alt="pawsout home screen" src={HomeScreen} height={1000} width={1000} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

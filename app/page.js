import pawsoutLogo from "@/public/pawsout-logo.png"
import Image from "next/image"
import HomeScreen from "@/public/home.png"
import FloatingNav from "@/components/FloatingNav"
import PerDogTuning from "@/components/PerDogTuning"
import FAQ from "@/components/FAQ"
import { Apple, ArrowRight, CloudSun, Dog, Star, ThermometerSun } from "lucide-react"
import Forcast from "@/components/Forcast"
import { ogImage } from "@/lib/og"

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the Canine Thermal Model?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PawsOut is built on the Canine Thermal Model (CTM) — a scientific tool created by researchers to predict a dog's body temperature. It's like a virtual version of your dog that reacts to real weather conditions, not just a forecast. The model considers your dog's size, coat type, muzzle length, and environmental factors like temperature, sun, and wind to estimate how hot or cold your dog actually feels.",
      },
    },
    {
      "@type": "Question",
      name: "What's a 'Next Walk Window'?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Next Walk Window tells you the safest time today for your dog to go outside. It shows exactly when you have a safe window to walk — like 'Safe until 5 PM' — and updates throughout the day as weather conditions change.",
      },
    },
    {
      "@type": "Question",
      name: "Why does PawsOut ask about shade and ground type?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shade and surface dramatically affect paw safety. In direct sun, pavement and asphalt can get dangerously hot — even hotter than the air temperature. A walk on shaded grass at 28°C is much safer than the same temperature on sun-baked concrete. By telling us the shade level and ground type, we give you a more accurate paw risk estimate.",
      },
    },
    {
      "@type": "Question",
      name: "What does 'Check Pavement' mean?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "When the app shows 'Check Pavement,' it means the ground surface temperature is in the caution or dangerous zone. We recommend using the back of your hand to test the pavement for 7 seconds before letting your dog walk on it. If it's too hot for your hand, it's too hot for your dog's paws.",
      },
    },
    {
      "@type": "Question",
      name: "What about my data?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Your dog profiles, photos, and preferences are stored locally on your device only — they never leave your phone. Location data is used only in real-time to fetch accurate weather for your area. We don't store, log, or share your location history. You can delete all data anytime in Settings → Delete Data.",
      },
    },
    {
      "@type": "Question",
      name: "What does it cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PawsOut is completely free. There are no subscription fees, premium features, or in-app purchases. All features, including personalized walk scoring and next walk windows, are available to all users at no cost.",
      },
    },
  ],
}

export const metadata = {
  title: "PawsOut | Is It Safe to Walk Your Dog?",
  description: "Is it safe to walk your dog? PawsOut calculates real-time thermal safety for your pup based on weather, breed, pavement temperature, and terrain. Use the Canine Thermal Model for personalized dog walking recommendations.",
  keywords: ["is it safe to walk my dog", "dog weather app", "dog heat safety", "when to walk your dog", "dog temperature safety"],
  openGraph: {
    title: "PawsOut | Dog Weather App",
    description: "Calculate safe walking conditions for your dog right now.",
    url: "https://pawsout.app",
    type: "website",
    images: [ogImage],
  },
}

export default function Home() {
  return (
    <div className="min-h-screen bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FloatingNav />
      {/* Main Content */}
      <main className="pt-28 md:pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <p className="text-xs font-semibold text-gray-500 tracking-widest mb-3 md:mb-8">
              PAWSOUT · IOS
            </p>

            {/* Headline */}
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-5 md:mb-6 leading-[4.3rem] md:leading-tight">
              Because dogs feels weather <em className="italic text-gray-700">differently.</em>
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-5 md:mb-6 leading-relaxed max-w-lg">
              Pawsout is built on the Canine Thermal Model (CTM) — a tool created by scientists to predict a dog's body temperature. Think of it as a virtual version of your dog that reacts to the weather, not just a forecast.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-5 md:mb-6 md:mb-12">
              <a
                href="https://apps.apple.com/us/app/pawsout-dog-walk-weather/id6754534280"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-highlight text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
              >
                <span className="hidden md:block text-xl leading-none"></span>
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
              <div
                className="overflow-hidden rounded-[3rem] bg-black p-3 shadow-2xl"
                style={{ aspectRatio: "9/19" }}
              >
                <div className="relative h-full w-full overflow-hidden rounded-[2.25rem]">
                  <Image
                    alt="PawsOut home screen"
                    src={HomeScreen}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <PerDogTuning  />
      <Forcast/>
      <FAQ />
    </div>
  )
}

import Link from "next/link"
import FloatingNav from "@/components/FloatingNav"
import { ogImage } from "@/lib/og"

const pageUrl = "https://pawsout.app/guides"

const guides = [
  {
    href: "/is-it-safe-to-walk-my-dog-in-hot-weather",
    eyebrow: "HOT WEATHER",
    title: "Is it safe to walk my dog in hot weather?",
    blurb: "Air temperature is not enough. Pavement, shade, and breed change the answer.",
  },
  {
    href: "/is-it-too-cold-to-walk-my-dog",
    eyebrow: "COLD WEATHER",
    title: "Is it too cold to walk my dog?",
    blurb: "Wind, wet fur, ice, and salt can make a winter walk unsafe.",
  },
  {
    href: "/is-the-pavement-too-hot-for-my-dog",
    eyebrow: "PAVEMENT",
    title: "Is the pavement too hot for my dog?",
    blurb: "Asphalt can be 20–30°C hotter than the air. Use the 7-second test.",
  },
  {
    href: "/is-humidity-too-high-to-walk-my-dog",
    eyebrow: "HUMIDITY",
    title: "Is humidity too high to walk my dog?",
    blurb: "Dogs cool by panting. Wet air makes a mild day harder than it looks.",
  },
  {
    href: "/walking-brachycephalic-dogs-in-heat",
    eyebrow: "BREED",
    title: "Walking brachycephalic dogs in heat",
    blurb: "Frenchies, Pugs, and other flat-faced dogs overheat faster.",
  },
  {
    href: "/is-pavement-too-hot-for-dogs-at-80-degrees",
    eyebrow: "80°F",
    title: "Is pavement too hot for dogs at 80°F?",
    blurb: "80°F air is not 80°F asphalt. Test the ground, not just the forecast.",
  },
  {
    href: "/is-it-safe-to-walk-a-puppy-in-hot-weather",
    eyebrow: "PUPPIES",
    title: "Is it safe to walk a puppy in hot weather?",
    blurb: "Young dogs have less heat reserve and thinner pads.",
  },
  {
    href: "/is-it-safe-to-walk-a-senior-dog-in-hot-weather",
    eyebrow: "SENIORS",
    title: "Is it safe to walk a senior dog in hot weather?",
    blurb: "Older dogs need a tighter walk window in the heat.",
  },
]

export const metadata = {
  title: "Dog Walk Safety Guides | PawsOut",
  description:
    "Guides for dog walking in hot weather, cold weather, humidity, hot pavement, puppies, seniors, and flat-faced breeds.",
  robots: { index: true, follow: true },
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Dog Walk Safety Guides | PawsOut",
    description: "Hot weather, cold, humidity, pavement, puppies, and seniors — when is a walk actually safe?",
    url: pageUrl,
    siteName: "PawsOut",
    type: "website",
    images: [ogImage],
  },
}

export default function GuidesIndex() {
  return (
    <div className="min-h-screen bg-transparent">
      <FloatingNav />
      <main className="pt-28 md:pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        <p className="text-xs font-semibold text-gray-500 tracking-widest mb-3 md:mb-8">GUIDES</p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5 md:mb-6 leading-[3.4rem] md:leading-tight">
          When is a walk <em className="italic text-gray-700">actually safe?</em>
        </h1>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-2xl">
          Short guides for the searches dog owners actually type. Then use{" "}
          <Link href="/" className="font-semibold text-highlight underline underline-offset-4">
            PawsOut
          </Link>{" "}
          for a walk window tuned to your dog.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="bg-white/60 backdrop-blur rounded-3xl p-8 border border-gray-200/30 hover:bg-white/80 transition-colors"
            >
              <p className="text-xs font-semibold text-gray-500 tracking-widest mb-3">
                {guide.eyebrow}
              </p>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">{guide.title}</h2>
              <p className="text-gray-700 leading-relaxed">{guide.blurb}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}

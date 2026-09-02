import Link from "next/link"
import FloatingNav from "@/components/FloatingNav"
import GuideLinks from "@/components/GuideLinks"
import { ogImage } from "@/lib/og"

const appStoreUrl = "https://apps.apple.com/us/app/pawsout-dog-walk-weather/id6754534280"
const writeReviewUrl = `${appStoreUrl}?action=write-review`
const pageUrl = "https://pawsout.app/is-humidity-too-high-to-walk-my-dog"

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is humidity too high to walk my dog?",
  description:
    "Dogs cool by panting. High humidity makes that less effective. Learn when humid weather makes a walk unsafe even if the air temperature looks fine.",
  url: pageUrl,
  mainEntityOfPage: pageUrl,
  datePublished: "2026-09-02",
  dateModified: "2026-09-02",
  author: { "@type": "Organization", name: "PawsOut", url: "https://pawsout.app" },
  publisher: { "@type": "Organization", name: "PawsOut", url: "https://pawsout.app" },
  image: ogImage.url,
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is humidity too high to walk my dog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "High humidity makes panting less effective, so a moderate temperature can still be unsafe. Watch for heavy panting, slowing down, and a dog that wants to stop. Shorter walks, more shade, and water matter more on humid days.",
      },
    },
    {
      "@type": "Question",
      name: "Why is humidity dangerous for dogs on walks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dogs shed heat mainly by panting. When the air is already full of moisture, evaporation from the tongue and airways slows down, so body temperature rises faster than the forecast suggests.",
      },
    },
  ],
}

export const metadata = {
  title: "Is Humidity Too High to Walk My Dog? | PawsOut",
  description:
    "Is humidity too high to walk your dog? Dogs cool by panting, so humid air can make a mild day unsafe. Learn the signs and how PawsOut factors humidity into a walk window.",
  robots: { index: true, follow: true },
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Is Humidity Too High to Walk My Dog?",
    description: "A mild temperature can still be unsafe when the air is wet. Learn why humidity changes dog walks.",
    url: pageUrl,
    siteName: "PawsOut",
    type: "article",
    images: [ogImage],
  },
}

export default function HumidityGuide() {
  return (
    <div className="min-h-screen bg-transparent">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <FloatingNav />
      <article className="pt-28 md:pt-32 pb-20 px-6 md:px-12 max-w-3xl mx-auto">
        <p className="text-xs font-semibold text-gray-500 tracking-widest mb-3 md:mb-8">GUIDE · HUMIDITY</p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5 md:mb-6 leading-[3.4rem] md:leading-tight">
          Is humidity too high to walk <em className="italic text-gray-700">my dog?</em>
        </h1>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          It can be — even when the temperature looks mild. Dogs cool mainly by panting. When the air
          is already wet, that cooling slows down, so body temperature climbs faster than a dry day
          at the same number on the forecast.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why humidity hits dogs harder</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Humans sweat across the skin. Dogs do not. They dump heat through the mouth and a little
          through the paw pads. Humid air has less room for that moisture to evaporate, so a 26°C
          walk at 80% humidity can feel closer to a hotter, drier day.
        </p>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Stack humidity on{" "}
          <Link href="/is-it-safe-to-walk-my-dog-in-hot-weather" className="font-semibold text-highlight underline underline-offset-4">
            hot weather
          </Link>{" "}
          or{" "}
          <Link href="/is-the-pavement-too-hot-for-my-dog" className="font-semibold text-highlight underline underline-offset-4">
            hot pavement
          </Link>{" "}
          and the walk window shrinks further. Flat-faced breeds have even less reserve — see{" "}
          <Link href="/walking-brachycephalic-dogs-in-heat" className="font-semibold text-highlight underline underline-offset-4">
            walking brachycephalic dogs in heat
          </Link>
          .
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What to do on a humid day</h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Walk earlier or later, keep the loop short, stay in shade, and carry water. Stop if panting
          gets heavy, the tongue looks wide and floppy, or your dog slows down or lies down. This
          guide is educational. If you are worried, contact a veterinarian.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Let PawsOut time the window</h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          <Link href="/" className="font-semibold text-highlight underline underline-offset-4">PawsOut</Link>{" "}
          uses the Canine Thermal Model with real weather, not air temperature alone. Humidity is
          part of how hard a walk actually is for your dog.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-highlight text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">Download PawsOut</a>
          <a href={writeReviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-gray-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:border-gray-600 hover:bg-white/40 transition-colors">Rate PawsOut on the App Store</a>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">PawsOut is an educational weather tool, not a medical diagnosis. Always use your own judgment for your dog&apos;s safety.</p>
        <GuideLinks current="/is-humidity-too-high-to-walk-my-dog" />
      </article>
    </div>
  )
}

import Link from "next/link"
import FloatingNav from "@/components/FloatingNav"
import { ogImage } from "@/lib/og"

const appStoreUrl = "https://apps.apple.com/us/app/pawsout-dog-walk-weather/id6754534280"
const writeReviewUrl = `${appStoreUrl}?action=write-review`
const pageUrl = "https://pawsout.app/is-it-safe-to-walk-my-dog-in-hot-weather"

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is it safe to walk my dog in hot weather?",
  description:
    "Air temperature alone does not tell you if a walk is safe. Learn how pavement heat, shade, breed, and the 7-second hand test affect dog walking in hot weather.",
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
      name: "Is it safe to walk my dog in hot weather?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on more than the air temperature. Pavement can be much hotter than the air, shade and ground type change paw risk, and breeds handle heat differently. Check the surface with the 7-second hand test and watch your dog for signs of overheating.",
      },
    },
    {
      "@type": "Question",
      name: "How hot is too hot to walk a dog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no single number for every dog. Asphalt in direct sun can be 20–30°C hotter than the air. A short-coated dog on shaded grass may be fine when a thick-coated or flat-faced dog on sidewalk is not. If you cannot hold the back of your hand on the ground for 7 seconds, it is too hot for paws.",
      },
    },
    {
      "@type": "Question",
      name: "What is the 7-second pavement test?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Place the back of your hand on the pavement for 7 seconds. If it is too hot for your hand, it is too hot for your dog's paws. Recheck in the sun and in shade — they can differ a lot.",
      },
    },
  ],
}

export const metadata = {
  title: "Is It Safe to Walk My Dog in Hot Weather? | PawsOut",
  description:
    "Is it safe to walk your dog in hot weather? Pavement, shade, breed, and humidity matter more than the forecast. Use the 7-second hand test and PawsOut for a personalized walk window.",
  robots: { index: true, follow: true },
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Is It Safe to Walk My Dog in Hot Weather?",
    description:
      "Air temperature is not enough. Learn how pavement heat, shade, and breed change whether a walk is safe.",
    url: pageUrl,
    siteName: "PawsOut",
    type: "article",
    images: [ogImage],
  },
}

export default function HotWeatherGuide() {
  return (
    <div className="min-h-screen bg-transparent">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <FloatingNav />

      <article className="pt-28 md:pt-32 pb-20 px-6 md:px-12 max-w-3xl mx-auto">
        <p className="text-xs font-semibold text-gray-500 tracking-widest mb-3 md:mb-8">
          GUIDE · HOT WEATHER
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5 md:mb-6 leading-[3.4rem] md:leading-tight">
          Is it safe to walk my dog in <em className="italic text-gray-700">hot weather?</em>
        </h1>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Usually not based on the forecast alone. The air can feel fine while the sidewalk is hot
          enough to burn paws. Safety depends on pavement temperature, sun, shade, ground type, and
          your dog — not a single number on a weather app.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How hot is too hot to walk a dog?
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          There is no universal cutoff. A 28°C walk on shaded grass is a different walk than 28°C on
          sun-baked asphalt. In direct sun, pavement and asphalt can run 20–30°C hotter than the air.
          Thick coats, short muzzles, puppies, seniors, and overweight dogs overheat faster than a
          young, lean, short-coated dog.
        </p>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          If you need a rule of thumb: if the ground is too hot for the back of your hand, skip the
          walk or move to shade and grass.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Use the 7-second pavement test
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Place the back of your hand on the surface your dog will walk on. Hold it there for 7
          seconds. If you have to pull away, it is too hot for paws. Test the sunny stretch and the
          shaded stretch — they often disagree.
        </p>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          PawsOut flags this as &quot;Check Pavement&quot; when surface heat is in the caution or
          dangerous range, so you know to test before you go.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Shade and ground type change the answer
        </h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Grass stays cooler than concrete. Shade cuts the solar load on both the ground and your
          dog. A short loop on a tree-lined park path can be safe when the same hour on an open
          parking-lot sidewalk is not. That is why PawsOut asks about shade and surface before it
          scores a walk.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Watch for overheating
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Stop the walk and get to shade and water if you see heavy panting, slowing down, glazed
          eyes, drooling, bright red gums, or a dog that wants to lie down and not get up. Heat
          illness can escalate quickly. This guide is educational — if you are worried, contact a
          veterinarian.
        </p>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Early morning and later evening are usually safer than midday. Carry water. Keep walks
          shorter when it is hot, even if your dog still wants to go.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get a walk window for your dog
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          <Link href="/" className="font-semibold text-highlight underline underline-offset-4">
            PawsOut
          </Link>{" "}
          is built on the Canine Thermal Model — a scientific tool for estimating how a dog&apos;s
          body temperature responds to real weather, not just the air temperature. It combines
          forecast, pavement risk, breed, and terrain into a next walk window.
        </p>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          The app is free on iPhone. If it already helps you plan walks, a short App Store review
          makes that rating more useful for the next dog owner.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <a
            href={appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-highlight text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Download PawsOut
          </a>
          <a
            href={writeReviewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border-2 border-gray-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:border-gray-600 hover:bg-white/40 transition-colors"
          >
            Rate PawsOut on the App Store
          </a>
        </div>

        <p className="text-sm text-gray-600 leading-relaxed">
          PawsOut is an educational weather tool, not a medical diagnosis. Always use your own
          judgment for your dog&apos;s safety.
        </p>
      </article>
    </div>
  )
}

import Link from "next/link"
import FloatingNav from "@/components/FloatingNav"
import GuideLinks from "@/components/GuideLinks"
import { ogImage } from "@/lib/og"

const appStoreUrl = "https://apps.apple.com/us/app/pawsout-dog-walk-weather/id6754534280"
const writeReviewUrl = `${appStoreUrl}?action=write-review`
const pageUrl = "https://pawsout.app/is-pavement-too-hot-for-dogs-at-80-degrees"

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is pavement too hot for dogs at 80°F?",
  description:
    "80°F air does not mean 80°F pavement. In sun, asphalt can be much hotter. Learn whether 80 degrees is too hot to walk a dog and how to test the ground.",
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
      name: "Is pavement too hot for dogs at 80°F?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can be. 80°F is about 27°C in the air. In direct sun, dark asphalt can run 20–30°C hotter than that. Always use the 7-second hand test on the actual sidewalk, not the weather app number.",
      },
    },
    {
      "@type": "Question",
      name: "Is 80 degrees too hot to walk a dog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not automatically — shade and grass at 80°F may be fine for some dogs, while a sunny parking lot at the same air temperature can burn paws. Breed, humidity, and surface decide it.",
      },
    },
  ],
}

export const metadata = {
  title: "Is Pavement Too Hot for Dogs at 80°F? | PawsOut",
  description:
    "Is 80°F too hot to walk a dog? Air at 80 degrees is not the same as asphalt in the sun. Use the 7-second test and PawsOut before you go.",
  robots: { index: true, follow: true },
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Is Pavement Too Hot for Dogs at 80°F?",
    description: "80°F air can still mean burning sidewalks. Learn what 80 degrees actually means for paws.",
    url: pageUrl,
    siteName: "PawsOut",
    type: "article",
    images: [ogImage],
  },
}

export default function EightyDegreesGuide() {
  return (
    <div className="min-h-screen bg-transparent">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <FloatingNav />
      <article className="pt-28 md:pt-32 pb-20 px-6 md:px-12 max-w-3xl mx-auto">
        <p className="text-xs font-semibold text-gray-500 tracking-widest mb-3 md:mb-8">GUIDE · 80°F</p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5 md:mb-6 leading-[3.4rem] md:leading-tight">
          Is pavement too hot for dogs at <em className="italic text-gray-700">80°F?</em>
        </h1>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          It can be. 80°F is about 27°C in the air. That number is what the forecast shows. Your
          dog walks on the ground, and in direct sun that ground is often much hotter — especially
          dark asphalt.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">80°F air is not 80°F pavement</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          On a clear afternoon, asphalt can sit 20–30°C above the air. An 80°F day can mean
          sidewalks hot enough to burn pads even if you feel fine in shoes. Shaded grass at the
          same air temperature is a different walk. That is the whole point of the{" "}
          <Link href="/is-the-pavement-too-hot-for-my-dog" className="font-semibold text-highlight underline underline-offset-4">
            7-second pavement test
          </Link>
          : test the surface you will actually use.
        </p>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Morning at 80°F with high sun is riskier than evening at 80°F after the ground has started
          to dump heat — but only if you retest. Pavement lags the air.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">When 80°F is still a no</h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Skip or shorten the walk if the hand test fails, the lot is blacktop in full sun, or your
          dog is a{" "}
          <Link href="/walking-brachycephalic-dogs-in-heat" className="font-semibold text-highlight underline underline-offset-4">
            flat-faced breed
          </Link>
          , a{" "}
          <Link href="/is-it-safe-to-walk-a-puppy-in-hot-weather" className="font-semibold text-highlight underline underline-offset-4">
            puppy
          </Link>
          , or a{" "}
          <Link href="/is-it-safe-to-walk-a-senior-dog-in-hot-weather" className="font-semibold text-highlight underline underline-offset-4">
            senior
          </Link>
          .{" "}
          <Link href="/is-humidity-too-high-to-walk-my-dog" className="font-semibold text-highlight underline underline-offset-4">
            Humidity
          </Link>{" "}
          on an 80°F day makes panting less effective too. This guide is educational, not a diagnosis.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Check the hour, not just 80°</h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          <Link href="/" className="font-semibold text-highlight underline underline-offset-4">PawsOut</Link>{" "}
          scores the walk from weather, surface, and breed so you are not treating 80°F as a yes/no
          switch. If the app says Check Pavement, do the hand test before the leash goes on.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-highlight text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">Download PawsOut</a>
          <a href={writeReviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-gray-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:border-gray-600 hover:bg-white/40 transition-colors">Rate PawsOut on the App Store</a>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">PawsOut is an educational weather tool, not a medical diagnosis. Always use your own judgment for your dog&apos;s safety.</p>
        <GuideLinks current="/is-pavement-too-hot-for-dogs-at-80-degrees" />
      </article>
    </div>
  )
}

import Link from "next/link"
import FloatingNav from "@/components/FloatingNav"
import GuideLinks from "@/components/GuideLinks"
import { ogImage } from "@/lib/og"

const appStoreUrl = "https://apps.apple.com/us/app/pawsout-dog-walk-weather/id6754534280"
const writeReviewUrl = `${appStoreUrl}?action=write-review`
const pageUrl = "https://pawsout.app/is-the-pavement-too-hot-for-my-dog"

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is the pavement too hot for my dog?",
  description:
    "Asphalt can be 20–30°C hotter than the air. Learn the 7-second hand test, which surfaces burn paws, and when to skip the sidewalk.",
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
      name: "Is the pavement too hot for my dog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use the 7-second hand test. Place the back of your hand on the surface for 7 seconds. If you have to pull away, it is too hot for paws. Asphalt in sun is the highest risk; grass and shade stay cooler.",
      },
    },
    {
      "@type": "Question",
      name: "How hot does pavement get for dogs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In direct sun, asphalt and dark concrete can run 20–30°C hotter than the air. A 28°C afternoon can mean sidewalks hot enough to burn pads even if you feel comfortable standing on them in shoes.",
      },
    },
    {
      "@type": "Question",
      name: "What surfaces are safest for dog paws in heat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shaded grass is usually safest. Light-colored concrete in shade is next. Dark asphalt, metal grates, and open parking lots heat fastest. Test each surface you will actually walk on.",
      },
    },
  ],
}

export const metadata = {
  title: "Is the Pavement Too Hot for My Dog? | PawsOut",
  description:
    "Is the pavement too hot for your dog? Asphalt can be 20–30°C hotter than the air. Use the 7-second hand test and PawsOut's Check Pavement warning before you walk.",
  robots: { index: true, follow: true },
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Is the Pavement Too Hot for My Dog?",
    description:
      "The air can feel fine while the sidewalk burns paws. Learn the 7-second test and which surfaces stay safer.",
    url: pageUrl,
    siteName: "PawsOut",
    type: "article",
    images: [ogImage],
  },
}

export default function PavementGuide() {
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
          GUIDE · PAVEMENT
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5 md:mb-6 leading-[3.4rem] md:leading-tight">
          Is the pavement too hot for <em className="italic text-gray-700">my dog?</em>
        </h1>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Often, yes — even when you are comfortable in shoes. Dark asphalt in sun can sit 20–30°C
          above the air temperature. Your dog&apos;s pads are on that surface the whole walk. The
          forecast will not tell you that. The ground will.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          The 7-second hand test
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Place the back of your hand on the pavement your dog will walk on. Hold it there for 7
          seconds. If you pull away, it is too hot for paws. Test the sunny stretch and the shaded
          stretch. They often disagree on the same block.
        </p>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Recheck if you change surfaces — parking lot to sidewalk to playground rubber. Each one
          heats at a different rate.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Which surfaces burn first
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Dark asphalt and open parking lots heat fastest. Metal grates and dark playground
          surfaces can be worse. Light concrete in shade is cooler. Grass stays safest in{" "}
          <Link
            href="/is-it-safe-to-walk-my-dog-in-hot-weather"
            className="font-semibold text-highlight underline underline-offset-4"
          >
            hot weather
          </Link>
          . Sand can still scorch in midday sun.
        </p>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          That is why PawsOut asks about shade and ground type, then shows &quot;Check
          Pavement&quot; when surface heat is in the caution or dangerous range.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          What burned paws look like
        </h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Limping, licking pads, refusing to walk, or darker/redder pads after a walk are warning
          signs. Get off the hot surface, onto grass or into the car, and cool the paws with room-
          temperature water — not ice. This guide is educational. If pads look blistered or your
          dog will not bear weight, contact a veterinarian.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Walk when the ground has cooled
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Early morning and later evening are usually safer than midday, but only if you retest.
          Pavement can stay hot after the air has dropped. In winter the opposite problem shows
          up — ice and salt — which we cover in{" "}
          <Link
            href="/is-it-too-cold-to-walk-my-dog"
            className="font-semibold text-highlight underline underline-offset-4"
          >
            is it too cold to walk my dog
          </Link>
          .
        </p>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          <Link href="/" className="font-semibold text-highlight underline underline-offset-4">
            PawsOut
          </Link>{" "}
          is free on iPhone. It times a walk window from weather, breed, and pavement risk so you
          are not guessing from the air temperature alone.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
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

        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          PawsOut is an educational weather tool, not a medical diagnosis. Always use your own
          judgment for your dog&apos;s safety.
        </p>

        <GuideLinks current="/is-the-pavement-too-hot-for-my-dog" />
      </article>
    </div>
  )
}

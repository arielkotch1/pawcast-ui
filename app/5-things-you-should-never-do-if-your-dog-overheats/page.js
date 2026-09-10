import Link from "next/link"
import FloatingNav from "@/components/FloatingNav"
import GuideLinks from "@/components/GuideLinks"
import GuideSection from "@/components/guide/GuideSection"
import { EmergencyProtocolCorrections } from "@/components/guide/HotWeatherVisuals"
import { ogImage } from "@/lib/og"
import PhoneMockup from "@/components/guide/PhoneMockup"
import homeScreen from "@/public/home.png"

const appStoreUrl = "https://apps.apple.com/us/app/pawsout-dog-walk-weather/id6754534280"
const writeReviewUrl = `${appStoreUrl}?action=write-review`
const pageUrl = "https://pawsout.app/5-things-you-should-never-do-if-your-dog-overheats"

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Dog Overheating? 5 Mistakes Most Owners Make",
  description: "Five common mistakes to avoid if your dog overheats, plus the safest next steps.",
  url: pageUrl,
  mainEntityOfPage: pageUrl,
  datePublished: "2026-09-10",
  dateModified: "2026-09-10",
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
      name: "What mistakes do owners make when a dog overheats?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Common mistakes include using ice or ice-cold water, wrapping a dog in wet towels, continuing the walk because they seem better, forcing water into their mouth, and waiting at home instead of contacting an emergency veterinarian.",
      },
    },
    {
      "@type": "Question",
      name: "Should I use ice to cool an overheated dog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Use cool water and moving air instead of ice baths or ice packs. Ice can constrict blood vessels and make it harder for heat to escape.",
      },
    },
    {
      "@type": "Question",
      name: "Should I wait to see if my dog recovers from overheating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Heatstroke can cause serious internal injury and can worsen or return even if your dog appears better. Contact an emergency veterinarian immediately.",
      },
    },
  ],
}

export const metadata = {
  title: "Dog Overheating? 5 Mistakes Most Owners Make | PawsOut",
  description:
    "Learn five common mistakes to avoid when your dog overheats, from ice baths and wet towel wraps to forcing water or delaying emergency vet care.",
  robots: { index: true, follow: true },
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Dog Overheating? 5 Mistakes Most Owners Make",
    description:
      "Avoid these five common mistakes when a dog overheats — and know what to do next.",
    url: pageUrl,
    siteName: "PawsOut",
    type: "article",
    images: [ogImage],
  },
}

export default function DogOverheatingMistakesGuide() {
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

      <article className="pt-28 md:pt-32 pb-20 px-6 md:px-12 max-w-6xl mx-auto flex flex-col gap-10">
        <GuideSection
          hero
          eyebrow="EMERGENCY GUIDE"
          title="Dog Overheating? 5 Mistakes Most Owners Make"
        >
          <p className="text-lg text-gray-700 mb-6 leading-relaxed max-w-3xl">
            Heat illness can become life-threatening quickly. These five pieces of well-meaning
            advice can trap heat, cause another injury, or delay the emergency care your dog needs.
          </p>
        </GuideSection>

        <GuideSection eyebrow="AVOID THESE MISTAKES" title="The five mistakes to avoid">
          <EmergencyProtocolCorrections />
        </GuideSection>
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <GuideSection eyebrow="YOUR DOG" title="Plan safer walks before signs appear">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              <Link href="/" className="font-semibold text-highlight underline underline-offset-4">
                PawsOut
              </Link>{" "}
              helps you pick a safer walk window before overheating becomes a risk — combining
              forecast, pavement heat, breed, and terrain into a per-dog recommendation.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The app is free on iPhone. If it already helps you plan walks, a short App Store
              review makes that rating more useful for the next dog owner.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
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
          </GuideSection>

          <PhoneMockup
            src={homeScreen}
            alt="PawsOut next walk window on iPhone"
            className="w-full max-w-[260px] mx-auto lg:justify-self-end"
          />
        </section>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">
          PawsOut is an educational weather tool, not a medical diagnosis. Always use your own
          judgment for your dog&apos;s safety.
        </p>

        <GuideLinks current="/5-things-you-should-never-do-if-your-dog-overheats" />
      </article>
    </div>
  )
}

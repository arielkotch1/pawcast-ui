import Link from "next/link"
import FloatingNav from "@/components/FloatingNav"
import GuideLinks from "@/components/GuideLinks"
import GuideSection from "@/components/guide/GuideSection"
import PhoneMockup from "@/components/guide/PhoneMockup"
import {
  EmergencyProtocolCorrections,
  OverheatActions,
  OverheatingSigns,
} from "@/components/guide/HotWeatherVisuals"
import homeScreen from "@/public/home.png"

const appStoreUrl = "https://apps.apple.com/us/app/pawsout-dog-walk-weather/id6754534280"
const writeReviewUrl = `${appStoreUrl}?action=write-review`
const pageUrl = "https://pawsout.app/dog-heat-exhaustion-emergency-preparedness"

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Emergency preparedness for dog heat exhaustion",
  description:
    "Warning signs, risk factors, and emergency steps when your dog overheats — including what not to do during cooling.",
  url: pageUrl,
  mainEntityOfPage: pageUrl,
  datePublished: "2026-09-08",
  dateModified: "2026-09-08",
  author: { "@type": "Organization", name: "PawsOut", url: "https://pawsout.app" },
  publisher: { "@type": "Organization", name: "PawsOut", url: "https://pawsout.app" },
  image: `${pageUrl}/opengraph-image`,
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the early warning signs that a dog is overheating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early signs include unusually heavy panting that does not settle, thick or excessive drooling, bright or dark red gums and tongue, lagging behind or refusing to walk, seeking shade, and restlessness. Stop exercise and cool your dog down immediately.",
      },
    },
    {
      "@type": "Question",
      name: "What are the emergency signs of heatstroke in dogs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Emergency signs include stumbling or loss of balance, vomiting or diarrhea, confusion or unresponsiveness, pale or bluish gums, muscle tremors or seizures, and collapse. These indicate life-threatening heatstroke — seek immediate emergency vet care.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if my dog is overheating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Stop immediately and move your dog to shade or air conditioning. Cool them with cool (not ice-cold) water on the chest, neck, abdomen, and paws, increase airflow with a fan or AC, offer small amounts of water if alert, and transport to an emergency vet right away — even if they seem to be recovering.",
      },
    },
  ],
}

export const metadata = {
  title: "Emergency Preparedness for Dog Heat Exhaustion | PawsOut",
  description:
    "Warning signs, risk factors, hidden heat traps, and emergency cooling steps when your dog overheats.",
  robots: { index: true, follow: true },
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Emergency Preparedness for Dog Heat Exhaustion",
    description:
      "Early and emergency signs of overheating in dogs — what to watch for during hot-weather walks.",
    url: pageUrl,
    siteName: "PawsOut",
    type: "article",
    images: [ogImage],
  },
}

export default function HeatExhaustionEmergencyGuide() {
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
          eyebrow="EMERGENCY PREPAREDNESS"
          title="Warning signs your dog is overheating"
        >
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Heat illness in dogs escalates to life-threatening heatstroke within minutes because
            dogs rely primarily on panting which is an inefficient cooling mechanism. Recognizing
            the early warning signs and taking immediate action can help save your dog&apos;s life.
          </p>
        </GuideSection>

        <GuideSection eyebrow="PREVENTION" title="Recognizing the signs">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Identifying heat illness before a dog collapses drastically improves their survival
            rate. Symptoms progress rapidly from mild distress to severe physiological shock.
          </p>
          <OverheatingSigns />
        </GuideSection>

        <GuideSection eyebrow="EMERGENCY" title="What to do if your dog overheats">
          <OverheatActions />
        </GuideSection>

        <GuideSection eyebrow="CRITICAL" title="Emergency protocol corrections">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Well-meaning cooling mistakes can make heatstroke worse. Keep these corrections in mind
            while you act.
          </p>
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

        <GuideLinks current="/dog-heat-exhaustion-emergency-preparedness" />
      </article>
    </div>
  )
}

import Link from "next/link"
import FloatingNav from "@/components/FloatingNav"
import GuideLinks from "@/components/GuideLinks"
import { ogImage } from "@/lib/og"

const appStoreUrl = "https://apps.apple.com/us/app/pawsout-dog-walk-weather/id6754534280"
const writeReviewUrl = `${appStoreUrl}?action=write-review`
const pageUrl = "https://pawsout.app/walking-brachycephalic-dogs-in-heat"

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Walking brachycephalic dogs in heat",
  description:
    "French Bulldogs, Pugs, Boston Terriers, and other flat-faced dogs overheat faster. Learn why heat walks are riskier and how to time them.",
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
      name: "Can I walk a French Bulldog or Pug in hot weather?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only with extra caution. Flat-faced dogs cannot pant as efficiently, so they overheat sooner than longer-muzzled breeds on the same block. Prefer early morning, shade, grass, and short loops.",
      },
    },
    {
      "@type": "Question",
      name: "Why do brachycephalic dogs overheat faster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A shorter muzzle means a smaller airway for cooling. Heat, humidity, and exercise stack quickly. Many also carry extra weight in the chest, which makes panting harder still.",
      },
    },
  ],
}

export const metadata = {
  title: "Walking Brachycephalic Dogs in Heat | PawsOut",
  description:
    "Is it safe to walk a French Bulldog, Pug, or Boston Terrier in the heat? Flat-faced dogs overheat faster. Learn shorter walk rules and how PawsOut adjusts for breed.",
  robots: { index: true, follow: true },
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Walking Brachycephalic Dogs in Heat",
    description: "Frenchies, Pugs, and other flat-faced dogs need a tighter walk window in hot weather.",
    url: pageUrl,
    siteName: "PawsOut",
    type: "article",
    images: [ogImage],
  },
}

export default function BrachyGuide() {
  return (
    <div className="min-h-screen bg-transparent">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <FloatingNav />
      <article className="pt-28 md:pt-32 pb-20 px-6 md:px-12 max-w-3xl mx-auto">
        <p className="text-xs font-semibold text-gray-500 tracking-widest mb-3 md:mb-8">GUIDE · BREED</p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5 md:mb-6 leading-[3.4rem] md:leading-tight">
          Walking brachycephalic dogs in <em className="italic text-gray-700">heat</em>
        </h1>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          French Bulldogs, Pugs, Boston Terriers, Boxers, and other flat-faced dogs overheat faster
          than a Lab on the same sidewalk. Their shorter muzzle leaves less airway for panting, which
          is how dogs dump heat. The same 28°C walk that is merely warm for a longer-nosed dog can
          be dangerous for them.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What &quot;brachycephalic&quot; changes</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Cooling depends on moving air across a wet surface in the mouth and nose. A compressed
          face means less surface and more resistance. Add{" "}
          <Link href="/is-humidity-too-high-to-walk-my-dog" className="font-semibold text-highlight underline underline-offset-4">
            humidity
          </Link>
          , extra chest weight, or a tight harness and the reserve disappears sooner.
        </p>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          That is why a breed-aware score matters.{" "}
          <Link href="/" className="font-semibold text-highlight underline underline-offset-4">PawsOut</Link>{" "}
          is built on the Canine Thermal Model and treats muzzle type as part of the walk, not a
          footnote.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Safer heat walks for flat-faced dogs</h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Go out in the coolest hour, stay on shaded grass, skip midday asphalt, and keep the loop
          short. Stop at the first sign of noisy breathing, heavy panting, or slowing down. Do not
          push through &quot;they still want to play.&quot; Read the{" "}
          <Link href="/is-it-safe-to-walk-my-dog-in-hot-weather" className="font-semibold text-highlight underline underline-offset-4">
            hot-weather guide
          </Link>{" "}
          and{" "}
          <Link href="/is-the-pavement-too-hot-for-my-dog" className="font-semibold text-highlight underline underline-offset-4">
            pavement test
          </Link>{" "}
          before you go. This is educational, not a vet visit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-highlight text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">Download PawsOut</a>
          <a href={writeReviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-gray-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:border-gray-600 hover:bg-white/40 transition-colors">Rate PawsOut on the App Store</a>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">PawsOut is an educational weather tool, not a medical diagnosis. Always use your own judgment for your dog&apos;s safety.</p>
        <GuideLinks current="/walking-brachycephalic-dogs-in-heat" />
      </article>
    </div>
  )
}

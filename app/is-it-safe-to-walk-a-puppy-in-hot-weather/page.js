import Link from "next/link"
import FloatingNav from "@/components/FloatingNav"
import GuideLinks from "@/components/GuideLinks"
import { ogImage } from "@/lib/og"

const appStoreUrl = "https://apps.apple.com/us/app/pawsout-dog-walk-weather/id6754534280"
const writeReviewUrl = `${appStoreUrl}?action=write-review`
const pageUrl = "https://pawsout.app/is-it-safe-to-walk-a-puppy-in-hot-weather"

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is it safe to walk a puppy in hot weather?",
  description:
    "Puppies overheat and burn paws faster than adult dogs. Learn how to time short heat walks and when to stay inside.",
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
      name: "Is it safe to walk a puppy in hot weather?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Only in short, shaded windows. Puppies have less ability to regulate temperature and thinner paw pads. Prefer grass, early morning, and a loop you can cut short.",
      },
    },
    {
      "@type": "Question",
      name: "How long can I walk a puppy when it is hot?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Shorter than an adult on the same day. Many owners use brief potty or training loops instead of a full walk when pavement fails the 7-second test. Stop at the first sign of slowing or heavy panting.",
      },
    },
  ],
}

export const metadata = {
  title: "Is It Safe to Walk a Puppy in Hot Weather? | PawsOut",
  description:
    "Is it safe to walk a puppy in hot weather? Young dogs overheat and burn paws faster. Learn short-walk rules, the pavement test, and how PawsOut times a puppy-safe window.",
  robots: { index: true, follow: true },
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Is It Safe to Walk a Puppy in Hot Weather?",
    description: "Puppies have less heat reserve and thinner pads. Learn when a short loop is still too much.",
    url: pageUrl,
    siteName: "PawsOut",
    type: "article",
    images: [ogImage],
  },
}

export default function PuppyGuide() {
  return (
    <div className="min-h-screen bg-transparent">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <FloatingNav />
      <article className="pt-28 md:pt-32 pb-20 px-6 md:px-12 max-w-3xl mx-auto">
        <p className="text-xs font-semibold text-gray-500 tracking-widest mb-3 md:mb-8">GUIDE · PUPPIES</p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5 md:mb-6 leading-[3.4rem] md:leading-tight">
          Is it safe to walk a puppy in <em className="italic text-gray-700">hot weather?</em>
        </h1>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Less often than it is for an adult. Puppies are still learning to regulate temperature.
          Their pads are thinner, they have less reserve, and they will keep playing after they
          should have stopped. A &quot;quick walk&quot; on sunny asphalt is a common way they get
          hurt.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shorter, shadier, grass first</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Use the coolest hour. Stay on shaded grass when you can. Do the{" "}
          <Link href="/is-the-pavement-too-hot-for-my-dog" className="font-semibold text-highlight underline underline-offset-4">
            7-second hand test
          </Link>{" "}
          before the sidewalk. If it fails, make it a potty break in the yard or a carry to grass —
          not a neighborhood loop. The same caution applies at{" "}
          <Link href="/is-pavement-too-hot-for-dogs-at-80-degrees" className="font-semibold text-highlight underline underline-offset-4">
            80°F
          </Link>
          ; air temperature is not the pad temperature.
        </p>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Flat-faced puppies need even more margin. See{" "}
          <Link href="/walking-brachycephalic-dogs-in-heat" className="font-semibold text-highlight underline underline-offset-4">
            brachycephalic dogs in heat
          </Link>
          .
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stop earlier than you think</h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Heavy panting, slowing down, lying down, or lifting paws means the walk is over. Carry
          water. This guide is educational. Ask your veterinarian about walk length for your
          puppy&apos;s age and breed — especially before vaccines are finished and sidewalks are a
          social plan, not just a heat plan.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">A window, not a guess</h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          <Link href="/" className="font-semibold text-highlight underline underline-offset-4">PawsOut</Link>{" "}
          gives a next walk window from weather, surface, and your dog. Treat a puppy as more
          conservative than the adult version of the same breed. Pair this with the{" "}
          <Link href="/is-it-safe-to-walk-my-dog-in-hot-weather" className="font-semibold text-highlight underline underline-offset-4">
            hot-weather guide
          </Link>
          .
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-highlight text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">Download PawsOut</a>
          <a href={writeReviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-gray-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:border-gray-600 hover:bg-white/40 transition-colors">Rate PawsOut on the App Store</a>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">PawsOut is an educational weather tool, not a medical diagnosis. Always use your own judgment for your dog&apos;s safety.</p>
        <GuideLinks current="/is-it-safe-to-walk-a-puppy-in-hot-weather" />
      </article>
    </div>
  )
}

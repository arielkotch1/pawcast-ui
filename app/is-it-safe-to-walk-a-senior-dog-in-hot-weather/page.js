import Link from "next/link"
import FloatingNav from "@/components/FloatingNav"
import GuideLinks from "@/components/GuideLinks"
import { ogImage } from "@/lib/og"

const appStoreUrl = "https://apps.apple.com/us/app/pawsout-dog-walk-weather/id6754534280"
const writeReviewUrl = `${appStoreUrl}?action=write-review`
const pageUrl = "https://pawsout.app/is-it-safe-to-walk-a-senior-dog-in-hot-weather"

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is it safe to walk a senior dog in hot weather?",
  description:
    "Older dogs have less heat reserve and often slower recovery. Learn how to time summer walks for senior dogs and when to stay home.",
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
      name: "Is it safe to walk a senior dog in hot weather?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use a tighter window than you would for a young adult. Older dogs cool less efficiently and may have heart, joint, or weight issues that make heat riskier. Prefer shade, grass, and the coolest hour.",
      },
    },
    {
      "@type": "Question",
      name: "How do I know if my older dog is too hot on a walk?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Slowing down, heavy panting, glazed eyes, or a sudden sit are stop signs. Do not wait until they collapse. Get to shade and water and call a veterinarian if they do not recover quickly.",
      },
    },
  ],
}

export const metadata = {
  title: "Is It Safe to Walk a Senior Dog in Hot Weather? | PawsOut",
  description:
    "Is it safe to walk a senior dog in hot weather? Older dogs have less heat reserve. Learn shorter summer walks, pavement checks, and how PawsOut times a gentler window.",
  robots: { index: true, follow: true },
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Is It Safe to Walk a Senior Dog in Hot Weather?",
    description: "Older dogs overheat sooner. Learn how to time a summer walk without pushing them.",
    url: pageUrl,
    siteName: "PawsOut",
    type: "article",
    images: [ogImage],
  },
}

export default function SeniorGuide() {
  return (
    <div className="min-h-screen bg-transparent">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <FloatingNav />
      <article className="pt-28 md:pt-32 pb-20 px-6 md:px-12 max-w-3xl mx-auto">
        <p className="text-xs font-semibold text-gray-500 tracking-widest mb-3 md:mb-8">GUIDE · SENIORS</p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5 md:mb-6 leading-[3.4rem] md:leading-tight">
          Is it safe to walk a senior dog in <em className="italic text-gray-700">hot weather?</em>
        </h1>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          With a tighter window than a young adult. Older dogs often cool less efficiently. Heart
          disease, extra weight, thick coats, and stiff joints all make the same block harder. They
          may still ask to go out. That is not the same as being safe to finish the usual loop.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Treat heat like a shorter tank</h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Use the coolest hour. Stay on shaded grass. Do the{" "}
          <Link href="/is-the-pavement-too-hot-for-my-dog" className="font-semibold text-highlight underline underline-offset-4">
            pavement test
          </Link>
          . Skip the sunny parking-lot route even at{" "}
          <Link href="/is-pavement-too-hot-for-dogs-at-80-degrees" className="font-semibold text-highlight underline underline-offset-4">
            80°F
          </Link>
          .{" "}
          <Link href="/is-humidity-too-high-to-walk-my-dog" className="font-semibold text-highlight underline underline-offset-4">
            Humidity
          </Link>{" "}
          and a{" "}
          <Link href="/walking-brachycephalic-dogs-in-heat" className="font-semibold text-highlight underline underline-offset-4">
            flat face
          </Link>{" "}
          stack on top of age.
        </p>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          In winter the risk flips — older dogs also feel{" "}
          <Link href="/is-it-too-cold-to-walk-my-dog" className="font-semibold text-highlight underline underline-offset-4">
            cold
          </Link>{" "}
          sooner. The principle is the same: less reserve, shorter outings, watch the dog not the
          forecast.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Stop signs in older dogs</h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Slowing down, heavy panting, glazed eyes, a sudden sit, or lagging behind means go home.
          Recovery should be quick in shade with water. If it is not, contact a veterinarian. This
          guide is educational and does not replace care for heart, kidney, or mobility conditions.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">A gentler walk window</h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          <Link href="/" className="font-semibold text-highlight underline underline-offset-4">PawsOut</Link>{" "}
          estimates how your dog experiences the weather, not just the air temperature. Use it as a
          starting point, then be more conservative than you were when they were three. The{" "}
          <Link href="/is-it-safe-to-walk-my-dog-in-hot-weather" className="font-semibold text-highlight underline underline-offset-4">
            hot-weather guide
          </Link>{" "}
          covers the shared rules.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-highlight text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">Download PawsOut</a>
          <a href={writeReviewUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 border-2 border-gray-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:border-gray-600 hover:bg-white/40 transition-colors">Rate PawsOut on the App Store</a>
        </div>
        <p className="text-sm text-gray-600 leading-relaxed mb-4">PawsOut is an educational weather tool, not a medical diagnosis. Always use your own judgment for your dog&apos;s safety.</p>
        <GuideLinks current="/is-it-safe-to-walk-a-senior-dog-in-hot-weather" />
      </article>
    </div>
  )
}

import Link from "next/link"
import FloatingNav from "@/components/FloatingNav"
import GuideLinks from "@/components/GuideLinks"
import { ogImage } from "@/lib/og"

const appStoreUrl = "https://apps.apple.com/us/app/pawsout-dog-walk-weather/id6754534280"
const writeReviewUrl = `${appStoreUrl}?action=write-review`
const pageUrl = "https://pawsout.app/is-it-too-cold-to-walk-my-dog"

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is it too cold to walk my dog?",
  description:
    "Wind, wet fur, and coat type matter more than the thermometer. Learn when cold weather is unsafe for a dog walk and how to protect paws from ice and salt.",
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
      name: "Is it too cold to walk my dog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on your dog and the conditions, not just the air temperature. Wind, wet fur, ice, and salt raise risk. Small, short-coated, senior, and puppy dogs get cold faster than thick-coated working breeds.",
      },
    },
    {
      "@type": "Question",
      name: "How cold is too cold to walk a dog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no single cutoff. A Husky on a dry, still day may be comfortable when a Chihuahua in wind and wet snow is not. If your dog is shivering, lifting paws, slowing down, or asking to turn around, end the walk.",
      },
    },
    {
      "@type": "Question",
      name: "How do I protect my dog's paws in winter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Watch for ice, packed snow, and sidewalk salt. Wipe paws after the walk. Booties or a wax balm help some dogs. If the ground is too painful for your ungloved hand, it is too harsh for bare paws.",
      },
    },
  ],
}

export const metadata = {
  title: "Is It Too Cold to Walk My Dog? | PawsOut",
  description:
    "Is it too cold to walk your dog? Wind, wet fur, ice, and breed matter more than the forecast. Learn the signs of a dog getting too cold and how PawsOut times winter walks.",
  robots: { index: true, follow: true },
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Is It Too Cold to Walk My Dog?",
    description:
      "The thermometer is not enough. Learn how wind, wet fur, ice, and coat type change whether a winter walk is safe.",
    url: pageUrl,
    siteName: "PawsOut",
    type: "article",
    images: [ogImage],
  },
}

export default function ColdWeatherGuide() {
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
          GUIDE · COLD WEATHER
        </p>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-5 md:mb-6 leading-[3.4rem] md:leading-tight">
          Is it too cold to walk <em className="italic text-gray-700">my dog?</em>
        </h1>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Often, yes — even when the forecast looks like a normal winter day. Wind, wet fur, ice,
          and sidewalk salt can make a walk unsafe while the air temperature still looks
          &quot;fine.&quot; Your dog&apos;s size and coat matter as much as the number on the
          thermometer.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How cold is too cold to walk a dog?
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          There is no universal cutoff. A thick-coated working breed on a dry, still afternoon may
          be comfortable when a small, short-coated, senior, or puppy dog in wind and wet snow is
          already too cold. Wind strips heat. Wet fur strips more. Ice and salt hurt paws before
          the body feels frozen.
        </p>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          Midday is often safer than dawn or late night in winter. Keep the first loop short and
          watch how your dog actually moves, not how eager they were at the door.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Signs your dog is too cold
        </h2>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          End the walk and get inside if you see shivering, tucked tail, lifting paws, slowing
          down, anxiety, or a dog that wants to turn around. Cold injury can start in the ears,
          tail, and paws. This guide is educational — if you are worried, contact a veterinarian.
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Ice, salt, and bare paws
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          Packed snow and ice pull heat out of paws. Sidewalk salt and de-icers burn pads and make
          dogs sick if they lick them. Wipe paws after every winter walk. Booties or a wax balm
          help some dogs; others refuse them, so keep walks shorter on treated sidewalks.
        </p>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          If the ground is too painful for your ungloved hand, it is too harsh for bare paws. That
          is the winter version of the{" "}
          <Link
            href="/is-the-pavement-too-hot-for-my-dog"
            className="font-semibold text-highlight underline underline-offset-4"
          >
            7-second pavement test
          </Link>
          .
        </p>

        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Get a walk window for winter
        </h2>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          <Link href="/" className="font-semibold text-highlight underline underline-offset-4">
            PawsOut
          </Link>{" "}
          uses the Canine Thermal Model to estimate how your dog responds to real weather — wind
          and cold included — not just the air temperature. It is the same idea as the{" "}
          <Link
            href="/is-it-safe-to-walk-my-dog-in-hot-weather"
            className="font-semibold text-highlight underline underline-offset-4"
          >
            hot-weather guide
          </Link>
          , flipped for winter.
        </p>
        <p className="text-lg text-gray-700 mb-10 leading-relaxed">
          The app is free on iPhone. If it already helps you time winter walks, a short App Store
          review helps the next dog owner find it.
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

        <GuideLinks current="/is-it-too-cold-to-walk-my-dog" />
      </article>
    </div>
  )
}

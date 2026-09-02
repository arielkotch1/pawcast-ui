"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const faqItems = [
    {
      question: "Is it safe to walk my dog in hot weather?",
      answer:
        "It depends on more than the air temperature. Pavement can be 20–30°C hotter than the air, and breeds handle heat differently. Check shade, ground type, and the 7-second hand test — or use PawsOut for a personalized walk window.",
      href: "/is-it-safe-to-walk-my-dog-in-hot-weather",
      linkLabel: "Read the full hot-weather guide",
    },
    {
      question: "Is it too cold to walk my dog?",
      answer:
        "It depends on your dog and the conditions, not just the air temperature. Wind, wet fur, ice, and salt raise risk. Small, short-coated, senior, and puppy dogs get cold faster than thick-coated working breeds.",
      href: "/is-it-too-cold-to-walk-my-dog",
      linkLabel: "Read the full cold-weather guide",
    },
    {
      question: "Is the pavement too hot for my dog?",
      answer:
        "Use the 7-second hand test. If you cannot hold the back of your hand on the ground for 7 seconds, it is too hot for paws. Asphalt in sun is the highest risk; grass and shade stay cooler.",
      href: "/is-the-pavement-too-hot-for-my-dog",
      linkLabel: "Read the full pavement guide",
    },
    {
      question: "Is humidity too high to walk my dog?",
      answer:
        "High humidity makes panting less effective, so a mild day can still be unsafe. Keep walks shorter, stay in shade, and watch for heavy panting.",
      href: "/is-humidity-too-high-to-walk-my-dog",
      linkLabel: "Read the humidity guide",
    },
    {
      question: "Can I walk a French Bulldog or Pug in hot weather?",
      answer:
        "Only with extra caution. Flat-faced dogs cannot pant as efficiently, so they overheat sooner. Prefer early morning, shade, grass, and short loops.",
      href: "/walking-brachycephalic-dogs-in-heat",
      linkLabel: "Read the brachycephalic heat guide",
    },
    {
      question: "Is pavement too hot for dogs at 80°F?",
      answer:
        "It can be. 80°F is the air temperature. In sun, asphalt can be much hotter. Use the 7-second hand test on the actual sidewalk.",
      href: "/is-pavement-too-hot-for-dogs-at-80-degrees",
      linkLabel: "Read the 80°F pavement guide",
    },
    {
      question: "Is it safe to walk a puppy in hot weather?",
      answer:
        "Only in short, shaded windows. Puppies have less heat reserve and thinner pads. Prefer grass and a loop you can cut short.",
      href: "/is-it-safe-to-walk-a-puppy-in-hot-weather",
      linkLabel: "Read the puppy heat guide",
    },
    {
      question: "Is it safe to walk a senior dog in hot weather?",
      answer:
        "Use a tighter window than you would for a young adult. Older dogs cool less efficiently. Prefer shade, grass, and the coolest hour.",
      href: "/is-it-safe-to-walk-a-senior-dog-in-hot-weather",
      linkLabel: "Read the senior heat guide",
    },
    {
      question: "What is the Canine Thermal Model?",
      answer:
        "PawsOut is built on the Canine Thermal Model (CTM) — a scientific tool created by researchers to predict a dog's body temperature. It's like a virtual version of your dog that reacts to real weather conditions, not just a forecast. The model considers your dog's size, coat type, muzzle length, and environmental factors like temperature, sun, and wind to estimate how hot or cold your dog actually feels.",
    },

    {
      question: "What's a 'Next Walk Window'?",
      answer:
        "The Next Walk Window tells you the safest time today for your dog to go outside. It shows exactly when you have a safe window to walk — like 'Safe until 5 PM' — and updates throughout the day as weather conditions change. ",
    },
    {
      question: "Why does PawsOut ask about shade and ground type?",
      answer:
        "Shade and surface dramatically affect paw safety. In direct sun, pavement and asphalt can get dangerously hot — even hotter than the air temperature. A walk on shaded grass at 28°C is much safer than the same temperature on sun-baked concrete. By telling us the shade level and ground type, we give you a more accurate paw risk estimate.",
    },
    {
      question: "What does 'Check Pavement' mean?",
      answer:
        "When the app shows 'Check Pavement,' it means the ground surface temperature is in the caution or dangerous zone. We recommend using the back of your hand to test the pavement for 7 seconds before letting your dog walk on it. If it's too hot for your hand, it's too hot for your dog's paws.",
      href: "/is-the-pavement-too-hot-for-my-dog",
      linkLabel: "Read the pavement guide",
    },
    {
      question: "What about my data?",
      answer:
        "Your dog profiles, photos, and preferences are stored locally on your device only — they never leave your phone. Location data is used only in real-time to fetch accurate weather for your area. We don't store, log, or share your location history. You can delete all data anytime in Settings → Delete Data.",
    },
    {
      question: "What does it cost?",
      answer:
        "PawsOut is completely free. There are no subscription fees, premium features, or in-app purchases. All features, including personalized walk scoring and next walk windows, are available to all users at no cost.",
    },
  ]

  return (
    <section className="pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-5 md:mb-6">
        <p className="text-sm font-semibold text-gray-600 tracking-widest mb-4">FAQ</p>
        <h2 className="text-5xl md:text-6xl font-bold text-gray-900">
          How it works, <em className="italic text-gray-700">explained.</em>
        </h2>
      </div>

      {/* Accordion */}
      <div className="space-y-1">
        {faqItems.map((item, index) => (
          <div key={index} className="border-b border-brand/20 last:border-b-0">
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full py-5 flex items-start justify-between gap-4 text-left hover:opacity-70 transition-opacity"
            >
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">
                {item.question}
              </h3>
              <span className="flex-shrink-0 mt-1">
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="pb-6 pr-8">
                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                {item.href && (
                  <Link
                    href={item.href}
                    className="inline-block mt-3 font-semibold text-highlight underline underline-offset-4 hover:opacity-80"
                  >
                    {item.linkLabel}
                  </Link>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

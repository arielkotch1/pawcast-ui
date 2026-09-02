import Link from "next/link"

const guides = [
  { href: "/", label: "PawsOut home" },
  {
    href: "/is-it-safe-to-walk-my-dog-in-hot-weather",
    label: "Is it safe to walk my dog in hot weather?",
  },
  {
    href: "/is-it-too-cold-to-walk-my-dog",
    label: "Is it too cold to walk my dog?",
  },
  {
    href: "/is-the-pavement-too-hot-for-my-dog",
    label: "Is the pavement too hot for my dog?",
  },
  {
    href: "/is-humidity-too-high-to-walk-my-dog",
    label: "Is humidity too high to walk my dog?",
  },
  {
    href: "/walking-brachycephalic-dogs-in-heat",
    label: "Walking brachycephalic dogs in heat",
  },
  {
    href: "/is-pavement-too-hot-for-dogs-at-80-degrees",
    label: "Is pavement too hot for dogs at 80°F?",
  },
  {
    href: "/is-it-safe-to-walk-a-puppy-in-hot-weather",
    label: "Is it safe to walk a puppy in hot weather?",
  },
  {
    href: "/is-it-safe-to-walk-a-senior-dog-in-hot-weather",
    label: "Is it safe to walk a senior dog in hot weather?",
  },
]

export default function GuideLinks({ current }) {
  return (
    <nav className="mt-12 pt-8 border-t border-gray-900/10" aria-label="More guides">
      <p className="text-xs font-semibold text-gray-500 tracking-widest mb-4">MORE GUIDES</p>
      <ul className="space-y-3">
        {guides
          .filter((guide) => guide.href !== current)
          .map((guide) => (
            <li key={guide.href}>
              <Link
                href={guide.href}
                className="font-semibold text-highlight underline underline-offset-4 hover:opacity-80"
              >
                {guide.label}
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  )
}

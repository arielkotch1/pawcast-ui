import FloatingNav from "@/components/FloatingNav"
import Link from "next/link"

export const metadata = {
  title: "Contact Us | PawsOut",
  description: "Get in touch with the PawsOut team. Send us your questions, feedback, or bug reports.",
  robots: { index: true, follow: true },
  alternates: { canonical: "https://pawsout.app/contact" },
  openGraph: {
    title: "Contact Us | PawsOut",
    description: "Get in touch with the PawsOut team.",
    url: "https://pawsout.app/contact",
    type: "website",
  },
}

export default function Contact() {
  return (
    <div className="min-h-screen bg-transparent flex justify-center items-center">
      <FloatingNav />
      <main className="pt-28 md:pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-5 md:mb-6">
          <p className="text-xs font-semibold text-gray-500 tracking-widest mb-3 md:mb-8">
            CONTACT
          </p>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-5 md:mb-6 leading-[4.3rem] md:leading-tight">
            Get in <em className="italic text-gray-700">touch</em> with us.
          </h1>
          <p className="text-lg text-gray-700 mb-5 md:mb-6 leading-relaxed max-w-lg">
            Have questions about PawsOut? Found a bug? Want to share feedback? We'd love to hear
            from you.
          </p>
        </div>

        {/* Contact Form */}
        <form
          action="https://formspree.io/f/xldwzdpw"
          method="POST"
          encType="multipart/form-data"
          className="bg-white/60 backdrop-blur rounded-3xl p-8 shadow-sm border border-gray-200/30 mb-12 max-w-2xl"
        >
          {/* Name */}
          <div className="mb-6 ">
            <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-full bg-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="Your name"
            />
          </div>

          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-full bg-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              placeholder="your@email.com"
            />
          </div>

          {/* Message */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="6"
              className="w-full px-4 py-3 border border-gray-300 rounded-[24px] bg-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent resize-none"
              placeholder="Tell us what's on your mind..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 bg-highlight text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  )
}

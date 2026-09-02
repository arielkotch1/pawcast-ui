"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import pawsoutLogo from "@/public/pawsout-logo.png"

export default function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 ">
      <div className="mx-4 md:rounded-full rounded-[10px]  mt-3 max-w-full px-6 py-4 backdrop-blur-sm bg-white/40 shadow-sm">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <span className="text-2xl font-bold text-highlight font-sans">PawsOut</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* <a
              href="#features"
              className="text-sm text-gray-600 hover:text-orange-600 transition-colors font-sans"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-sm text-gray-600 hover:text-orange-600 transition-colors font-sans"
            >
              How it Works
            </a> */}
            <Link
              href="/is-it-safe-to-walk-my-dog-in-hot-weather"
              className="text-sm text-gray-600 hover:text-orange-600 transition-colors font-sans"
            >
              Guide
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-gray-600 hover:text-orange-600 transition-colors font-sans"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-600 hover:text-orange-600 transition-colors font-sans"
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-600 hover:text-orange-600 transition-colors font-sans"
            >
              Contact
            </Link>
            {/* <a
              href="mailto:contact@pawsout.app"
              className="text-sm text-gray-600 hover:text-orange-600 transition-colors font-sans"
            >
              Contact
            </a> */}
            <a
              href="https://apps.apple.com/us/app/pawsout-dog-walk-weather/id6754534280"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-700 transition-colors font-sans"
            >
              Download
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden font-medium  mt-4  space-y-5 pb-4 border-t border-gray-200 pt-5">
            {/* <a
              href="#features"
              className="block text-sm text-black hover:text-orange-600 transition-colors font-sans"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a> */}
            {/* <a
              href="#how-it-works"
              className="block text-sm text-black hover:text-orange-600 transition-colors font-sans"
              onClick={() => setIsOpen(false)}
            >
              How it Works
            </a> */}
            <Link
              href="/is-it-safe-to-walk-my-dog-in-hot-weather"
              className="block text-md text-black hover:text-orange-600 transition-colors font-sans"
              onClick={() => setIsOpen(false)}
            >
              Guide
            </Link>
            <Link
              href="/privacy"
              className="block text-md text-black hover:text-orange-600 transition-colors font-sans"
              onClick={() => setIsOpen(false)}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="block text-md text-black hover:text-orange-600 transition-colors font-sans"
              onClick={() => setIsOpen(false)}
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className="block text-md text-black hover:text-orange-600 transition-colors font-sans"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            {/* <a
              href="mailto:contact@pawsout.app"
              className="block text-sm text-black hover:text-orange-600 transition-colors font-sans"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a> */}
            <a
              href="https://apps.apple.com/us/app/pawsout-dog-walk-weather/id6754534280"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-orange-600 text-white px-4 py-2 rounded-full text-md font-semibold hover:bg-orange-700 transition-colors text-center font-sans"
            >
              Download
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}

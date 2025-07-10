"use client"

import type React from "react"

import Link from "next/link"
import { BotLogo } from "@/components/bot-logo"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const handlePricingClick = (e: React.MouseEvent) => {
    e.preventDefault()

    if (window.location.pathname === "/") {
      // If on home page, scroll to pricing section
      const pricingSection = document.getElementById("pricing")
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      // If on other pages, navigate to home page with pricing hash
      window.location.href = "/#pricing"
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <BotLogo width={160} height={60} className="brightness-0 invert" />
            <p className="text-gray-400 leading-relaxed">
              Empowering businesses through innovative AI assistant solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a
                  href="#pricing"
                  onClick={handlePricingClick}
                  className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                >
                  Pricing
                </a>
              </li>
              <li>
                <Link href="/login" className="text-gray-400 hover:text-white transition-colors">
                  Login
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">info@sxgxx.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-orange-500" />
                <span className="text-gray-400">New York, USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Sxgxx. All rights reserved. |
            <Link href="/privacy" className="hover:text-white ml-1">
              Privacy Policy
            </Link>{" "}
            |
            <Link href="/terms" className="hover:text-white ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

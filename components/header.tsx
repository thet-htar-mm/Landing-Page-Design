"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { LoginModal } from "@/components/auth/login-modal"
import { BotLogo } from "@/components/bot-logo"
import { usePathname } from "next/navigation"

export function Header() {
  // Mock authentication state - in real app, this would come from auth context
  const isLoggedIn = true
  const [showLoginModal, setShowLoginModal] = useState(false)
  const pathname = usePathname()

  const handlePricingClick = (e: React.MouseEvent) => {
    e.preventDefault()

    if (pathname === "/") {
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
    <header className="bg-white shadow-sm border-b border-blue-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BotLogo width={140} height={50} />
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-medium">
              About
            </Link>
            <a
              href="#pricing"
              onClick={handlePricingClick}
              className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer"
            >
              Pricing
            </a>
            <Link href="/login" className="text-gray-700 hover:text-blue-600 font-medium">
              Login
            </Link>
            {isLoggedIn && (
              <a
                href="https://dashboard.sxgxx.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                Dashboard
              </a>
            )}
          </nav>

          <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <>
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
                  onClick={() => setShowLoginModal(true)}
                >
                  Login
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600">
                  Get Started
                </Button>
              </>
            ) : (
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                Logout
              </Button>
            )}
          </div>
        </div>
      </div>
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onSuccess={() => {
          // Handle successful login
          console.log("Login successful")
        }}
      />
    </header>
  )
}

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SubscriptionPlans } from "@/components/subscription-plans"
import { BotOrgForm } from "@/components/bot-org-form"
import { SubscriptionHistory } from "@/components/subscription-history"
import { PaymentStatus } from "@/components/payment-status"
import { FAQBot } from "@/components/faq-bot"

export default function LandingPage() {
  // Mock user data - in real app, this would come from authentication
  const user = {
    email: "user@example.com",
    hasBotId: false,
    isLoggedIn: true,
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <Header />
      <main>
        <HeroSection />
        <SubscriptionPlans />
        {user.isLoggedIn && !user.hasBotId && <BotOrgForm />}
        {user.isLoggedIn && <SubscriptionHistory />}
        {user.isLoggedIn && <PaymentStatus />}
      </main>
      <FAQBot />
    </div>
  )
}

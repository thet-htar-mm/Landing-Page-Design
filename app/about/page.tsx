import { Header } from "@/components/header"
import { AboutHero } from "@/components/about/about-hero"
import { AboutStory } from "@/components/about/about-story"
import { AboutMissionVision } from "@/components/about/about-mission-vision"
import { AboutCTA } from "@/components/about/about-cta"
import { Footer } from "@/components/footer"
import { AboutContact } from "@/components/about/about-contact"
import { FAQBot } from "@/components/faq-bot"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutHero />
        <AboutStory />
        <AboutMissionVision />
        <AboutContact />
        <AboutCTA />
      </main>
      <FAQBot />
      <Footer />
    </div>
  )
}

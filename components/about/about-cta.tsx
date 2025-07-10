import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function AboutCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Want to Learn More?</h2>

          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Discover more about our company, team, and the technology behind Sxgxx.
          </p>

          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3 font-semibold">
            <ExternalLink className="mr-2 h-5 w-5" />
            Visit Our Website
          </Button>
        </div>
      </div>
    </section>
  )
}

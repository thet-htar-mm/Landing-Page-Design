import { Target, Eye } from "lucide-react"

export function AboutMissionVision() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-blue-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To democratize AI technology by providing intuitive, powerful, and accessible business automation tools
                that empower organizations and inspire innovation worldwide.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="h-10 w-10 text-orange-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become the world's leading AI business platform, fostering a global community where technology flows
                freely and business automation knows no boundaries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

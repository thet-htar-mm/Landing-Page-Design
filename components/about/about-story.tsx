import { BotLogo } from "@/components/bot-logo"

export function AboutStory() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Logo/Image Section */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative">
                <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl flex items-center justify-center shadow-lg">
                  <div className="transform scale-150">
                    <BotLogo width={200} height={100} />
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-orange-500 rounded-full opacity-20"></div>
              </div>
            </div>

            {/* Story Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>

              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2020, Sxgxx emerged from a simple belief: that AI technology should make business
                  operations more accessible, engaging, and effective for everyone. Our team of developers, AI
                  specialists, and business strategists work tirelessly to create solutions that bridge the gap between
                  traditional business methods and modern digital automation.
                </p>

                <p>
                  Today, we serve over 10,000 businesses worldwide, helping millions of users achieve their operational
                  goals through our comprehensive AI assistant platform. From small startups to enterprise corporations,
                  our solutions adapt to meet the unique needs of every organization.
                </p>

                <p>
                  Our journey continues as we push the boundaries of what's possible with AI technology, always keeping
                  our users' success at the heart of everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

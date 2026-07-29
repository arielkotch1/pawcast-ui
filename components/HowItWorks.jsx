'use client'

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Add Your Dog',
      description: 'Tell us your dog's breed, size, age, and coat type. This helps us calculate personalized paw temperature thresholds.',
      icon: '🐕',
    },
    {
      number: '02',
      title: 'We Analyze Weather',
      description: 'PawsOut monitors real-time weather, air quality, pollen, UV index, and calculates precise pavement temperatures.',
      icon: '🌡️',
    },
    {
      number: '03',
      title: 'Get Your Walk Score',
      description: 'Receive a 0–100 walk score tuned to your dog, updated hourly with safety recommendations for outdoor time.',
      icon: '📊',
    },
    {
      number: '04',
      title: 'Walk With Confidence',
      description: 'Make informed decisions about when it's safe to walk. Real-time alerts notify you of changing conditions.',
      icon: '✓',
    },
  ]

  return (
    <section id="how-it-works" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            PawsOut breaks down the science behind safe dog walking in four simple steps.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-6">
              {/* Left: Number & Icon */}
              <div className="flex flex-col items-center gap-4 min-w-fit">
                <div className="text-5xl font-serif font-bold text-gray-300">
                  {step.number}
                </div>
                <div className="text-4xl">{step.icon}</div>
                {/* Connector line */}
                <div className="w-1 h-16 bg-gray-200"></div>
              </div>

              {/* Right: Content */}
              <div className="pb-8">
                <h3 className="text-2xl font-serif font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="max-w-2xl">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">
              Ready to keep your dog safe?
            </h3>
            <p className="text-gray-600 mb-5 md:mb-6">
              Download PawsOut today and start getting personalized walk scores for your dog.
            </p>
            <a
              href="https://apps.apple.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Download on App Store
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

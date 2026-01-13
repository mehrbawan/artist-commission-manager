const features = [
  {
    title: "Commission Pages",
    description:
      "Set prices, slots, terms, and examples in one beautiful, shareable page.",
  },
  {
    title: "Order Management",
    description:
      "Track requests, progress, revisions, and delivery without messy DMs.",
  },
  {
    title: "Secure Payments",
    description:
      "Accept payments upfront with automatic receipts and client protection.",
  },
]

export default function Features() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center mb-16">
          Everything you need to run commissions smoothly
        </h2>
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-2xl border border-gray-100"
            >
              <h3 className="font-semibold text-lg mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

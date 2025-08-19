import { ArrowRight } from "lucide-react"

const journeySteps = [
  {
    title: "Discover Trends",
    description: "Explore our curated collections and discover the latest fashion trends",
  },
  {
    title: "Effortless Navigation",
    description: "Browse seamlessly through our intuitive and user-friendly interface",
  },
  {
    title: "Secure Checkout",
    description: "Complete your purchase with confidence using our secure payment system",
  },
  {
    title: "Urban Happiness",
    description: "Receive your carefully packaged items and elevate your style",
  },
]

export function JourneySection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            NAVIGATING THE STYLELOOM FASHION JOURNEY
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {journeySteps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{step.description}</p>
              {index < journeySteps.length - 1 && (
                <div className="hidden lg:flex justify-center">
                  <ArrowRight className="w-6 h-6 text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

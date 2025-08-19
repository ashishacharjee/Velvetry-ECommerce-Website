import { Sparkles, Users, Award, Zap, Eye, Shield } from "lucide-react"

const features = [
  {
    icon: Sparkles,
    title: "Personalized Curation",
    description: "Handpicked styles tailored to your unique taste and preferences",
  },
  {
    icon: Users,
    title: "Fashion Forward",
    description: "Stay ahead of trends with our expertly curated collections",
  },
  {
    icon: Award,
    title: "Premium Quality Assurance",
    description: "Every piece meets our rigorous standards for excellence",
  },
  {
    icon: Zap,
    title: "Global Inspiration",
    description: "Drawing from international fashion capitals worldwide",
  },
  {
    icon: Eye,
    title: "Empowering Your Style",
    description: "Confidence-boosting pieces that celebrate your individuality",
  },
  {
    icon: Shield,
    title: "Sustainable Practices",
    description: "Committed to ethical fashion and environmental responsibility",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            CRAFTING TRENDS. INSPIRING CONFIDENCE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

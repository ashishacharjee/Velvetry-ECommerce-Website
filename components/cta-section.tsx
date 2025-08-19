import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-card-foreground mb-6">ELEVATE YOUR WARDROBE</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Start your style journey today and discover a world of elegance delivered to your doorstep. Your style
            journey begins here.
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg">
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  )
}

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background">
      <div className="absolute inset-0">
        <img
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Home%20Page%20-%20Desktop%20-%20Cover-0N7PPtrioSY5XpolKxWB2aOBSpjXTH.png"
          alt="Fashion model in elegant attire"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-background/60" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6">
          ELEVATE YOUR STYLE WITH
          <br />
          <span className="text-primary">STYLELOOM</span>
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1,500+</div>
            <div className="text-muted-foreground">Premium Items</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Luxury Brands</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">30%</div>
            <div className="text-muted-foreground">Exclusive Savings</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Customer Satisfaction</div>
          </div>
        </div>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">CRAFTING TRENDS. INSPIRING CONFIDENCE</p>

        <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg">
          Shop Now
        </Button>
      </div>
    </section>
  )
}

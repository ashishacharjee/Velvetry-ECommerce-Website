import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function StoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-8">Our Stories</h1>
          <p className="text-xl text-muted-foreground mb-12">
            Discover the craftsmanship and passion behind every piece of Velvetry jewelry.
          </p>
          <div className="text-center text-muted-foreground">
            <p>Stories coming soon...</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

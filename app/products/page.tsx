import { Header } from "@/components/header"
import { ProductListing } from "@/components/product-listing"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <ProductListing />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

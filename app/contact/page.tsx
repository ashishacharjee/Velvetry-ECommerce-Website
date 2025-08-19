import { Header } from "@/components/header"
import { ContactDetails } from "@/components/contact-details"
import { ReturnPolicy } from "@/components/return-policy"
import { CancellationPolicy } from "@/components/cancellation-policy"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FAQSection } from "@/components/faq-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="relative">
          {/* Abstract Design Element */}
          <div className="absolute top-20 right-20 w-32 h-32 opacity-20">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
              <path d="M50 10 L60 40 L90 40 L68 58 L78 88 L50 70 L22 88 L32 58 L10 40 L40 40 Z" />
            </svg>
          </div>

          <div className="container mx-auto px-4 py-20">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                YOUR PARTNER IN EVERY STEP OF YOUR FASHION JOURNEY.
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Your destination for premium shopping and unmatched customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        <ContactDetails />
        <ReturnPolicy />
        <CancellationPolicy />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout-form"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Checkout</h1>
            <p className="text-muted-foreground">Complete your order with secure checkout</p>
          </div>
          <CheckoutForm />
        </div>
      </main>
      <Footer />
    </div>
  )
}

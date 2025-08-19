import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OrderTracking } from "@/components/order-tracking"

export default function TrackOrderPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Track Your Order</h1>
            <p className="text-muted-foreground">Enter your order ID to track your shipment</p>
          </div>
          <OrderTracking />
        </div>
      </main>
      <Footer />
    </div>
  )
}

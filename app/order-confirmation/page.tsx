import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OrderConfirmation } from "@/components/order-confirmation"
import { Suspense } from "react"

export default function OrderConfirmationPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
          <OrderConfirmation />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

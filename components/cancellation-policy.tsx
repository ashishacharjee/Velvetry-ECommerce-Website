import { Clock, CreditCard, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function CancellationPolicy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-foreground">CANCELLATION POLICY</h2>
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
        >
          Read Cancellation Policy →
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Clock className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Cancellation Window</h3>
          <p className="text-muted-foreground text-sm">
            Orders can be cancelled within 2 hours of placement or before shipping.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Cancellation Process</h3>
          <p className="text-muted-foreground text-sm">
            Contact customer service immediately or use your order confirmation.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CreditCard className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Refund Timeline</h3>
          <p className="text-muted-foreground text-sm">
            Cancelled orders are refunded within 3-5 business days to original payment method.
          </p>
        </div>
      </div>
    </div>
  )
}

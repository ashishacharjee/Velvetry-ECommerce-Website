import { CheckCircle, Package, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ReturnPolicy() {
  return (
    <div className="container mx-auto px-4 py-16 bg-card/5">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-foreground">RETURN POLICY</h2>
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
        >
          Read Return Policy →
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Eligibility</h3>
          <p className="text-muted-foreground text-sm">
            Items must be returned within 30 days of purchase in original condition.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Package className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Process</h3>
          <p className="text-muted-foreground text-sm">
            Request return through our Return Portal or contact customer service.
          </p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <RefreshCw className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Refund</h3>
          <p className="text-muted-foreground text-sm">
            Refunds are processed within 5-7 business days after we receive your return.
          </p>
        </div>
      </div>
    </div>
  )
}

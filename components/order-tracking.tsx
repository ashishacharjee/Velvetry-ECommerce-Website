"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Package, Truck, CheckCircle } from "lucide-react"

export function OrderTracking() {
  const [orderId, setOrderId] = useState("")
  const [trackingData, setTrackingData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleTrackOrder = async () => {
    if (!orderId.trim()) {
      setError("Please enter an order ID")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock tracking data
      const mockTrackingData = {
        orderId: orderId,
        status: "shipped",
        estimatedDelivery: "Dec 28, 2024",
        trackingNumber: "VEL123456789",
        timeline: [
          {
            status: "Order Placed",
            date: "Dec 20, 2024",
            time: "10:30 AM",
            completed: true,
            description: "Your order has been placed successfully",
          },
          {
            status: "Order Confirmed",
            date: "Dec 20, 2024",
            time: "11:15 AM",
            completed: true,
            description: "Payment confirmed and order is being processed",
          },
          {
            status: "Shipped",
            date: "Dec 22, 2024",
            time: "2:45 PM",
            completed: true,
            description: "Your order has been shipped and is on the way",
          },
          {
            status: "Out for Delivery",
            date: "Dec 28, 2024",
            time: "Expected",
            completed: false,
            description: "Your order will be delivered today",
          },
          {
            status: "Delivered",
            date: "Dec 28, 2024",
            time: "Expected",
            completed: false,
            description: "Your order has been delivered",
          },
        ],
      }

      setTrackingData(mockTrackingData)
    } catch (error) {
      setError("Failed to track order. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Enter Order Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="orderId">Order ID</Label>
            <Input
              id="orderId"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="VEL-1234567890"
              className={error ? "border-red-500" : ""}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          </div>
          <Button onClick={handleTrackOrder} disabled={isLoading} className="w-full">
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Tracking...
              </>
            ) : (
              <>
                <Search className="h-4 w-4 mr-2" />
                Track Order
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {trackingData && (
        <Card className="animate-fade-in-up">
          <CardHeader>
            <CardTitle>Order Status</CardTitle>
            <div className="text-sm text-muted-foreground">
              Order ID: {trackingData.orderId} • Tracking: {trackingData.trackingNumber}
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-muted rounded-lg">
              <div>
                <h3 className="font-medium">Current Status</h3>
                <p className="text-sm text-muted-foreground capitalize">{trackingData.status}</p>
              </div>
              <div className="text-right">
                <h3 className="font-medium">Estimated Delivery</h3>
                <p className="text-sm text-muted-foreground">{trackingData.estimatedDelivery}</p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium">Tracking Timeline</h3>
              {trackingData.timeline.map((event: any, index: number) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        event.completed ? "bg-green-500 text-white" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {event.status === "Order Placed" && <Package className="h-4 w-4" />}
                      {event.status === "Order Confirmed" && <CheckCircle className="h-4 w-4" />}
                      {event.status === "Shipped" && <Truck className="h-4 w-4" />}
                      {event.status === "Out for Delivery" && <Truck className="h-4 w-4" />}
                      {event.status === "Delivered" && <CheckCircle className="h-4 w-4" />}
                    </div>
                    {index < trackingData.timeline.length - 1 && (
                      <div className={`w-0.5 h-12 ${event.completed ? "bg-green-500" : "bg-muted"} mt-2`}></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className={`font-medium ${event.completed ? "text-foreground" : "text-muted-foreground"}`}>
                          {event.status}
                        </h4>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </div>
                      <div className="text-right text-sm text-muted-foreground">
                        <p>{event.date}</p>
                        <p>{event.time}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

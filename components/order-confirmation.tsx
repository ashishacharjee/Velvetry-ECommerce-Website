"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle, Package, Truck, MapPin, Calendar, Phone, Mail, Download } from "lucide-react"
import { formatPrice } from "@/lib/products"
import Link from "next/link"

interface OrderData {
  id: string
  items: Array<{
    product: {
      id: string
      name: string
      price: number
      image: string
      category: string
    }
    quantity: number
    selectedSize?: string
    selectedColor?: string
  }>
  total: number
  customerInfo: {
    email: string
    firstName: string
    lastName: string
    phone: string
    address: string
    city: string
    state: string
    pincode: string
    paymentMethod: string
  }
  orderDate: string
  status: string
}

export function OrderConfirmation() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId")
  const [orderData, setOrderData] = useState<OrderData | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadOrderData = () => {
      try {
        const savedOrder = localStorage.getItem("velvetry-last-order")
        if (savedOrder) {
          const parsedOrder = JSON.parse(savedOrder)
          if (parsedOrder.id === orderId) {
            setOrderData(parsedOrder)
          }
        }
      } catch (error) {
        console.error("Error loading order data:", error)
      } finally {
        setIsLoading(false)
      }
    }

    if (orderId) {
      loadOrderData()
    } else {
      setIsLoading(false)
    }
  }, [orderId])

  if (isLoading) {
    return (
      <div className="text-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading order details...</p>
      </div>
    )
  }

  if (!orderData) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold text-foreground mb-4">Order Not Found</h1>
        <p className="text-muted-foreground mb-6">We couldn't find the order you're looking for.</p>
        <Link href="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  const orderDate = new Date(orderData.orderDate)
  const estimatedDelivery = new Date(orderDate.getTime() + 7 * 24 * 60 * 60 * 1000) // 7 days from order
  const shippingCost = orderData.total >= 10000 ? 0 : 299
  const finalTotal = orderData.total + shippingCost

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Success Header */}
      <div className="text-center animate-fade-in-up">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500 animate-scale-in" />
        </div>
        <h1 className="text-4xl font-serif font-bold text-foreground mb-4">Order Confirmed!</h1>
        <p className="text-xl text-muted-foreground mb-2">Thank you for your purchase</p>
        <p className="text-lg">
          Order ID: <span className="font-mono font-bold text-primary">{orderData.id}</span>
        </p>
      </div>

      {/* Order Status */}
      <Card className="animate-fade-in-up animate-delay-200">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5" />
            Order Status
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-medium">Order Confirmed</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="w-3 h-3 bg-muted rounded-full"></div>
                <span>Processing</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="w-3 h-3 bg-muted rounded-full"></div>
                <span>Shipped</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <div className="w-3 h-3 bg-muted rounded-full"></div>
                <span>Delivered</span>
              </div>
            </div>
          </div>
          <div className="mt-4 p-4 bg-muted rounded-lg">
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4" />
              <span>Estimated delivery: {estimatedDelivery.toLocaleDateString("en-IN")}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Order Details */}
        <Card className="animate-fade-in-up animate-delay-300">
          <CardHeader>
            <CardTitle>Order Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {orderData.items.map((item, index) => (
              <div key={`${item.product.id}-${item.selectedSize}-${index}`} className="flex gap-4">
                <img
                  src={item.product.image || "/placeholder.svg"}
                  alt={item.product.name}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{item.product.name}</h4>
                  <div className="text-xs text-muted-foreground capitalize">
                    {item.product.category}
                    {item.selectedSize && <span> • Size: {item.selectedSize}</span>}
                    {item.selectedColor && <span> • Color: {item.selectedColor}</span>}
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-sm">Qty: {item.quantity}</span>
                    <span className="font-medium">{formatPrice(item.product.price * item.quantity)}</span>
                  </div>
                </div>
              </div>
            ))}

            <Separator />

            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(orderData.total)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>{shippingCost === 0 ? "Free" : formatPrice(shippingCost)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>{formatPrice(finalTotal)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Customer & Shipping Info */}
        <div className="space-y-6">
          <Card className="animate-fade-in-up animate-delay-400">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                Shipping Address
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <p className="font-medium">
                  {orderData.customerInfo.firstName} {orderData.customerInfo.lastName}
                </p>
                <p className="text-sm text-muted-foreground">{orderData.customerInfo.address}</p>
                <p className="text-sm text-muted-foreground">
                  {orderData.customerInfo.city}, {orderData.customerInfo.state} {orderData.customerInfo.pincode}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up animate-delay-500">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4" />
                <span>{orderData.customerInfo.email}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4" />
                <span>{orderData.customerInfo.phone}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="animate-fade-in-up animate-delay-600">
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                {orderData.customerInfo.paymentMethod === "card" && <CheckCircle className="h-4 w-4 text-green-500" />}
                {orderData.customerInfo.paymentMethod === "upi" && <CheckCircle className="h-4 w-4 text-green-500" />}
                {orderData.customerInfo.paymentMethod === "cod" && <Truck className="h-4 w-4 text-orange-500" />}
                <span className="capitalize">
                  {orderData.customerInfo.paymentMethod === "cod"
                    ? "Cash on Delivery"
                    : orderData.customerInfo.paymentMethod.toUpperCase()}
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animate-delay-700">
        <Button variant="outline" className="flex items-center gap-2 bg-transparent">
          <Download className="h-4 w-4" />
          Download Invoice
        </Button>
        <Button variant="outline">Track Order</Button>
        <Link href="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>

      {/* Additional Information */}
      <Card className="animate-fade-in-up animate-delay-800">
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <Package className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium mb-1">Free Returns</h3>
              <p className="text-sm text-muted-foreground">30-day return policy on all items</p>
            </div>
            <div>
              <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium mb-1">Fast Shipping</h3>
              <p className="text-sm text-muted-foreground">Free shipping on orders over ₹10,000</p>
            </div>
            <div>
              <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
              <h3 className="font-medium mb-1">24/7 Support</h3>
              <p className="text-sm text-muted-foreground">Contact us anytime for assistance</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Email Confirmation Notice */}
      <div className="text-center text-sm text-muted-foreground animate-fade-in-up animate-delay-900">
        <p>A confirmation email has been sent to {orderData.customerInfo.email}</p>
        <p>Please save your order ID for future reference</p>
      </div>
    </div>
  )
}

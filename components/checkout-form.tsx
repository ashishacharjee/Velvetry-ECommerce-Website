"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CreditCard, Truck, Shield, ArrowLeft } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { formatPrice } from "@/lib/products"
import Link from "next/link"

interface FormData {
  email: string
  firstName: string
  lastName: string
  phone: string
  address: string
  city: string
  state: string
  pincode: string
  paymentMethod: "card" | "upi" | "cod"
  cardNumber?: string
  expiryDate?: string
  cvv?: string
  upiId?: string
}

interface FormErrors {
  [key: string]: string
}

export function CheckoutForm() {
  const { items, total, clearCart } = useCart()
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "card",
  })
  const [errors, setErrors] = useState<FormErrors>({})

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    // Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required"
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required"
    }

    // Phone validation
    if (!formData.phone) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number"
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = "Address is required"
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required"
    }
    if (!formData.state.trim()) {
      newErrors.state = "State is required"
    }
    if (!formData.pincode) {
      newErrors.pincode = "Pincode is required"
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Please enter a valid 6-digit pincode"
    }

    // Payment method validation
    if (formData.paymentMethod === "card") {
      if (!formData.cardNumber) {
        newErrors.cardNumber = "Card number is required"
      } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ""))) {
        newErrors.cardNumber = "Please enter a valid 16-digit card number"
      }

      if (!formData.expiryDate) {
        newErrors.expiryDate = "Expiry date is required"
      } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(formData.expiryDate)) {
        newErrors.expiryDate = "Please enter date in MM/YY format"
      }

      if (!formData.cvv) {
        newErrors.cvv = "CVV is required"
      } else if (!/^\d{3,4}$/.test(formData.cvv)) {
        newErrors.cvv = "Please enter a valid CVV"
      }
    }

    if (formData.paymentMethod === "upi") {
      if (!formData.upiId) {
        newErrors.upiId = "UPI ID is required"
      } else if (!/^[\w.-]+@[\w.-]+$/.test(formData.upiId)) {
        newErrors.upiId = "Please enter a valid UPI ID"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Store order data in localStorage for order confirmation
      const orderData = {
        id: `VEL-${Date.now()}`,
        items,
        total,
        customerInfo: formData,
        orderDate: new Date().toISOString(),
        status: "confirmed",
      }

      localStorage.setItem("velvetry-last-order", JSON.stringify(orderData))

      // Clear cart
      clearCart()

      // Redirect to order confirmation
      router.push(`/order-confirmation?orderId=${orderData.id}`)
    } catch (error) {
      console.error("Order submission failed:", error)
      setErrors({ submit: "Failed to place order. Please try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl font-bold text-foreground mb-4">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">Add some items to your cart before checkout</p>
        <Link href="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  const shippingCost = total >= 10000 ? 0 : 299
  const finalTotal = total + shippingCost

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      {/* Checkout Form */}
      <div className="space-y-8">
        {/* Back to Cart */}
        <Link
          href="/products"
          className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Continue Shopping
        </Link>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className={errors.email ? "border-red-500" : ""}
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </CardContent>
        </Card>

        {/* Shipping Information */}
        <Card>
          <CardHeader>
            <CardTitle>Shipping Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name *</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className={errors.firstName ? "border-red-500" : ""}
                  placeholder="John"
                />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
              </div>
              <div>
                <Label htmlFor="lastName">Last Name *</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className={errors.lastName ? "border-red-500" : ""}
                  placeholder="Doe"
                />
                {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className={errors.phone ? "border-red-500" : ""}
                placeholder="9876543210"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            <div>
              <Label htmlFor="address">Address *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
                className={errors.address ? "border-red-500" : ""}
                placeholder="123 Main Street, Apartment 4B"
              />
              {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange("city", e.target.value)}
                  className={errors.city ? "border-red-500" : ""}
                  placeholder="Mumbai"
                />
                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
              </div>
              <div>
                <Label htmlFor="state">State *</Label>
                <Input
                  id="state"
                  value={formData.state}
                  onChange={(e) => handleInputChange("state", e.target.value)}
                  className={errors.state ? "border-red-500" : ""}
                  placeholder="Maharashtra"
                />
                {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state}</p>}
              </div>
              <div>
                <Label htmlFor="pincode">Pincode *</Label>
                <Input
                  id="pincode"
                  value={formData.pincode}
                  onChange={(e) => handleInputChange("pincode", e.target.value)}
                  className={errors.pincode ? "border-red-500" : ""}
                  placeholder="400001"
                />
                {errors.pincode && <p className="text-red-500 text-sm mt-1">{errors.pincode}</p>}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method */}
        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-3 gap-4">
              <Button
                type="button"
                variant={formData.paymentMethod === "card" ? "default" : "outline"}
                onClick={() => handleInputChange("paymentMethod", "card")}
                className="h-auto p-4 flex flex-col items-center gap-2"
              >
                <CreditCard className="h-6 w-6" />
                <span>Card</span>
              </Button>
              <Button
                type="button"
                variant={formData.paymentMethod === "upi" ? "default" : "outline"}
                onClick={() => handleInputChange("paymentMethod", "upi")}
                className="h-auto p-4 flex flex-col items-center gap-2"
              >
                <Shield className="h-6 w-6" />
                <span>UPI</span>
              </Button>
              <Button
                type="button"
                variant={formData.paymentMethod === "cod" ? "default" : "outline"}
                onClick={() => handleInputChange("paymentMethod", "cod")}
                className="h-auto p-4 flex flex-col items-center gap-2"
              >
                <Truck className="h-6 w-6" />
                <span>COD</span>
              </Button>
            </div>

            {formData.paymentMethod === "card" && (
              <div className="space-y-4 animate-fade-in-up">
                <div>
                  <Label htmlFor="cardNumber">Card Number *</Label>
                  <Input
                    id="cardNumber"
                    value={formData.cardNumber || ""}
                    onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                    className={errors.cardNumber ? "border-red-500" : ""}
                    placeholder="1234 5678 9012 3456"
                  />
                  {errors.cardNumber && <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date *</Label>
                    <Input
                      id="expiryDate"
                      value={formData.expiryDate || ""}
                      onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                      className={errors.expiryDate ? "border-red-500" : ""}
                      placeholder="MM/YY"
                    />
                    {errors.expiryDate && <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>}
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV *</Label>
                    <Input
                      id="cvv"
                      value={formData.cvv || ""}
                      onChange={(e) => handleInputChange("cvv", e.target.value)}
                      className={errors.cvv ? "border-red-500" : ""}
                      placeholder="123"
                    />
                    {errors.cvv && <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>}
                  </div>
                </div>
              </div>
            )}

            {formData.paymentMethod === "upi" && (
              <div className="animate-fade-in-up">
                <Label htmlFor="upiId">UPI ID *</Label>
                <Input
                  id="upiId"
                  value={formData.upiId || ""}
                  onChange={(e) => handleInputChange("upiId", e.target.value)}
                  className={errors.upiId ? "border-red-500" : ""}
                  placeholder="yourname@paytm"
                />
                {errors.upiId && <p className="text-red-500 text-sm mt-1">{errors.upiId}</p>}
              </div>
            )}

            {formData.paymentMethod === "cod" && (
              <div className="bg-muted p-4 rounded-lg animate-fade-in-up">
                <p className="text-sm text-muted-foreground">
                  Pay with cash when your order is delivered. Additional charges may apply.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Order Summary */}
      <div className="space-y-6">
        <Card className="sticky top-4">
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Cart Items */}
            <div className="space-y-4">
              {items.map((item, index) => (
                <div key={`${item.product.id}-${item.selectedSize}-${index}`} className="flex gap-4">
                  <img
                    src={item.product.image || "/placeholder.svg"}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-medium text-sm">{item.product.name}</h4>
                    <div className="text-xs text-muted-foreground">
                      {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                      {item.selectedColor && <span className="ml-2">Color: {item.selectedColor}</span>}
                    </div>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-sm">Qty: {item.quantity}</span>
                      <span className="font-medium">{formatPrice(item.product.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Separator />

            {/* Pricing */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{formatPrice(total)}</span>
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

            {errors.submit && <p className="text-red-500 text-sm">{errors.submit}</p>}

            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : `Place Order - ${formatPrice(finalTotal)}`}
            </Button>

            <div className="text-xs text-muted-foreground text-center">
              By placing your order, you agree to our Terms of Service and Privacy Policy.
            </div>
          </CardContent>
        </Card>
      </div>
    </form>
  )
}

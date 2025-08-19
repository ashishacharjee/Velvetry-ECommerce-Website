"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ShoppingBag, Check } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import type { Product } from "@/lib/products"

interface AddToCartButtonProps {
  product: Product
  selectedSize?: string
  selectedColor?: string
  quantity?: number
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
}

export function AddToCartButton({
  product,
  selectedSize,
  selectedColor,
  quantity = 1,
  variant = "default",
  size = "default",
  className,
}: AddToCartButtonProps) {
  const { addItem, setIsCartOpen } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(product, quantity, selectedSize, selectedColor)
    setIsAdded(true)

    // Show success state for 2 seconds
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)

    // Open cart sidebar after a short delay
    setTimeout(() => {
      setIsCartOpen(true)
    }, 500)
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={`transition-all duration-300 ${isAdded ? "bg-green-600 hover:bg-green-700" : ""} ${className}`}
      onClick={handleAddToCart}
      disabled={!product.inStock}
    >
      {isAdded ? (
        <>
          <Check className="h-4 w-4 mr-2" />
          Added to Cart
        </>
      ) : (
        <>
          <ShoppingBag className="h-4 w-4 mr-2" />
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </>
      )}
    </Button>
  )
}

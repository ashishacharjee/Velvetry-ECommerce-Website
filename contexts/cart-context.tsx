"use client"

import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import {
  type CartItem,
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  calculateCartTotal,
  calculateItemCount,
} from "@/lib/cart"
import type { Product } from "@/lib/products"

interface CartContextType {
  items: CartItem[]
  total: number
  itemCount: number
  addItem: (product: Product, quantity?: number, selectedSize?: string, selectedColor?: string) => void
  removeItem: (productId: string, selectedSize?: string, selectedColor?: string) => void
  updateQuantity: (productId: string, quantity: number, selectedSize?: string, selectedColor?: string) => void
  clearCart: () => void
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("velvetry-cart")
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        setItems(parsedCart)
      } catch (error) {
        console.error("Error loading cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever items change
  useEffect(() => {
    localStorage.setItem("velvetry-cart", JSON.stringify(items))
  }, [items])

  const addItem = (product: Product, quantity = 1, selectedSize?: string, selectedColor?: string) => {
    setItems((currentItems) => addToCart(currentItems, product, quantity, selectedSize, selectedColor))
  }

  const removeItem = (productId: string, selectedSize?: string, selectedColor?: string) => {
    setItems((currentItems) => removeFromCart(currentItems, productId, selectedSize, selectedColor))
  }

  const updateQuantity = (productId: string, quantity: number, selectedSize?: string, selectedColor?: string) => {
    setItems((currentItems) => updateCartItemQuantity(currentItems, productId, quantity, selectedSize, selectedColor))
  }

  const clearCart = () => {
    setItems([])
  }

  const total = calculateCartTotal(items)
  const itemCount = calculateItemCount(items)

  return (
    <CartContext.Provider
      value={{
        items,
        total,
        itemCount,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

"use client"

import { X, Plus, Minus, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/cart-context"
import { formatPrice } from "@/lib/products"
import Link from "next/link"

export function CartSidebar() {
  const { items, total, itemCount, removeItem, updateQuantity, isCartOpen, setIsCartOpen } = useCart()

  if (!isCartOpen) return null

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/50 z-40 animate-fade-in" onClick={() => setIsCartOpen(false)} />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-background border-l border-border z-50 animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-border">
            <h2 className="text-xl font-serif font-bold">Shopping Cart ({itemCount})</h2>
            <Button variant="ghost" size="icon" onClick={() => setIsCartOpen(false)}>
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">Your cart is empty</p>
                <Button onClick={() => setIsCartOpen(false)}>
                  <Link href="/products">Continue Shopping</Link>
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map((item, index) => (
                  <div
                    key={`${item.product.id}-${item.selectedSize}-${item.selectedColor}-${index}`}
                    className="flex gap-4"
                  >
                    <img
                      src={item.product.image || "/placeholder.svg"}
                      alt={item.product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-sm mb-1">{item.product.name}</h3>
                      <div className="text-xs text-muted-foreground mb-2">
                        {item.selectedSize && <span>Size: {item.selectedSize}</span>}
                        {item.selectedColor && <span className="ml-2">Color: {item.selectedColor}</span>}
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-transparent"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1, item.selectedSize, item.selectedColor)
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 bg-transparent"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1, item.selectedSize, item.selectedColor)
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.product.id, item.selectedSize, item.selectedColor)}
                          className="text-destructive hover:text-destructive"
                        >
                          Remove
                        </Button>
                      </div>
                      <div className="text-sm font-medium mt-2">{formatPrice(item.product.price * item.quantity)}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t border-border p-6 space-y-4">
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>{formatPrice(total)}</span>
              </div>
              <div className="space-y-2">
                <Link href="/checkout" onClick={() => setIsCartOpen(false)}>
                  <Button className="w-full" size="lg">
                    Proceed to Checkout
                  </Button>
                </Link>
                <Button variant="outline" className="w-full bg-transparent" onClick={() => setIsCartOpen(false)}>
                  <Link href="/products">Continue Shopping</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

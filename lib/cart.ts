import type { Product } from "./products"

export interface CartItem {
  product: Product
  quantity: number
  selectedSize?: string
  selectedColor?: string
}

export interface Cart {
  items: CartItem[]
  total: number
  itemCount: number
}

export function calculateCartTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.product.price * item.quantity, 0)
}

export function calculateItemCount(items: CartItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0)
}

export function addToCart(
  currentItems: CartItem[],
  product: Product,
  quantity = 1,
  selectedSize?: string,
  selectedColor?: string,
): CartItem[] {
  const existingItemIndex = currentItems.findIndex(
    (item) =>
      item.product.id === product.id && item.selectedSize === selectedSize && item.selectedColor === selectedColor,
  )

  if (existingItemIndex > -1) {
    const updatedItems = [...currentItems]
    updatedItems[existingItemIndex].quantity += quantity
    return updatedItems
  }

  return [...currentItems, { product, quantity, selectedSize, selectedColor }]
}

export function removeFromCart(
  currentItems: CartItem[],
  productId: string,
  selectedSize?: string,
  selectedColor?: string,
): CartItem[] {
  return currentItems.filter(
    (item) =>
      !(item.product.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor),
  )
}

export function updateCartItemQuantity(
  currentItems: CartItem[],
  productId: string,
  newQuantity: number,
  selectedSize?: string,
  selectedColor?: string,
): CartItem[] {
  if (newQuantity <= 0) {
    return removeFromCart(currentItems, productId, selectedSize, selectedColor)
  }

  return currentItems.map((item) =>
    item.product.id === productId && item.selectedSize === selectedSize && item.selectedColor === selectedColor
      ? { ...item, quantity: newQuantity }
      : item,
  )
}

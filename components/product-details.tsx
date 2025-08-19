"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Star, Heart, Share2 } from "lucide-react"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { getProductById, formatPrice } from "@/lib/products"

interface ProductDetailsProps {
  productId: string
}

export function ProductDetails({ productId }: ProductDetailsProps) {
  const [selectedSize, setSelectedSize] = useState("")
  const [isWishlisted, setIsWishlisted] = useState(false)

  const product = getProductById(productId)

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
        <p className="text-muted-foreground">The product you're looking for doesn't exist.</p>
      </div>
    )
  }

  if (!selectedSize && product.sizes && product.sizes.length > 0) {
    setSelectedSize(product.sizes[0])
  }

  const handleBuyNow = () => {
    // Add buy now functionality here
    console.log("[v0] Buy now:", { productId, size: selectedSize })
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4 animate-slide-in-left">
          <div className="aspect-[3/4] overflow-hidden rounded-lg bg-card">
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {product.images.slice(1).map((image, index) => (
              <div key={index} className="aspect-[3/4] overflow-hidden rounded-lg bg-card group cursor-pointer">
                <img
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} view ${index + 2}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8 animate-fade-in-up animate-delay-200">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">{product.name}</h1>
              <p className="text-muted-foreground capitalize">{product.category} • Premium Quality</p>
            </div>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="outline"
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`hover:scale-110 transition-all ${isWishlisted ? "bg-primary text-primary-foreground" : ""}`}
              >
                <Heart className={`h-4 w-4 ${isWishlisted ? "fill-current" : ""}`} />
              </Button>
              <Button size="icon" variant="outline" className="hover:scale-110 transition-all bg-transparent">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Materials & Care */}
          <div className="bg-card p-6 rounded-lg animate-scale-in">
            <h3 className="font-semibold text-card-foreground mb-2">Materials & Care</h3>
            <p className="text-sm text-muted-foreground mb-4">{product.description}</p>
            <div className="bg-primary/10 p-4 rounded-lg">
              <div className="flex flex-wrap gap-2">
                {product.materials.map((material, index) => (
                  <span key={index} className="text-sm bg-primary/20 px-2 py-1 rounded">
                    {material}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="animate-fade-in-up animate-delay-300">
            <h3 className="font-semibold text-foreground mb-4">Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div className="bg-card p-6 rounded-lg animate-scale-in">
            <h3 className="font-semibold text-card-foreground mb-4">Price</h3>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl font-bold text-foreground">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm">
                    Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>
            <p className="text-sm text-muted-foreground">Free shipping on orders over ₹10,000</p>
          </div>

          {/* Available Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="animate-fade-in-up animate-delay-300">
              <h3 className="font-semibold text-foreground mb-4">Available Sizes</h3>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <Button
                    key={size}
                    variant="outline"
                    className={`px-4 py-2 hover:scale-110 transition-all ${
                      selectedSize === size
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Ratings & Reviews */}
          <div className="animate-fade-in-up animate-delay-300">
            <h3 className="font-semibold text-foreground mb-4">Ratings & Reviews</h3>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold text-foreground">{product.rating}</span>
                <div>
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{product.reviewCount} reviews</p>
                </div>
              </div>
            </div>

            {/* Rating Bars */}
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-2">
                  <span className="text-sm w-4">{stars}</span>
                  <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${stars === 5 ? 70 : stars === 4 ? 20 : 5}%` }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-8">
                    {stars === 5 ? "70%" : stars === 4 ? "20%" : "5%"}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <div className="flex gap-4 animate-fade-in-up animate-delay-300">
            <AddToCartButton product={product} selectedSize={selectedSize} className="flex-1" size="lg" />
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent hover:scale-105 transition-all"
              onClick={handleBuyNow}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

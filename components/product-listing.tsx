"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Star, ShoppingCart } from "lucide-react"

const allProducts = [
  // Dress Collection
  {
    id: "timeless-evening-dress",
    name: "Timeless A-Line Evening Dress",
    price: "₹7,499",
    originalPrice: "₹9,999",
    image: "/elegant-burgundy-dress.png",
    rating: 4.8,
    reviews: 124,
    category: "dress",
  },
  {
    id: "floral-maxi-dress",
    name: "Floral Boho Maxi Dress",
    price: "₹5,499",
    originalPrice: "₹7,079",
    image: "/floral-beige-maxi-dress.png",
    rating: 4.6,
    reviews: 89,
    category: "dress",
  },
  {
    id: "elegant-evening-gown",
    name: "Elegant Evening Gown",
    price: "₹10,799",
    originalPrice: "₹13,299",
    image: "/elegant-beige-gown.png",
    rating: 4.9,
    reviews: 156,
    category: "dress",
  },
  {
    id: "casual-summer-dress",
    name: "Casual Summer Dress",
    price: "₹3,999",
    originalPrice: "₹5,499",
    image: "/casual-beige-summer-dress.png",
    rating: 4.5,
    reviews: 78,
    category: "dress",
  },
  {
    id: "cocktail-party-dress",
    name: "Cocktail Party Dress",
    price: "₹8,999",
    originalPrice: "₹11,999",
    image: "/brown-cocktail-dress.png",
    rating: 4.7,
    reviews: 92,
    category: "dress",
  },
  // Accessories
  {
    id: "wide-brim-hat",
    name: "Wide-Brim Bucket Hat",
    price: "₹2,899",
    originalPrice: "₹3,749",
    image: "/placeholder-otqpc.png",
    rating: 4.7,
    reviews: 67,
    category: "accessories",
  },
  {
    id: "sophisticated-sun-hat",
    name: "Sophisticated Sun Hat",
    price: "₹3,579",
    originalPrice: "₹4,579",
    image: "/placeholder-a6dgi.png",
    rating: 4.8,
    reviews: 92,
    category: "accessories",
  },
  {
    id: "timeless-fedora",
    name: "Timeless Fedora",
    price: "₹3,249",
    originalPrice: "₹4,159",
    image: "/brown-timeless-fedora.png",
    rating: 4.5,
    reviews: 78,
    category: "accessories",
  },
  {
    id: "silk-scarf",
    name: "Luxury Silk Scarf",
    price: "₹2,499",
    originalPrice: "₹3,299",
    image: "/luxury-beige-silk-scarf.png",
    rating: 4.6,
    reviews: 54,
    category: "accessories",
  },
  {
    id: "statement-earrings",
    name: "Statement Gold Earrings",
    price: "₹4,999",
    originalPrice: "₹6,499",
    image: "/statement-gold-earrings.png",
    rating: 4.8,
    reviews: 112,
    category: "accessories",
  },
  // Bags
  {
    id: "boho-backpack",
    name: "Boho Leather Backpack",
    price: "₹6,649",
    originalPrice: "₹8,299",
    image: "/placeholder-ol197.png",
    rating: 4.6,
    reviews: 134,
    category: "bags",
  },
  {
    id: "vintage-handbag",
    name: "Vintage Leather Handbag",
    price: "₹7,499",
    originalPrice: "₹9,579",
    image: "/placeholder-oxm1i.png",
    rating: 4.7,
    reviews: 98,
    category: "bags",
  },
  {
    id: "urban-chic-handbag",
    name: "Urban Chic Handbag",
    price: "₹7,899",
    originalPrice: "₹9,979",
    image: "/placeholder.svg?height=400&width=300",
    rating: 4.8,
    reviews: 112,
    category: "bags",
  },
  {
    id: "crossbody-bag",
    name: "Boho Crossbody Bag",
    price: "₹4,999",
    originalPrice: "₹6,499",
    image: "/boho-brown-crossbody-bag.png",
    rating: 4.5,
    reviews: 87,
    category: "bags",
  },
  {
    id: "evening-clutch",
    name: "Evening Clutch Bag",
    price: "₹3,499",
    originalPrice: "₹4,579",
    image: "/placeholder.svg?height=400&width=300",
    rating: 4.7,
    reviews: 65,
    category: "bags",
  },
]

export function ProductListing() {
  const [activeFilter, setActiveFilter] = useState("all")

  const filteredProducts =
    activeFilter === "all" ? allProducts : allProducts.filter((product) => product.category === activeFilter)

  const categories = [
    { id: "all", label: "ALL" },
    { id: "dress", label: "DRESS" },
    { id: "accessories", label: "ACCESSORIES" },
    { id: "bags", label: "BAGS" },
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header Section */}
      <div className="relative mb-16 animate-fade-in-up">
        <div className="absolute top-0 right-0 w-24 h-24 opacity-20">
          <svg viewBox="0 0 100 100" className="w-full h-full fill-primary">
            <path d="M50 10 L60 40 L90 40 L68 58 L78 88 L50 70 L22 88 L32 58 L10 40 L40 40 Z" />
          </svg>
        </div>

        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            EXPLORE THE LATEST TRENDS AND TIMELESS CLASSICS
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto mb-8">
            Discover our curated collection of premium fashion pieces, carefully selected to elevate your style and
            express your unique personality.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeFilter === category.id ? "default" : "outline"}
                className={`${
                  activeFilter === category.id
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                } hover:scale-105 transition-all`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product, index) => (
          <div
            key={product.id}
            className={`group cursor-pointer animate-fade-in-up animate-delay-${index % 3 === 0 ? "100" : index % 3 === 1 ? "200" : "300"}`}
          >
            <Link href={`/products/${product.id}`}>
              <div className="relative overflow-hidden rounded-lg mb-4 bg-card hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button size="icon" variant="secondary" className="rounded-full hover:scale-110 transition-transform">
                    <ShoppingCart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all">
                    Shop Now →
                  </Button>
                </div>
              </div>
            </Link>

            <div className="space-y-2">
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews})
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-foreground">{product.price}</span>
                <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

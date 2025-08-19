import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getFeaturedProducts, formatPrice } from "@/lib/products"
import { AddToCartButton } from "@/components/add-to-cart-button"

export function ProductGrid() {
  const products = getFeaturedProducts(6)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            ELEVATE YOUR STYLE WITH OUR LATEST COLLECTION
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className={`bg-card border-border overflow-hidden group hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-105 animate-fade-in-up animate-delay-${index % 3 === 0 ? "100" : index % 3 === 1 ? "200" : "300"}`}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/products/${product.id}`}>
                    <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-110 transition-all"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="text-sm text-muted-foreground mb-2 capitalize">{product.category}</div>
                <h3 className="font-serif text-lg font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-primary">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>
                <AddToCartButton product={product} size="sm" className="w-full" />
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in-up">
          <Link href="/products">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all"
            >
              View All Products
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

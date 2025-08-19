import Link from "next/link"
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="font-serif text-2xl font-bold text-foreground">
              Style.Loom
            </Link>
            <p className="text-muted-foreground">Elevating your style with curated luxury fashion collections.</p>
            <div className="flex space-x-4">
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">Navigation</h3>
            <div className="space-y-2">
              <Link href="/" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/products" className="block text-muted-foreground hover:text-primary transition-colors">
                Products
              </Link>
              <Link href="/about" className="block text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">Products</h3>
            <div className="space-y-2">
              <Link href="/dresses" className="block text-muted-foreground hover:text-primary transition-colors">
                Dresses
              </Link>
              <Link href="/accessories" className="block text-muted-foreground hover:text-primary transition-colors">
                Accessories
              </Link>
              <Link href="/bags" className="block text-muted-foreground hover:text-primary transition-colors">
                Bags & Handbags
              </Link>
              <Link href="/new-arrivals" className="block text-muted-foreground hover:text-primary transition-colors">
                New Arrivals
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-foreground">Subscribe to Newsletter</h3>
            <p className="text-muted-foreground text-sm">
              Stay updated with our latest collections and exclusive offers.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-input border border-border rounded-md text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">© 2024 StyleLoom. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

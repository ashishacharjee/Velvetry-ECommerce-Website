"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function LandingHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/20 animate-fade-in-up">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-bold text-foreground hover:text-primary transition-colors">
            VELVETRY & CO.
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/products"
              className="text-foreground hover:text-primary transition-colors uppercase tracking-wide text-sm"
            >
              Collection
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-primary transition-colors uppercase tracking-wide text-sm"
            >
              About
            </Link>
            <Link
              href="/stories"
              className="text-foreground hover:text-primary transition-colors uppercase tracking-wide text-sm"
            >
              Stories
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors uppercase tracking-wide text-sm"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              <Link
                href="/products"
                className="text-foreground hover:text-primary transition-colors uppercase tracking-wide text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Collection
              </Link>
              <Link
                href="/about"
                className="text-foreground hover:text-primary transition-colors uppercase tracking-wide text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/stories"
                className="text-foreground hover:text-primary transition-colors uppercase tracking-wide text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Stories
              </Link>
              <Link
                href="/contact"
                className="text-foreground hover:text-primary transition-colors uppercase tracking-wide text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

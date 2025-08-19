"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronDown, Diamond } from "lucide-react"

export function LandingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/elegant-woman-jewelry.png"
          alt="Elegant woman with luxury jewelry"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Decorative Diamond Icon */}
          <div className="flex justify-center mb-8 animate-fade-in-up">
            <Diamond className="h-12 w-12 text-primary animate-pulse" />
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-6 animate-fade-in-up animation-delay-200">
            Elegant &
            <br />
            <span className="text-primary">Luxury</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in-up animation-delay-400">
            Remarkable Jewelry for the modern women
          </p>

          {/* CTA Button */}
          <div className="animate-fade-in-up animation-delay-600">
            <Link href="/home">
              <Button
                size="lg"
                className="bg-white text-black hover:bg-white/90 px-12 py-6 text-lg font-medium uppercase tracking-wide hover:scale-105 transition-all duration-300"
              >
                Shop Collection
              </Button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white/70" />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 animate-float">
        <div className="w-4 h-4 bg-primary rounded-full opacity-60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float animation-delay-1000">
        <div className="w-6 h-6 bg-white/30 rounded-full" />
      </div>
    </section>
  )
}

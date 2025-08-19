"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Twitter, Instagram, Linkedin } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">Hi, I'm Ashish</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From West Bengal, India. I enjoy building practical web projects, exploring AI/ML, and constantly learning new technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Profile Image */}
            <div className="lg:col-span-1 animate-slide-in-left">
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8">
                <img
                  src="https://placehold.co/150x150/E0DED7/333?text=Contact"
                  alt="Ashish Profile"
                  className="w-full h-auto rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-2 space-y-8 animate-fade-in-up animate-delay-200">
              {/* Links Section */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-card-foreground mb-6">My Links</h2>
                  <div className="space-y-4">
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <Twitter className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-foreground group-hover:text-primary transition-colors">Twitter/X</span>
                    </a>
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        LinkedIn
                      </span>
                    </a>
                    <a
                      href="mailto:www.acharjeeashish2@gmail.com"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-foreground group-hover:text-primary transition-colors">
                        www.acharjeeashish2@gmail.com
                      </span>
                    </a>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-primary/10 transition-colors group"
                    >
                      <Instagram className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      <span className="text-foreground group-hover:text-primary transition-colors">Instagram</span>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Products Section */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold text-card-foreground mb-6">My Projects</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors group">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-primary-foreground font-bold">Doc</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            AI-Doctor-Assistance
                          </h3>
                          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">2025</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Smart Health Companion with AI</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors group">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-primary-foreground font-bold">PW</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            Portfolio-Webiste
                          </h3>
                          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">2025</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Modern & Responsive Personal Portfolio Design</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-primary/5 transition-colors group">
                      <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        <span className="text-primary-foreground font-bold">FOS</span>
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            Food-Ordering-System
                          </h3>
                          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">2024</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Database-Driven Food Ordering with Python & MySQL</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center animate-fade-in-up animate-delay-300">
            <Card className="bg-primary/10 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm text-muted-foreground">Available for collaboration</span>
                </div>
                <p className="text-foreground mb-6">
                  Available for collaboration on website design and development projects. For inquiries, please email me
                  at{" "}
                  <a href="mailto:www.acharjeeashish2@gmail.com" className="text-primary hover:underline">
                    www.acharjeeashish2@gmail.com
                  </a>
                </p>
                <Button
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all"
                  onClick={() => (window.location.href = "mailto:pragadesh37@gmail.com")}
                >
                  Get In Touch
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
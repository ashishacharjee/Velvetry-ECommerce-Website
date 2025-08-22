import type React from "react"
import type { Metadata } from "next"
import { Roboto, Roboto_Mono } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/contexts/cart-context"
import { CartSidebar } from "@/components/cart-sidebar"
import Link from "next/link"

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
  weight: ["400", "500", "700"], // Regular, Medium, Bold as shown in design guide
})

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
  weight: ["400", "500"], // Regular, Medium as shown in design guide
})

export const metadata: Metadata = {
  title: "Velvetry - Luxury Jewelry",
  description: "Elegant & Luxury - Remarkable Jewelry for the modern women",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${robotoMono.variable} dark`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
      </head>
      <body className="font-sans antialiased">
        <CartProvider>
          <div className="fixed top-2 left-2 z-50">
            <Link href="/auth" className="text-sm underline">Login / Sign Up</Link>
          </div>
          {children}
          <CartSidebar />
        </CartProvider>
      </body>
    </html>
  )
}

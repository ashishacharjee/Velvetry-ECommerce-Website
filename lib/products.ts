export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  category: "necklaces" | "earrings" | "bracelets" | "rings"
  description: string
  features: string[]
  materials: string[]
  rating: number
  reviewCount: number
  inStock: boolean
  sizes?: string[]
  colors?: string[]
}

export const products: Product[] = [
  {
    id: "pearl-elegance-necklace",
    name: "Pearl Elegance Necklace",
    price: 12999,
    originalPrice: 15999,
    image: "/jewelry/pearl-necklace-1.png",
    images: ["/jewelry/pearl-necklace-1.png", "/jewelry/pearl-necklace-2.png", "/jewelry/pearl-necklace-3.png"],
    category: "necklaces",
    description:
      "Exquisite multi-strand pearl necklace crafted with premium freshwater pearls. Perfect for elegant evenings and special occasions.",
    features: [
      "Premium freshwater pearls",
      "Multi-strand design",
      "Adjustable length",
      "Sterling silver clasp",
      "Elegant gift packaging",
    ],
    materials: ["Freshwater Pearls", "Sterling Silver", "Silk Thread"],
    rating: 4.8,
    reviewCount: 124,
    inStock: true,
    sizes: ["16 inches", "18 inches", "20 inches"],
  },
  {
    id: "diamond-drop-earrings",
    name: "Diamond Drop Earrings",
    price: 24999,
    originalPrice: 29999,
    image: "/jewelry/diamond-earrings-1.png",
    images: ["/jewelry/diamond-earrings-1.png", "/jewelry/diamond-earrings-2.png"],
    category: "earrings",
    description: "Stunning diamond drop earrings featuring brilliant cut diamonds in an elegant teardrop setting.",
    features: [
      "Brilliant cut diamonds",
      "18k white gold setting",
      "Secure butterfly backs",
      "Certified diamonds",
      "Lifetime warranty",
    ],
    materials: ["18k White Gold", "Diamonds", "Rhodium Plating"],
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
  },
  {
    id: "gold-chain-bracelet",
    name: "Gold Chain Bracelet",
    price: 8999,
    originalPrice: 11999,
    image: "/jewelry/gold-bracelet-1.png",
    images: ["/jewelry/gold-bracelet-1.png", "/jewelry/gold-bracelet-2.png"],
    category: "bracelets",
    description: "Delicate 14k gold chain bracelet with intricate link design. Perfect for layering or wearing alone.",
    features: [
      "14k solid gold",
      "Intricate chain links",
      "Secure lobster clasp",
      "Hypoallergenic",
      "Adjustable length",
    ],
    materials: ["14k Gold", "Rhodium Plating"],
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    sizes: ["7 inches", "7.5 inches", "8 inches"],
  },
  {
    id: "emerald-cocktail-ring",
    name: "Emerald Cocktail Ring",
    price: 18999,
    originalPrice: 22999,
    image: "/jewelry/emerald-ring-1.png",
    images: ["/jewelry/emerald-ring-1.png", "/jewelry/emerald-ring-2.png"],
    category: "rings",
    description: "Bold emerald cocktail ring featuring a stunning center stone surrounded by sparkling diamonds.",
    features: [
      "Natural emerald center stone",
      "Diamond halo setting",
      "18k yellow gold band",
      "Certified gemstones",
      "Custom sizing available",
    ],
    materials: ["18k Yellow Gold", "Natural Emerald", "Diamonds"],
    rating: 4.8,
    reviewCount: 67,
    inStock: true,
    sizes: ["5", "6", "7", "8", "9"],
  },
  {
    id: "sapphire-tennis-necklace",
    name: "Sapphire Tennis Necklace",
    price: 32999,
    originalPrice: 39999,
    image: "/jewelry/sapphire-necklace-1.png",
    images: ["/jewelry/sapphire-necklace-1.png", "/jewelry/sapphire-necklace-2.png"],
    category: "necklaces",
    description: "Luxurious tennis necklace featuring alternating sapphires and diamonds in a continuous line.",
    features: [
      "Natural blue sapphires",
      "Round brilliant diamonds",
      "Platinum setting",
      "Secure box clasp",
      "Professional certification",
    ],
    materials: ["Platinum", "Blue Sapphires", "Diamonds"],
    rating: 4.9,
    reviewCount: 43,
    inStock: true,
    sizes: ["16 inches", "18 inches"],
  },
  {
    id: "rose-gold-hoops",
    name: "Rose Gold Hoop Earrings",
    price: 6999,
    originalPrice: 8999,
    image: "/jewelry/rose-gold-hoops-1.png",
    images: ["/jewelry/rose-gold-hoops-1.png", "/jewelry/rose-gold-hoops-2.png"],
    category: "earrings",
    description: "Classic rose gold hoop earrings with a modern twist. Perfect for everyday elegance.",
    features: ["14k rose gold", "Lightweight design", "Secure hinged closure", "Polished finish", "Comfortable wear"],
    materials: ["14k Rose Gold"],
    rating: 4.6,
    reviewCount: 203,
    inStock: true,
    sizes: ["Small (20mm)", "Medium (30mm)", "Large (40mm)"],
  },
  {
    id: "vintage-charm-bracelet",
    name: "Vintage Charm Bracelet",
    price: 14999,
    originalPrice: 18999,
    image: "/jewelry/charm-bracelet-1.png",
    images: ["/jewelry/charm-bracelet-1.png", "/jewelry/charm-bracelet-2.png"],
    category: "bracelets",
    description: "Vintage-inspired charm bracelet with intricate details and meaningful symbols.",
    features: [
      "Sterling silver base",
      "Multiple charm attachments",
      "Vintage-inspired design",
      "Adjustable length",
      "Antique finish",
    ],
    materials: ["Sterling Silver", "Antique Plating"],
    rating: 4.7,
    reviewCount: 91,
    inStock: true,
    sizes: ["7 inches", "8 inches"],
  },
  {
    id: "solitaire-engagement-ring",
    name: "Solitaire Engagement Ring",
    price: 45999,
    originalPrice: 54999,
    image: "/jewelry/solitaire-ring-1.png",
    images: ["/jewelry/solitaire-ring-1.png", "/jewelry/solitaire-ring-2.png"],
    category: "rings",
    description: "Timeless solitaire engagement ring featuring a brilliant round diamond in a classic setting.",
    features: ["1 carat round diamond", "Platinum band", "Six-prong setting", "GIA certified", "Lifetime warranty"],
    materials: ["Platinum", "Diamond"],
    rating: 5.0,
    reviewCount: 28,
    inStock: true,
    sizes: ["4", "5", "6", "7", "8", "9", "10"],
  },
  {
    id: "layered-gold-necklace",
    name: "Layered Gold Necklace Set",
    price: 16999,
    originalPrice: 21999,
    image: "/jewelry/layered-necklace-1.png",
    images: ["/jewelry/layered-necklace-1.png", "/jewelry/layered-necklace-2.png"],
    category: "necklaces",
    description: "Trendy layered necklace set with three different chain styles for a modern stacked look.",
    features: [
      "Three-piece set",
      "14k gold plated",
      "Different chain styles",
      "Adjustable lengths",
      "Tarnish resistant",
    ],
    materials: ["14k Gold Plated", "Stainless Steel Base"],
    rating: 4.5,
    reviewCount: 178,
    inStock: true,
  },
  {
    id: "crystal-chandelier-earrings",
    name: "Crystal Chandelier Earrings",
    price: 9999,
    originalPrice: 12999,
    image: "/jewelry/chandelier-earrings-1.png",
    images: ["/jewelry/chandelier-earrings-1.png", "/jewelry/chandelier-earrings-2.png"],
    category: "earrings",
    description: "Glamorous chandelier earrings featuring cascading crystals for special occasions.",
    features: ["Austrian crystals", "Silver-tone setting", "Chandelier design", "Secure post backs", "Statement piece"],
    materials: ["Austrian Crystals", "Silver Plating"],
    rating: 4.6,
    reviewCount: 134,
    inStock: true,
  },
  {
    id: "infinity-tennis-bracelet",
    name: "Infinity Tennis Bracelet",
    price: 22999,
    originalPrice: 27999,
    image: "/jewelry/tennis-bracelet-1.png",
    images: ["/jewelry/tennis-bracelet-1.png", "/jewelry/tennis-bracelet-2.png"],
    category: "bracelets",
    description: "Elegant tennis bracelet featuring infinity-shaped links set with sparkling diamonds.",
    features: [
      "Diamond-set infinity links",
      "18k white gold",
      "Secure safety clasp",
      "Flexible design",
      "Professional setting",
    ],
    materials: ["18k White Gold", "Diamonds"],
    rating: 4.8,
    reviewCount: 76,
    inStock: true,
    sizes: ["6.5 inches", "7 inches", "7.5 inches"],
  },
  {
    id: "ruby-cluster-ring",
    name: "Ruby Cluster Ring",
    price: 28999,
    originalPrice: 34999,
    image: "/jewelry/ruby-ring-1.png",
    images: ["/jewelry/ruby-ring-1.png", "/jewelry/ruby-ring-2.png"],
    category: "rings",
    description: "Stunning ruby cluster ring with multiple stones creating a bold, eye-catching design.",
    features: [
      "Natural ruby gemstones",
      "Cluster setting design",
      "14k yellow gold band",
      "Certified gemstones",
      "Unique design",
    ],
    materials: ["14k Yellow Gold", "Natural Rubies"],
    rating: 4.7,
    reviewCount: 52,
    inStock: true,
    sizes: ["5", "6", "7", "8", "9"],
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((product) => product.category === category)
}

export function getFeaturedProducts(limit = 6): Product[] {
  return products.slice(0, limit)
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`
}

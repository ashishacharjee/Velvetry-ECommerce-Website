import { Card, CardContent } from "@/components/ui/card"
import { Star, Twitter } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Thompson",
    handle: "@sarah_style",
    rating: 5,
    text: "StyleLoom exceeded my expectations! The pieces are beautifully crafted and the quality is outstanding. I've never felt more confident in my style choices.",
  },
  {
    name: "Rajesh Patel",
    handle: "@rajesh_fashion",
    rating: 5,
    text: "A fantastic way to stay up-to-date with the latest fashion trends. The curation is spot-on and the customer service is exceptional.",
  },
  {
    name: "Emily Walker",
    handle: "@emily_chic",
    rating: 5,
    text: "I love how StyleLoom helps me discover new styles that I wouldn't have found otherwise. Every piece I've ordered has been perfect.",
  },
  {
    name: "Alejandro Martinez",
    handle: "@alex_style",
    rating: 5,
    text: "StyleLoom is my go-to for finding unique pieces. The quality is consistently high and the styling advice is invaluable.",
  },
  {
    name: "Priya Sharma",
    handle: "@priya_fashion",
    rating: 5,
    text: "The attention to detail and quality of the pieces from StyleLoom is remarkable. I always receive compliments when wearing their items.",
  },
  {
    name: "Maria Rodriguez",
    handle: "@maria_style",
    rating: 5,
    text: "StyleLoom has transformed my wardrobe completely. The pieces are versatile, high-quality, and always on-trend. Highly recommend!",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            THE STYLELOOM TESTIMONIAL COLLECTION
          </h2>
          <p className="text-muted-foreground text-lg">Hear what our customers say about their StyleLoom experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.handle}</div>
                    </div>
                  </div>
                  <Twitter className="w-5 h-5 text-primary" />
                </div>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                <p className="text-card-foreground leading-relaxed">{testimonial.text}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

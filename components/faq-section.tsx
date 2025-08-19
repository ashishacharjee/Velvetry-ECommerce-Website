import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "How can I place an order on Style.com?",
    answer:
      "Simply browse our collections, add items to your cart, and proceed to checkout. We accept all major payment methods and offer secure processing.",
  },
  {
    question: "Can I modify or cancel my order after placing it?",
    answer:
      "You can modify or cancel your order within 2 hours of placement. After that, please contact our customer service team for assistance.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, Apple Pay, and Google Pay. All transactions are processed securely through our encrypted payment system.",
  },
  {
    question: "How do I initiate a return?",
    answer:
      "Returns can be initiated through your account dashboard or by contacting our customer service. Items must be returned within 30 days in original condition.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you'll receive a tracking number via email. You can also track your order status through your account dashboard.",
  },
  {
    question: "Do you offer exchanges for products?",
    answer:
      "Yes, we offer exchanges within 30 days of purchase. The item must be in original condition with tags attached. Exchange shipping is free for defective items.",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            HAVE QUESTIONS? WE HAVE ANSWERS.
          </h2>
          <p className="text-muted-foreground text-lg">Everything you need to know about shopping with StyleLoom</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              All
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Ordering
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Shipping
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Returns
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Support
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">{faq.question}</h3>
              <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

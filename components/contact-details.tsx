import { Mail, Phone, MapPin } from "lucide-react"

export function ContactDetails() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">CONTACT INFORMATION</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Email</h3>
          <p className="text-muted-foreground">support@styleloom.com</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Phone className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Phone</h3>
          <p className="text-muted-foreground">+1 (555) 123-4567</p>
        </div>

        <div className="text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold text-foreground mb-2">Location</h3>
          <p className="text-muted-foreground">San Francisco</p>
        </div>
      </div>
    </div>
  )
}

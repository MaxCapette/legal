import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Marie D.",
    role: "Propriétaire",
    content:
      "Excellent travail d'isolation des combles. L'équipe est professionnelle, ponctuelle et très soigneuse. La différence de température est notable depuis les travaux.",
    rating: 5,
  },
  {
    name: "Jean-Pierre M.",
    role: "Architecte",
    content:
      "Collaboration de longue date sur plusieurs projets publics. LEGAL est un partenaire fiable avec un vrai savoir-faire technique et des équipes compétentes.",
    rating: 5,
  },
  {
    name: "Sophie L.",
    role: "Gestionnaire de copropriété",
    content:
      "Intervention rapide et efficace pour la rénovation des cloisons de notre immeuble. Communication claire et respect des délais.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Témoignages Clients</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-[var(--orange)] text-[var(--orange)]" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


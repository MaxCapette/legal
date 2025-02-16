import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Users } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-[var(--orange)]" />
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p>02 99 43 93 27</p>
                  <p>06 80 62 74 64</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-[var(--orange)]" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>secretariat@legal-plaquiste.fr</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-[var(--orange)]" />
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p>14 Rue de l'Abbé Orain</p>
                  <p>44590 DERVAL</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Users className="h-6 w-6 text-[var(--orange)]" />
                <div>
                  <p className="font-semibold">SIRET</p>
                  <p>888 404 696 00013</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Demande de devis</h3>
              <p className="text-gray-600 mb-4">
                Contactez-nous pour toute demande de devis ou d'information. Notre équipe vous répondra dans les plus
                brefs délais.
              </p>
              <Button className="w-full bg-[var(--orange)] hover:bg-orange-600">Demander un devis</Button>
            </div>
          </div>
          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.8876563466897!2d-1.6655163237824707!3d47.66893458529755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480f8c89b0f6d10d%3A0x3f1f96c1a89f2c13!2s14%20Rue%20de%20l&#39;Abb%C3%A9%20Orain%2C%2044590%20Derval!5e0!3m2!1sfr!2sfr!4v1708075849407!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


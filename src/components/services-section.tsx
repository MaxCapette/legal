import { Card, CardContent } from "@/components/ui/card"
import { Building2, PenToolIcon as Tool, Shield } from "lucide-react"

export function ServicesSection() {
  return (
    <section id="services" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Domaines d&apos;Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <Tool className="h-8 w-8 text-[var(--orange)]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Plâtrerie</h3>
              <p className="text-gray-600 text-justify">
                Travaux de plâtrerie traditionnelle et moderne, avec une attention particulière portée aux finitions et
                à la qualité d&apos;exécution.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <Building2 className="h-8 w-8 text-[var(--orange)]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Cloisons sèches</h3>
              <p className="text-gray-600 text-justify">
                Installation de cloisons en plaques de plâtre standards et techniques, adaptées à tous types de
                configurations et exigences.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex justify-center">
                <Shield className="h-8 w-8 text-[var(--orange)]" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">Isolation</h3>
              <p className="text-gray-600 text-justify">
                Solutions complètes d&apos;isolation thermique et acoustique, incluant l&apos;isolation des combles par soufflage
                et les solutions biosourcées.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


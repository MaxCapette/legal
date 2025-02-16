import { CheckCircle2 } from "lucide-react"

export function OrganizationSection() {
  return (
    <section id="organization" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Notre Organisation</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Une équipe complète</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-orange-500" />
                <span>1 Dirigeant expérimenté</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-orange-500" />
                <span>1 Secrétaire comptable</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-orange-500" />
                <span>1 Métreur / conducteur de travaux</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-orange-500" />
                <span>6 Ouvriers qualifiés</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6">Suivi de chantier</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-orange-500 mt-1" />
                <span>Contrôle rigoureux des supports avant intervention</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-orange-500 mt-1" />
                <span>Autocontrôles réguliers pendant le chantier</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-orange-500 mt-1" />
                <span>Vérification finale approfondie</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-orange-500 mt-1" />
                <span>Outils numériques pour un suivi en temps réel</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


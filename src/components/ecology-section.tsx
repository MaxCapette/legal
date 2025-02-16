import { Award, Leaf, Truck } from "lucide-react"

export function EcologySection() {
  return (
    <section id="ecology" className="py-16 bg-gradient-to-b from-green-50 to-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Notre Engagement Environnemental</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            LEGAL s'engage activement dans une démarche écologique et durable, avec des actions concrètes pour préserver
            l'environnement.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Leaf className="h-8 w-8 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Matériaux Écologiques</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Utilisation de matériaux biosourcés</li>
              <li>Solutions d'isolation naturelles</li>
              <li>Produits à faible impact environnemental</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Truck className="h-8 w-8 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Transport Vert</h3>
            <ul className="space-y-2 text-gray-600">
              <li>3 véhicules électriques</li>
              <li>Expérimentation kit hydrogène</li>
              <li>Optimisation des déplacements</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <Award className="h-8 w-8 text-green-500 mb-4" />
            <h3 className="text-xl font-semibold mb-4">Certifications</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Label RGE</li>
              <li>Audits réguliers</li>
              <li>Formation continue</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}


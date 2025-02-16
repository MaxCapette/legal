import { Card, CardContent } from "@/components/ui/card"
import { PenToolIcon as Tool, Truck, Wrench } from "lucide-react"

export function EquipmentSection() {
  return (
    <section id="equipment" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Moyens Matériels</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4">
                <Truck className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Flotte de Véhicules</h3>
              <ul className="space-y-2 text-gray-600">
                <li>3 fourgons</li>
                <li>1 camion plateau benne</li>
                <li>2 véhicules utilitaires électriques</li>
                <li>1 véhicule léger électrique</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4">
                <Tool className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Équipements</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Lève plaque</li>
                <li>Échafaudages mobiles, PIRL</li>
                <li>Tours de 9m² à 18m²</li>
                <li>Outillage spécialisé complet</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4">
                <Wrench className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Logistique</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Approvisionnement optimisé</li>
                <li>Partenaires équipés de grues</li>
                <li>Gestion des déchets</li>
                <li>Stockage sécurisé</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}


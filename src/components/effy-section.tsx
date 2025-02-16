/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from "@/components/ui/card"


export function EffySection() {
  return (
    <section id="effy" className="py-24 scroll-mt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-4">Notre Partenaire EFFY</h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Ensemble pour une rénovation énergétique accessible
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardContent className="p-8">
              <p className="text-gray-700 leading-relaxed space-y-4">
                Dans le cadre de la rénovation énergétique, nous avons établi un partenariat 
                stratégique avec EFFY pour accompagner nos clients dans la gestion des aides 
                financières disponibles.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                Grâce à cette collaboration, nous facilitons l&apos;accès aux subventions et primes 
                permettant de financer des travaux de rénovation énergétique, en assurant une 
                prise en charge complète des démarches administratives.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                EFFY, reconnu pour son expertise en matière de transition énergétique, nous aide 
                à optimiser les solutions pour chaque projet, afin de rendre la rénovation plus 
                accessible et avantageuse pour nos clients.
              </p>
            </CardContent>
          </Card>
          
          <div className="relative group">
            <img 
              src="/images/EFFY.jpg" 
              alt="EFFY" 
              className="w-full h-auto rounded-lg shadow-md group-hover:shadow-xl transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

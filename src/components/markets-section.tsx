export function MarketsSection() {
  return (
    <section id="markets" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Marchés</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Marchés Publics</h3>
            <p className="text-gray-600">
              Une expertise reconnue dans la réalisation de projets publics d&apos;envergure, avec un respect strict des
              normes et des délais.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Marchés Privés</h3>
            <p className="text-gray-600">
              Interventions dans le tertiaire et l&apos;habitat, avec des solutions sur-mesure pour chaque projet.
            </p>
          </div>
          <div className="text-center p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Particuliers</h3>
            <p className="text-gray-600">
              Accompagnement personnalisé pour vos projets de rénovation et d&apos;amélioration de l&apos;habitat.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


/* eslint-disable @next/next/no-img-element */

export function AboutSection() {
  return (
    <section id="about" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center">Plus de 30 ans d&apos;expertise</h2>
            <div className="space-y-4 text-gray-600 text-justify">
              <p>
                Établie depuis 1990, l&apos;entreprise LEGAL s&apos;est forgée une solide réputation dans le domaine de la
                plâtrerie, des cloisons sèches et de l&apos;isolation. Notre expertise s&apos;étend aussi bien aux marchés publics
                qu&apos;aux projets privés.
              </p>
              <p>
                Suite à la reprise par l&apos;EURL LEGAL-SCHREINER en novembre 2020, nous poursuivons notre engagement
                d&apos;excellence avec la même énergie et le même savoir-faire qui ont fait notre renommée.
              </p>
              <p>
                Notre équipe de professionnels qualifiés met son expertise au service de vos projets, garantissant une
                réalisation dans les règles de l&apos;art et un respect strict des délais.
              </p>
              <p>
                Nous prenons en compte vos problématiques de coupe-feu, d&apos;acoustique et d&apos;esthétique.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="/images/projects/20230622_100217.JPG"
              alt="Réalisation intérieure par LEGAL Plâtrerie - Exemple de travaux de plâtrerie et d'isolation de haute qualité réalisés par notre équipe d'experts"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


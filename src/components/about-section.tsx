import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Plus de 30 ans d'expertise</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Établie depuis 1990, l'entreprise LEGAL s'est forgée une solide réputation dans le domaine de la
                plâtrerie, des cloisons sèches et de l'isolation. Notre expertise s'étend aussi bien aux marchés publics
                qu'aux projets privés.
              </p>
              <p>
                Suite à la reprise par l'EURL LEGAL-SCHREINER en novembre 2020, nous poursuivons notre engagement
                d'excellence avec la même énergie et le même savoir-faire qui ont fait notre renommée.
              </p>
              <p>
                Notre équipe de professionnels qualifiés met son expertise au service de vos projets, garantissant une
                réalisation dans les règles de l'art et un respect strict des délais.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230622_100217.JPG-XLOSKTbEjHSGMwpnaJdVKTFf5449zi.jpeg"
              alt="Réalisation intérieure"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}


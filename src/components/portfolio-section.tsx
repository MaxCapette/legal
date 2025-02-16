import Image from "next/image"

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Réalisations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="relative h-80">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230622_100430.JPG-PalykvWczyeBfwPBy82S9g9Y2hmR9S.jpeg"
                alt="Réalisation amphithéâtre"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold">Amphithéâtre Universitaire</h3>
            <p className="text-gray-600">
              Réalisation complète des travaux de plâtrerie et d'isolation acoustique pour cet amphithéâtre moderne.
            </p>
          </div>
          <div className="space-y-4">
            <div className="relative h-80">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/combles%20laine%CC%81s%20membranne%CC%81s%202.JPG-4PxCfgHA67Y5gnw7l2T253EyguSkd9.jpeg"
                alt="Chantier en cours"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold">Isolation de Combles</h3>
            <p className="text-gray-600">
              Mise en œuvre d'une isolation performante avec des matériaux biosourcés pour une efficacité énergétique
              optimale.
            </p>
          </div>
          <div className="space-y-4">
            <div className="relative h-80">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/20230622_100217.JPG-XLOSKTbEjHSGMwpnaJdVKTFf5449zi.jpeg"
                alt="Bureau rénové"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold">Rénovation de Bureaux</h3>
            <p className="text-gray-600">
              Aménagement complet d'espaces professionnels avec une attention particulière portée à la luminosité et au
              confort acoustique.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


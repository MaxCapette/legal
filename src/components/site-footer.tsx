import Image from "next/image"
import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20at%2010.14.55.jpeg-QYgmPYfnHq3zRQ0gE1Gp3uJJAhU7HQ.png"
              alt="LEGAL Logo"
              width={150}
              height={150}
              className="bg-white p-4 rounded-lg mb-4"
            />
            <p className="text-gray-400">Votre spécialiste en plâtrerie, cloisons sèches et isolation depuis 1990</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Plâtrerie</li>
              <li>Cloisons sèches</li>
              <li>Isolation</li>
              <li>Plafonds</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Informations</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/mentions-legales" className="hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales#politique-confidentialite" className="hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>RGE Qualibat</li>
              <li>Garantie décennale</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LEGAL. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}


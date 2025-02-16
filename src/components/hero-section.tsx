import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export function HeroSection() {
  return (
    <header className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#ffb749]/80 to-gray-900/60">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Leonardo_Kino_XL_Une_image_lgante_et_moderne_reprsentant_une_e_0.jpg-6QgfAK52zEwvANjiq1VDooQaQJRPwx.jpeg"
          alt="Réalisation bureau moderne"
          fill
          className="object-cover mix-blend-overlay"
          priority
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-16%20at%2010.14.55.jpeg-QYgmPYfnHq3zRQ0gE1Gp3uJJAhU7HQ.png"
            alt="LEGAL Logo"
            width={200}
            height={200}
            className="bg-white p-4 rounded-lg"
          />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">LEGAL</h1>
              <Badge variant="secondary" className="bg-blue-500 hover:bg-blue-600">
                RGE Qualibat
              </Badge>
            </div>
            <p className="mt-2 text-xl text-gray-300">Plâtrier - Plaquiste & Isolation</p>
            <p className="mt-1 text-lg text-orange-400">Depuis 1990</p>
          </div>
        </div>
        <div className="mt-8 flex gap-4">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
            Contactez-nous
          </Button>
          <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            Nos réalisations
          </Button>
        </div>
      </div>
    </header>
  )
}


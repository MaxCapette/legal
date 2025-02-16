/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

export function HeroSection() {
  return (
    <header className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#ffb749]/80 to-gray-900/60">
        <img
          src="/images/hero-section.jpg"
          alt="Réalisation bureau moderne"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
          <img
            src="/images/Logo2.png"
            alt="LEGAL Logo"
            className="bg-white p-4 rounded-lg w-[400px] h-[400px]"
          />
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">LEGAL</h1>
              <Badge variant="secondary" className="bg-blue-500 hover:bg-blue-600">
                RGE Qualibat
              </Badge>
            </div>
            <p className="mt-2 text-xl text-gray-300">Plâtrier - Plaquiste & Isolation</p>
            <p className="mt-1  text-[var(--orange)]">Depuis 1990</p>
          </div>
        </div>
        <div className="mt-8 flex gap-4 justify-center">
          <Button size="lg" className=" bg-[var(--orange)] hover:bg-orange-600">
            <Link href="#contact">Contactez-nous</Link>
          </Button>
          <Button size="lg" variant="outline" className=" text-[var(--orange)] border-white hover:bg-white/10">
            <Link href="#portfolio">Nos réalisations</Link>
           
          </Button>
        </div>
      </div>
    </header>
  )
}


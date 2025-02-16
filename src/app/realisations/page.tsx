// a page qui affiche les réalisations de l'entreprise
'use client'

import { projectImages } from "@/components/portfolio-section"
import { SiteFooter } from "@/components/site-footer"
import Link from "next/link"

export default function RealisationsPage() {
 
        <Link 
          href="/" 
             className="inline-block px-6 py-2 bg-[var(--orange)] text-white rounded-lg hover:bg-[var(--blueGray)] transition-colors"
        >
          Retour à l'accueil
        </Link>
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          href="/" 
             className="inline-block px-6 py-2 bg-[var(--orange)] text-white rounded-lg hover:bg-[var(--blueGray)] transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-12 text-center">Nos Réalisations</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectImages.map((image, index) => (
              <div key={index} className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                <img
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="flex h-full flex-col justify-end p-6 text-white">
                    <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                    <p className="text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <Link 
          href="/" 
          className="inline-block px-6 py-2 bg-[var(--orange)] text-white rounded-lg hover:bg-[var(--blueGray)] transition-colors"
        >
          Retour à l'accueil
        </Link>
      </div>
      <SiteFooter />
    </>
  )
}
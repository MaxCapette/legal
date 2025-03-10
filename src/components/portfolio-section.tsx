/* eslint-disable @next/next/no-img-element */
'use client'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Link from "next/link"
import { useState } from "react"

// Styles pour le carrousel
import "./portfolio-slider.css"

// Array of project images - you'll need to replace these URLs with your actual 27 image URLs
export const projectImages = [
  {
    srcBefore: "/images/projects/plafond acoustique amphi.JPG",
    srcAfter: "/images/projects/plafond acoustique amphi 2.JPG",
    alt: "Plafond acoustique amphithéâtre",
    title: "Plafond acoustique amphithéâtre",
    description: "Traitement acoustique spécifique pour amphithéâtre avec systèmes de correction sonore adaptés aux grands volumes."
  },
  {
    src: "/images/projects/20230622_100430.JPG",
    alt: "Réalisation amphithéâtre",
    title: "Amphithéâtre Universitaire",
    description: "Réalisation complète des travaux de plâtrerie et d'isolation acoustique pour cet amphithéâtre moderne."
  },
  {
    src: "/images/projects/combles lainés membrannés 2.JPG",
    alt: "Chantier en cours",
    title: "Isolation de Combles",
    description: "Mise en œuvre d'une isolation performante avec des matériaux biosourcés pour une efficacité énergétique optimale."
  },
  {
    src: "/images/projects/20230622_100217.JPG",
    alt: "Bureau rénové",
    title: "Rénovation de Bureaux",
    description: "Aménagement complet d'espaces professionnels avec une attention particulière portée à la luminosité et au confort acoustique."
  },
  {
    src: "/images/projects/cloisons fermacell 98 et chassis.JPG",
    alt: "Cloisons fermacell 98 et chassis",
    title: "Cloisons de distribution Fermacell",
    description: " Cloisons de distribution double peau de Fermacell, matériau biosourcé avec des caractéristiques coupe feu importantes, intégration de châssis vitrés et huisseries intérieures."
  },
  {
    src: "/images/projects/chassis vitré intérieur.JPG",
    alt: "Chassis vitré intérieur",
    title: "Chassis vitré intérieur",
    description: "Possibilité de mettre en œuvre des châssis PVC pour séparer des bureaux de locaux non chauffés."
  },
  {
    src: "/images/projects/doublages et cloisons acoustiques fermacell.JPG",
    alt: "doublages et cloisons acoustiques fermacell",
    title: "Doublages et cloisons acoustiques fermacell",
    description: "Doublages et cloisons acoustiques fermacell pour un chantier de rénovation de bâtiment."
  },
  {
    src: "/images/projects/doublages et cloisosn placo.JPG",
    alt: "doublages et cloisons plaques de plâtre",
    title: "Doublages et cloisons plaques de plâtre",
    description: "Réalisation de doublages et cloisons en plaques de plâtre offrant une finition impeccable et une isolation thermique optimale."
  },
  {
    src: "/images/projects/doublages et plafond placo.JPG",
    alt: "doublages et plafond plaques de plâtre",
    title: "Doublages et plafond plaques de plâtre",
    description: "Restructuration d'un ancien logement, doublages isolés, plafonds, cloisons et habillages des poteaux et linteaux existants pour un rendu moderne et homogène."
  },
  {
    src: "/images/projects/doublages membrane et ferraillage.JPG",
    alt: "doublages membrane et ferraillage",
    title: "Doublages techniques",
    description: "Installation de complexe isolant avec membrane pare-vapeur et ossature métallique pour une performance énergétique maximale."
  },
  {
    src: "/images/projects/ferraillage cloison 72.JPG",
    alt: "Structure métallique pour cloison de plâtrerie, montants espacés de 72 cm",
    title: "Ferraillage cloison",
    description: "Ferraillage cloison pour un chantier de rénovation de bâtiment."
  },
  {
    src: "/images/projects/ferraillage plafond.JPG",
    alt: "Structure métallique pour plafond suspendu en plaques de plâtre",
    title: "Ferraillage plafond",
    description: "Ferraillage plafond pour un chantier de rénovation de bâtiment."
  },
  {
    src: "/images/projects/membrane plafond.JPG",
    alt: "Membrane d'étanchéité à l'air et pare-vapeur pour plafond avant pose de plaques de plâtre",
    title: "Membrane plafond",
    description: "Installation de membranes techniques assurant l'étanchéité à l'air et la régulation hygrométrique pour un confort optimal."
  },
  {
    src: "/images/projects/membrane rampant contre chevronnage 2.JPG",
    alt: "Isolation de combles aménagés",
    title: "Isolation de combles aménagés",
    description: "Mise en place de l'isolation biosourcée, d'un contre chevronnage et d'une membrane hygrorégulante avant le ferraillage qui recevra le parement en BA13 pour les plafonds rampants et plafonds horizontaux."
  },
  {
    src: "/images/projects/membrane rampant contre chevronnage.JPG",
    alt: "membrane rampant contre chevronnage",
    title: "Membrane rampant",
    description: "Pose de membrane pare-vapeur sur rampants avec technique de contre-chevronnage pour une isolation thermique renforcée des combles."
  },
  {
    src: "/images/projects/ossatures plafonds dalles.JPG",
    alt: "ossatures plafonds dalles et placo",
    title: "Ossatures plafonds",
    description: "Réalisation d'ossatures métalliques complexes permettant l'intégration de différents types de plafonds techniques et acoustiques."
  },
  {
    src: "/images/projects/ossatures plafonds dalles et placo.JPG",
    alt: "ossatures plafonds dalles",
    title: "Ossatures plafonds dalles",
    description: "Mise en place d'ossatures techniques pour plafonds modulaires, permettant une maintenance facilitée et une adaptabilité des espaces."
  },
  {
    src: "/images/projects/placo plafonds verrières.JPG",
    alt: "placo plafonds verrières",
    title: "Restructuration d'espaces de travail",
    description: "Intégration d'une cloison avec châssis vitrés pour séparer une pièce en deux. La cloison est intégrée dans le plafond modulaire pour garantir une acoustique optimum sans avoir besoin de reprendre la totalité de la surface."
  },
  {
    src: "/images/projects/plafond acoustique.JPG",
    alt: "Plafond avec dalles acoustiques pour une meilleure isolation phonique et correction acoustique",
    title: "Plafond acoustique",
    description: "Plafond acoustique pour un chantier de rénovation de bâtiment."
  },
  {
    src: "/images/projects/plafond dalles organic et doublages acoustiques.JPG",
    alt: "plafond dalles fibre de bois et doublages acoustiques",
    title: "Plafond dalles fibre de bois",
    description: "Installation de dalles de plafond acoustiques en fibre de bois, associés à des caissons acoustiques en applique aux mûrs pour un rendu esthétique et performant."
  },
  {
    src: "/images/projects/plafonds acoustiques et doublages placo.JPG",
    alt: "plafonds acoustiques et doublages placo",
    title: "Solutions acoustiques intégrées",
    description: "Traitement acoustique global combinant plafonds techniques et doublages pour une ambiance sonore maîtrisée."
  },
  {
    src: "/images/projects/plafonds dalles placo et chassis.JPG",
    alt: "plafonds dalles placo et chassis",
    title: "Intégration d'une cloison pour séparer 2 espaces de travail",
    description: "Intégration d'une cloison de séparation avec châssis vitrés et porte pour séparer 2 espaces de travail. Raccords sur les plafonds existants."
  },
  {
    src: "/images/projects/plafonds rampants acoustiques.JPG",
    alt: "plafonds rampants acoustiques",
    title: "Plafonds rampants acoustiques",
    description: "Mise en œuvre de plafonds rampants avec traitement acoustique intégré, adaptés aux géométries complexes des toitures."
  },
  {
    src: "/images/projects/plafond organic dalles acoustiques chassis vitrés.JPG",
    alt: "plafond fibre de bois dalles acoustiques chassis vitrés",
    title: "Plafond design acoustique",
    description: "Plafonds en dalles fibre de bois sur oassature apparente T24. Le chauffage en panneaux rayonnant eau chaude est intégré à l'ossature pour un meilleur rendu esthétique."
  },
  {
    src: "/images/projects/restructuration de locaux existants.JPG",
    alt: "restructuration de locaux existants",
    title: "Restructuration de locaux",
    description: "Intégration de cloisons et verrières pour redessiner vos pièces ou vos bureaux, avoir raccords sur les plafonds existants, en plaques de plâtre ou en plafonds modulaires."
  },
  
  
]

export function PortfolioSection() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  }

  // Add state to track which images are showing "after" version
  const [showingAfter, setShowingAfter] = useState<{ [key: number]: boolean }>({});

  const toggleImage = (index: number) => {
    setShowingAfter(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <section id="portfolio" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/realisations">
          <h2 className="text-3xl font-bold text-center mb-12 hover:text-[var(--orange)] hover:underline hover:scale-105 transform transition-all duration-300">Nos Réalisations</h2>
        </Link>
        <div className="relative slider-container">
          <Slider {...settings} className="portfolio-slider">
            {projectImages.map((image, index) => (
              <div key={index} className="px-2">
                <div className="space-y-4">
                  <div className="relative h-80">
                    {image.srcBefore && image.srcAfter ? (
                      <div 
                        className="group relative h-full cursor-pointer"
                        onClick={() => toggleImage(index)}
                      >
                        <img
                          src={showingAfter[index] ? image.srcAfter : image.srcBefore}
                          alt={image.alt}
                          className="w-full h-full object-cover rounded-lg transition-all duration-300 hover:brightness-90"
                        />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-lg">
                            Cliquez pour voir {showingAfter[index] ? 'l\'avant' : 'l\'après'}
                          </div>
                        </div>
                      </div>
                    ) : image.src && (
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-center">{image.title}</h3>
                  <p className="text-gray-600 text-justify">{image.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
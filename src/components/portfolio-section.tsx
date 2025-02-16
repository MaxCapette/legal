'use client'

import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Link from "next/link"

// Array of project images - you'll need to replace these URLs with your actual 27 image URLs
export const projectImages = [
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
    title: "Clôture de chantier",
    description: "Clôture de chantier pour un chantier de rénovation de bâtiment."
  },
  {
    src: "/images/projects/chassis vitré intérieur.JPG",
    alt: "Chassis vitré intérieur",
    title: "Chassis vitré intérieur",
    description: "Chassis vitré intérieur pour un chantier de rénovation de bâtiment."
  },
  {
    src: "/images/projects/doublages et cloisons acoustiques fermacell.JPG",
    alt: "doublages et cloisons acoustiques fermacell",
    title: "Doublages et cloisons acoustiques fermacell",
    description: "Doublages et cloisons acoustiques fermacell pour un chantier de rénovation de bâtiment."
  },
  {
    src: "/images/projects/doublages et cloisosn placo.JPG",
    alt: "doublages et cloisons placo",
    title: "Doublages et cloisons Placo",
    description: "Réalisation de doublages et cloisons en plaques de plâtre offrant une finition impeccable et une isolation thermique optimale."
  },
  {
    src: "/images/projects/doublages et plafond placo.JPG",
    alt: "doublages et plafond placo",
    title: "Doublages et plafond Placo",
    description: "Solution complète d'aménagement intérieur associant doublages muraux et plafonds pour une harmonie parfaite des espaces."
  },
  {
    src: "/images/projects/doublages membrane et ferraillage.JPG",
    alt: "doublages membrane et ferraillage",
    title: "Doublages techniques",
    description: "Installation de complexe isolant avec membrane pare-vapeur et ossature métallique pour une performance énergétique maximale."
  },
  {
    src: "/images/projects/ferraillage cloison 72.JPG",
    alt: "ferraillage cloison",
    title: "Ferraillage cloison",
    description: "Ferraillage cloison pour un chantier de rénovation de bâtiment."
  },
  {
    src: "/images/projects/ferraillage plafond.JPG",
    alt: "ferraillage plafond",
    title: "Ferraillage plafond",
    description: "Ferraillage plafond pour un chantier de rénovation de bâtiment."
  },
  {
    src: "/images/projects/grutage.JPG",
    alt: "grutage",
    title: "Grutage",
    description: "Opération de levage et manutention de matériaux avec des équipements spécialisés pour garantir une installation sécurisée et efficace."
  },
  {
    src: "/images/projects/membrane plafond.JPG",
    alt: "membrane plafond",
    title: "Membrane plafond",
    description: "Installation de membranes techniques assurant l'étanchéité à l'air et la régulation hygrométrique pour un confort optimal."
  },
  {
    src: "/images/projects/membrane rampant contre chevronnage 2.JPG",
    alt: "membrane rampant contre chevronnage 2",
    title: "Membrane rampant contre chevronnage",
    description: "Membrane rampant contre chevronnage pour un chantier de rénovation de bâtiment."
  },
  {
    src: "/images/projects/membrane rampant contre chevronnage.JPG",
    alt: "membrane rampant contre chevronnage",
    title: "Membrane rampant",
    description: "Pose de membrane pare-vapeur sur rampants avec technique de contre-chevronnage pour une isolation thermique renforcée des combles."
  },
  {
    src: "/images/projects/ossatures plafonds dalles et placo.JPG",
    alt: "ossatures plafonds dalles et placo",
    title: "Ossatures plafonds",
    description: "Réalisation d'ossatures métalliques complexes permettant l'intégration de différents types de plafonds techniques et acoustiques."
  },
  {
    src: "/images/projects/ossatures plafonds dalles.JPG",
    alt: "ossatures plafonds dalles",
    title: "Ossatures plafonds dalles",
    description: "Mise en place d'ossatures techniques pour plafonds modulaires, permettant une maintenance facilitée et une adaptabilité des espaces."
  },
  {
    src: "/images/projects/placo plafonds verrières.JPG",
    alt: "placo plafonds verrières",
    title: "Plafonds verrières",
    description: "Aménagement de plafonds avec intégration de verrières, conjuguant apport de lumière naturelle et isolation thermique."
  },
  {
    src: "/images/projects/plafond acoustique amphi 2.JPG",
    alt: "plafond acoustique amphi 2",
    title: "Plafond acoustique amphi",
    description: "Plafond acoustique amphi pour un chantier de rénovation de bâtiment."
  },
  {
    src: "/images/projects/plafond acoustique amphi.JPG",
    alt: "plafond acoustique amphi",
    title: "Plafond acoustique amphithéâtre",
    description: "Traitement acoustique spécifique pour amphithéâtre avec systèmes de correction sonore adaptés aux grands volumes."
  },
  {
    src: "/images/projects/plafond acoustique.JPG",
    alt: "plafond acoustique",
    title: "Plafond acoustique",
    description: "Plafond acoustique pour un chantier de rénovation de bâtiment."
  },
  {
    src: "/images/projects/plafond dalles organic et doublages acoustiques.JPG",
    alt: "plafond dalles organic et doublages acoustiques",
    title: "Plafond dalles organic",
    description: "Installation de dalles organiques design combinées à des doublages acoustiques pour un rendu esthétique et performant."
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
    title: "Plafonds techniques",
    description: "Intégration harmonieuse de plafonds en dalles et châssis, alliant fonctionnalité et esthétique contemporaine."
  },
  {
    src: "/images/projects/plafonds rampants acoustiques.JPG",
    alt: "plafonds rampants acoustiques",
    title: "Plafonds rampants acoustiques",
    description: "Mise en œuvre de plafonds rampants avec traitement acoustique intégré, adaptés aux géométries complexes des toitures."
  },
  {
    src: "/images/projects/plafond organic dalles acoustiques chassis vitrés.JPG",
    alt: "plafond organic dalles acoustiques chassis vitrés",
    title: "Plafond design acoustique",
    description: "Association innovante de dalles organiques, systèmes acoustiques et châssis vitrés pour des espaces modernes et confortables."
  },
  {
    src: "/images/projects/restructuration de locaux existants.JPG",
    alt: "restructuration de locaux existants",
    title: "Restructuration de locaux",
    description: "Transformation complète d'espaces existants avec optimisation des volumes et mise aux normes techniques actuelles."
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

  return (
    <section id="portfolio" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/realisations">
          <h2 className="text-3xl font-bold text-center mb-12 hover:text-[var(--orange)] hover:underline hover:scale-105 transform transition-all duration-300">Nos Réalisations</h2>
        </Link>
        <Slider {...settings} className="portfolio-slider">
          {projectImages.map((image, index) => (
            <div key={index} className="px-2">
              <div className="space-y-4">
                <div className="relative h-80">
                  <img
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold">{image.title}</h3>
                <p className="text-gray-600">{image.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  )
}


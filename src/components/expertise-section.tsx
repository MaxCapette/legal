/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from "@/components/ui/card"

const expertiseData = [
    {
      title: "Les chappes sèches",
      description:
        "Mise en œuvre de dalles se composant de 2 plaques fibres-gypse de 10 ou 12,5mm chacune, avec ou sans isolant collé, avec un décallage de 5cm, cette battue permettant un assemblage très stable. Ces dalles sont posées sur un ragréage en granules sèches ou sur nid d'abeilles cartonnés remplis de granules de remplissage. Ce système apporte confort phonique et thermique, il permet aussi de rattraper des différence de niveaux ou des défauts de planéité du sol (vieux planchers faisant des vagues).",
      images: ["/images/projects/2b-CHP3-Chantier-Pleyel.jpeg", "/images/projects/pdt__2425.jpg"],
    },
    {
      title: "Les baffles acoustiques",
      description:
        "Installation de baffles acoustiques en plafond, efficaces et esthétiques. Ce dispositif permet de traiter l'acoustique d'une salle, de cours, de réunion, d'attente, de conseil, etc.",
      images: ["/images/projects/plafond acoustique terminé.JPG", "/images/projects/plafond acoustique.JPG"],
    },
    {
      title: "Les cloisons modulaires",
      description:
        "Pour créer ou découper des espaces de travail, réorganiser des bureaux ou retrouver de l'intimité, nous pouvons mettre en œuvre des cloisons modulaires sur des projets neufs ou en intégration de l'existant, avec raccordement sur les plafonds en place pour limiter l'ampleur des travaux.",
      images: [
        "/images/projects/agencement-cloison-modulaires-ifs-caen-calvados-normandie.JPG",
        "/images/projects/1625558443-CLOISON-MODULAIRE.JPG",
      ],
    },
  ]

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Notre Savoir-faire</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4 text-center">{item.title}</h3>
                <div className="flex flex-col gap-4 mb-4">
                  {item.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="overflow-hidden rounded-lg">
                      <img
                        src={image}
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-150"
                      />
                    </div>
                  ))}
                </div>
                <p className="text-gray-600 text-justify">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 
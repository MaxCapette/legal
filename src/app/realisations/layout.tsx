import type React from "react"

export const metadata = {
  title: "Nos Réalisations | LEGAL Plâtrerie",
  description: "Découvrez les différentes réalisations de l'entreprise LEGAL, plâtrier plaquiste à Derval. Projets d'isolation, de plâtrerie et de plafonds.",
  keywords: "réalisations, projets, LEGAL plâtrerie, plâtrerie, isolation, plafonds, Derval, cloisons sèches",
  openGraph: {
    title: "Nos Réalisations | LEGAL Plâtrerie",
    description: "Découvrez les différentes réalisations de l'entreprise LEGAL, plâtrier plaquiste à Derval. Projets d'isolation, de plâtrerie et de plafonds.",
    images: [
      {
        url: '/images/projects/20230622_100217.JPG',
        width: 800,
        height: 600,
        alt: 'Réalisations LEGAL Plâtrerie',
      },
    ],
  },
}

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 
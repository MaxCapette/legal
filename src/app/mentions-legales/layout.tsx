import type React from "react"

export const metadata = {
  title: "Mentions Légales & Politique de Confidentialité | LEGAL Plâtrerie",
  description: "Mentions légales et politique de confidentialité de l'entreprise LEGAL, plâtrier plaquiste à Derval. Informations sur l'éditeur du site et conditions d'utilisation.",
  keywords: "mentions légales, politique de confidentialité, LEGAL plâtrerie, RGPD, Derval",
  openGraph: {
    title: "Mentions Légales & Politique de Confidentialité | LEGAL Plâtrerie",
    description: "Mentions légales et politique de confidentialité de l'entreprise LEGAL, plâtrier plaquiste à Derval. Informations sur l'éditeur du site et conditions d'utilisation.",
    images: [
      {
        url: '/images/Logo2.png',
        width: 800,
        height: 600,
        alt: 'Logo LEGAL Plâtrerie',
      },
    ],
  },
}

export default function MentionsLegalesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
} 
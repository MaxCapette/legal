import type React from "react"
import "../styles/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LEGAL - Plâtrier Plaquiste & Isolation - Derval",
  description: "Entreprise spécialisée en plâtrerie, cloisons sèches et isolation depuis 1990 - Derval",
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.legal-plaquiste.fr',
    title: 'LEGAL - Plâtrier Plaquiste & Isolation - Derval',
    description: 'Entreprise spécialisée en plâtrerie, cloisons sèches et isolation depuis 1990 - Derval',
    siteName: 'LEGAL Plâtrerie',
    images: [
      {
        url: '/images/Logo2.png',
        width: 800,
        height: 600,
        alt: 'Logo LEGAL Plâtrerie',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LEGAL - Plâtrier Plaquiste & Isolation - Derval',
    description: 'Entreprise spécialisée en plâtrerie, cloisons sèches et isolation depuis 1990 - Derval',
    images: ['/images/Logo2.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


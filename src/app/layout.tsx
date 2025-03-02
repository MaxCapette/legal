import type React from "react"
import "../styles/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LEGAL - Plâtrier Plaquiste & Isolation - Derval",
  description: "Entreprise spécialisée en plâtrerie, cloisons sèches et isolation depuis 1990 - Derval. Plus de 30 ans d'expertise pour vos projets de construction et rénovation.",
  keywords: "plâtrerie, plaquiste, isolation, cloisons sèches, plafonds, Derval, LEGAL, RGE, rénovation, construction",
  authors: [{ name: "LEGAL Plâtrerie" }],
  creator: "LEGAL Plâtrerie",
  publisher: "LEGAL Plâtrerie",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.legal-plaquiste.fr",
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.legal-plaquiste.fr',
    title: 'LEGAL - Plâtrier Plaquiste & Isolation - Derval',
    description: 'Entreprise spécialisée en plâtrerie, cloisons sèches et isolation depuis 1990 - Derval. Plus de 30 ans d\'expertise pour vos projets de construction et rénovation.',
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
    description: 'Entreprise spécialisée en plâtrerie, cloisons sèches et isolation depuis 1990 - Derval. Plus de 30 ans d\'expertise pour vos projets de construction et rénovation.',
    images: ['/images/Logo2.png'],
    creator: '@LEGALPlatrerie',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="google-site-verification" content="votre-code-de-verification" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


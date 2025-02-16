import type React from "react"
import "../styles/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "LEGAL - Plâtrier Plaquiste & Isolation",
  description: "Entreprise spécialisée en plâtrerie, cloisons sèches et isolation depuis 1990",
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


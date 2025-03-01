/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from "@/components/ui/card"
import { PiggyBank, Shield } from "lucide-react"
import Link from "next/link"

export function RGESection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
            <div className="relative h-[400px] flex items-center justify-center">
              <Link href="/documents/Certificat QUALIBAT 2025.pdf" target="_blank">
                <img
                  src="/images/rgequalibat.png"
                  alt="Certification RGE Qualibat"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Entreprise certifiée
            </div>
            <h2 className="text-3xl font-bold mb-6 text-center">Certification RGE Qualibat</h2>
            <p className="text-xl text-gray-600 mb-8 text-justify">
              Notre certification RGE (Reconnu Garant de l&apos;Environnement) vous garantit un travail de qualité et vous
              permet d&apos;accéder aux aides de l&apos;État pour vos travaux de rénovation énergétique.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <Shield className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">Qualité garantie</h3>
                  <p className="text-gray-600 text-sm text-justify">
                    Des audits réguliers valident notre expertise et notre savoir-faire
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <PiggyBank className="h-8 w-8 text-blue-600 mb-4" />
                  <h3 className="font-semibold mb-2">Aides financières</h3>
                  <p className="text-gray-600 text-sm text-justify">Accédez aux aides de l&apos;État : MaPrimeRénov&apos;, CEE, etc.</p>
                </CardContent>
              </Card>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}


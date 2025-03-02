export const metadata = {
  title: "Mentions Légales & Politique de Confidentialité | LEGAL Plâtrerie",
  description: "Mentions légales et politique de confidentialité de l'entreprise LEGAL, plâtrier plaquiste à Derval. Informations sur l'éditeur du site et conditions d'utilisation.",
  keywords: "mentions légales, politique de confidentialité, LEGAL plâtrerie, RGPD, Derval",
}

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Mentions Légales & Politique de Confidentialité</h1>

        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Mentions Légales</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Éditeur du site</h3>
                <p>EURL LEGAL SCHREINER</p>
                <p>14 Rue de l&apos;Abbé Orain</p>
                <p>44590 DERVAL</p>
                <p>SIRET : 888 404 696 00013</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Directeur de la publication</h3>
                <p>Mr SCHREINER Eric</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Hébergeur</h3>
                <p>[Nom de l&apos;hébergeur]</p>
                <p>[Adresse de l&apos;hébergeur]</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Politique de Confidentialité</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Collecte des données</h3>
                <p>
                  Les informations recueillies sur ce site sont enregistrées dans un fichier informatisé par LEGAL
                  SCHREINER pour la gestion de notre relation client et le traitement de vos demandes.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Utilisation des données</h3>
                <p>
                  Les données collectées seront communiquées aux seuls destinataires suivants : personnel administratif
                  et commercial de LEGAL SCHREINER.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Durée de conservation</h3>
                <p>Les données sont conservées pendant une durée de 3 ans à compter de notre dernier contact.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Vos droits</h3>
                <p>
                  Vous pouvez accéder aux données vous concernant, les rectifier, demander leur effacement ou exercer
                  votre droit à la limitation du traitement de vos données.
                </p>
                <p className="mt-2">
                  Pour exercer ces droits ou pour toute question sur le traitement de vos données, vous pouvez contacter
                  : secretariat@legal-plaquiste.fr
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <p>
              Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou
              de traçage n&apos;est utilisé.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la
              propriété intellectuelle. Tous les droits de reproduction sont réservés.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}


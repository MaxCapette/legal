"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone, Users, X } from "lucide-react"
import Contact from "@/components/contact/contact"
import { useState } from "react"


// Composant pour le schéma Nantes-Rennes
const NantesRennesSchema = () => {
  return (
    <div className="flex justify-center my-4">
      <div className="relative h-[300px] w-[200px] flex flex-col items-center">
        {/* Ligne verticale */}
        <div className="absolute h-full w-[2px] bg-black"></div>
        
        {/* Rennes (en haut) */}
        <div className="absolute top-0 -translate-y-6 font-bold">RENNES</div>
        
        {/* Derval (au milieu sur le côté avec ligne qui croise) */}
        <div className="absolute top-1/2 -translate-y-1/2 flex items-center">
          {/* Ligne horizontale qui traverse */}
          <div className="absolute right-1/2 w-[30px] h-[2px] bg-black"></div>
          <div className="ml-16 font-bold pl-6">DERVAL</div>
        </div>
        
        {/* Nantes (en bas) */}
        <div className="absolute bottom-0 translate-y-6 font-bold">NANTES</div>
      </div>
    </div>
  );
};

// Composant Modal pour le formulaire de contact
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full max-h-[90vh] overflow-y-auto relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
          aria-label="Fermer"
        >
          <X className="h-6 w-6" />
        </button>
        <h3 className="text-xl font-semibold mb-6">Demande de devis</h3>
        <Contact />
      </div>
    </div>
  );
};

export function ContactSection() {
  const [showForm, setShowForm] = useState(false);

  const openModal = () => setShowForm(true);
  const closeModal = () => setShowForm(false);

  return (
    <section id="contact" className="py-16 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Contactez-nous</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-[var(--orange)]" />
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <p>02 99 43 93 27</p>
                  <p>06 80 62 74 64</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-[var(--orange)]" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p>secretariat@legal-plaquiste.fr</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-[var(--orange)]" />
                <div>
                  <p className="font-semibold">Adresse</p>
                  <p>14 Rue de l&apos;Abbé Orain</p>
                  <p>44590 DERVAL</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Users className="h-6 w-6 text-[var(--orange)]" />
                <div>
                  <p className="font-semibold">SIRET</p>
                  <p>888 404 696 00013</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-6">Demande de devis</h3>
              <p className="text-gray-600 mb-4">
                Contactez-nous pour toute demande de devis ou d&apos;information. Notre équipe vous répondra dans les plus
                brefs délais.
              </p>
              <Button 
                className="w-full sm:w-auto bg-[var(--orange)] hover:bg-orange-600"
                onClick={openModal}
              >
                Demander un devis
              </Button>

              <ContactModal isOpen={showForm} onClose={closeModal} />
            </div>
          </div>
          <div className="h-[500px] rounded-lg overflow-hidden shadow-lg w-full">
            <h3 className="text-xl font-semibold mb-2 text-center">Notre localisation</h3>
            <p className="text-gray-600 mb-4 text-center">Situé entre Nantes et Rennes</p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d692148.9946738823!2d-2.0161319863369612!3d47.58730582607225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x480f8c89b0f6d10d%3A0x3f1f96c1a89f2c13!2s14%20Rue%20de%20l'Abb%C3%A9%20Orain%2C%2044590%20Derval!5e0!3m2!1sfr!2sfr!4v1708075849407!5m2!1sfr!2sfr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Carte montrant Derval situé entre Nantes et Rennes"
            />
          </div>
            <NantesRennesSchema />
        </div>
      </div>
    </section>
  )
}


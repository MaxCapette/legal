import { MainNav } from "@/components/main-nav"
import { HeroSection } from "@/components/hero-section"
import { RGESection } from "@/components/rge-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { MarketsSection } from "@/components/markets-section"
import { OrganizationSection } from "@/components/organization-section"
import { EquipmentSection } from "@/components/equipment-section"
import { EcologySection } from "@/components/ecology-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { SiteFooter } from "@/components/site-footer"
import { EffySection } from "@/components/effy-section"
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />
      <HeroSection />
      <RGESection />
      <AboutSection />
      <ServicesSection />
      <MarketsSection />
      <OrganizationSection />
      <EquipmentSection />
      <EffySection />
      <EcologySection />
      <TestimonialsSection />
      <PortfolioSection />
      <ContactSection />
      <SiteFooter />
    </div>
  )
}


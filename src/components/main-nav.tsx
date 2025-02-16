"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

export function MainNav() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  const navItems = [
    { label: "À propos", section: "about" },
    { label: "Services", section: "services" },
    { label: "Marchés", section: "markets" },
    { label: "Organisation", section: "organization" },
    { label: "Équipements", section: "equipment" },
    { label: "Écologie", section: "ecology" },
    { label: "Réalisations", section: "portfolio" },
    { label: "Contact", section: "contact" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/images/logo.png" 
              alt="LEGAL Logo"
              width={80}
              height={80}
              className={cn("transition-all duration-300")}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[var(--orange)]",
                  isScrolled ? "text-gray-600" : "text-white",
                )}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className={cn("hover:bg-white/10", isScrolled ? "text-gray-600" : "text-white")}
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-6">
                  {navItems.map((item) => (
                    <button
                      key={item.section}
                      onClick={() => {
                        scrollToSection(item.section)
                        document.querySelector('[data-state="open"]')?.setAttribute("data-state", "closed")
                      }}
                      className="text-left text-lg font-medium text-gray-600 hover:text-[var(--orange)]"
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection("contact")}
              className={cn(
                "transition-colors",
                isScrolled
                  ? "bg-[var(--orange)] hover:bg-orange-600 text-white"
                  : "bg-white/10 hover:bg-white/20 text-white",
              )}
            >
              Nous contacter
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}


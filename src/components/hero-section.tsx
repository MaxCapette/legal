/* eslint-disable @next/next/no-img-element */

export function HeroSection() {
  return (
    <header className="relative bg-gray-900 text-white ">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/60 to-[#ffb749]/80">
        <img
          src="/images/plan2.png"
          alt="Réalisation bureau moderne"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6">
          <img
            src="/images/Logo2.png"
            alt="LEGAL Logo"
            className="bg-white p-6 rounded-xl w-[300px] aspect-square shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>
      </div>
    </header>
  )
}


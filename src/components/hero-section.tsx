/* eslint-disable @next/next/no-img-element */

export function HeroSection() {
  return (
    <header className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-[#ffb749]/80 to-gray-900/60">
        <img
          src="/images/plan.png"
          alt="Réalisation bureau moderne"
          className="w-full h-full object-cover mix-blend-overlay"
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-6 ">
          <img
            src="/images/Logo2.png"
            alt="LEGAL Logo"
            className="bg-white p-4 rounded-lg w-[400px] aspect-square"
          />
        </div>
      </div>
    </header>
  )
}


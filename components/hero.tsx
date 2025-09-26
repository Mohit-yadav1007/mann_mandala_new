"use client"

import type React from "react"

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()

    const targetId = "what-i-do"
    const targetElement = document.querySelector(`#${targetId}`)

    if (targetElement) {
      // Primary method: scrollIntoView with smooth behavior
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    } else {
      // Fallback: scroll to approximate position
      console.warn(`Target element #${targetId} not found, using fallback scroll`)
      window.scrollTo({
        top: window.innerHeight * 0.8,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="relative overflow-hidden">
      {/* Decorative background */}
      <img
        src="/images/floral-gold.png"
        alt=""
        aria-hidden
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover opacity-20"
      />
      {/* Content layered above the ornaments */}
      <div className="relative mx-auto max-w-5xl px-3 sm:px-4 py-16 sm:py-20 md:py-28">
        <div className="mx-auto w-fit rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-xs font-medium text-amber-700 backdrop-blur animate-pop-in">
          Dot Mandala Artist • Workshops • Commissions
        </div>
        <h1 className="text-balance text-center text-4xl md:text-6xl font-semibold tracking-tight text-amber-600 mt-4 animate-pop-in">
          Mann Mandalas by Mansi
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-center text-slate-700 animate-pop-in">
          A colorful world of dot mandalas—custom art, mindful workshops, and creative corporate sessions from Pune,
          India.
        </p>
        {/* Scroll-down gesture */}
        <div className="mt-10 flex items-center justify-center animate-pop-in">
          <button
            onClick={handleScroll}
            aria-label="Scroll down to What I Do section"
            className="group inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-white/70 px-4 py-2 text-amber-700 backdrop-blur hover-raise focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/40 cursor-pointer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className="animate-bob"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
            <span className="text-sm font-medium">Scroll down</span>
          </button>
        </div>
      </div>
    </section>
  )
}

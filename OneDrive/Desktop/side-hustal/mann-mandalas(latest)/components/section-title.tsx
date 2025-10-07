"use client"
import type React from "react"

type Props = {
  children: React.ReactNode
  accentSide?: "left" | "right" // optional corner accent using mandala PNGs
}

export function SectionTitle({ children, accentSide }: Props) {
  return (
    <div className="relative mx-auto w-fit text-center px-2">
      {accentSide === "left" && (
        <img
          src="/images/decor-corner-left.png"
          alt=""
          aria-hidden
          loading="eager"
          className="pointer-events-none absolute -left-6 -top-6 w-12 opacity-20 sm:-left-8 sm:-top-7 sm:w-14 md:-left-14 md:-top-10 md:w-24"
        />
      )}
      <h2 className="text-pretty text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-amber-600">{children}</h2>
      {accentSide === "right" && (
        <img
          src="/images/decor-corner-right.png"
          alt=""
          aria-hidden
          loading="eager"
          className="pointer-events-none absolute -right-6 -top-6 w-12 opacity-20 sm:-right-8 sm:-top-7 sm:w-14 md:-right-14 md:-top-10 md:w-24"
        />
      )}
    </div>
  )
}

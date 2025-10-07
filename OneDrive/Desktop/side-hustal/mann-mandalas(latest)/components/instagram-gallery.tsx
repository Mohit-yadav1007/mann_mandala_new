"use client"

import React from "react"
import Lightbox from "./lightbox"

const FALLBACK_ITEMS = [
  { src: "/images/p3.jpg", alt: "Mandala artwork 1" },
  { src: "/images/p1.png", alt: "Mandala artworks collage" },
  { src: "/images/p2.jpg", alt: "Workshop group creating mandalas" },
]

export default function InstagramGallery() {
  const curatorId = (typeof process !== "undefined" && process.env.NEXT_PUBLIC_CURATOR_FEED_ID) || ""
  const taggboxId = (typeof process !== "undefined" && process.env.NEXT_PUBLIC_TAGGBOX_WIDGET_ID) || ""
  const instaUrl = (typeof process !== "undefined" && process.env.NEXT_PUBLIC_INSTAGRAM_URL) || "https://instagram.com/"

  const [open, setOpen] = React.useState<string | null>(null)

  React.useEffect(() => {
    // Prefer Curator.io if feed id provided
    if (curatorId) {
      const existing = document.querySelector(`script[data-curator="${curatorId}"]`)
      if (!existing) {
        const s = document.createElement("script")
        s.src = `https://cdn.curator.io/published/${curatorId}.js`
        s.async = true
        s.defer = true
        s.setAttribute("data-curator", curatorId)
        document.body.appendChild(s)
      }
      return
    }

    // Fallback: Taggbox
    if (taggboxId) {
      const existing = document.querySelector(`script[data-taggbox="${taggboxId}"]`)
      if (!existing) {
        const s = document.createElement("script")
        s.src = "https://widget.tagembed.com/embed.min.js"
        s.async = true
        s.defer = true
        s.setAttribute("data-taggbox", taggboxId)
        document.body.appendChild(s)
      }
    }
  }, [curatorId, taggboxId])

  return (
    <section id="instagram" className="bg-white">
      <div className="mx-auto max-w-6xl px-3 sm:px-4 py-12 sm:py-16 md:py-20">
        {/* Title with decorative accent on the right */}
        <div className="mb-2">{/* Reuse SectionTitle at call site to add accent; left empty here */}</div>

        {/* Curator.io embed */}
        {curatorId ? (
          <div className="mt-8">
            <div id={`curator-feed-${curatorId}`} className="curator-feed" />
            {/* Curator provides its own lightbox and responsive grid */}
          </div>
        ) : taggboxId ? (
          <div className="mt-8">
            <div
              className="taggbox-container"
              data-widget-id={taggboxId}
              data-tags="false"
              data-view-url="false"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ) : (
          // Local lightweight fallback (uses site palette, hover zoom, and opens Lightbox)
          <>
            <div className="mt-6 sm:mt-8 grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 md:gap-4">
              {FALLBACK_ITEMS.map((it, i) => (
                <button
                  key={i}
                  onClick={() => setOpen(it.src)}
                  className="group overflow-hidden rounded-lg border border-slate-200 bg-white hover:shadow-md hover-raise animate-in-up touch-target"
                  style={{ animationDelay: `${i * 80}ms` }}
                  aria-label="Open image"
                >
                  <img
                    src={it.src || "/placeholder.svg"}
                    alt={it.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </button>
              ))}
            </div>
            <Lightbox src={open} onClose={() => setOpen(null)} />
          </>
        )}

        {/* Follow button with gradient border */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <a
            href={instaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-md bg-gradient-to-r from-amber-500 to-sky-500 p-[2px] hover:from-amber-600 hover:to-sky-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50 touch-target"
          >
            <span className="block rounded-md bg-white px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-slate-900 hover-raise">
              Follow on Instagram
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

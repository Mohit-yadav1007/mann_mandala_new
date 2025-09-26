"use client"
import React from "react"
import { buildCloudinaryUrl } from "@/lib/utils"
import Lightbox from "./lightbox"

type Item = { src: string; alt: string; title: string; caption: string }

const paintings: Item[] = [
  {
    src: "/images/painting/p1.jpeg",
    alt: "Sacred Geometry Mandala",
    title: "Sacred Geometry",
    caption: "Intricate patterns that connect the divine with earthly beauty",
  },
  {
    src: "/images/painting/p2.jpeg",
    alt: "Lotus Mandala Art",
    title: "Lotus Mandala",
    caption: "Symbol of purity and enlightenment in vibrant colors",
  },
  {
    src: "/images/painting/p3.jpeg",
    alt: "Chakra Healing Painting",
    title: "Chakra Balance",
    caption: "Energy centers aligned through artistic expression",
  },
  {
    src: "/images/painting/p4.jpeg",
    alt: "Buddha Mandala Art",
    title: "Buddha Mandala",
    caption: "Peaceful meditation and inner harmony",
  },
  {
    src: "/images/painting/p5.jpeg",
    alt: "Geometric Balance",
    title: "Geometric Harmony",
    caption: "Perfect symmetry in nature's mathematical beauty",
  },
  {
    src: "/images/painting/p6.jpeg",
    alt: "Spiritual Energy Art",
    title: "Spiritual Energy",
    caption: "Channeling universal energy through mandala art",
  },
]

export default function PortfolioGrid() {
  const [openSrc, setOpenSrc] = React.useState<string | null>(null)
  
  // Duplicate the paintings for infinite scroll effect
  const duplicatedPaintings = [...paintings, ...paintings, ...paintings]
  
  return (
    <>
      {/* Scrolling Grid Container */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 animate-scroll">
          {duplicatedPaintings.map((painting, index) => (
            <div
              key={`${painting.title}-${index}`}
              className="group flex-shrink-0 w-72 sm:w-80 md:w-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer relative bg-white"
              onClick={() => setOpenSrc(painting.src)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={painting.src}
                  alt={painting.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end">
                  <div className="p-4 sm:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="font-bold text-lg sm:text-xl mb-2">{painting.title}</h3>
                    <p className="text-sm sm:text-base opacity-90 mb-3">{painting.caption}</p>
                    <div className="flex items-center gap-2 text-amber-300">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs sm:text-sm font-medium">View Full Size</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom info section */}
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-lg text-amber-800 mb-2">{painting.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{painting.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* View All Button */}
      <div className="text-center mt-12">
        <a
          href="/paintings"
          className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl touch-target"
        >
          View All Paintings
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>
      
      <Lightbox src={openSrc} onClose={() => setOpenSrc(null)} />
    </>
  )
}

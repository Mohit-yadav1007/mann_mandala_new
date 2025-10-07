"use client"
import React from "react"
import Lightbox from "./lightbox"
import { cn } from "@/lib/utils"

type PaintingItem = {
  src: string
  alt: string
  title: string
  caption: string
  technique?: string
  year?: string
}

// Generate 25 mandala paintings with different titles and captions
const paintings: PaintingItem[] = [
  {
    src: "/images/p3.jpg",
    alt: "Pastel green mandala artwork",
    title: "Pastel Green Mandala Magic",
    caption: "Serene and calming design perfect for meditation spaces",
    technique: "Acrylic on canvas",
    year: "2023"
  },
  {
    src: "/images/p1.png",
    alt: "Vibrant dot art mandala",
    title: "Vibrant Dot Art Creation",
    caption: "Colorful and energetic pieces for modern interiors",
    technique: "Dot painting",
    year: "2022"
  },
  {
    src: "/images/p2.jpg",
    alt: "Workshop group showcasing mandalas",
    title: "Celestial Harmony",
    caption: "Inspired by cosmic patterns and celestial bodies",
    technique: "Mixed media",
    year: "2023"
  },
  {
    src: "/images/p3.jpg",
    alt: "Golden lotus mandala",
    title: "Golden Lotus Mandala",
    caption: "Symbolizing purity and spiritual awakening",
    technique: "Gold leaf and acrylic",
    year: "2022"
  },
  {
    src: "/images/p1.png",
    alt: "Ocean-inspired mandala",
    title: "Ocean Waves Mandala",
    caption: "Capturing the rhythmic patterns of ocean waves",
    technique: "Watercolor",
    year: "2023"
  },
  {
    src: "/images/p2.jpg",
    alt: "Floral mandala design",
    title: "Floral Elegance",
    caption: "Intricate floral patterns in harmonious arrangement",
    technique: "Acrylic on wood",
    year: "2021"
  },
  {
    src: "/images/p3.jpg",
    alt: "Geometric mandala",
    title: "Sacred Geometry",
    caption: "Exploring mathematical patterns in spiritual art",
    technique: "Digital print",
    year: "2023"
  },
  {
    src: "/images/p1.png",
    alt: "Chakra-inspired mandala",
    title: "Chakra Balance",
    caption: "Aligning energy centers through color and form",
    technique: "Mixed media",
    year: "2022"
  },
  {
    src: "/images/p2.jpg",
    alt: "Moonlight mandala",
    title: "Moonlight Reflection",
    caption: "Serene blues and silvers capturing moonlit tranquility",
    technique: "Acrylic on canvas",
    year: "2023"
  },
  {
    src: "/images/p3.jpg",
    alt: "Autumn mandala",
    title: "Autumn Whispers",
    caption: "Warm earth tones celebrating the fall season",
    technique: "Mixed media",
    year: "2022"
  },
  {
    src: "/images/p1.png",
    alt: "Cosmic mandala",
    title: "Cosmic Journey",
    caption: "Exploring the vastness of space through sacred geometry",
    technique: "Acrylic and metallic ink",
    year: "2023"
  },
  {
    src: "/images/p2.jpg",
    alt: "Desert bloom mandala",
    title: "Desert Bloom",
    caption: "Inspired by the resilient beauty of desert flora",
    technique: "Watercolor",
    year: "2021"
  },
  {
    src: "/images/p3.jpg",
    alt: "Crystal mandala",
    title: "Crystal Vision",
    caption: "Geometric patterns inspired by crystal formations",
    technique: "Digital art",
    year: "2023"
  },
  {
    src: "/images/p1.png",
    alt: "Fire element mandala",
    title: "Fire Element",
    caption: "Vibrant reds and oranges embodying transformation",
    technique: "Acrylic on canvas",
    year: "2022"
  },
  {
    src: "/images/p2.jpg",
    alt: "Water element mandala",
    title: "Water Flow",
    caption: "Fluid patterns representing the water element",
    technique: "Watercolor and ink",
    year: "2023"
  },
  {
    src: "/images/p3.jpg",
    alt: "Earth element mandala",
    title: "Earth Connection",
    caption: "Grounding patterns celebrating our connection to earth",
    technique: "Natural pigments",
    year: "2022"
  },
  {
    src: "/images/p1.png",
    alt: "Air element mandala",
    title: "Air Whispers",
    caption: "Light and airy designs representing the element of air",
    technique: "Mixed media",
    year: "2023"
  },
  {
    src: "/images/p2.jpg",
    alt: "Sunrise mandala",
    title: "Sunrise Meditation",
    caption: "Warm hues celebrating the beginning of a new day",
    technique: "Acrylic on canvas",
    year: "2021"
  },
  {
    src: "/images/p3.jpg",
    alt: "Sunset mandala",
    title: "Sunset Reflection",
    caption: "Rich colors inspired by the day's end",
    technique: "Oil on canvas",
    year: "2023"
  },
  {
    src: "/images/p1.png",
    alt: "Mountain mandala",
    title: "Mountain Peaks",
    caption: "Geometric patterns inspired by mountain landscapes",
    technique: "Acrylic on wood",
    year: "2022"
  },
  {
    src: "/images/p2.jpg",
    alt: "Forest mandala",
    title: "Forest Whispers",
    caption: "Celebrating the interconnectedness of forest life",
    technique: "Mixed media",
    year: "2023"
  },
  {
    src: "/images/p3.jpg",
    alt: "Ocean depths mandala",
    title: "Ocean Depths",
    caption: "Exploring the mysteries of the deep sea",
    technique: "Watercolor and salt",
    year: "2022"
  },
  {
    src: "/images/p1.png",
    alt: "Desert night mandala",
    title: "Desert Night",
    caption: "The magic of starlit desert skies",
    technique: "Acrylic and metallic paint",
    year: "2023"
  },
  {
    src: "/images/p2.jpg",
    alt: "Rainforest mandala",
    title: "Rainforest Canopy",
    caption: "Lush patterns inspired by tropical rainforests",
    technique: "Mixed media",
    year: "2021"
  },
  {
    src: "/images/p3.jpg",
    alt: "Arctic mandala",
    title: "Arctic Silence",
    caption: "Minimal designs inspired by arctic landscapes",
    technique: "Watercolor on cold press paper",
    year: "2023"
  },
]

export default function PaintingsGrid() {
  const [openSrc, setOpenSrc] = React.useState<string | null>(null)
  const [openAlt, setOpenAlt] = React.useState<string>("Artwork")
  
  const handleOpenLightbox = (src: string, alt: string) => {
    setOpenSrc(src)
    setOpenAlt(alt)
  }

  return (
    <>
      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 xs:gap-3 sm:gap-4 md:gap-6">
        {paintings.map((painting, idx) => (
          <button
            key={`${painting.title}-${idx}`}
            className="group text-left rounded-xl border border-amber-100 bg-white transition-all hover:shadow-lg hover:-translate-y-1 animate-in-up focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 touch-target"
            style={{ animationDelay: `${idx * 50}ms` }}
            onClick={() => handleOpenLightbox(painting.src, painting.alt)}
          >
            <div className="relative aspect-square overflow-hidden rounded-t-xl">
              <img
                src={painting.src || "/placeholder.svg"}
                alt={painting.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:group-focus:opacity-100">
                <div className="absolute bottom-0 w-full p-2 sm:p-3">
                  <p className="text-[10px] xs:text-xs font-medium text-white">{painting.technique}</p>
                  <p className="text-[9px] xs:text-[11px] text-white/80">{painting.year}</p>
                </div>
              </div>
            </div>
            <div className="p-2 sm:p-3">
              <h3 className="text-xs sm:text-sm lg:text-base font-medium text-amber-800 line-clamp-1 leading-tight">{painting.title}</h3>
              <p className="text-[10px] sm:text-xs text-amber-700/80 line-clamp-2 leading-relaxed mt-0.5 sm:mt-1">{painting.caption}</p>
            </div>
          </button>
        ))}
      </div>
      <Lightbox src={openSrc} alt={openAlt} onClose={() => setOpenSrc(null)} />
    </>
  )
}
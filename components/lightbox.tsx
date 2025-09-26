"use client"

type Props = {
  src: string | null
  alt?: string
  onClose: () => void
}

export default function Lightbox({ src, alt = "Artwork", onClose }: Props) {
  if (!src) return null
  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-2 sm:p-4"
      onClick={onClose}
    >
      <button 
        aria-label="Close" 
        className="absolute top-2 right-2 sm:top-4 sm:right-4 text-white/90 text-xl sm:text-2xl bg-black/40 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center" 
        onClick={(e) => {
          e.stopPropagation()
          onClose()
        }}
      >
        ×
      </button>
      <div className="relative max-h-[90vh] max-w-[95vw] sm:max-h-[85vh] sm:max-w-[90vw]">
        <img
          src={src || "/placeholder.svg"}
          alt={alt}
          className="rounded-lg shadow-2xl object-contain max-h-[90vh] max-w-[95vw] sm:max-h-[85vh] sm:max-w-[90vw]"
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </div>
  )
}

import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type DecorFrameProps = {
  children: ReactNode
  className?: string
  opacity?: number // 0.0 - 1.0
  sizeClass?: string // control width responsively
  hideOnMobile?: boolean // keep minimal on xs screens
}

export default function DecorFrame({
  children,
  className,
  opacity = 0.08,
  sizeClass = "w-16 sm:w-20 md:w-28 lg:w-36",
  hideOnMobile = false,
}: DecorFrameProps) {
  const visibility = hideOnMobile ? "hidden sm:block" : ""
  return (
    <div className={cn("relative isolate px-2 py-4 sm:px-4 sm:py-6 md:px-6 md:py-8", className)}>
      {/* Top-left */}
      <img
        src="/images/decor-corner-left.png"
        alt=""
        aria-hidden="true"
        loading="eager"
        className={cn(
          "pointer-events-none select-none absolute left-0 top-0 object-contain h-auto",
          sizeClass,
          visibility,
        )}
        style={{ opacity }}
      />
      {/* Bottom-left */}
      <img
        src="/images/decor-corner-left.png"
        alt=""
        aria-hidden="true"
        loading="eager"
        className={cn(
          "pointer-events-none select-none absolute left-0 bottom-0 object-contain h-auto",
          sizeClass,
          visibility,
        )}
        style={{ opacity }}
      />
      {/* Top-right */}
      <img
        src="/images/decor-corner-right.png"
        alt=""
        aria-hidden="true"
        loading="eager"
        className={cn(
          "pointer-events-none select-none absolute right-0 top-0 object-contain h-auto",
          sizeClass,
          visibility,
        )}
        style={{ opacity }}
      />
      {/* Bottom-right */}
      <img
        src="/images/decor-corner-right.png"
        alt=""
        aria-hidden="true"
        loading="eager"
        className={cn(
          "pointer-events-none select-none absolute right-0 bottom-0 object-contain h-auto",
          sizeClass,
          visibility,
        )}
        style={{ opacity }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

import { useState, useEffect } from "react"

// useSwipe
// Detects horizontal swipe gestures and invokes callbacks.
// - onSwipeLeft: called when dragging left beyond threshold
// - onSwipeRight: called when dragging right beyond threshold
// - threshold: pixel distance to qualify as a swipe (default 50)
export const useSwipe = (
  onSwipeLeft: () => void,
  onSwipeRight: () => void,
  threshold: number = 50
) => {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  useEffect(() => {
    if (touchStart === null || touchEnd === null) return

    const distance = touchStart - touchEnd

    if (distance > threshold) {
      onSwipeLeft()
    } else if (distance < -threshold) {
      onSwipeRight()
    }

    setTouchStart(null)
    setTouchEnd(null)
  }, [touchEnd, touchStart, threshold, onSwipeLeft, onSwipeRight])

  const onTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX)
  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)

  return { onTouchStart, onTouchMove }
}

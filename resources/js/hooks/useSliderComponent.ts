import { slides } from "@/data/SliderData"
import { useCallback, useEffect, useState } from "react"

export const useSliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }, [])

  const prevSlide = useCallback(() => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return {
    currentSlide,
    setCurrentSlide,
    direction,
    setDirection,
    nextSlide,
    prevSlide
  }
}

export const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.8
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
    scale: 0.8
  })
}
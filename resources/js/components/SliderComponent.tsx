import { slides } from '@/data/SliderData'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useCallback } from 'react'

const SliderComponent = () => {
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
  }, [currentSlide, nextSlide])

  const slideVariants = {
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

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-gradient-to-br from-stone-900 to-black dark:from-stone-950 dark:to-black">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-700/10 via-transparent to-amber-600/10 dark:from-amber-700/15 dark:to-amber-600/15 animate-pulse"></div>
      
      {/* Copper accent borders */}
      <div className="fixed inset-x-0 top-0 h-0.5 bg-gradient-to-r from-amber-800/80 via-amber-600 to-amber-800/80"></div>
      <div className="fixed inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-800/80 via-amber-600 to-amber-800/80"></div>
      
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 }
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Full screen image container */}
          <div className="absolute inset-0 w-screen h-screen">
            <div className="relative w-full h-full">
              {/* Image with full screen cover */}
              <div
                className="absolute inset-0 w-full h-full bg-cover bg-center transition-transform duration-1000"
                style={{ 
                  backgroundImage: `url(${slides[currentSlide].image})`,
                  transform: 'translate3d(0, 0, 0)'
                }}
              />
              {/* Copper gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-amber-700/20 via-amber-600/15 to-transparent mix-blend-overlay"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/10 via-transparent to-amber-700/5 mix-blend-multiply"></div>

              {/* Content container - centered */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-center">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl md:text-6xl lg:text-8xl font-bold text-amber-500 drop-shadow-lg mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-600 to-amber-500"
                >
                  {slides[currentSlide].title}
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl lg:text-2xl text-amber-100 drop-shadow-md max-w-3xl"
                >
                  {slides[currentSlide].description}
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="fixed bottom-28 left-0 right-0 z-30 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1)
              setCurrentSlide(index)
            }}
            className={`h-2 rounded-full transition-all ${
              currentSlide === index
                ? "w-8 bg-gradient-to-r from-amber-600 to-amber-500"
                : "w-2 bg-amber-700/30 hover:bg-amber-600/70"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default SliderComponent
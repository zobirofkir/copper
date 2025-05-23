import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface SlideData {
  id: number
  title: string
  description: string
  image: string
}

const slides: SlideData[] = [
  {
    id: 1,
    title: 'Creative Development',
    description: 'Building innovative solutions with modern technologies',
    image: '/images/slide1.jpg'
  },
  {
    id: 2,
    title: 'Professional Design',
    description: 'Crafting beautiful and responsive user interfaces',
    image: '/images/slide2.jpg'
  },
  {
    id: 3,
    title: 'Expert Solutions',
    description: 'Delivering high-quality software solutions',
    image: '/images/slide3.jpg'
  }
]

const SliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [currentSlide])

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  }

  const nextSlide = () => {
    setDirection(1)
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-r from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <h2 className="mb-4 text-4xl font-bold text-copper-600 dark:text-copper-400 md:text-6xl">
                {slides[currentSlide].title}
              </h2>
              <p className="mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
                {slides[currentSlide].description}
              </p>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative h-64 w-full overflow-hidden rounded-lg shadow-xl md:h-96"
              >
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-4">
        <button
          onClick={prevSlide}
          className="rounded-full bg-copper-500 p-3 text-white shadow-lg transition-all hover:bg-copper-600 dark:bg-copper-600 dark:hover:bg-copper-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="rounded-full bg-copper-500 p-3 text-white shadow-lg transition-all hover:bg-copper-600 dark:bg-copper-600 dark:hover:bg-copper-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1)
              setCurrentSlide(index)
            }}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              currentSlide === index
                ? "bg-copper-500 w-8"
                : "bg-gray-400 hover:bg-copper-400"
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default SliderComponent
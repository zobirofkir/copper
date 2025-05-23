import { slides } from '@/data/SliderData'
import { useSliderComponent, slideVariants } from '@/hooks/useSliderComponent'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const SliderComponent = () => {
  const { currentSlide, direction, setCurrentSlide, setDirection } = useSliderComponent()
  const [isLoaded, setIsLoaded] = useState(false)
  
  // Particle animation effect
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, speed: number}>>([])
  
  useEffect(() => {
    // Set loaded state after component mounts for entrance animation
    setIsLoaded(true)
    
    // Generate random particles for background effect
    const particlesArray = Array.from({ length: 30 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.1
    }))
    setParticles(particlesArray)
    
    // Auto-advance slides every 7 seconds
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length
      setDirection(1)
      setCurrentSlide(nextSlide)
    }, 7000)
    
    return () => clearInterval(interval)
  }, [currentSlide, setCurrentSlide, setDirection])

  // Navigation controls
  const handlePrevSlide = () => {
    const prevSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1
    setDirection(-1)
    setCurrentSlide(prevSlide)
  }
  
  const handleNextSlide = () => {
    const nextSlide = (currentSlide + 1) % slides.length
    setDirection(1)
    setCurrentSlide(nextSlide)
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative inset-0 h-screen w-screen overflow-hidden bg-gradient-to-br from-stone-900 to-black dark:from-stone-950 dark:to-black"
    >
      {/* Animated particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: `${particle.x}%`, 
              y: `${particle.y}%`, 
              opacity: 0.2 + Math.random() * 0.3 
            }}
            animate={{ 
              y: [`${particle.y}%`, `${(particle.y + 10) % 100}%`],
              opacity: [0.2 + Math.random() * 0.3, 0.4 + Math.random() * 0.3, 0.2 + Math.random() * 0.3]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 10 / particle.speed, 
              ease: "easeInOut",
              repeatType: "reverse"
            }}
            className="absolute rounded-full bg-amber-600/10"
            style={{ 
              width: `${particle.size}px`, 
              height: `${particle.size}px`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>
      
      {/* Animated background gradient */}
      <motion.div 
        animate={{ 
          background: [
            'linear-gradient(to bottom right, rgba(180, 83, 9, 0.1), transparent, rgba(217, 119, 6, 0.1))',
            'linear-gradient(to bottom right, rgba(217, 119, 6, 0.1), transparent, rgba(180, 83, 9, 0.1))',
            'linear-gradient(to bottom right, rgba(180, 83, 9, 0.1), transparent, rgba(217, 119, 6, 0.1))'
          ]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute inset-0"
      ></motion.div>
      
      {/* Copper accent borders with animation */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-amber-800/80 via-amber-600 to-amber-800/80 origin-left"
      ></motion.div>
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-800/80 via-amber-600 to-amber-800/80 origin-right"
      ></motion.div>
      
      {/* Navigation arrows */}
      <motion.button
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 0.7 }}
        whileHover={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 0.5 }}
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-amber-100 border border-amber-600/30 hover:bg-black/50"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      
      <motion.button
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 0.7 }}
        whileHover={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 0.5 }}
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 backdrop-blur-sm text-amber-100 border border-amber-600/30 hover:bg-black/50"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>
      
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
            opacity: { duration: 0.8 },
            scale: { duration: 0.8 }
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          {/* Full screen image container */}
          <div className="absolute inset-0 w-screen h-screen">
            <div className="relative w-full h-full">
              {/* Image with full screen cover and parallax effect */}
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${slides[currentSlide].image})`,
                  transform: 'translate3d(0, 0, 0)'
                }}
              />
              
              {/* Copper gradient overlays with animated opacity */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
              ></motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="absolute inset-0 bg-gradient-to-br from-amber-700/20 via-amber-600/15 to-transparent mix-blend-overlay"
              ></motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-amber-900/10 via-transparent to-amber-700/5 mix-blend-multiply"
              ></motion.div>

              {/* Content container with staggered animations */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-center">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "120px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mb-8 overflow-hidden"
                />
                
                <motion.h2
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
                  className="text-4xl md:text-6xl lg:text-8xl font-bold drop-shadow-lg mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-400 via-amber-600 to-amber-500"
                >
                  {slides[currentSlide].title}
                </motion.h2>
                
                <motion.p
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
                  className="text-lg md:text-xl lg:text-2xl text-amber-100 drop-shadow-md max-w-3xl mb-8"
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(217, 119, 6, 1)" }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 bg-amber-600 text-amber-50 rounded-lg shadow-lg shadow-amber-900/30 transition-all duration-300"
                  >
                    En Savoir Plus
                  </motion.button>
                </motion.div>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "120px" }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className="h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mt-8 overflow-hidden"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators with improved animation */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-10 left-0 right-0 z-30 flex justify-center gap-3"
      >
        {slides.map((_, index) => (
          <motion.button
            key={index}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.2 + index * 0.1 }}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1)
              setCurrentSlide(index)
            }}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-8 bg-gradient-to-r from-amber-600 to-amber-500 shadow-md shadow-amber-600/50"
                : "w-2 bg-amber-700/30 hover:bg-amber-600/70 hover:w-4"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>
      
      {/* Slide counter */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 right-10 text-amber-500 font-mono text-sm"
      >
        <span className="text-amber-400 font-bold">{currentSlide + 1}</span>
        <span className="mx-1">/</span>
        <span className="text-amber-600/70">{slides.length}</span>
      </motion.div>
    </motion.div>
  )
}

export default SliderComponent
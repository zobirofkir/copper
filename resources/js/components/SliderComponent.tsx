import { slides } from '@/data/SliderData'
import { useSliderComponent, slideVariants } from '@/hooks/useSliderComponent'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const SliderComponent = () => {
  const { currentSlide, direction, setCurrentSlide, setDirection } = useSliderComponent()
  const [isLoaded, setIsLoaded] = useState(false)
  const [imageOpacity, setImageOpacity] = useState(0.7) // Control image opacity
  const [isDarkMode, setIsDarkMode] = useState(false) // Track dark mode
  
  /**
   * Particle animation effect - enhanced for premium look
   */
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, speed: number, color: string}>>([])
  
  useEffect(() => {
    setIsLoaded(true)
    
    // Check for dark mode preference
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(darkModeQuery.matches)
    
    // Listen for changes in color scheme preference
    const darkModeListener = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches)
    }
    darkModeQuery.addEventListener('change', darkModeListener)
    
    /**
     * Generate premium particles for background effect with copper tones
     */
    const particlesArray = Array.from({ length: 40 }, () => {
      // Create copper-toned particles with varying colors
      const copperColors = ['#b87333', '#cd7f32', '#a05a2c', '#d2691e', '#e6be8a'];
      return {
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        speed: Math.random() * 0.5 + 0.1,
        color: copperColors[Math.floor(Math.random() * copperColors.length)]
      }
    })
    setParticles(particlesArray)
    
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length
      setDirection(1)
      setCurrentSlide(nextSlide)
    }, 8000) // Slightly longer for better viewing experience
    
    return () => {
      clearInterval(interval)
      darkModeQuery.removeEventListener('change', darkModeListener)
    }
  }, [currentSlide, setCurrentSlide, setDirection])

  /**
   * Navigation controls
   */
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
      className={`relative inset-0 h-screen w-screen overflow-hidden bg-gradient-to-br ${
        isDarkMode ? 'from-stone-900 to-black' : 'from-stone-100 to-stone-300'
      }`}
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
            className="absolute rounded-full bg-amber-600/10 dark:bg-amber-600/10"
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
          background: isDarkMode ? [
            'linear-gradient(to bottom right, rgba(180, 83, 9, 0.1), transparent, rgba(217, 119, 6, 0.1))',
            'linear-gradient(to bottom right, rgba(217, 119, 6, 0.1), transparent, rgba(180, 83, 9, 0.1))',
            'linear-gradient(to bottom right, rgba(180, 83, 9, 0.1), transparent, rgba(217, 119, 6, 0.1))'
          ] : [
            'linear-gradient(to bottom right, rgba(180, 83, 9, 0.05), transparent, rgba(217, 119, 6, 0.05))',
            'linear-gradient(to bottom right, rgba(217, 119, 6, 0.05), transparent, rgba(180, 83, 9, 0.05))',
            'linear-gradient(to bottom right, rgba(180, 83, 9, 0.05), transparent, rgba(217, 119, 6, 0.05))'
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
        className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-amber-700/60 via-amber-500 to-amber-700/60 dark:from-amber-800/80 dark:via-amber-600 dark:to-amber-800/80 origin-left"
      ></motion.div>
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-amber-700/60 via-amber-500 to-amber-700/60 dark:from-amber-800/80 dark:via-amber-600 dark:to-amber-800/80 origin-right"
      ></motion.div>
      
      {/* Navigation arrows */}
      <motion.button
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 0.7 }}
        whileHover={{ opacity: 1, scale: 1.1 }}
        transition={{ duration: 0.5 }}
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-stone-200/50 dark:bg-black/30 backdrop-blur-sm text-amber-800 dark:text-amber-100 border border-amber-500/30 dark:border-amber-600/30 hover:bg-stone-300/60 dark:hover:bg-black/50"
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
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full bg-stone-200/50 dark:bg-black/30 backdrop-blur-sm text-amber-800 dark:text-amber-100 border border-amber-500/30 dark:border-amber-600/30 hover:bg-stone-300/60 dark:hover:bg-black/50"
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
              {/* Premium image with controlled opacity and enhanced parallax effect */}
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${slides[currentSlide].image})`,
                  opacity: imageOpacity,
                  transform: 'translate3d(0, 0, 0)',
                  filter: 'brightness(0.85) contrast(1.1)'
                }}
              />
              
              {/* Enhanced copper gradient overlays with animated opacity */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.92 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 bg-gradient-to-t from-stone-800/90 via-stone-500/50 to-transparent dark:from-black/95 dark:via-black/60 dark:to-transparent"
              ></motion.div>
              
              {/* Premium copper overlay effects */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.2 }}
                className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-amber-500/15 to-transparent dark:from-amber-700/25 dark:via-amber-600/20 dark:to-transparent mix-blend-overlay"
              ></motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.4, delay: 0.3 }}
                className="absolute inset-0 bg-gradient-to-t from-amber-800/10 via-transparent to-amber-600/5 dark:from-amber-900/15 dark:via-transparent dark:to-amber-700/10 mix-blend-multiply"
              ></motion.div>
              
              {/* Premium light rays effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: [0, 0.3, 0.1, 0.3, 0],
                  backgroundPosition: ['0% 0%', '100% 100%']
                }}
                transition={{ 
                  duration: 15, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(217,119,6,0.15)_0%,_transparent_70%)]"
                style={{ backgroundSize: '200% 200%' }}
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
                  transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 90 }}
                  className="relative text-4xl md:text-6xl lg:text-8xl font-bold mb-6"
                >
                  <span className="absolute inset-0 bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 dark:from-amber-300 dark:via-amber-500 dark:to-amber-400 blur-sm opacity-70">
                    Cuivre Raid
                  </span>
                  <span className="relative bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600 dark:from-amber-200 dark:via-amber-500 dark:to-amber-300 drop-shadow-[0_0_25px_rgba(217,119,6,0.3)]">
                    Cuivre Raid
                  </span>
                </motion.h2>
                
                <motion.p
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
                  className="text-lg md:text-xl lg:text-2xl text-amber-900 dark:text-amber-100 drop-shadow-md max-w-3xl mb-8"
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: isDarkMode ? "rgba(217, 119, 6, 1)" : "rgba(180, 83, 9, 1)" }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 bg-amber-700 dark:bg-amber-600 text-amber-50 rounded-lg shadow-lg shadow-amber-800/30 dark:shadow-amber-900/30 transition-all duration-300"
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
                ? "w-8 bg-gradient-to-r from-amber-700 to-amber-600 dark:from-amber-600 dark:to-amber-500 shadow-md shadow-amber-700/40 dark:shadow-amber-600/50"
                : "w-2 bg-amber-600/30 dark:bg-amber-700/30 hover:bg-amber-700/60 dark:hover:bg-amber-600/70 hover:w-4"
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
        className="absolute bottom-10 right-10 text-amber-700 dark:text-amber-500 font-mono text-sm"
      >
        <span className="text-amber-800 dark:text-amber-400 font-bold">{currentSlide + 1}</span>
        <span className="mx-1">/</span>
        <span className="text-amber-700/70 dark:text-amber-600/70">{slides.length}</span>
      </motion.div>
    </motion.div>
  )
}

export default SliderComponent
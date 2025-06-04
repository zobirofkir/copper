import { slides } from '@/data/SliderData'
import { useSliderComponent, slideVariants } from '@/hooks/useSliderComponent'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

const SliderComponent = () => {
  const { currentSlide, direction, setCurrentSlide, setDirection } = useSliderComponent()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false) 
  
  /**
   * Particle animation effect - elegant monochrome style
   */
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, speed: number, opacity: number}>>([])
  
  useEffect(() => {
    setIsLoaded(true)
    
    /**
     * Check for dark mode preference
     */
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(darkModeQuery.matches)
    
    /**
     * Listen for changes in color scheme preference
     */
    const darkModeListener = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches)
    }
    darkModeQuery.addEventListener('change', darkModeListener)
    
    /**
     * Generate elegant particles for background effect with monochrome tones
     */
    const particlesArray = Array.from({ length: 30 }, () => {
      return {
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 0.5,
        speed: Math.random() * 0.4 + 0.1,
        opacity: Math.random() * 0.15 + 0.05
      }
    })
    setParticles(particlesArray)
    
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % slides.length
      setDirection(1)
      setCurrentSlide(nextSlide)
    }, 8000)
    
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
      className="relative inset-0 h-screen w-screen overflow-hidden bg-gray-100 dark:bg-gray-900 mt-10"
    >
      {/* Elegant particles background */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: `${particle.x}%`, 
              y: `${particle.y}%`, 
              opacity: particle.opacity
            }}
            animate={{ 
              y: [`${particle.y}%`, `${(particle.y + 10) % 100}%`],
              opacity: [particle.opacity, particle.opacity * 1.5, particle.opacity]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 10 / particle.speed, 
              ease: "easeInOut",
              repeatType: "reverse"
            }}
            className={`absolute rounded-full ${isDarkMode ? 'bg-white' : 'bg-black'}`}
            style={{ 
              width: `${particle.size}px`, 
              height: `${particle.size}px`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>
      
      {/* Subtle gradient overlay */}
      <motion.div 
        animate={{ 
          opacity: [0.6, 0.7, 0.6]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className={`absolute inset-0 bg-gradient-to-b ${
          isDarkMode 
            ? 'from-black/20 via-transparent to-black/40' 
            : 'from-white/30 via-transparent to-gray-200/50'
        }`}
      ></motion.div>
      
      {/* Elegant accent borders with animation */}
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.7 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className={`absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r ${
          isDarkMode 
            ? 'from-transparent via-white to-transparent' 
            : 'from-transparent via-black to-transparent'
        } origin-left`}
      ></motion.div>
      <motion.div 
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 0.7 }}
        transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
        className={`absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r ${
          isDarkMode 
            ? 'from-transparent via-white to-transparent' 
            : 'from-transparent via-black to-transparent'
        } origin-right`}
      ></motion.div>
      
      {/* Navigation arrows - refined minimal style */}
      <motion.button
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 0.7 }}
        whileHover={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 0.5 }}
        onClick={handlePrevSlide}
        className={`absolute left-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-sm ${
          isDarkMode 
            ? 'bg-black/20 text-white border border-white/20 hover:bg-black/40' 
            : 'bg-white/30 text-black border border-black/10 hover:bg-white/50'
        }`}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      
      <motion.button
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 0.7 }}
        whileHover={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 0.5 }}
        onClick={handleNextSlide}
        className={`absolute right-6 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center rounded-full backdrop-blur-sm ${
          isDarkMode 
            ? 'bg-black/20 text-white border border-white/20 hover:bg-black/40' 
            : 'bg-white/30 text-black border border-black/10 hover:bg-white/50'
        }`}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
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
              {/* Image with elegant parallax effect */}
              <motion.div
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full bg-cover bg-center"
                style={{ 
                  backgroundImage: `url(${slides[currentSlide].image})`,
                  transform: 'translate3d(0, 0, 0)',
                }}
              />
              
              {/* Elegant monochrome overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.85 }}
                transition={{ duration: 1.2 }}
                className={`absolute inset-0 ${
                  isDarkMode 
                    ? 'bg-gradient-to-t from-black/95 via-black/70 to-black/30' 
                    : 'bg-gradient-to-t from-gray-900/85 via-gray-800/60 to-gray-700/30'
                }`}
              ></motion.div>
              
              {/* Subtle grain texture overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                transition={{ duration: 1.4, delay: 0.2 }}
                className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"
                style={{ mixBlendMode: 'overlay' }}
              ></motion.div>

              {/* Content container with staggered animations */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-center">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "80px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`h-[1px] ${isDarkMode ? 'bg-white/50' : 'bg-white/80'} mb-8 overflow-hidden`}
                />
                
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 90 }}
                  className="relative text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-6 text-white"
                >
                  <span className="relative">
                    Cuivre Raid
                  </span>
                </motion.h2>
                
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
                  className="text-lg md:text-xl lg:text-2xl text-gray-200 font-light tracking-wide max-w-3xl mb-8"
                >
                  {slides[currentSlide].description}
                </motion.p>
                
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 bg-transparent border border-white/30 text-white tracking-wider rounded-none hover:bg-white/10 transition-all duration-300"
                  >
                    En Savoir Plus
                  </motion.button>
                </motion.div>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "80px" }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className={`h-[1px] ${isDarkMode ? 'bg-white/50' : 'bg-white/80'} mt-8 overflow-hidden`}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators with minimal design */}
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
            className={`h-[2px] transition-all duration-300 ${
              currentSlide === index
                ? "w-8 bg-white"
                : "w-4 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </motion.div>
      
      {/* Slide counter - minimal style */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 right-10 text-white/70 font-light text-sm tracking-widest"
      >
        <span className="text-white font-normal">{currentSlide + 1}</span>
        <span className="mx-1">/</span>
        <span>{slides.length}</span>
      </motion.div>
    </motion.div>
  )
}

export default SliderComponent
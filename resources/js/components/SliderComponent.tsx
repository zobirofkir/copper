import { slides } from '@/data/SliderData'
import { useSliderComponent, slideVariants } from '@/hooks/useSliderComponent'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useLanguage } from './header/useLanguage'
import { t } from '../translations/headerTranslations'
import { getSliderTranslation } from '../translations/sliderTranslations'

const SliderComponent = () => {
  const { currentSlide, direction, setCurrentSlide, setDirection } = useSliderComponent()
  const [currentLanguage, setCurrentLanguage] = useState('')
  const { language } = useLanguage()
  const [isLoaded, setIsLoaded] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0
  })
  
  /**
   * Particle animation effect - elegant monochrome style
   */
  const [particles, setParticles] = useState<Array<{x: number, y: number, size: number, speed: number, opacity: number}>>([])
  
  // Update component when language changes
  useEffect(() => {
    setCurrentLanguage(language)
  }, [language])
  
  useEffect(() => {
    setIsLoaded(true)
    
    /**
     * Check for dark mode preference
     */
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    setIsDarkMode(darkModeQuery.matches)
    
    /**
     * Check for mobile screen size - improved breakpoints
     */
    const mobileQuery = window.matchMedia('(max-width: 768px)')
    setIsMobile(mobileQuery.matches)
    
    /**
     * Update screen dimensions for responsive calculations
     */
    const updateScreenSize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
      setIsMobile(window.innerWidth <= 768)
    }
    
    window.addEventListener('resize', updateScreenSize)
    updateScreenSize()
    
    /**
     * Listen for changes in color scheme preference
     */
    const darkModeListener = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches)
    }
    darkModeQuery.addEventListener('change', darkModeListener)
    
    /**
     * Listen for changes in screen size
     */
    const mobileListener = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }
    mobileQuery.addEventListener('change', mobileListener)
    
    /**
     * Listen for language changes
     */
    const handleLanguageChange = (e: CustomEvent) => {
      setCurrentLanguage(e.detail.language)
    }
    window.addEventListener('languageChanged', handleLanguageChange as EventListener)
    
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
      mobileQuery.removeEventListener('change', mobileListener)
      window.removeEventListener('resize', updateScreenSize)
      window.removeEventListener('languageChanged', handleLanguageChange as EventListener)
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
      className="relative inset-0 h-screen w-screen overflow-hidden bg-gray-100 dark:bg-gray-900"
    >
      {/* Elegant particles background - optimized for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Reduce particles on mobile for better performance */}
        {particles.slice(0, isMobile ? 15 : particles.length).map((particle, i) => (
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
            ? 'from-black/30 via-transparent to-black/50' 
            : 'from-white/40 via-transparent to-gray-200/60'
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
      
      {/* Navigation arrows - refined minimal style with responsive positioning */}
      <motion.button
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: isMobile ? 0.9 : 0.7 }}
        whileHover={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 0.5 }}
        onClick={handlePrevSlide}
        className={`absolute left-2 sm:left-4 md:left-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full backdrop-blur-sm ${
          isDarkMode 
            ? 'bg-black/30 text-white border border-white/20 hover:bg-black/40' 
            : 'bg-white/40 text-black border border-black/10 hover:bg-white/50'
        }`}
        aria-label={getSliderTranslation('previousSlide', currentLanguage || language)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      
      <motion.button
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: isMobile ? 0.9 : 0.7 }}
        whileHover={{ opacity: 1, scale: 1.05 }}
        transition={{ duration: 0.5 }}
        onClick={handleNextSlide}
        className={`absolute right-2 sm:right-4 md:right-6 top-1/2 -translate-y-1/2 z-30 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full backdrop-blur-sm ${
          isDarkMode 
            ? 'bg-black/30 text-white border border-white/20 hover:bg-black/40' 
            : 'bg-white/40 text-black border border-black/10 hover:bg-white/50'
        }`}
        aria-label={getSliderTranslation('nextSlide', currentLanguage || language)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              {/* Image with elegant parallax effect - optimized for mobile */}
              <motion.div
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Using picture element for better responsive image handling */}
                <picture>
                  {/* Mobile-optimized image */}
                  <source 
                    media="(max-width: 768px)" 
                    srcSet={slides[currentSlide].phoneImage} 
                  />
                  {/* Desktop image */}
                  <img 
                    src={slides[currentSlide].image} 
                    alt={slides[currentSlide].title}
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    style={{ transform: 'translate3d(0, 0, 0)' }}
                  />
                </picture>
              </motion.div>
              
              {/* Elegant monochrome overlay - adjusted for better mobile contrast */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: isMobile ? 0.9 : 0.85 }}
                transition={{ duration: 1.2 }}
                className={`absolute inset-0 dark:bg-black bg-transparent`}
              ></motion.div>
              
              {/* Subtle grain texture overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.05 }}
                transition={{ duration: 1.4, delay: 0.2 }}
                className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"
                style={{ mixBlendMode: 'overlay' }}
              ></motion.div>

              {/* Content container with staggered animations - improved mobile layout */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 lg:p-16 max-w-7xl mx-auto text-center">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isMobile ? "60px" : "80px" }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`h-[1px] ${isDarkMode ? 'bg-white/50' : 'bg-white/80'} mb-4 sm:mb-8 overflow-hidden`}
                />
                
                <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 90 }}
                  className="relative text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light tracking-wider mb-3 sm:mb-6 text-white"
                >
                  <span className="relative inline-block">
                    {getSliderTranslation(slides[currentSlide].title, currentLanguage || language)}
                    <motion.span 
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 1.2, delay: 0.8 }}
                      className="absolute -bottom-1 left-0 w-full h-[1px] bg-white/40 origin-left"
                    />
                  </span>
                </motion.h2>
                
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, type: "spring", stiffness: 100 }}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 font-light tracking-wide max-w-3xl mb-4 sm:mb-8 px-2"
                >
                  {getSliderTranslation(slides[currentSlide].description, currentLanguage || language)}
                </motion.p>
                
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative px-6 sm:px-8 py-2 sm:py-3 bg-transparent overflow-hidden text-white tracking-wider text-sm sm:text-base"
                  >
                    <span className="relative z-10">{getSliderTranslation('enSavoirPlus', currentLanguage || language)}</span>
                    <span className="absolute inset-0 border border-white/30 group-hover:border-white/60 transition-colors duration-300"></span>
                    <motion.span 
                      initial={{ y: "100%" }}
                      whileHover={{ y: "0%" }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-white/10 z-0"
                    />
                  </motion.button>
                </motion.div>
                
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: isMobile ? "60px" : "80px" }}
                  transition={{ duration: 0.8, delay: 1 }}
                  className={`h-[1px] ${isDarkMode ? 'bg-white/50' : 'bg-white/80'} mt-4 sm:mt-8 overflow-hidden`}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators with minimal design - improved for mobile */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-0 right-0 z-30 flex justify-center gap-2 sm:gap-3"
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
                ? "w-6 sm:w-8 bg-white"
                : "w-3 sm:w-4 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`${getSliderTranslation('goToSlide', currentLanguage || language)} ${index + 1}`}
          />
        ))}
      </motion.div>
      
      {/* Slide counter - minimal style with responsive positioning */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 md:bottom-10 right-4 sm:right-6 md:right-10 text-white/70 font-light text-xs sm:text-sm tracking-widest"
      >
        <span className="text-white font-normal">{currentSlide + 1}</span>
        <span className="mx-1">/</span>
        <span>{slides.length}</span>
      </motion.div>
    </motion.div>
  )
}

export default SliderComponent
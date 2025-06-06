import React, { useEffect, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'
import AboutImage from '../assets/images/post 1.jpg'
import { t } from '../translations/aboutTranslations'
import { useLanguage } from '../components/header/useLanguage'

const AboutComponent = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [isLoaded, setIsLoaded] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [currentLang, setCurrentLang] = useState('en')
  const { language } = useLanguage()
  
  useEffect(() => {
    setCurrentLang(language)
    
    const handleLanguageChange = (e) => {
      setCurrentLang(e.detail.language)
    }
    
    window.addEventListener('languageChanged', handleLanguageChange)
    return () => window.removeEventListener('languageChanged', handleLanguageChange)
  }, [language])

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
    setIsLoaded(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const numberAnimation = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  }

  const featureCardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  }

  const typingVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full bg-white dark:bg-black py-20 relative overflow-hidden"
    >
      {/* Background texture */}
      <motion.div 
        animate={{ 
          background: [
            'radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 80% 70%, rgba(251, 191, 36, 0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.05) 0%, transparent 70%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      />
      {/* Subtle amber accent lines */}
      <div className="absolute top-10 left-0 w-24 h-px bg-amber-500/30"></div>
      <div className="absolute top-10 right-0 w-24 h-px bg-amber-500/30"></div>
      <div className="absolute bottom-10 left-0 w-24 h-px bg-amber-500/30"></div>
      <div className="absolute bottom-10 right-0 w-24 h-px bg-amber-500/30"></div>

      {/* Top border line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 w-full h-0.5 bg-gradient-to-r from-black via-amber-500 to-black origin-left"
      />

      <div className="container mx-auto px-6 md:px-12 relative" ref={ref}>
        {/* Main title - Sticky */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className={`sticky top-0 z-30 py-6 backdrop-blur-sm bg-white dark:bg-black transition-all duration-300 ${
            scrolled ? 'shadow-0' : ''
          }`}
        >
          <div className="flex flex-col items-center">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "80px" }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-4"
            />
            
            <motion.h2 
              variants={itemVariants}
              className="md:text-4xl text-2xl font-serif font-bold mb-4 text-black dark:text-amber-400"
            >
              {t('aboutUs', currentLang)}
            </motion.h2>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.7 }}
              className="h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto"
            />
          </div>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image section */}
          <motion.div 
            variants={itemVariants}
            className="relative group"
          >
            <motion.div 
              className="aspect-square overflow-hidden rounded-none border-8 border-white dark:border-amber-900/30 shadow-xl relative"
              transition={{ duration: 0.3 }}
              whileHover={{ boxShadow: "0 20px 25px -5px rgba(251, 191, 36, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            >
              <motion.img 
                src={AboutImage}
                alt="Artisanat en cuivre" 
                className="w-full h-full object-contain rounded-md transform transition-transform duration-2000"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-amber-900/20 via-transparent to-black/10 mix-blend-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-amber-500/40 -z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <motion.div 
              className="absolute -top-4 -right-4 w-32 h-32 border-4 border-black/20 -z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />
          </motion.div>

          {/* Text content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="text-gray-700 dark:text-gray-200"
          >
            {/* Subtitle - Sticky within its container */}
            <motion.h3 
              variants={itemVariants}
              className="sticky top-24 z-20 py-4 font-serif md:text-3xl text-2xl font-bold mb-8 text-black dark:text-amber-400 flex justify-center bg-white/50 dark:bg-black/50 backdrop-blur-sm border-b border-amber-500/20"
            >
              {Array.from(t('ourCopperHeritage', currentLang)).map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={typingVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="mb-6 text-lg leading-relaxed font-light"
            >
              {t('experienceDescription', currentLang)}
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="mb-10 text-lg leading-relaxed font-light"
            >
              {t('commitmentDescription', currentLang)}
            </motion.p>
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 gap-8 mb-10"
            >
              <motion.div 
                variants={numberAnimation}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(251, 191, 36, 0.2)" }}
                className="p-6 rounded-none bg-white dark:bg-gray-900 border-l-4 border-amber-500 shadow-md relative overflow-hidden group"
              >
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-amber-500/10 rounded-full transform group-hover:scale-150 transition-transform duration-500"></div>
                <motion.span 
                  className="block text-4xl font-serif font-bold text-black dark:text-amber-400 mb-2 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  30+
                </motion.span>
                <span className="text-gray-800 dark:text-gray-300 font-light relative z-10">{t('yearsExperience', currentLang)}</span>
              </motion.div>
              
              <motion.div 
                variants={numberAnimation}
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
                className="p-6 rounded-none bg-white dark:bg-gray-900 border-l-4 border-black dark:border-amber-500 shadow-md relative overflow-hidden group"
              >
                <div className="absolute -right-4 -top-4 w-16 h-16 bg-black/5 dark:bg-amber-500/10 rounded-full transform group-hover:scale-150 transition-transform duration-500"></div>
                <motion.span 
                  className="block text-4xl font-serif font-bold text-black dark:text-amber-400 mb-2 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  100%
                </motion.span>
                <span className="text-gray-800 dark:text-gray-300 font-light relative z-10">{t('customerSatisfaction', currentLang)}</span>
              </motion.div>
            </motion.div>
            
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(251, 191, 36, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black hover:bg-gray-900 dark:bg-amber-600 dark:hover:bg-amber-700 text-white rounded-none shadow-lg shadow-amber-900/20 hover:shadow-xl transition-all duration-300 transform relative overflow-hidden group"
            >
              <span className="relative z-10">{t('learnMore', currentLang)}</span>
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-500"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>        
      </div>
      
      {/* Bottom amber border line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 w-full h-0.5 bg-gradient-to-r from-amber-500 via-black to-amber-500 origin-right"
      />
    </motion.div>
  )
}

export default AboutComponent
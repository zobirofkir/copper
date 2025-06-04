import React, { useEffect, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'

const AboutComponent = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
    setIsLoaded(true)
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
      className="min-h-screen w-full bg-gradient-to-br from-white to-amber-50 dark:from-black dark:to-stone-900 py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          background: [
            'radial-gradient(circle at 20% 30%, rgba(217, 119, 6, 0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 80% 70%, rgba(217, 119, 6, 0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 20% 30%, rgba(217, 119, 6, 0.05) 0%, transparent 70%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Copper accent borders with animation */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 w-full h-0.5 bg-gradient-to-r from-amber-800/80 via-amber-600 to-amber-800/80 origin-left"
      />
      
      <div className="container mx-auto px-6 md:px-12 relative" ref={ref}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-8"
          />
          
          <motion.h2 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-black dark:text-white"
          >
            À Propos de Nous
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.7 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left column - Enhanced Image */}
          <motion.div 
            variants={itemVariants}
            className="relative group"
          >
            <motion.div 
              className="aspect-square overflow-hidden rounded-2xl shadow-2xl relative"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src="https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=1974&auto=format&fit=crop" 
                alt="Artisanat en cuivre" 
                className="w-full h-full object-cover transform transition-transform duration-2000"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-amber-700/30 via-transparent to-transparent mix-blend-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-amber-600/30 rounded-2xl -z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <motion.div 
              className="absolute -top-4 -right-4 w-32 h-32 border-4 border-amber-600/30 rounded-2xl -z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />
          </motion.div>

          {/* Right column - Enhanced Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="text-stone-700 dark:text-amber-100"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold mb-8 text-amber-700 dark:text-amber-500 flex justify-center"
            >
              {Array.from("Notre Héritage de Cuivre").map((char, i) => (
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
              className="mb-6 text-lg leading-relaxed"
            >
              Depuis plus de trois décennies, notre entreprise s'est consacrée à l'excellence dans le travail du cuivre. 
              Nous combinons des techniques traditionnelles avec des innovations modernes pour créer des produits en cuivre 
              de la plus haute qualité.
            </motion.p>
            
            <motion.p 
              variants={itemVariants}
              className="mb-10 text-lg leading-relaxed"
            >
              Notre engagement envers la durabilité et l'artisanat nous distingue dans l'industrie. Chaque pièce que nous 
              produisons reflète notre passion pour ce métal noble et polyvalent.
            </motion.p>
            
            {/* Enhanced Stats */}
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 gap-8 mb-10"
            >
              <motion.div 
                variants={numberAnimation}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/20 dark:to-transparent border border-amber-200/50 dark:border-amber-700/30 backdrop-blur-sm shadow-lg"
              >
                <motion.span 
                  className="block text-4xl font-bold text-amber-700 dark:text-amber-500 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  30+
                </motion.span>
                <span className="text-amber-900 dark:text-amber-200">Années d'Expérience</span>
              </motion.div>
              
              <motion.div 
                variants={numberAnimation}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/20 dark:to-transparent border border-amber-200/50 dark:border-amber-700/30 backdrop-blur-sm shadow-lg"
              >
                <motion.span 
                  className="block text-4xl font-bold text-amber-700 dark:text-amber-500 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  100%
                </motion.span>
                <span className="text-amber-900 dark:text-amber-200">Satisfaction Client</span>
              </motion.div>
            </motion.div>
            
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05, backgroundColor: "rgb(217, 119, 6)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-amber-600 text-amber-50 rounded-lg shadow-lg shadow-amber-900/30 transition-all duration-300 transform hover:shadow-xl"
            >
              En Savoir Plus
            </motion.button>
          </motion.div>
        </div>
        
        {/* Enhanced Features section */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-24"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16 text-amber-700 dark:text-amber-500"
          >
            Pourquoi Choisir Notre Cuivre
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                title: "Qualité Supérieure",
                description: "Nos produits en cuivre sont fabriqués selon les normes les plus élevées, garantissant durabilité et performance."
              },
              {
                icon: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
                title: "Durabilité",
                description: "Nous nous engageons à des pratiques durables, de l'approvisionnement responsable à la production écologique."
              },
              {
                icon: "M13 10V3L4 14h7v7l9-11h-7z",
                title: "Innovation",
                description: "Nous repoussons constamment les limites de ce qui est possible avec le cuivre, créant des solutions innovantes."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={featureCardVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group p-8 rounded-xl bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/20 dark:to-transparent border border-amber-200/50 dark:border-amber-700/30 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div 
                  className="w-20 h-20 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-700/30 dark:to-amber-600/30 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-amber-700 dark:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.icon} />
                  </svg>
                </motion.div>
                <h4 className="text-2xl font-semibold text-amber-700 dark:text-amber-400 text-center mb-4">
                  {feature.title}
                </h4>
                <p className="text-stone-700 dark:text-amber-100/90 text-center leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Bottom copper accent border with animation */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 w-full h-0.5 bg-gradient-to-r from-amber-800/80 via-amber-600 to-amber-800/80 origin-right"
      />
    </motion.div>
  )
}

export default AboutComponent
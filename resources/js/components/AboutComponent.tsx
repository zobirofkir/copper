import React, { useEffect, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { useRef } from 'react'
import AboutImage from '../assets/images/post 1.jpg'

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
      className="min-h-screen w-full bg-gradient-to-br from-white to-gray-100 dark:from-black dark:to-gray-900 py-20 relative overflow-hidden"
    >
      <motion.div 
        animate={{ 
          background: [
            'radial-gradient(circle at 20% 30%, rgba(128, 128, 128, 0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 80% 70%, rgba(128, 128, 128, 0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 20% 30%, rgba(128, 128, 128, 0.05) 0%, transparent 70%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      />

      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 w-full h-0.5 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 origin-left"
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
            className="md:text-5xl text-2xl md:text-6xl font-bold mb-6 text-black dark:text-white"
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
          <motion.div 
            variants={itemVariants}
            className="relative group"
          >
            <motion.div 
              className="aspect-square overflow-hidden rounded-2xl relative"
              transition={{ duration: 0.3 }}
            >
              <motion.img 
                src={AboutImage}
                alt="Artisanat en cuivre" 
                className="w-full h-full object-contain transform transition-transform duration-2000"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-transparent mix-blend-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-gray-600/20 rounded-2xl -z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            />
            <motion.div 
              className="absolute -top-4 -right-4 w-32 h-32 border-4 border-gray-600/20 rounded-2xl -z-10"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            />
          </motion.div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="text-gray-700 dark:text-gray-200"
          >
            <motion.h3 
              variants={itemVariants}
              className="md:text-3xl text-2xl md:text-4xl font-bold mb-8 text-black dark:text-white flex justify-center"
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
            
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-2 gap-8 mb-10"
            >
              <motion.div 
                variants={numberAnimation}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 backdrop-blur-sm shadow-lg"
              >
                <motion.span 
                  className="block text-4xl font-bold text-black dark:text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  30+
                </motion.span>
                <span className="text-black dark:text-white">Années d'Expérience</span>
              </motion.div>
              
              <motion.div 
                variants={numberAnimation}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 backdrop-blur-sm shadow-lg"
              >
                <motion.span 
                  className="block text-4xl font-bold text-black dark:text-white mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                >
                  100%
                </motion.span>
                <span className="text-black dark:text-white">Satisfaction Client</span>
              </motion.div>
            </motion.div>
            
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg shadow-lg shadow-gray-900/30 hover:shadow-2xl transition-all duration-300 transform"
            >
              En Savoir Plus
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-24"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-4xl font-bold text-center mb-16 text-black dark:text-white"
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
                title: "Portée Mondiale",
                description: "Nous desservons des clients à travers le monde avec des solutions en cuivre personnalisées."
              },
              {
                icon: "M12 14l9-5-9-5-9 5 9 5z",
                title: "Artisanat Authentique",
                description: "Chaque produit est fabriqué à la main avec passion, selon des méthodes artisanales éprouvées."
              }
            ].map(({ icon, title, description }, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
              >
                <svg className="w-8 h-8 mb-4 text-black dark:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={icon}></path>
                </svg>
                <h4 className="text-xl font-semibold mb-2 text-black dark:text-white">{title}</h4>
                <p className="text-gray-600 dark:text-gray-300">{description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default AboutComponent
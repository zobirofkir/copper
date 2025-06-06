import React from 'react'
import { motion, AnimationControls } from 'framer-motion'
import { containerVariants, itemVariants } from '@/hooks/useProjectComponent'
import { t } from '../../translations/projectTranslations'

interface CallToActionProps {
  controls: AnimationControls
  currentLang?: string
}

const CallToAction = ({ controls, currentLang = 'en' }: CallToActionProps) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="mt-20 text-center"
    >
      <motion.h3
        variants={itemVariants}
        className="text-2xl sm:text-3xl font-bold text-black dark:text-white mb-6"
      >
        {t('startProject', currentLang)}
      </motion.h3>
      
      <motion.p
        variants={itemVariants}
        className="max-w-2xl mx-auto text-base sm:text-lg text-black dark:text-white mb-8"
      >
        Nous sommes spécialisés dans la création de pièces en cuivre sur mesure. 
        Contactez-nous pour discuter de votre vision et transformer vos idées en réalité.
      </motion.p>
      
      <motion.button
        variants={itemVariants}
        whileHover={{ 
          scale: 1.05, 
          backgroundColor: "rgb(217, 119, 6)",
          boxShadow: "0 20px 25px -5px rgba(194, 65, 12, 0.2), 0 8px 10px -6px rgba(194, 65, 12, 0.2)"
        }}
        whileTap={{ scale: 0.95 }}
        className="px-6 sm:px-8 py-3 sm:py-4 bg-gray-600 text-white rounded-lg shadow-lg shadow-gray-900/30 transition-all duration-300 transform hover:shadow-xl"
      >
        {t('contactUs', currentLang)}
      </motion.button>
    </motion.div>
  )
}

export default CallToAction
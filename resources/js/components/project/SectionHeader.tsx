import React from 'react'
import { motion, AnimationControls } from 'framer-motion'
import { containerVariants, itemVariants } from '@/hooks/useProjectComponent'

interface SectionHeaderProps {
  controls: AnimationControls
}

const SectionHeader = ({ controls }: SectionHeaderProps) => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="text-center mb-16"
    >
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mb-8"
      />
      
      <motion.h2 
        variants={itemVariants}
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-black dark:text-white"
      >
        Nos Projets
      </motion.h2>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ duration: 1, delay: 0.7 }}
        className="h-0.5 bg-gradient-to-r from-transparent via-gray-500 to-transparent mx-auto mb-8"
      />
      
      <motion.p
        variants={itemVariants}
        className="max-w-2xl mx-auto text-base sm:text-lg text-black dark:text-white"
      >
        Découvrez notre collection de créations en cuivre, alliant tradition artisanale et design contemporain.
        Chaque pièce raconte une histoire d'excellence et de savoir-faire.
      </motion.p>
    </motion.div>
  )
}

export default SectionHeader
import React from 'react'
import { motion, AnimationControls } from 'framer-motion'
import { containerVariants, itemVariants } from '@/hooks/useProjectComponent'

interface FilterButtonsProps {
  controls: AnimationControls
  categories: string[]
  activeFilter: string
  handleFilterClick: (category: string) => void
}

const FilterButtons = ({ controls, categories, activeFilter, handleFilterClick }: FilterButtonsProps) => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12"
    >
      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleFilterClick('Tous')}
        className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
          activeFilter === 'Tous' 
            ? 'bg-gray-600 text-gray-50 shadow-lg shadow-gray-900/30' 
            : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800/40'
        }`}
      >
        Tous
      </motion.button>
      
      {categories.map((category, index) => (
        <motion.button
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleFilterClick(category)}
          className={`px-4 sm:px-6 py-2 rounded-full transition-all duration-300 ${
            activeFilter === category 
              ? 'bg-gray-600 text-gray-50 shadow-lg shadow-gray-900/30' 
              : 'bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800/40'
          }`}
        >
          {category}
        </motion.button>
      ))}
    </motion.div>
  )
}

export default FilterButtons
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Project {
  id: number | string
  image: string
  article: string
  category: string
  title: string
  name_reference: string
  materials: string
  dimensions: string
  price_availability: string
}

interface ProjectModalProps {
  isModalOpen: boolean
  selectedProject: Project | null
  closeProjectModal: () => void
}

const ProjectModal = ({ isModalOpen, selectedProject, closeProjectModal }: ProjectModalProps) => {
  if (!selectedProject) return null
  
  return (
    <AnimatePresence>
      {isModalOpen && selectedProject && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={closeProjectModal}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-white dark:bg-stone-900 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.article}
                className="w-full h-64 sm:h-80 object-cover"
              />
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={closeProjectModal}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </motion.button>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <span className="inline-block px-3 py-1 bg-gray-600 text-gray-50 text-sm rounded-full mb-2">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{selectedProject.article}</h3>
              </div>
            </div>
            <div className="p-6 sm:p-8">
              <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-400 mb-4">{selectedProject.title}</h4>
              <p className="text-lg font-semibold text-stone-700 dark:text-gray-100/90 mb-6">{selectedProject.article}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div>
                  <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-500">Référence:</h5>
                  <p className="text-stone-700 dark:text-gray-100/90">{selectedProject.name_reference}</p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-500">Matériaux:</h5>
                  <p className="text-stone-700 dark:text-gray-100/90">{selectedProject.materials}</p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-500">Dimensions:</h5>
                  <p className="text-stone-700 dark:text-gray-100/90">{selectedProject.dimensions}</p>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-700 dark:text-gray-500">Prix & Disponibilité:</h5>
                  <p className="text-stone-700 dark:text-gray-100/90">{selectedProject.price_availability}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gray-600 text-gray-50 rounded-lg shadow-md hover:bg-gray-700 transition-all"
                >
                  Commander
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gray-100 dark:bg-gray-900/50 text-gray-800 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800/70 transition-all"
                >
                  Demander un Devis
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
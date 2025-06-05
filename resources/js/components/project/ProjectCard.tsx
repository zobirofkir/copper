import React from 'react'
import { motion } from 'framer-motion'
import { projectCardVariants } from '@/hooks/useProjectComponent'

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

interface ProjectCardProps {
  project: Project
  index: number
  openProjectModal: (project: Project) => void
}

const ProjectCard = ({ project, index, openProjectModal }: ProjectCardProps) => {
  return (
    <motion.div
      key={project.id}
      custom={index}
      variants={projectCardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      layout
      className="group rounded-xl overflow-hidden shadow-xl bg-white dark:bg-stone-800/90 border border-gray-100 dark:border-gray-900/50 backdrop-blur-sm"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <motion.img 
          src={project.image} 
          alt={project.article}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <div className="p-6 w-full">
            <motion.span 
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="inline-block px-3 py-1 bg-gray-600 text-gray-50 text-sm rounded-full mb-3"
            >
              {project.category}
            </motion.span>
            <motion.h3 
              initial={{ y: 20, opacity: 0 }}
              whileHover={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-xl font-bold text-white mb-1"
            >
              {project.article}
            </motion.h3>
          </div>
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-400 mb-2">{project.title}</h3>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => openProjectModal(project)}
          className="px-4 py-2 bg-gray-100 dark:bg-gray-900/30 text-gray-800 dark:text-gray-300 rounded-lg hover:bg-gray-600 hover:text-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
        >
          Voir Détails
        </motion.button>
      </div>
    </motion.div>
  )
}

export default ProjectCard
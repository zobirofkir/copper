import React from 'react'
import { motion } from 'framer-motion'
import { projectCardVariants } from '@/hooks/useProjectComponent'
import { Link } from '@inertiajs/react'
import { t } from '../../translations/projectTranslations'

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
  currentLang?: string
}

const ProjectCard = ({ project, index, openProjectModal, currentLang = 'en' }: ProjectCardProps) => {
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
      <Link href='/galleries'>
        <div className="relative overflow-hidden aspect-[4/3]">
          {/* Image with opacity and animation */}
          <motion.img 
            src={project.image} 
            alt={project.article}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70"
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.7 }} // image default opacity
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />

          {/* Title in a circle at the top center */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="px-4 py-2 bg-white/90 text-sm text-black rounded-full shadow-md dark:bg-black/70 dark:text-white">
              {project.title}
            </div>
          </div>

          {/* Hover overlay with category */}
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
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectCard


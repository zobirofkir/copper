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
      className="group rounded-2xl overflow-hidden shadow-2xl bg-white/70 dark:bg-stone-900/80 border border-gray-200 dark:border-gray-700 backdrop-blur-md transition-transform hover:scale-[1.01]"
    >
      <Link href="/galleries">
        <div className="relative overflow-hidden aspect-[4/3]">
          {/* Background image with dimmed opacity */}
          <motion.img 
            src={project.image} 
            alt={project.article}
            className="w-full h-full object-cover scale-100 opacity-60 group-hover:opacity-80 transition-all duration-700"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />

          {/* Title badge */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="px-5 py-2 bg-white/90 text-sm font-semibold text-black rounded-full shadow-lg dark:bg-black/80 dark:text-white backdrop-blur">
              {project.title}
            </div>
          </div>

          {/* Gradient overlay with category label */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
          >
            <div className="p-4 sm:p-6 w-full">
              <motion.span 
                initial={{ y: 30, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="inline-block px-4 py-1 bg-gray-800/90 text-gray-100 text-xs sm:text-sm rounded-full shadow-md"
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

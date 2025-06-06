import React from 'react'
import { motion } from 'framer-motion'
import { projectCardVariants } from '@/hooks/useProjectComponent'
import { Link } from '@inertiajs/react'
import { FiMoon } from 'react-icons/fi'

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
      className="group rounded-3xl overflow-hidden shadow-xl bg-white/20 dark:bg-black/30 backdrop-blur-md border border-gray-200/40 dark:border-gray-700/40 transition-transform hover:scale-[1.015]"
    >
      <Link href="/galleries">
        <div className="relative overflow-hidden aspect-[4/3]">

          {/* Background image with slight zoom */}
          <motion.img
            src={project.image}
            alt={project.article}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          />

          {/* Decorative Pattern */}
          <div className="absolute inset-0 bg-[url('/pattern-islamic.svg')] opacity-10 dark:opacity-5 pointer-events-none" />

          {/* Badge with project title */}
          <motion.div
            className="absolute top-4 left-4 z-20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-yellow-600 text-white text-xs sm:text-sm px-4 py-1 rounded-full shadow-lg font-semibold uppercase tracking-wide">
              {project.title}
            </span>
          </motion.div>

          {/* Ramadan Icon */}
          <motion.div
            className="absolute top-4 right-4 text-white dark:text-yellow-300 text-xl z-20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.3 }}
          >
            <FiMoon className="drop-shadow-lg" title="Ramadan Spirit" />
          </motion.div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
          >
            <div className="p-5 w-full">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="inline-block bg-black/70 text-white text-sm px-4 py-1 rounded-full"
              >
                {project.category}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ProjectCard

import React from 'react'
import { motion, AnimationControls, AnimatePresence } from 'framer-motion'
import { containerVariants, getGridClass } from '@/hooks/useProjectComponent'
import ProjectCard from './ProjectCard'

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

interface ProjectGridProps {
  controls: AnimationControls
  filteredProjects: Project[]
  openProjectModal: (project: Project) => void
}

const ProjectGrid = ({ controls, filteredProjects, openProjectModal }: ProjectGridProps) => {
  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className={getGridClass()}
    >
      <AnimatePresence>
        {filteredProjects.map((project, index) => (
          <ProjectCard 
            key={project.id}
            project={project}
            index={index}
            openProjectModal={openProjectModal}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  )
}

export default ProjectGrid
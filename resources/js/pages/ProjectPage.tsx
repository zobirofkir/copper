import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useProjectComponent } from '@/hooks/useProjectComponent'
import BackgroundElements from '@/components/project/BackgroundElements'
import SectionHeader from '@/components/project/SectionHeader'
import FilterButtons from '@/components/project/FilterButtons'
import ProjectGrid from '@/components/project/ProjectGrid'
import CallToAction from '@/components/project/CallToAction'

const ProjectPage = () => {
  const {
    activeFilter,
    filteredProjects,
    isModalOpen,
    isLoaded,
    setIsLoaded,
    selectedProject,
    controls,
    ref,
    isInView,
    categories,
    handleFilterClick,
    openProjectModal,
    closeProjectModal
  } = useProjectComponent()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
    setIsLoaded(true)
  }, [isInView, controls, setIsLoaded])

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full bg-white dark:bg-black py-20 px-4 relative overflow-hidden"
      id="projects"
    >
      <BackgroundElements />
      
      {/* Copper accent borders with animation */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 w-full h-0.5 bg-amber-500 origin-left"
      />
      
      <div className="container mx-auto max-w-7xl relative" ref={ref}>
        <SectionHeader controls={controls} />
        <FilterButtons 
          controls={controls} 
          categories={categories} 
          activeFilter={activeFilter} 
          handleFilterClick={handleFilterClick} 
        />
        <ProjectGrid
          controls={controls} 
          filteredProjects={filteredProjects} 
          openProjectModal={openProjectModal} 
        />
        <CallToAction controls={controls} />
      </div>
      
      {/* Bottom copper accent border with animation */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 w-full h-0.5 bg-amber-500 origin-right"
      />

    </motion.section>
  )
}

export default ProjectPage
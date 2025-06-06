import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useProjectComponent } from '@/hooks/useProjectComponent'
import BackgroundElements from './project/BackgroundElements'
import SectionHeader from './project/SectionHeader'
import FilterButtons from './project/FilterButtons'
import ProjectGrid from './project/ProjectGrid'
import CallToAction from './project/CallToAction'
import ProjectModal from './project/ProjectModal'

import { t } from '../translations/projectTranslations'
import { useLanguage } from '../components/header/useLanguage'

const ProjectComponent = () => {
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
  
  const [currentLang, setCurrentLang] = useState('en')
  const { language } = useLanguage()
  
  useEffect(() => {
    setCurrentLang(language)
    
    const handleLanguageChange = (e) => {
      setCurrentLang(e.detail.language)
    }
    
    window.addEventListener('languageChanged', handleLanguageChange)
    return () => window.removeEventListener('languageChanged', handleLanguageChange)
  }, [language])

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
      className="min-h-screen w-full bg-white dark:bg-black text-gray-800 dark:text-gray-100 py-20 px-4 relative overflow-hidden"
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
        <SectionHeader controls={controls} currentLang={currentLang} />
        <FilterButtons 
          controls={controls} 
          categories={categories} 
          activeFilter={activeFilter} 
          handleFilterClick={handleFilterClick}
          currentLang={currentLang}
        />
        <ProjectGrid 
          controls={controls} 
          filteredProjects={filteredProjects} 
          openProjectModal={openProjectModal}
          currentLang={currentLang}
        />
        <CallToAction controls={controls} currentLang={currentLang} />
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

export default ProjectComponent
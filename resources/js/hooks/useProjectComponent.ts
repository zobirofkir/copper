import { useAnimation, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import axios from "axios"

/**
 * Enhanced animation variants
 */
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15
    }
  }
}

export const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

export const projectCardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }),
  hover: {
    y: -15,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
}

/**
 * Categories will now be fetched from the API
 */

/**
 * Responsive grid layout based on screen size
 */
export const getGridClass = () => {
  return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
}

export interface Project {
  id: string | number;
  title: string;
  description: string;
  details: string;
  category: string;
  image: string;
}

export const useProjectComponent = () => {
  const [activeFilter, setActiveFilter] = useState('Tous')
  const [projects, setProjects] = useState<Project[]>([])
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [categories, setCategories] = useState<string[]>([])
  
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })

  useEffect(() => {
    // Fetch projects from API
    axios.get('/api/projects')
      .then(response => {
        setProjects(response.data)
        setFilteredProjects(response.data)
        
        // Extract unique categories
        const uniqueCategories = Array.from(
          new Set(response.data.map((project: Project) => project.category))
        )
        setCategories(uniqueCategories)
      })
      .catch(error => console.error('Error fetching projects:', error))
  }, [])

  /**
   * Filter projects based on selected category
   */
  const handleFilterClick = (category: string) => {
    setActiveFilter(category)

    controls.start("hidden").then(() => {
      if (category === 'Tous') {
        setFilteredProjects(projects)
      } else {
        setFilteredProjects(projects.filter(project => project.category === category))
      }
      controls.start("visible")
    })
  }

  const openProjectModal = (project: Project) => {
    // Fetch detailed project data from API
    axios.get(`/api/projects/${project.id}`)
      .then(response => {
        setSelectedProject(response.data)
        setIsModalOpen(true)
        document.body.style.overflow = 'hidden'
      })
      .catch(error => {
        console.error('Error fetching project details:', error)
        // Fallback to using the project data we already have
        setSelectedProject(project)
        setIsModalOpen(true)
        document.body.style.overflow = 'hidden'
      })
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  return {
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
  }
}
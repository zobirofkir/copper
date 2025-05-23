import React, { useEffect, useState, useRef } from 'react'
import { motion, useAnimation, useInView, AnimatePresence } from 'framer-motion'

const ProjectComponent = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.1 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
    setIsLoaded(true)
  }, [isInView, controls])

  /**
   * Enhanced animation variants
   */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
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

  const projectCardVariants = {
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
   * Sample project data - replace with your actual data
   */
  const projects = [
    {
      id: 1,
      title: "Luminaires en Cuivre",
      category: "Décoration",
      image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2080&auto=format&fit=crop",
      description: "Collection de luminaires artisanaux en cuivre avec finitions patinées.",
      details: "Chaque luminaire est fabriqué à la main selon des techniques traditionnelles, combinant l'esthétique intemporelle du cuivre avec des designs contemporains."
    },
    {
      id: 2,
      title: "Ustensiles de Cuisine",
      category: "Art de la Table",
      image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=2071&auto=format&fit=crop",
      description: "Ustensiles de cuisine en cuivre martelé à la main pour une expérience culinaire exceptionnelle.",
      details: "Nos ustensiles de cuisine en cuivre offrent une conductivité thermique inégalée, permettant une cuisson uniforme et précise pour les chefs amateurs et professionnels."
    },
    {
      id: 3,
      title: "Sculptures Modernes",
      category: "Art",
      image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=2070&auto=format&fit=crop",
      description: "Sculptures contemporaines en cuivre explorant les formes organiques et géométriques.",
      details: "Nos sculptures en cuivre sont des pièces uniques qui jouent avec la lumière et l'espace, créant des œuvres d'art dynamiques qui évoluent avec leur environnement."
    },
    {
      id: 4,
      title: "Bijoux Artisanaux",
      category: "Accessoires",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop",
      description: "Bijoux en cuivre avec incrustations de pierres précieuses et semi-précieuses.",
      details: "Chaque bijou est une pièce unique, alliant la chaleur naturelle du cuivre à l'éclat des pierres précieuses soigneusement sélectionnées pour leur qualité et leur beauté."
    },
    {
      id: 5,
      title: "Éléments Architecturaux",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2044&auto=format&fit=crop",
      description: "Gouttières, toitures et éléments décoratifs en cuivre pour l'architecture contemporaine.",
      details: "Nos éléments architecturaux en cuivre combinent durabilité exceptionnelle et esthétique raffinée, développant avec le temps une patine naturelle qui ajoute du caractère à chaque bâtiment."
    },
    {
      id: 6,
      title: "Objets Décoratifs",
      category: "Décoration",
      image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2069&auto=format&fit=crop",
      description: "Vases, bols et objets décoratifs en cuivre pour intérieurs modernes et traditionnels.",
      details: "Nos objets décoratifs en cuivre apportent une touche d'élégance et de chaleur à tout intérieur, chaque pièce étant conçue pour être à la fois fonctionnelle et esthétiquement remarquable."
    }
  ]

  /**
   * Filter categories for the filter buttons
   */
  const categories = Array.from(new Set(projects.map(project => project.category)))

  const [activeFilter, setActiveFilter] = useState('Tous')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [isModalOpen, setIsModalOpen] = useState(false)

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

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = 'auto'
  }

  /**
   * Responsive grid layout based on screen size
   */
  const getGridClass = () => {
    return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full bg-gradient-to-br from-white to-amber-50 dark:from-stone-950 dark:to-stone-900 py-20 px-4 relative overflow-hidden"
      id="projects"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            x: [0, 10, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] left-[5%] w-[40vw] h-[40vw] rounded-full bg-amber-600/5 blur-[100px]"
        />
        <motion.div 
          animate={{ 
            x: [0, -15, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10%] right-[5%] w-[35vw] h-[35vw] rounded-full bg-amber-700/5 blur-[120px]"
        />
      </div>

      {/* Copper accent borders with animation */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 w-full h-0.5 bg-gradient-to-r from-amber-800/80 via-amber-600 to-amber-800/80 origin-left"
      />
      
      <div className="container mx-auto max-w-7xl relative" ref={ref}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"
          />
          
          <motion.h2 
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600"
          >
            Nos Projets
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.7 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto mb-8"
          />
          
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-base sm:text-lg text-stone-700 dark:text-amber-100/90"
          >
            Découvrez notre collection de créations en cuivre, alliant tradition artisanale et design contemporain.
            Chaque pièce raconte une histoire d'excellence et de savoir-faire.
          </motion.p>
        </motion.div>

        {/* Filter buttons */}
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
                ? 'bg-amber-600 text-amber-50 shadow-lg shadow-amber-900/30' 
                : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-800/40'
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
                  ? 'bg-amber-600 text-amber-50 shadow-lg shadow-amber-900/30' 
                  : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200 hover:bg-amber-200 dark:hover:bg-amber-800/40'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid with staggered animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className={getGridClass()}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                custom={index}
                variants={projectCardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                layout
                className="group rounded-xl overflow-hidden shadow-xl bg-white dark:bg-stone-800/90 border border-amber-100 dark:border-amber-900/50 backdrop-blur-sm"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
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
                        className="inline-block px-3 py-1 bg-amber-600 text-amber-50 text-sm rounded-full mb-3"
                      >
                        {project.category}
                      </motion.span>
                      <motion.h3 
                        initial={{ y: 20, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-xl font-bold text-white mb-1"
                      >
                        {project.title}
                      </motion.h3>
                    </div>
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-amber-800 dark:text-amber-400 mb-2">{project.title}</h3>
                  <p className="text-stone-600 dark:text-amber-100/70 mb-4 line-clamp-2">{project.description}</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => openProjectModal(project)}
                    className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-lg hover:bg-amber-600 hover:text-amber-50 dark:hover:bg-amber-700 transition-all duration-300"
                  >
                    Voir Détails
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Call to action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-20 text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-amber-700 dark:text-amber-500 mb-6"
          >
            Vous avez un projet en tête ?
          </motion.h3>
          
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-base sm:text-lg text-stone-700 dark:text-amber-100/90 mb-8"
          >
            Nous sommes spécialisés dans la création de pièces en cuivre sur mesure. 
            Contactez-nous pour discuter de votre vision et transformer vos idées en réalité.
          </motion.p>
          
          <motion.button
            variants={itemVariants}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "rgb(217, 119, 6)",
              boxShadow: "0 20px 25px -5px rgba(194, 65, 12, 0.2), 0 8px 10px -6px rgba(194, 65, 12, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 sm:py-4 bg-amber-600 text-amber-50 rounded-lg shadow-lg shadow-amber-900/30 transition-all duration-300 transform hover:shadow-xl"
          >
            Contactez-Nous
          </motion.button>
        </motion.div>
      </div>
      
      {/* Bottom copper accent border with animation */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 w-full h-0.5 bg-gradient-to-r from-amber-800/80 via-amber-600 to-amber-800/80 origin-right"
      />

      {/* Project Detail Modal */}
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
                  alt={selectedProject.title} 
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
                  <span className="inline-block px-3 py-1 bg-amber-600 text-amber-50 text-sm rounded-full mb-2">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">{selectedProject.title}</h3>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-400 mb-4">Description</h4>
                <p className="text-stone-700 dark:text-amber-100/90 mb-6">{selectedProject.description}</p>
                
                <h4 className="text-xl font-semibold text-amber-800 dark:text-amber-400 mb-4">Détails</h4>
                <p className="text-stone-700 dark:text-amber-100/90 mb-6">{selectedProject.details}</p>
                
                <div className="flex flex-wrap gap-4 mt-8">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-amber-600 text-amber-50 rounded-lg shadow-md hover:bg-amber-700 transition-all"
                  >
                    Commander
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-300 rounded-lg hover:bg-amber-200 dark:hover:bg-amber-800/70 transition-all"
                  >
                    Demander un Devis
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  )
}

export default ProjectComponent
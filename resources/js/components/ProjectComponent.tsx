import React, { useEffect, useState, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const ProjectComponent = () => {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
    setIsLoaded(true)
  }, [isInView, controls])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  const projectCardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  }

  // Sample project data - replace with your actual data
  const projects = [
    {
      id: 1,
      title: "Luminaires en Cuivre",
      category: "Décoration",
      image: "https://images.unsplash.com/photo-1615529328331-f8917597711f?q=80&w=2080&auto=format&fit=crop",
      description: "Collection de luminaires artisanaux en cuivre avec finitions patinées."
    },
    {
      id: 2,
      title: "Ustensiles de Cuisine",
      category: "Art de la Table",
      image: "https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?q=80&w=2071&auto=format&fit=crop",
      description: "Ustensiles de cuisine en cuivre martelé à la main pour une expérience culinaire exceptionnelle."
    },
    {
      id: 3,
      title: "Sculptures Modernes",
      category: "Art",
      image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?q=80&w=2070&auto=format&fit=crop",
      description: "Sculptures contemporaines en cuivre explorant les formes organiques et géométriques."
    },
    {
      id: 4,
      title: "Bijoux Artisanaux",
      category: "Accessoires",
      image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2069&auto=format&fit=crop",
      description: "Bijoux en cuivre avec incrustations de pierres précieuses et semi-précieuses."
    },
    {
      id: 5,
      title: "Éléments Architecturaux",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?q=80&w=2044&auto=format&fit=crop",
      description: "Gouttières, toitures et éléments décoratifs en cuivre pour l'architecture contemporaine."
    },
    {
      id: 6,
      title: "Objets Décoratifs",
      category: "Décoration",
      image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&w=2069&auto=format&fit=crop",
      description: "Vases, bols et objets décoratifs en cuivre pour intérieurs modernes et traditionnels."
    }
  ]

  // Filter categories for the filter buttons
  const categories = Array.from(new Set(projects.map(project => project.category)))

  const [activeFilter, setActiveFilter] = useState('Tous')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [activeProject, setActiveProject] = useState(null)

  // Filter projects based on selected category
  const handleFilterClick = (category: string) => {
    setActiveFilter(category)
    if (category === 'Tous') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter(project => project.category === category))
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full bg-gradient-to-br from-white to-amber-50 dark:from-black dark:to-stone-900 py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          background: [
            'radial-gradient(circle at 20% 30%, rgba(217, 119, 6, 0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 80% 70%, rgba(217, 119, 6, 0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 20% 30%, rgba(217, 119, 6, 0.05) 0%, transparent 70%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Copper accent borders with animation */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 w-full h-0.5 bg-gradient-to-r from-amber-800/80 via-amber-600 to-amber-800/80 origin-left"
      />
      
      <div className="container mx-auto px-6 md:px-12 relative" ref={ref}>
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
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600"
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
            className="max-w-2xl mx-auto text-lg text-stone-700 dark:text-amber-100/90"
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
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleFilterClick('Tous')}
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              activeFilter === 'Tous' 
                ? 'bg-amber-600 text-amber-50 shadow-lg shadow-amber-900/30' 
                : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
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
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === category 
                  ? 'bg-amber-600 text-amber-50 shadow-lg shadow-amber-900/30' 
                  : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-200'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              custom={index}
              variants={projectCardVariants}
              whileHover={{ y: -10 }}
              className="group rounded-xl overflow-hidden shadow-xl bg-white dark:bg-stone-800 border border-amber-100 dark:border-amber-900/50"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <motion.img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <span className="inline-block px-3 py-1 bg-amber-600 text-amber-50 text-sm rounded-full mb-3">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-800 dark:text-amber-400 mb-2">{project.title}</h3>
                <p className="text-stone-600 dark:text-amber-100/70 mb-4">{project.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-lg hover:bg-amber-600 hover:text-amber-50 dark:hover:bg-amber-700 transition-all duration-300"
                >
                  Voir Détails
                </motion.button>
              </div>
            </motion.div>
          ))}
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
            className="text-3xl font-bold text-amber-700 dark:text-amber-500 mb-6"
          >
            Vous avez un projet en tête ?
          </motion.h3>
          
          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg text-stone-700 dark:text-amber-100/90 mb-8"
          >
            Nous sommes spécialisés dans la création de pièces en cuivre sur mesure. 
            Contactez-nous pour discuter de votre vision et transformer vos idées en réalité.
          </motion.p>
          
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05, backgroundColor: "rgb(217, 119, 6)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-amber-600 text-amber-50 rounded-lg shadow-lg shadow-amber-900/30 transition-all duration-300 transform hover:shadow-xl"
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
    </motion.div>
  )
}

export default ProjectComponent
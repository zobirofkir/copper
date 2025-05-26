import React from 'react'
import { motion } from 'framer-motion'

const companies = [
  { name: "CopperCraft Inc.", image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "MetalWorks Ltd.", image: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Artisan Copper Co.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Heritage Metals", image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Innovative Copper", image: "https://images.unsplash.com/photo-1564069114553-7215e1ff1890?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
]

const CompanyComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  }

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen w-full bg-gradient-to-br from-white to-amber-50 dark:from-black dark:to-stone-900 py-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600"
        >
          Nos Partenaires
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {companies.map((company, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-amber-50 to-transparent dark:from-amber-900/20 dark:to-transparent border border-amber-200/50 dark:border-amber-700/30 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img 
                  src={company.image} 
                  alt={company.name} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold text-center text-amber-700 dark:text-amber-400">
                {company.name}
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default CompanyComponent
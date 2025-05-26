import React from 'react'
import { motion } from 'framer-motion'

const companies = [
  { name: "CopperCraft Inc.", image: "https://via.placeholder.com/150" },
  { name: "MetalWorks Ltd.", image: "https://via.placeholder.com/150" },
  { name: "Artisan Copper Co.", image: "https://via.placeholder.com/150" },
  { name: "Heritage Metals", image: "https://via.placeholder.com/150" },
  { name: "Innovative Copper", image: "https://via.placeholder.com/150" }
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
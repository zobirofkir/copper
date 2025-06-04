import React from 'react'
import { motion } from 'framer-motion'

interface Company {
  id: number;
  name: string;
  image: string;
}

const CompanyComponent = ({ companies }: { companies: Company[] }) => {
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
      className="min-h-screen w-full bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-stone-900 py-20"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.h2 
          variants={itemVariants}
          className="text-5xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 dark:text-white"
        >
          Nos Partenaires
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {companies.map((company) => (
            <motion.div 
              key={company.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-transparent dark:from-gray-900/20 dark:to-transparent border border-gray-200/50 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img 
                  src={company.image} 
                  alt={company.name} 
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className="text-2xl font-semibold text-center text-gray-700 dark:text-gray-400">
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
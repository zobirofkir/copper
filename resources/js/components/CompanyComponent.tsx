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
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen w-full bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-stone-900 py-16 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="relative mb-16">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 dark:from-gray-300 dark:via-white dark:to-gray-300"
          >
            Nos Partenaires
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[2px] bg-gradient-to-r from-transparent via-gray-500 to-transparent dark:via-white/70 mx-auto mt-4"
          />
        </div>
        
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {companies.map((company) => (
            <motion.div 
              key={company.id}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-gray-50 to-transparent dark:from-gray-900/30 dark:to-transparent border border-gray-200/50 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm"
            >
              <div className="aspect-square overflow-hidden rounded-lg mb-4 group">
                <img 
                  src={company.image} 
                  alt={company.name} 
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-center text-gray-700 dark:text-gray-300 relative inline-block mx-auto">
                <span>{company.name}</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
              </h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default CompanyComponent
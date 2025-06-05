import React, { useRef } from 'react'
import { motion } from 'framer-motion'

interface Company {
  id: number;
  name: string;
  image: string;
}

const CompanyComponent = ({ companies }: { companies: Company[] }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
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
  
  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' 
        ? -carouselRef.current.offsetWidth * 0.8
        : carouselRef.current.offsetWidth * 0.8;
        
      carouselRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

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
        
        <div className="relative">
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 rounded-full p-3 shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all"
            aria-label="Scroll left"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <div 
            ref={carouselRef}
            className="overflow-x-auto scrollbar-hide scroll-smooth py-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <motion.div 
              variants={containerVariants}
              className="flex space-x-6 min-w-max"
            >
              {companies.map((company) => (
                <motion.div 
                  key={company.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-gray-50 to-transparent dark:from-gray-900/30 dark:to-transparent border border-gray-200/50 dark:border-gray-700/30 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm flex-shrink-0 w-[280px]"
                >
                  <div className="aspect-square overflow-hidden rounded-lg mb-4 group">
                    <img 
                      src={company.image} 
                      alt={company.name} 
                      className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110 filter group-hover:brightness-110"
                    />
                  </div>
                  <h3 className="flex justify-center items-center font-bold md:text-xl text-md">
                    <span>{company.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-500 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                  </h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 rounded-full p-3 shadow-lg backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all"
            aria-label="Scroll right"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 dark:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default CompanyComponent
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { t } from '../translations/companyTranslations'
import { useLanguage } from './header/useLanguage'

interface Company {
  id: number;
  name: string;
  image: string;
}

const CompanyComponent = ({ companies }: { companies: Company[] }) => {
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
      className="w-full bg-gradient-to-br from-white to-gray-50 dark:from-black dark:to-stone-900 py-16 sm:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="relative mb-16">
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-gray-600 via-gray-700 to-gray-600 dark:from-gray-300 dark:via-white dark:to-gray-300"
          >
            {t('ourPartners', currentLang)}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {companies.map((company) => (
            <FlipCard key={company.id} company={company} variants={itemVariants} />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

interface FlipCardProps {
  company: Company;
  variants: any;
}

const FlipCard = ({ company, variants }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <motion.div
      variants={variants}
      className="h-64 w-full cursor-pointer"
      style={{ perspective: "1000px" }}
      onClick={flipCard}
    >
      <div 
        className="relative w-full h-full transition-all duration-500"
        style={{ 
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front - Image Only */}
        <div 
          className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img 
            src={company.image} 
            alt={company.name} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Back - Title */}
        <div 
          className="absolute w-full h-full rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 flex items-center justify-center"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-white px-4">
            {company.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default CompanyComponent


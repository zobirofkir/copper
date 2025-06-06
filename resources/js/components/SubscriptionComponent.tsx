import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { t } from '../translations/subscriptionTranslations'
import { useLanguage } from '../components/header/useLanguage'

const SubscriptionComponent = () => {
  const [currentLang, setCurrentLang] = useState('en')
  const { language } = useLanguage()
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  useEffect(() => {
    setCurrentLang(language)
    
    const handleLanguageChange = (e) => {
      setCurrentLang(e.detail.language)
    }
    
    window.addEventListener('languageChanged', handleLanguageChange)
    return () => window.removeEventListener('languageChanged', handleLanguageChange)
  }, [language])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    setIsSubmitted(true)
    setEmail('')
    setName('')
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

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

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-[50vh] w-full bg-gray-50 dark:bg-gray-900 py-16 relative overflow-hidden"
    >
      <div className="container mx-auto px-6 md:px-12 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-lg mx-auto"
        >
          <motion.div variants={itemVariants} className="text-center mb-8">
            <motion.h2 className="text-3xl font-serif font-bold mb-4 text-gray-800 dark:text-gray-50">
              {t('subscriptionTitle', currentLang)}
            </motion.h2>
            <motion.p className="text-gray-600 dark:text-gray-300">
              {t('subscriptionBenefits', currentLang)}
            </motion.p>
          </motion.div>

          {!isSubmitted ? (
            <motion.form 
              variants={containerVariants}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-lg"
            >
              <motion.div variants={itemVariants} className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">
                  {t('nameLabel', currentLang)}
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">
                  {t('emailLabel', currentLang)}
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 dark:bg-gray-700 dark:text-white"
                  required
                />
              </motion.div>
              
              <motion.div variants={itemVariants} className="text-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 text-white rounded-md shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {t('subscribeButton', currentLang)}
                </motion.button>
                
                <motion.p variants={itemVariants} className="mt-4 text-xs text-gray-500 dark:text-gray-400">
                  {t('privacyNotice', currentLang)}
                </motion.p>
              </motion.div>
            </motion.form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 p-8 rounded-md shadow-lg text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, damping: 10 }}
                className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600 dark:text-green-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <h3 className="text-xl font-medium text-gray-800 dark:text-gray-100">
                {t('thankYou', currentLang)}
              </h3>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default SubscriptionComponent
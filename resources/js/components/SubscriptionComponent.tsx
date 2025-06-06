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
    setIsSubmitted(true)
    setEmail('')
    setName('')
    
    setTimeout(() => {
      setIsSubmitted(false)
    }, 3000)
  }

  return (
    <div className="relative py-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-black"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-100/30 dark:bg-amber-900/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-100/30 dark:bg-amber-900/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Copper accent line */}
          <div className="flex justify-center mb-8">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "120px" }}
              transition={{ duration: 1, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-amber-300 via-amber-500 to-amber-300"
            />
          </div>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-serif text-center font-bold mb-4 text-gray-800 dark:text-amber-50"
          >
            {t('subscriptionTitle', currentLang)}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          >
            {t('subscriptionBenefits', currentLang)}
          </motion.p>

          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="relative"
            >
              {/* Card with copper accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-amber-600 transform -rotate-1 rounded-lg shadow-lg"></div>
              
              <div className="relative bg-white dark:bg-gray-800 p-8 md:p-10 rounded-lg shadow-xl border border-amber-100 dark:border-amber-900/30">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                        {t('nameLabel', currentLang)}
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 border-b-2 border-amber-200 dark:border-amber-700 bg-transparent focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors dark:text-white"
                        required
                      />
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">
                        {t('emailLabel', currentLang)}
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 border-b-2 border-amber-200 dark:border-amber-700 bg-transparent focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors dark:text-white"
                        required
                      />
                    </motion.div>
                  </div>
                  
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="text-center pt-4"
                  >
                    <motion.button
                      whileHover={{ scale: 1.03, backgroundColor: '#b45309' }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="px-8 py-3 bg-amber-600 text-white rounded-md shadow-lg hover:shadow-amber-500/20 transition-all duration-300 font-medium"
                    >
                      {t('subscribeButton', currentLang)}
                    </motion.button>
                    
                    <p className="mt-6 text-xs text-gray-500 dark:text-gray-400">
                      {t('privacyNotice', currentLang)}
                    </p>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
              className="bg-white dark:bg-gray-800 p-10 rounded-lg shadow-xl border border-amber-100 dark:border-amber-900/30 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
                transition={{ type: "spring", stiffness: 200, damping: 10, delay: 0.2 }}
                className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <h3 className="text-2xl font-serif font-bold text-gray-800 dark:text-amber-50">
                {t('thankYou', currentLang)}
              </h3>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default SubscriptionComponent
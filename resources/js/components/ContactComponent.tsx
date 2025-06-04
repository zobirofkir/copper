import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

const ContactComponent = () => {
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

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen w-full bg-white dark:bg-black py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <motion.div 
        animate={{ 
          background: [
            'radial-gradient(circle at 20% 30%, rgba(229, 231, 235, 0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 80% 70%, rgba(229, 231, 235, 0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 20% 30%, rgba(229, 231, 235, 0.05) 0%, transparent 70%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Top border with animation */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 w-full h-0.5 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 dark:from-gray-700 dark:via-gray-500 dark:to-gray-700 origin-left"
      />
      
      <div className="container mx-auto px-6 md:px-12 relative" ref={ref}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-500 to-transparent mx-auto mb-8"
          />
          
          <motion.h2 
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 dark:text-gray-200"
          >
            Contactez-Nous
          </motion.h2>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "120px" }}
            transition={{ duration: 1, delay: 0.7 }}
            className="h-0.5 bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-500 to-transparent mx-auto"
          />
          
          <motion.p
            variants={itemVariants}
            className="mt-8 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto px-4"
          >
            Nous sommes à votre disposition pour répondre à toutes vos questions et vous accompagner dans vos projets.
            N'hésitez pas à nous contacter par le moyen qui vous convient le mieux.
          </motion.p>
        </motion.div>

        {/* Contact Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 sm:mb-16 md:mb-20">
          {/* WhatsApp Card */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group p-6 sm:p-8 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <motion.div 
              className="w-20 h-20 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </motion.div>
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center mb-4">
              WhatsApp
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-6">
              Discutez avec nous instantanément via WhatsApp pour une réponse rapide.
            </p>
            <div className="flex justify-center">
              <motion.a
                href="https://wa.me/1234567890" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-xl flex items-center justify-center"
              >
                <span>Discuter Maintenant</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Phone Call Card */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group p-6 sm:p-8 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <motion.div 
              className="w-20 h-20 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </motion.div>
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center mb-4">
              Téléphone
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-6">
              Appelez-nous directement pour discuter de vos besoins spécifiques.
            </p>
            <div className="flex justify-center">
              <motion.a
                href="tel:+1234567890" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-xl flex items-center justify-center"
              >
                <span>Appeler Maintenant</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate={controls}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            className="group p-6 sm:p-8 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <motion.div 
              className="w-20 h-20 rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform duration-300"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </motion.div>
            <h4 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 text-center mb-4">
              Email
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-6">
              Envoyez-nous un email et nous vous répondrons dans les plus brefs délais.
            </p>
            <div className="flex justify-center">
              <motion.a
                href="mailto:contact@example.com" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gray-800 dark:bg-gray-700 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-xl flex items-center justify-center"
              >
                <span>Envoyer un Email</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Google Maps Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 dark:text-gray-200 text-center"
          >
            Nous Trouver
          </motion.h3>
          
          <motion.div 
            variants={itemVariants}
            className="rounded-xl overflow-hidden shadow-2xl border-4 border-gray-100 dark:border-gray-800"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937604!2d2.292292615509614!3d48.85837007928757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sfr!4v1647893184497!5m2!1sen!2sfr" 
              width="100%" 
              height="450" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Notre emplacement"
              className="w-full"
            ></iframe>
          </motion.div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="max-w-3xl mx-auto"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl md:text-4xl font-bold mb-10 text-gray-800 dark:text-gray-200 text-center"
          >
            Envoyez-nous un Message
          </motion.h3>
          
          <motion.form 
            variants={containerVariants}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Nom</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-800 dark:text-white"
                  placeholder="Votre nom"
                />
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-800 dark:text-white"
                  placeholder="Votre email"
                />
              </motion.div>
            </div>
            
            <motion.div variants={itemVariants}>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Sujet</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-800 dark:text-white"
                placeholder="Sujet de votre message"
              />
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
              <textarea 
                id="message" 
                rows={6} 
                className="w-full px-4 py-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-800 dark:text-white"
                placeholder="Votre message"
              ></textarea>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex justify-center"
            >
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-lg shadow-lg transition-all duration-300 transform hover:shadow-xl"
              >
                Envoyer le Message
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
      
      {/* Bottom border with animation */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute bottom-0 w-full h-0.5 bg-gradient-to-r from-gray-300 via-gray-500 to-gray-300 dark:from-gray-700 dark:via-gray-500 dark:to-gray-700 origin-right"
      />
    </motion.div>
  )
}

export default ContactComponent
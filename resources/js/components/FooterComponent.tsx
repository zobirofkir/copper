import React from 'react'
import { motion } from 'framer-motion'

const FooterComponent = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-white to-amber-50 dark:from-black dark:to-stone-900">
      {/* Top copper accent border with animation */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute top-0 w-full h-0.5 bg-gradient-to-r from-amber-800/80 via-amber-600 to-amber-800/80 origin-left"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600">
                Copper Artistry
              </h3>
              <p className="mt-4 text-stone-600 dark:text-amber-100/80 text-sm leading-relaxed">
                Créateurs d'excellence en cuivre depuis 1990. Notre savoir-faire artisanal au service de votre vision.
              </p>
            </motion.div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { href: '#', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' }, // Facebook
                { href: '#', icon: 'M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.22151 20.9723 6.94365 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z' }, // Twitter
                { href: '#', icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' }, // GitHub
                { href: '#', icon: 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' } // LinkedIn
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-700/30 dark:to-amber-600/30 flex items-center justify-center group transition-colors duration-300"
                >
                  <svg 
                    className="w-5 h-5 text-amber-700 dark:text-amber-500 group-hover:text-amber-800 dark:group-hover:text-amber-400 transition-colors duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-500 mb-4">
                Liens Rapides
              </h3>
              <ul className="space-y-3">
                {[
                  'Accueil',
                  'À Propos',
                  'Services',
                  'Portfolio',
                  'Contact'
                ].map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <a 
                      href="#" 
                      className="text-stone-600 dark:text-amber-100/80 hover:text-amber-700 dark:hover:text-amber-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Services */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-500 mb-4">
                Nos Services
              </h3>
              <ul className="space-y-3">
                {[
                  'Artisanat en Cuivre',
                  'Restauration',
                  'Sur Mesure',
                  'Conseil',
                  'Installation'
                ].map((service, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 5 }}
                  >
                    <a 
                      href="#" 
                      className="text-stone-600 dark:text-amber-100/80 hover:text-amber-700 dark:hover:text-amber-400 transition-colors duration-300"
                    >
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-lg font-semibold text-amber-700 dark:text-amber-500 mb-4">
                Contact
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-amber-600 dark:text-amber-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-stone-600 dark:text-amber-100/80">
                    123 Rue du Cuivre<br />
                    75001 Paris, France
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-amber-600 dark:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-stone-600 dark:text-amber-100/80">
                    +33 1 23 45 67 89
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-6 h-6 text-amber-600 dark:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-stone-600 dark:text-amber-100/80">
                    contact@copperartistry.com
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-amber-200/20 dark:border-amber-700/30 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-stone-600 dark:text-amber-100/80 text-sm"
            >
              © {currentYear} Copper Artistry. Tous droits réservés.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="flex space-x-6"
            >
              {['Mentions Légales', 'Politique de Confidentialité', 'CGV'].map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-sm text-stone-600 dark:text-amber-100/80 hover:text-amber-700 dark:hover:text-amber-400 transition-colors duration-300"
                >
                  {item}
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterComponent
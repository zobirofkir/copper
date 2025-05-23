import React from 'react'
import { motion } from 'framer-motion'

const AboutComponent = () => {
  return (
    <div className="min-h-screen w-full bg-white dark:bg-black py-20">
      {/* Copper accent borders as separate divs */}
      <div className="w-full h-0.5 bg-gradient-to-r from-amber-800/80 via-amber-600 to-amber-800/80 mb-20"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        {/* Subtle background overlay */}
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-amber-700/5 via-transparent to-amber-600/5 pointer-events-none"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-amber-700 to-amber-600">
            À Propos de Nous
          </h2>
          <div className="h-1 w-24 mx-auto bg-gradient-to-r from-amber-600 to-amber-500 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1603974372039-adc49044b6bd?q=80&w=1974&auto=format&fit=crop" 
                alt="Artisanat en cuivre" 
                className="w-full h-full object-cover"
              />
              <div className="inset-0 bg-gradient-to-br from-amber-700/20 via-transparent to-transparent mix-blend-overlay"></div>
            </div>
            <div className="mt-[-24px] ml-[-24px] w-32 h-32 border-4 border-amber-600/30 rounded-lg -z-10"></div>
            <div className="mt-[-140px] ml-[calc(100%-108px)] w-32 h-32 border-4 border-amber-600/30 rounded-lg -z-10"></div>
          </motion.div>

          {/* Right column - Text content */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-stone-700 dark:text-amber-100"
          >
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-amber-700 dark:text-amber-500">Notre Héritage de Cuivre</h3>
            <p className="mb-6 text-lg">
              Depuis plus de trois décennies, notre entreprise s'est consacrée à l'excellence dans le travail du cuivre. 
              Nous combinons des techniques traditionnelles avec des innovations modernes pour créer des produits en cuivre 
              de la plus haute qualité.
            </p>
            <p className="mb-8 text-lg">
              Notre engagement envers la durabilité et l'artisanat nous distingue dans l'industrie. Chaque pièce que nous 
              produisons reflète notre passion pour ce métal noble et polyvalent.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30">
                <span className="block text-3xl font-bold text-amber-700 dark:text-amber-500 mb-2">30+</span>
                <span className="text-amber-900 dark:text-amber-200">Années d'Expérience</span>
              </div>
              <div className="text-center p-4 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700/30">
                <span className="block text-3xl font-bold text-amber-700 dark:text-amber-500 mb-2">100%</span>
                <span className="text-amber-900 dark:text-amber-200">Satisfaction Client</span>
              </div>
            </div>
            
            <button className="px-8 py-3 bg-gradient-to-r from-amber-700 to-amber-600 hover:from-amber-600 hover:to-amber-500 text-amber-50 rounded-lg transition-all duration-300 shadow-lg hover:shadow-amber-700/30">
              En Savoir Plus
            </button>
          </motion.div>
        </div>
        
        {/* Features section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h3 className="text-3xl font-semibold text-center mb-12 text-amber-700 dark:text-amber-500">Pourquoi Choisir Notre Cuivre</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-6 rounded-lg bg-amber-50 dark:bg-gradient-to-br dark:from-amber-900/20 dark:to-transparent border border-amber-200 dark:border-amber-700/30">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-700/30 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700 dark:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-amber-700 dark:text-amber-400 text-center mb-3">Qualité Supérieure</h4>
              <p className="text-stone-700 dark:text-amber-100/90 text-center">
                Nos produits en cuivre sont fabriqués selon les normes les plus élevées, garantissant durabilité et performance.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="p-6 rounded-lg bg-amber-50 dark:bg-gradient-to-br dark:from-amber-900/20 dark:to-transparent border border-amber-200 dark:border-amber-700/30">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-700/30 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700 dark:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-amber-700 dark:text-amber-400 text-center mb-3">Durabilité</h4>
              <p className="text-stone-700 dark:text-amber-100/90 text-center">
                Nous nous engageons à des pratiques durables, de l'approvisionnement responsable à la production écologique.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="p-6 rounded-lg bg-amber-50 dark:bg-gradient-to-br dark:from-amber-900/20 dark:to-transparent border border-amber-200 dark:border-amber-700/30">
              <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-700/30 flex items-center justify-center mb-6 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-700 dark:text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-amber-700 dark:text-amber-400 text-center mb-3">Innovation</h4>
              <p className="text-stone-700 dark:text-amber-100/90 text-center">
                Nous repoussons constamment les limites de ce qui est possible avec le cuivre, créant des solutions innovantes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Bottom copper accent border */}
      <div className="w-full h-0.5 bg-gradient-to-r from-amber-800/80 via-amber-600 to-amber-800/80 mt-20"></div>
    </div>
  )
}

export default AboutComponent
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { X, Instagram, Phone, Video } from 'lucide-react';
import { MenuItem } from './types';
import { mobileMenuVariants, mobileNavItemVariants } from './animations';
import { t } from '../../translations';

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isDarkMode: boolean;
  menuItems: MenuItem[];
  language: string;
}

const MobileNav: React.FC<MobileNavProps> = ({ isOpen, setIsOpen, isDarkMode, menuItems, language }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={mobileMenuVariants}
          className={`fixed top-0 left-0 h-screen w-full sm:w-80 sm:left-auto sm:right-0 shadow-xl md:hidden z-[9999] overflow-y-auto ${
            isDarkMode 
              ? 'bg-gray-900/98 backdrop-blur-md' 
              : 'bg-gray-900/98 backdrop-blur-md text-white'
          }`}
        >
          {/* Left border accent */}
          <motion.div 
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 origin-top"
          />
          
          <div className="flex flex-col p-8 pt-16 space-y-6">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="font-serif text-xl font-semibold text-amber-400"
              >
                Copper Artistry
              </motion.div>
              
              <motion.button
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full bg-amber-800/50 text-white hover:bg-amber-700/70 transition-all duration-300"
              >
                <X size={24} />
              </motion.button>
            </div>

            {/* Divider */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"
            />

            {menuItems.map((item, index) => (
              <motion.div
                key={item.title}
                custom={index}
                variants={mobileNavItemVariants}
                className="block"
              >
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-lg font-medium transition-all border-l-2 border-transparent hover:border-amber-400 pl-3 hover:pl-5 hover:text-amber-300"
                  onClick={() => setIsOpen(false)}
                >
                  {t(item.title.toLowerCase(), language) || item.title}
                </Link>
              </motion.div>
            ))}
            
            {/* Social icons in mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-4 mt-4 border-t border-amber-700/30"
            >
              <div className="flex space-x-4 justify-center">
                {[
                  { icon: <Instagram size={20} />, name: 'Instagram', color: 'hover:text-pink-400' },
                  { icon: <Phone size={20} />, name: 'WhatsApp', color: 'hover:text-green-400' },
                  { icon: <Video size={20} />, name: 'TikTok', color: 'hover:text-blue-400' }
                ].map((social, index) => (
                  <motion.a
                    key={social.name}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 rounded-full flex items-center justify-center group transition-colors duration-300 
                      bg-amber-800/50 hover:bg-amber-700/70 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            {/* Contact info in mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="pt-4 mt-2 text-center text-sm"
            >
              <p className="mb-2 flex items-center justify-center gap-2">
                <Phone size={14} className="text-amber-400" />
                +1 (234) 567-8900
              </p>
              <p className="flex items-center justify-center gap-2">
                <Video size={14} className="text-amber-400" />
                {language === 'fr' ? 'Réserver une consultation virtuelle' : 'Book a Virtual Consultation'}
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNav;
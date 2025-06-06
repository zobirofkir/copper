import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Globe } from 'lucide-react';
import { navItemVariants } from './animations';
import { t } from '../../translations';

interface ActionButtonsProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  language: string;
  toggleLanguage: () => void;
  menuItemsLength: number;
  isMobile?: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  isDarkMode,
  toggleDarkMode,
  language,
  toggleLanguage,
  menuItemsLength,
  isMobile = false
}) => {
  const [isHovered, setIsHovered] = useState<{ lang: boolean; theme: boolean }>({ lang: false, theme: false });
  const [isAnimating, setIsAnimating] = useState(false);

  const buttonBaseClass = `relative p-2 rounded-full shadow-lg transition-all duration-300 ${
    isDarkMode 
      ? 'bg-gray-800/90 text-amber-300 hover:bg-gray-700 hover:shadow-amber-500/20' 
      : 'bg-gradient-to-br from-amber-600 to-amber-700 text-amber-50 hover:from-amber-500 hover:to-amber-600'
  }`;

  const handleThemeToggle = () => {
    setIsAnimating(true);
    toggleDarkMode();
    setTimeout(() => setIsAnimating(false), 600);
  };

  if (isMobile) {
    return (
      <>
        {/* Mobile Language Switcher */}
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95, y: 2 }}
          onClick={toggleLanguage}
          onHoverStart={() => setIsHovered({ ...isHovered, lang: true })}
          onHoverEnd={() => setIsHovered({ ...isHovered, lang: false })}
          className={`${buttonBaseClass} mr-2 overflow-hidden`}
          aria-label={t('language', language)}
          title={language === 'en' ? t('french', language) : t('english', language)}
        >
          <motion.div 
            className="flex items-center justify-center"
            animate={{ y: isHovered.lang ? -2 : 0 }}
          >
            <Globe size={16} className="mr-1" strokeWidth={2.5} />
            <span className="text-xs font-bold tracking-wider">{language === 'en' ? 'EN' : 'FR'}</span>
          </motion.div>
          {isHovered.lang && (
            <motion.div 
              className="absolute inset-0 bg-amber-400/10 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            />
          )}
        </motion.button>
        
        {/* Mobile Dark Mode Toggle */}
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95, y: 2 }}
          onClick={handleThemeToggle}
          onHoverStart={() => setIsHovered({ ...isHovered, theme: true })}
          onHoverEnd={() => setIsHovered({ ...isHovered, theme: false })}
          className={`${buttonBaseClass} mr-2 overflow-hidden`}
          aria-label={isDarkMode ? t('lightMode', language) : t('darkMode', language)}
          title={isDarkMode ? t('lightMode', language) : t('darkMode', language)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isDarkMode ? 'sun' : 'moon'}
              initial={{ rotate: -30, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 30, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center"
            >
              {isDarkMode ? <Sun size={18} strokeWidth={2.5} /> : <Moon size={18} strokeWidth={2.5} />}
            </motion.div>
          </AnimatePresence>
          {isHovered.theme && (
            <motion.div 
              className="absolute inset-0 bg-amber-400/10 rounded-full"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
            />
          )}
        </motion.button>
      </>
    );
  }

  return (
    <div className="hidden md:flex items-center space-x-4">
      {/* Language Switcher */}
      <motion.button
        variants={navItemVariants}
        custom={menuItemsLength + 2}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95, y: 2 }}
        onClick={toggleLanguage}
        onHoverStart={() => setIsHovered({ ...isHovered, lang: true })}
        onHoverEnd={() => setIsHovered({ ...isHovered, lang: false })}
        className={`${buttonBaseClass} overflow-hidden`}
        aria-label={t('language', language)}
        title={language === 'en' ? t('french', language) : t('english', language)}
      >
        <motion.div 
          className="flex items-center justify-center"
          animate={{ y: isHovered.lang ? -2 : 0 }}
        >
          <Globe size={18} className="mr-1" strokeWidth={2.5} />
          <span className="text-xs font-bold tracking-wider">{language === 'en' ? 'EN' : 'FR'}</span>
        </motion.div>
        {isHovered.lang && (
          <motion.div 
            className="absolute inset-0 bg-amber-400/10 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          />
        )}
      </motion.button>
      
      {/* Dark Mode Toggle */}
      <motion.button
        variants={navItemVariants}
        custom={menuItemsLength + 3}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95, y: 2 }}
        onClick={handleThemeToggle}
        onHoverStart={() => setIsHovered({ ...isHovered, theme: true })}
        onHoverEnd={() => setIsHovered({ ...isHovered, theme: false })}
        className={`${buttonBaseClass} overflow-hidden ${isAnimating ? 'animate-pulse' : ''}`}
        aria-label={isDarkMode ? t('lightMode', language) : t('darkMode', language)}
        title={isDarkMode ? t('lightMode', language) : t('darkMode', language)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={isDarkMode ? 'sun' : 'moon'}
            initial={{ rotate: -30, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={{ rotate: 30, opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center"
          >
            {isDarkMode ? <Sun size={20} strokeWidth={2.5} /> : <Moon size={20} strokeWidth={2.5} />}
          </motion.div>
        </AnimatePresence>
        {isHovered.theme && (
          <motion.div 
            className="absolute inset-0 bg-amber-400/10 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
          />
        )}
      </motion.button>
    </div>
  );
};

export default ActionButtons;
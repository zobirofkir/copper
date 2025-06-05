import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Globe } from 'lucide-react';
import { navItemVariants } from './animations';

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
  const buttonBaseClass = `p-2 rounded-full transition-all duration-300 ${
    isDarkMode 
      ? 'bg-gray-800 text-amber-300 hover:bg-gray-700' 
      : 'bg-amber-700/50 text-amber-100 hover:bg-amber-700'
  }`;

  if (isMobile) {
    return (
      <>
        {/* Mobile Language Switcher */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleLanguage}
          className={`${buttonBaseClass} mr-1`}
          aria-label="Toggle language"
        >
          <span className="text-xs font-medium">{language.toUpperCase()}</span>
        </motion.button>
        
        {/* Mobile Dark Mode Toggle */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 15 }}
          whileTap={{ scale: 0.9, rotate: -15 }}
          onClick={toggleDarkMode}
          className={`${buttonBaseClass} mr-2`}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
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
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleLanguage}
        className={buttonBaseClass}
        aria-label="Toggle language"
      >
        <Globe size={18} className="mr-1" />
        <span className="text-xs font-medium">{language.toUpperCase()}</span>
      </motion.button>
      
      {/* Dark Mode Toggle */}
      <motion.button
        variants={navItemVariants}
        custom={menuItemsLength + 3}
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9, rotate: -15 }}
        onClick={toggleDarkMode}
        className={buttonBaseClass}
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </motion.button>
    </div>
  );
};

export default ActionButtons;
import React from 'react';
import { motion } from 'framer-motion';
import { borderVariants } from './animations';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import ActionButtons from './ActionButtons';
import MobileMenuButton from './MobileMenuButton';
import { HeaderComponentState, HeaderComponentActions } from './types';

interface HeaderMainProps {
  state: HeaderComponentState;
  actions: HeaderComponentActions;
  language: string;
  toggleLanguage: () => void;
}

const HeaderMain: React.FC<HeaderMainProps> = ({ state, actions, language, toggleLanguage }) => {
  const { isOpen, isDarkMode, scrolled, menuItems, headerVariants } = state;
  const { setIsOpen, toggleDarkMode } = actions;

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-lg' : 'py-4'
      } ${isDarkMode 
          ? 'bg-black/95 text-white backdrop-blur-md' 
          : 'bg-gradient-to-r from-amber-900/95 to-amber-800/95 text-white backdrop-blur-md'
      }`}
    >
      {/* Copper accent border with animation */}
      <motion.div 
        variants={borderVariants}
        className="absolute bottom-0 w-full h-0.5 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400 origin-left"
      />
      
      {/* Subtle background texture */}
      <motion.div 
        animate={{ 
          background: [
            'radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 80% 70%, rgba(251, 191, 36, 0.05) 0%, transparent 70%)',
            'radial-gradient(circle at 20% 30%, rgba(251, 191, 36, 0.05) 0%, transparent 70%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      />

      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <DesktopNav menuItems={menuItems} />

          {/* Desktop Action Buttons */}
          <ActionButtons 
            isDarkMode={isDarkMode}
            toggleDarkMode={toggleDarkMode}
            language={language}
            toggleLanguage={toggleLanguage}
            menuItemsLength={menuItems.length}
          />

          {/* Mobile Controls */}
          <div className="flex items-center md:hidden">
            {/* Mobile Action Buttons */}
            <ActionButtons 
              isDarkMode={isDarkMode}
              toggleDarkMode={toggleDarkMode}
              language={language}
              toggleLanguage={toggleLanguage}
              menuItemsLength={menuItems.length}
              isMobile={true}
            />

            {/* Mobile Menu Button */}
            <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default HeaderMain;
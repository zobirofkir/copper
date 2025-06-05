import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Instagram, Phone, Video, Search, ShoppingBag, Globe } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useHeaderComponent } from '../hooks/useHeaderComponent';
import Logo from '../assets/logo/logo.jpg';
import { useState, useEffect } from 'react';

const HeaderComponent = () => {
  const [state, actions] = useHeaderComponent();
  const { isOpen, isDarkMode, scrolled, menuItems, headerVariants, mobileMenuVariants, linkVariants } = state;
  const { setIsOpen, toggleDarkMode } = actions;
  
  // Language state
  const [language, setLanguage] = useState('en');
  
  // Toggle language between English and French
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'fr' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };
  
  // Initialize language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  /**
   * Enhanced animation variants
   */
  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.5,
        ease: "easeOut"
      }
    }),
    hover: {
      y: -2,
      transition: { duration: 0.2 }
    }
  };

  /**
   * Top border animation
   */
  const borderVariants = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1, 
      transition: { 
        duration: 1.5, 
        ease: "easeInOut",
        delay: 0.3
      } 
    }
  };

  /**
   * Social icon animation
   */
  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1 + 0.5,
        duration: 0.4,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.15,
      y: -3,
      transition: { duration: 0.2 }
    }
  };

  return (
    <>
      {/* Top Bar with Contact Info and Social Icons */}
      <div className={`w-full py-2 px-4 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-amber-50 text-gray-800'
      }`}>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          {/* Left Side Contact Info */}
          <div className="flex space-x-4 mb-2 sm:mb-0 text-sm">
            <span className="flex items-center gap-1">
              <Phone size={14} className="text-amber-600" />
              <span className="hidden sm:inline">+1 (234) 567-8900</span>
            </span>
            <span className="hidden md:flex items-center gap-1">
              <Video size={14} className="text-amber-600" />
              <span>Book a Virtual Consultation</span>
            </span>
          </div>
          
          {/* Right Side Social Icons */}
          <div className="flex items-center space-x-3">
            {[
              { icon: <Instagram size={16} />, name: 'Instagram', color: 'hover:text-pink-600' },
              { icon: <Phone size={16} />, name: 'WhatsApp', color: 'hover:text-green-500' },
              { icon: <Video size={16} />, name: 'TikTok', color: 'hover:text-blue-400' }
            ].map((social, index) => (
              <motion.a
                key={social.name}
                href="#"
                custom={index}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                variants={socialIconVariants}
                className={`p-1.5 rounded-full flex items-center justify-center transition-colors ${
                  isDarkMode 
                    ? 'bg-gray-800 hover:bg-gray-700' 
                    : 'bg-white hover:bg-gray-200'
                } ${social.color}`}
                aria-label={social.name}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

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
            {/* Logo with enhanced animation */}
            <motion.div
              variants={logoVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-2xl font-bold relative"
            >
              <Link href="/" className="flex items-center gap-2">
                <div className="relative group">
                  <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 opacity-75 group-hover:opacity-100 blur-sm transition duration-300"></div>
                  <img 
                    src={Logo} 
                    className="md:w-16 w-11 md:h-16 h-11 rounded-full object-cover border-2 border-amber-500 shadow-md relative"
                    alt="Copper Artistry Logo"
                  />
                </div>
                <span className="hidden sm:block font-serif tracking-wide text-lg">
                  <span className="text-amber-400 font-bold">Cop</span>
                  <span className="font-light">per</span>
                </span>
              </Link>
            </motion.div>

            {/* Desktop Navigation - Enhanced */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-6">
              {menuItems.map((item, index) => (
                <motion.div 
                  key={item.title} 
                  custom={index}
                  variants={navItemVariants}
                  whileHover="hover"
                >
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-sm lg:text-base font-medium transition-all duration-200 relative group"
                  >
                    {item.title}
                    <motion.span 
                      className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Search Button */}
              {/* <motion.button
                variants={navItemVariants}
                custom={menuItems.length + 1}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full text-white hover:bg-amber-700/50 transition-colors duration-300"
                aria-label="Search"
              >
                <Search size={20} />
              </motion.button> */}
              
              {/* Language Switcher */}
              <motion.button
                variants={navItemVariants}
                custom={menuItems.length + 2}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleLanguage}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 text-amber-300 hover:bg-gray-700' 
                    : 'bg-amber-700/50 text-amber-100 hover:bg-amber-700'
                }`}
                aria-label="Toggle language"
              >
                <Globe size={18} className="mr-1" />
                <span className="text-xs font-medium">{language.toUpperCase()}</span>
              </motion.button>
              
              {/* Dark Mode Toggle */}
              <motion.button
                variants={navItemVariants}
                custom={menuItems.length + 3}
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9, rotate: -15 }}
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 text-amber-300 hover:bg-gray-700' 
                    : 'bg-amber-700/50 text-amber-100 hover:bg-amber-700'
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </motion.button>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center md:hidden">
              {/* Mobile Search Button */}
              {/* <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full text-white hover:bg-amber-700/50 transition-colors duration-300 mr-1"
                aria-label="Search"
              >
                <Search size={18} />
              </motion.button> */}
                            
              {/* Mobile Language Switcher */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleLanguage}
                className={`p-2 mr-1 rounded-full transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 text-amber-300 hover:bg-gray-700' 
                    : 'bg-amber-700/50 text-amber-100 hover:bg-amber-700'
                }`}
                aria-label="Toggle language"
              >
                <span className="text-xs font-medium">{language.toUpperCase()}</span>
              </motion.button>
              
              {/* Mobile Dark Mode Toggle */}
              <motion.button
                whileHover={{ scale: 1.1, rotate: 15 }}
                whileTap={{ scale: 0.9, rotate: -15 }}
                onClick={toggleDarkMode}
                className={`p-2 mr-2 rounded-full transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-800 text-amber-300 hover:bg-gray-700' 
                    : 'bg-amber-700/50 text-amber-100 hover:bg-amber-700'
                }`}
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md transition-all duration-300 text-white hover:bg-amber-700/50"
                aria-label="Open menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
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
                    : 'bg-gradient-to-br from-amber-900/98 to-amber-800/98 backdrop-blur-md text-white'
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
                      variants={{
                        closed: { opacity: 0, x: 20 },
                        open: i => ({
                          opacity: 1,
                          x: 0,
                          transition: {
                            delay: i * 0.1 + 0.3,
                            duration: 0.5
                          }
                        })
                      }}
                      className="block"
                    >
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-lg font-medium transition-all border-l-2 border-transparent hover:border-amber-400 pl-3 hover:pl-5 hover:text-amber-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
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
                      Book a Virtual Consultation
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
};

export default HeaderComponent;
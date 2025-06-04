import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useHeaderComponent } from '../hooks/useHeaderComponent';
import Logo from '../assets/logo/logo.jpg';

const HeaderComponent = () => {
  const [state, actions] = useHeaderComponent();
  const { isOpen, isDarkMode, scrolled, menuItems, headerVariants, mobileMenuVariants, linkVariants } = state;
  const { setIsOpen, toggleDarkMode } = actions;

  // Enhanced animation variants
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
    })
  };

  // Top border animation
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

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`relative w-full z-40 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      } ${isDarkMode 
          ? 'bg-black/90 text-white backdrop-blur-sm' 
          : 'bg-white/90 text-gray-900 backdrop-blur-sm'
      }`}
    >
      {/* Top copper accent border with animation - similar to footer */}
      <motion.div 
        variants={borderVariants}
        className="absolute bottom-0 w-full h-0.5 bg-gradient-to-r from-gray-800/80 via-gray-600 to-gray-800/80 origin-left"
      />
      
      {/* Subtle background texture */}
      <motion.div 
        animate={{ 
          background: [
            'radial-gradient(circle at 20% 30%, rgba(128, 128, 128, 0.03) 0%, transparent 70%)',
            'radial-gradient(circle at 80% 70%, rgba(128, 128, 128, 0.03) 0%, transparent 70%)',
            'radial-gradient(circle at 20% 30%, rgba(128, 128, 128, 0.03) 0%, transparent 70%)'
          ]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Shadow effect for scrolled state */}
      {scrolled && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 shadow-md pointer-events-none"
        />
      )}

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
              <div className="relative">
                <img 
                  src={Logo} 
                  className="md:w-12 w-11 md:h-12 h-11 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 shadow-md"
                  alt="Copper Artistry Logo"
                />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation - Enhanced */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {menuItems.map((item, index) => (
              <motion.div 
                key={item.title} 
                custom={index}
                variants={navItemVariants}
                whileHover="hover"
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-sm lg:text-base font-medium transition-all duration-200 border-b-2 relative group ${
                    isDarkMode
                      ? 'text-gray-300 hover:text-white border-transparent hover:border-white'
                      : 'text-gray-800 hover:text-black border-transparent hover:border-gray-800'
                  }`}
                >
                  {item.title}
                  <motion.span 
                    className={`absolute bottom-0 left-0 w-0 h-0.5 ${
                      isDarkMode ? 'bg-white' : 'bg-gray-800'
                    } group-hover:w-full transition-all duration-300`}
                  />
                </Link>
              </motion.div>
            ))}

            {/* Dark Mode Toggle - Enhanced */}
            <motion.button
              variants={navItemVariants}
              custom={menuItems.length}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9, rotate: -15 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 text-yellow-300 shadow-inner shadow-gray-900' 
                  : 'bg-gray-200 text-gray-800 shadow-md'
              }`}
              aria-label="Basculer le mode sombre"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          {/* Mobile Controls - Enhanced */}
          <div className="flex items-center md:hidden">
            {/* Mobile Dark Mode Toggle */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9, rotate: -15 }}
              onClick={toggleDarkMode}
              className={`p-2 mr-2 rounded-full transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gray-800 text-yellow-300 shadow-inner shadow-gray-900' 
                  : 'bg-gray-200 text-gray-800 shadow-md'
              }`}
              aria-label="Basculer le mode sombre"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-all duration-300 ${
                isDarkMode 
                  ? 'text-white hover:bg-gray-800/50' 
                  : 'text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Ouvrir le menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation - Enhanced */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className={`fixed top-0 left-0 h-screen w-full sm:w-80 sm:left-auto sm:right-0 shadow-xl md:hidden z-[9999] overflow-y-auto ${
                isDarkMode 
                  ? 'bg-black/95 backdrop-blur-sm' 
                  : 'bg-white/95 backdrop-blur-sm'
              }`}
            >
              {/* Left border accent */}
              <motion.div 
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-gray-800/80 via-gray-600 to-gray-800/80 origin-top"
              />
              
              <div className="flex flex-col p-8 pt-16 space-y-6">
                <div className="flex justify-between items-center">
                  
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className={`p-2 rounded-full transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-gray-800/80 text-white hover:bg-gray-700' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    <X size={24} />
                  </motion.button>
                </div>

                {/* Divider */}
                <motion.div 
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="h-0.5 w-full bg-gradient-to-r from-transparent via-gray-600/30 to-transparent"
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
                      className={`block px-4 py-3 text-lg font-medium transition-all border-l-2 ${
                        isDarkMode
                          ? 'text-white hover:text-gray-200 border-transparent hover:border-white pl-3 hover:pl-5'
                          : 'text-gray-900 hover:text-black border-transparent hover:border-gray-900 pl-3 hover:pl-5'
                      }`}
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
                  className="pt-4 mt-4 border-t border-gray-200/20 dark:border-gray-700/30"
                >
                  <div className="flex space-x-4 justify-center">
                    {[
                      { icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z' }, // Facebook
                      { icon: 'M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.22151 20.9723 6.94365 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z' }, // Twitter
                      { icon: 'M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' }, // GitHub
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`w-10 h-10 rounded-full flex items-center justify-center group transition-colors duration-300 ${
                          isDarkMode 
                            ? 'bg-gray-800/50 hover:bg-gray-700/70' 
                            : 'bg-gray-100 hover:bg-gray-200'
                        }`}
                      >
                        <svg 
                          className={`w-5 h-5 transition-colors duration-300 ${
                            isDarkMode
                              ? 'text-gray-400 group-hover:text-white'
                              : 'text-gray-700 group-hover:text-gray-900'
                          }`}
                          fill="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path d={social.icon} />
                        </svg>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default HeaderComponent;

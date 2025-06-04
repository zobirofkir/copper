import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Instagram, Phone, Video } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useHeaderComponent } from '../hooks/useHeaderComponent';
import Logo from '../assets/logo/logo.jpg';

const HeaderComponent = () => {
  const [state, actions] = useHeaderComponent();
  const { isOpen, isDarkMode, scrolled, menuItems, headerVariants, mobileMenuVariants, linkVariants } = state;
  const { setIsOpen, toggleDarkMode } = actions;

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
    })
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
      {/* Top Bar with Links and Social Icons */}
      <div className={`w-full py-2 px-4 transition-colors duration-300 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'
      }`}>
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
          {/* Left Side Links */}
          <div className="flex space-x-4 mb-2 sm:mb-0">
            
          </div>
          
          {/* Right Side Social Icons */}
          <div className="flex items-center space-x-3">
            {[
              { icon: <Instagram size={18} />, name: 'Instagram', color: 'hover:text-pink-600' },
              { icon: <Phone size={18} />, name: 'WhatsApp', color: 'hover:text-green-500' },
              { icon: <Video size={18} />, name: 'TikTok', color: 'hover:text-blue-400' }
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
        className={`relative w-full z-40 transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-4'
        } ${isDarkMode 
            ? 'bg-black/90 text-white backdrop-blur-sm' 
            : 'bg-white/90 text-gray-900 backdrop-blur-sm'
        }`}
      >
        {/* Top copper accent border with animation */}
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
                    className="md:w-20 w-11 md:h-20 h-11 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700 shadow-md"
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
                aria-label="Toggle dark mode"
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
                aria-label="Toggle dark mode"
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
                aria-label="Open menu"
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
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                      className="font-serif text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 via-gray-800 to-gray-700 dark:from-gray-300 dark:via-gray-100 dark:to-gray-300"
                    >
                      Menu
                    </motion.div>
                    
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
                        { icon: <Instagram size={20} />, name: 'Instagram', color: 'hover:text-pink-600' },
                        { icon: <Phone size={20} />, name: 'WhatsApp', color: 'hover:text-green-500' },
                        { icon: <Video size={20} />, name: 'TikTok', color: 'hover:text-blue-400' }
                      ].map((social, index) => (
                        <motion.a
                          key={social.name}
                          href="#"
                          whileHover={{ scale: 1.1, y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-10 h-10 rounded-full flex items-center justify-center group transition-colors duration-300 ${
                            isDarkMode 
                              ? 'bg-gray-800/50 hover:bg-gray-700/70' 
                              : 'bg-gray-100 hover:bg-gray-200'
                          } ${social.color}`}
                        >
                          {social.icon}
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
    </>
  );
};

export default HeaderComponent;
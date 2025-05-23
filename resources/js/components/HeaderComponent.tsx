import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from '@inertiajs/react';
import { useHeaderComponent } from '../hooks/useHeaderComponent';

const HeaderComponent = () => {
  const [state, actions] = useHeaderComponent();
  const { isOpen, isDarkMode, scrolled, menuItems, headerVariants, mobileMenuVariants, linkVariants } = state;
  const { setIsOpen, toggleDarkMode } = actions;

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-lg' : 'py-4'
      } ${
        isDarkMode 
          ? 'bg-black text-white' 
          : 'bg-white text-gray-900'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent"
          >
            <Link href="/" className="flex items-center gap-2">
              <span className="text-3xl font-extrabold tracking-tight">Cop</span>
            </Link>
          </motion.div>

          {/* Navigation Bureau */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-8">
            {menuItems.map((item) => (
              <motion.div key={item.title} variants={linkVariants} whileHover="hover">
                <Link
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm lg:text-base font-medium transition-all duration-200 ${
                    isDarkMode 
                      ? 'text-gray-200 hover:text-amber-400 hover:bg-gray-900' 
                      : 'text-gray-700 hover:text-amber-600 hover:bg-gray-100'
                  }`}
                >
                  {item.title}
                </Link>
              </motion.div>
            ))}
            
            {/* Bouton Mode Sombre */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                isDarkMode ? 'bg-gray-800 text-amber-400' : 'bg-gray-100 text-amber-600'
              }`}
              aria-label="Basculer le mode sombre"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
          </div>

          <div className="flex items-center md:hidden">
            {/* Basculer Mode Sombre Mobile */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 mr-2 rounded-full ${
                isDarkMode ? 'bg-gray-800 text-amber-400' : 'bg-gray-100 text-amber-600'
              }`}
              aria-label="Basculer le mode sombre"
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </motion.button>
            
            {/* Bouton Menu Mobile */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isDarkMode ? 'text-white hover:bg-gray-800' : 'text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Ouvrir le menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Navigation Mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
              className={`fixed inset-y-0 right-0 w-full sm:w-80 shadow-xl md:hidden z-50 ${
                isDarkMode ? 'bg-black' : 'bg-white'
              }`}
            >
              <div className="flex flex-col p-8 space-y-6">
                <div className="flex justify-end">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsOpen(false)}
                    className={`p-2 rounded-full ${
                      isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <X size={24} />
                  </motion.button>
                </div>
                
                {menuItems.map((item) => (
                  <motion.div
                    key={item.title}
                    variants={linkVariants}
                    whileHover="hover"
                    className="block"
                  >
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 rounded-md text-lg font-medium transition-all ${
                        isDarkMode 
                          ? 'text-white hover:bg-gray-800 hover:text-amber-400' 
                          : 'text-gray-900 hover:bg-gray-100 hover:text-amber-600'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default HeaderComponent;
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
      className={`relative w-full z-40 transition-all duration-300 ${
        scrolled ? 'py-2 shadow-md' : 'py-4'
      } ${isDarkMode ? 'bg-black/90 text-white backdrop-blur-sm' : 'bg-white/90 text-gray-900 backdrop-blur-sm'}`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold"
          >
            <Link href="/" className="flex items-center gap-2">
              <span className={`text-3xl font-extrabold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Copper</span>
            </Link>
          </motion.div>

          {/* Navigation Bureau */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {menuItems.map((item) => (
              <motion.div key={item.title} variants={linkVariants} whileHover="hover">
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-sm lg:text-base font-medium transition-all duration-200 border-b-2 ${
                    isDarkMode
                      ? 'text-gray-300 hover:text-white border-transparent hover:border-white'
                      : 'text-gray-800 hover:text-black border-transparent hover:border-gray-800'
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
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
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
                isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-800'
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
              className={`absolute inset-y-0 right-0 w-full sm:w-80 shadow-xl md:hidden z-50 ${
                isDarkMode ? 'bg-black/95 backdrop-blur-sm' : 'bg-white/95 backdrop-blur-sm'
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
                      className={`block px-4 py-3 text-lg font-medium transition-all border-l-2 ${
                        isDarkMode
                          ? 'text-white hover:text-gray-200 border-transparent hover:border-white pl-3'
                          : 'text-gray-900 hover:text-black border-transparent hover:border-gray-900 pl-3'
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

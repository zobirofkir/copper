import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useTranslation } from './TranslationProvider';

interface LanguageSwitcherProps {
  className?: string;
  compact?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '', compact = false }) => {
  const { language, toggleLanguage, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleToggle = () => {
    toggleLanguage();
    setIsOpen(false);
  };
  
  const buttonClass = `flex items-center justify-center gap-2 px-3 py-2 rounded-md transition-all duration-300 ${
    compact ? 'text-sm' : ''
  } ${
    language === 'en' 
      ? 'bg-amber-600 text-white hover:bg-amber-700' 
      : 'bg-blue-600 text-white hover:bg-blue-700'
  } ${className}`;
  
  if (compact) {
    return (
      <button 
        onClick={toggleLanguage}
        className={buttonClass}
        aria-label={t('language')}
      >
        <Globe size={16} />
        <span>{language.toUpperCase()}</span>
      </button>
    );
  }
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClass}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={18} />
        <span>{language === 'en' ? t('english') : t('french')}</span>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-1 right-0 bg-white dark:bg-gray-800 rounded-md shadow-lg overflow-hidden z-50 min-w-[120px]"
          >
            <div className="py-1">
              <button
                onClick={handleToggle}
                className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                {language === 'en' ? t('french') : t('english')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
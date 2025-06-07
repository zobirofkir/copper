import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { t } from "@/translations/galleryTranslations";
import { useLanguage } from "../header/useLanguage";

const DecorativeElements: React.FC = () => {

  const { language } = useLanguage();

  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    setCurrentLang(language);

    const handleLanguageChange = (e) => {
      setCurrentLang(e.detail.language);
    };

    window.addEventListener('languageChanged', handleLanguageChange);
    return () => window.removeEventListener('languageChanged', handleLanguageChange);
  }, [language]);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-gray-400 to-transparent opacity-20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-gray-400 to-transparent opacity-20 blur-3xl" />
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6"
      />
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center text-gray-900 dark:text-gray-100 tracking-tight"
      >
      {t('GalleryTitle', currentLang)}
      </motion.h2>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6"
      />
    </>
  );
};

export default DecorativeElements;
import { useState, useEffect } from 'react';
import { t } from '../../translations';

export const useLanguage = () => {
  const [language, setLanguage] = useState('en');
  
  // Toggle language between English and French
  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'fr' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
    
    // Update HTML lang attribute for accessibility
    document.documentElement.setAttribute('lang', newLang);
    
    // Dispatch a custom event that components can listen to
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { language: newLang } }));
  };
  
  // Initialize language from localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'fr')) {
      setLanguage(savedLanguage);
      document.documentElement.setAttribute('lang', savedLanguage);
    }
  }, []);

  // Helper function to translate text
  const translate = (key: string) => t(key, language);

  return { language, toggleLanguage, translate };
};
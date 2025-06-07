import { useState, useEffect } from 'react';
import { HeaderComponentState, HeaderComponentActions, MenuItem } from '../components/header/types';
import { headerVariants, mobileMenuVariants, linkVariants } from '../components/header/animations';
import { useLanguage } from '../components/header/useLanguage';

export const useHeaderComponent = (): [HeaderComponentState, HeaderComponentActions] => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language } = useLanguage();

  /**
   * Load theme preference from localStorage on mount
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(darkModeQuery.matches);
    }
  }, []);

  /**
   * Toggle dark mode in document and save to localStorage
   */
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);
  
  /**
   * Listen for language changes
   */
  useEffect(() => {
    const handleLanguageChange = () => {
      /**
       * Force a re-render when language changes
       */
      setScrolled(prev => !prev);
      setTimeout(() => setScrolled(prev => !prev), 0);
    };
    
    window.addEventListener('languageChanged', handleLanguageChange);
    return () => window.removeEventListener('languageChanged', handleLanguageChange);
  }, []);

  /**
   * Handle scroll effect
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: MenuItem[] = [
    { title: 'Accueil', href: '/', translationKey: 'home' },
    { title: 'Projets', href: '/projects', translationKey: 'projects' },
    { title: 'À propos', href: '/abouts', translationKey: 'about' },
    { title: 'Blog', href: '/blogs', translationKey: 'blog' },
    { title: 'Gallery', href: '/galleries', translationKey: 'gallery' },
    { title: 'Contact', href: '/contacts', translationKey: 'contact' },
  ];

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  /**
   * Get translated menu items based on current language
   */
  const getTranslatedMenuItems = () => {
    return menuItems.map(item => {
      const translatedItem = { ...item };
      if (language === 'en') {
        
        /**
         * Translate French titles to English
         */
        if (item.title === 'Accueil') translatedItem.title = 'Home';
        if (item.title === 'Projets') translatedItem.title = 'Projects';
        if (item.title === 'À propos') translatedItem.title = 'About';
        if (item.title === 'Gallery') translatedItem.title = 'Gallery';
      } else {
        
        /**
         * Keep original French titles or translate English titles to French
         */
        if (item.title === 'Home') translatedItem.title = 'Accueil';
        if (item.title === 'Projects') translatedItem.title = 'Projets';
        if (item.title === 'About') translatedItem.title = 'À propos';
        if (item.title === 'Gallery') translatedItem.title = 'Galerie';
      }
      return translatedItem;
    });
  };

  const state: HeaderComponentState = {
    isOpen,
    isDarkMode,
    scrolled,
    menuItems: getTranslatedMenuItems(),
    headerVariants,
    mobileMenuVariants,
    linkVariants
  };

  const actions: HeaderComponentActions = {
    setIsOpen,
    toggleDarkMode
  };

  return [state, actions];
};
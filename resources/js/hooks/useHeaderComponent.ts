import { useState, useEffect } from 'react';
import { HeaderComponentState, HeaderComponentActions, MenuItem } from '../components/header/types';
import { headerVariants, mobileMenuVariants, linkVariants } from '../components/header/animations';

export const useHeaderComponent = (): [HeaderComponentState, HeaderComponentActions] => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
    { title: 'Accueil', href: '/' },
    { title: 'Projets', href: '/projects' },
    { title: 'À propos', href: '/abouts' },
    { title: 'Blog', href: '/blogs' },
    { title: 'Gallery', href: '/galleries' },
    { title: 'Contact', href: '/contacts' },
  ];

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const state: HeaderComponentState = {
    isOpen,
    isDarkMode,
    scrolled,
    menuItems,
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
import { useState, useEffect } from 'react';

export interface HeaderComponentState {
  isOpen: boolean;
  isDarkMode: boolean;
  scrolled: boolean;
  menuItems: Array<{ title: string; href: string }>;
  headerVariants: any;
  mobileMenuVariants: any;
  linkVariants: any;
}

export interface HeaderComponentActions {
  setIsOpen: (isOpen: boolean) => void;
  toggleDarkMode: () => void;
}

export const useHeaderComponent = (): [HeaderComponentState, HeaderComponentActions] => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Load theme preference from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDarkMode(darkModeQuery.matches);
    }
  }, []);

  // Toggle dark mode in document and save to localStorage
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Accueil', href: '/' },
    { title: 'Projets', href: '#' },
    { title: 'À propos', href: '#' },
    { title: 'Contact', href: '#' },
  ];

  const headerVariants = {
    hidden: { y: -100 },
    visible: { 
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: '100%',
      transition: {
        type: 'tween',
        duration: 0.3
      }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'tween',
        duration: 0.3
      }
    }
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: '#f59e0b',
      transition: {
        type: 'spring',
        stiffness: 300
      }
    }
  };

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
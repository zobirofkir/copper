import { useState, useEffect } from 'react';
import { MenuItem } from '../components/header/types';
import { useLanguage } from '../components/header/useLanguage';

export const useTranslatedMenuItems = (originalMenuItems: MenuItem[]) => {
  const { language } = useLanguage();
  const [menuItems, setMenuItems] = useState<MenuItem[]>(originalMenuItems);
  
  // Update menu items when language changes
  useEffect(() => {
    if (language === 'en') {
      // Convert French menu items to English
      setMenuItems(originalMenuItems.map(item => {
        if (item.title === 'Accueil') return { ...item, title: 'Home' };
        if (item.title === 'Projets') return { ...item, title: 'Projects' };
        if (item.title === 'À propos') return { ...item, title: 'About' };
        if (item.title === 'Blog') return { ...item, title: 'Blog' };
        if (item.title === 'Gallery') return { ...item, title: 'Gallery' };
        if (item.title === 'Contact') return { ...item, title: 'Contact' };
        return item;
      }));
    } else {
      // Convert English menu items to French
      setMenuItems(originalMenuItems.map(item => {
        if (item.title === 'Home') return { ...item, title: 'Accueil' };
        if (item.title === 'Projects') return { ...item, title: 'Projets' };
        if (item.title === 'About') return { ...item, title: 'À propos' };
        if (item.title === 'Blog') return { ...item, title: 'Blog' };
        if (item.title === 'Gallery') return { ...item, title: 'Galerie' };
        if (item.title === 'Contact') return { ...item, title: 'Contact' };
        return item;
      }));
    }
  }, [language, originalMenuItems]);
  
  return menuItems;
};
export const translations = {
  en: {
    /**
     * Site name
     */
    copper: 'Copper',
    
    /**
     * Navigation
     */
    home: 'Home',
    about: 'About',
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact',
    projects: 'Projects',
    blog: 'Blog',
    gallery: 'Gallery',
    accueil: 'Home',
    projets: 'Projects',
    'à propos': 'About',
    blogs: 'Blog',
    galleries: 'Gallery',
    contacts: 'Contact',
    
    /**
     * Common UI elements
     */
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    language: 'Language',
    english: 'English',
    french: 'French',
    
    /**
     * Call to action
     */
    getStarted: 'Get Started',
    learnMore: 'Learn More',
    
    /**
     * Form elements
     */
    submit: 'Submit',
    cancel: 'Cancel',
    
    /**
     * Footer
     */
    allRightsReserved: 'All Rights Reserved',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service'
  },
  fr: {
    /**
     * Site name
     */
    copper: 'Cuivre',
    
    /**
     * Navigation
     */
    home: 'Accueil',
    about: 'À propos',
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact',
    projects: 'Projets',
    blog: 'Blog',
    gallery: 'Galerie',
    accueil: 'Accueil',
    projets: 'Projets',
    'à propos': 'À propos',
    blogs: 'Blog',
    galleries: 'Galerie',
    contacts: 'Contact',
    
    /**
     * Common UI elements
     */
    darkMode: 'Mode sombre',
    lightMode: 'Mode clair',
    language: 'Langue',
    english: 'Anglais',
    french: 'Français',
    
    /**
     * Call to action
     */
    getStarted: 'Commencer',
    learnMore: 'En savoir plus',
    
    /**
     * Form elements
     */
    submit: 'Soumettre',
    cancel: 'Annuler',
    
    /**
     * Footer
     */
    allRightsReserved: 'Tous droits réservés',
    privacyPolicy: 'Politique de confidentialité',
    termsOfService: 'Conditions d\'utilisation'
  }
};

/**
 * 
 * @param key Translation utility function
 * @param language 
 * @returns 
 */
export const t = (key: string, language: string): string => {
  const lang = language === 'fr' ? 'fr' : 'en'; 
  const keys = key.split('.');
  
  let result = translations[lang];
  
  for (const k of keys) {
    if (result && result[k]) {
      result = result[k];
    } else {
      return key;
    }
  }
  
  return result as string;
};
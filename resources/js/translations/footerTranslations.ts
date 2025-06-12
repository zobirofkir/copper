export const translations = {
  en: {
    /**
     * Company Info
     */
    companyName: 'Arraid',
    companyDescription: 'Creators of Arraid excellence since 1990. Our craftsmanship at the service of your vision.',
    
    /**
     * Quick Links
     */
    quickLinks: 'Quick Links',
    home: 'Home',
    about: 'About',
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact',
    
    /**
     * Contact Info
     */
    contactTitle: 'Contact',
    address: '123 Arraid Street\n75001 Paris, France',
    phone: '+212 664-561079',
    email: 'contact@arraid.net',
    
    /**
     * Footer Bottom
     */
    copyright: '© {year} Arraid. All rights reserved by NL Digital Agency.',
    legalNotice: 'Legal Notice',
    privacyPolicy: 'Privacy Policy',
    termsOfSale: 'Terms of Sale'
  },
  fr: {
    /**
     * Company Info
     */
    companyName: 'Arraid',
    companyDescription: 'Créateurs d\'excellence en cuivre depuis 1990. Notre savoir-faire artisanal au service de votre vision.',
    
    /**
     * Quick Links
     */
    quickLinks: 'Liens Rapides',
    home: 'Accueil',
    about: 'À Propos',
    services: 'Services',
    portfolio: 'Portfolio',
    contact: 'Contact',
    
    /**
     * Contact Info
     */
    contactTitle: 'Contact',
    address: '123 Rue du Cuivre\n75001 Paris, France',
    phone: '+212 664-561079',
    email: 'contact@arraid.net',
    
    /**
     * Footer Bottom
     */
    copyright: '© {year} Arraid. Tous droits réservés par NL Digital Agency.',
    legalNotice: 'Mentions Légales',
    privacyPolicy: 'Politique de Confidentialité',
    termsOfSale: 'Conditions de Vente'
  }
};

/**
 * Translation utility function
 * @param key Translation key
 * @param language Current language
 * @param params Optional parameters for string interpolation
 * @returns Translated string
 */
export const t = (key: string, language: string, params?: Record<string, any>): string => {
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
  
  let translatedText = result as string;
  
  // Handle parameter interpolation
  if (params) {
    Object.keys(params).forEach(param => {
      translatedText = translatedText.replace(`{${param}}`, params[param]);
    });
  }
  
  return translatedText;
};

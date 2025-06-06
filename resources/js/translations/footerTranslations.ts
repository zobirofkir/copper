export const translations = {
  en: {
    /**
     * Company Info
     */
    companyName: 'Copper Artistry',
    companyDescription: 'Creators of copper excellence since 1990. Our craftsmanship at the service of your vision.',
    
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
    address: '123 Copper Street\n75001 Paris, France',
    phone: '+33 1 23 45 67 89',
    email: 'contact@copperartistry.com',
    
    /**
     * Footer Bottom
     */
    copyright: '© {year} Copper Artistry. All rights reserved.',
    legalNotice: 'Legal Notice',
    privacyPolicy: 'Privacy Policy',
    termsOfSale: 'Terms of Sale'
  },
  fr: {
    /**
     * Company Info
     */
    companyName: 'Copper Artistry',
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
    phone: '+33 1 23 45 67 89',
    email: 'contact@copperartistry.com',
    
    /**
     * Footer Bottom
     */
    copyright: '© {year} Copper Artistry. Tous droits réservés.',
    legalNotice: 'Mentions Légales',
    privacyPolicy: 'Politique de Confidentialité',
    termsOfSale: 'CGV'
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
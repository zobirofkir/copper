export const translations = {
  en: {
    /**
     * Section titles
     */
    ourPartners: 'Our Partners',
  },
  fr: {
    /**
     * Section titles
     */
    ourPartners: 'Nos Partenaires',
  }
};

/**
 * Translation utility function
 * @param key Translation key
 * @param language Current language
 * @returns Translated string
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
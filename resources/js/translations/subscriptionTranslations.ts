export const translations = {
  en: {
    /**
     * Section titles
     */
    subscriptionTitle: 'Subscribe to Our Newsletter',
    
    /**
     * Form labels
     */
    emailLabel: 'Email Address',
    nameLabel: 'Full Name',
    
    /**
     * Buttons
     */
    subscribeButton: 'Subscribe Now',
    
    /**
     * Messages
     */
    subscriptionBenefits: 'Get updates on new products, special offers, and artisan stories',
    privacyNotice: 'We respect your privacy and will never share your information',
    
    /**
     * Confirmation
     */
    thankYou: 'Thank you for subscribing!'
  },
  fr: {
    /**
     * Section titles
     */
    subscriptionTitle: 'Abonnez-vous à Notre Newsletter',
    
    /**
     * Form labels
     */
    emailLabel: 'Adresse Email',
    nameLabel: 'Nom Complet',
    
    /**
     * Buttons
     */
    subscribeButton: 'S\'abonner Maintenant',
    
    /**
     * Messages
     */
    subscriptionBenefits: 'Recevez des mises à jour sur les nouveaux produits, les offres spéciales et les histoires d\'artisans',
    privacyNotice: 'Nous respectons votre vie privée et ne partagerons jamais vos informations',
    
    /**
     * Confirmation
     */
    thankYou: 'Merci de vous être abonné!'
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
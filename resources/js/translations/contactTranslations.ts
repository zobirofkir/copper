export const translations = {
  en: {
    /**
     * Section title
     */
    contactUs: 'Contact Us',
    
    /**
     * Form labels
     */
    name: 'Name',
    email: 'Email',
    subject: 'Subject',
    message: 'Message',
    send: 'Send',
    
    /**
     * Contact info
     */
    address: 'Address',
    addressValue: '123 Copper Street\n75001 Paris, France',
    phone: 'Phone',
    phoneValue: '+33 1 23 45 67 89',
    emailLabel: 'Email',
    emailValue: 'contact@copperartistry.com',
    openingHours: 'Opening Hours',
    openingHoursValue: 'Mon - Fri: 9am - 6pm\nSat: 10am - 4pm'
  },
  fr: {
    /**
     * Section title
     */
    contactUs: 'Contactez-nous',
    
    /**
     * Form labels
     */
    name: 'Nom',
    email: 'Email',
    subject: 'Sujet',
    message: 'Message',
    send: 'Envoyer',
    
    /**
     * Contact info
     */
    address: 'Adresse',
    addressValue: '123 Rue du Cuivre\n75001 Paris, France',
    phone: 'Téléphone',
    phoneValue: '+33 1 23 45 67 89',
    emailLabel: 'Email',
    emailValue: 'contact@copperartistry.com',
    openingHours: 'Heures d\'ouverture',
    openingHoursValue: 'Lun - Ven: 9h - 18h\nSam: 10h - 16h'
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
export const translations = {
  en: {
    /**
     * Section titles
     */
    projects: 'Projects',
    ourWork: 'Our Work',
    
    /**
     * Filter categories
     */
    all: 'All',
    residential: 'Residential',
    commercial: 'Commercial',
    industrial: 'Industrial',
    
    /**
     * Project descriptions
     */
    viewProject: 'View Project',
    projectDetails: 'Project Details',
    
    /**
     * Call to action
     */
    contactUs: 'Contact Us',
    startProject: 'Start Your Project'
  },
  fr: {
    /**
     * Section titles
     */
    projects: 'Projets',
    ourWork: 'Notre Travail',
    
    /**
     * Filter categories
     */
    all: 'Tous',
    residential: 'Résidentiel',
    commercial: 'Commercial',
    industrial: 'Industriel',
    
    /**
     * Project descriptions
     */
    viewProject: 'Voir le Projet',
    projectDetails: 'Détails du Projet',
    
    /**
     * Call to action
     */
    contactUs: 'Contactez-Nous',
    startProject: 'Démarrer Votre Projet'
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
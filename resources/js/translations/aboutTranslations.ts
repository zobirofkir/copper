export const translations = {
  en: {
    /**
     * Section titles
     */
    aboutUs: 'About Us',
    ourCopperHeritage: 'Our Copper Heritage',
    
    /**
     * Content paragraphs
     */
    experienceDescription: 'For more than three decades, our company has been dedicated to excellence in copper craftsmanship. We combine traditional techniques with modern innovations to create copper products of the highest quality.',
    commitmentDescription: 'Our commitment to sustainability and craftsmanship sets us apart in the industry. Each piece we produce reflects our passion for this noble and versatile metal.',
    
    /**
     * Stats and metrics
     */
    yearsExperience: 'Years of Experience',
    customerSatisfaction: 'Customer Satisfaction',
    
    /**
     * Call to action
     */
    learnMore: 'Learn More'
  },
  fr: {
    /**
     * Section titles
     */
    aboutUs: 'À Propos de Nous',
    ourCopperHeritage: 'Notre Héritage de Cuivre',
    
    /**
     * Content paragraphs
     */
    experienceDescription: 'Depuis plus de trois décennies, notre entreprise s\'est consacrée à l\'excellence dans le travail du cuivre. Nous combinons des techniques traditionnelles avec des innovations modernes pour créer des produits en cuivre de la plus haute qualité.',
    commitmentDescription: 'Notre engagement envers la durabilité et l\'artisanat nous distingue dans l\'industrie. Chaque pièce que nous produisons reflète notre passion pour ce métal noble et polyvalent.',
    
    /**
     * Stats and metrics
     */
    yearsExperience: 'Années d\'Expérience',
    customerSatisfaction: 'Satisfaction Client',
    
    /**
     * Call to action
     */
    learnMore: 'En Savoir Plus'
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
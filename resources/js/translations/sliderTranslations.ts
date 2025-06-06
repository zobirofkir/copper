export const sliderTranslations = {
  en: {
    // Navigation
    previousSlide: 'Previous slide',
    nextSlide: 'Next slide',
    goToSlide: 'Go to slide',
    
    // Button text
    learnMore: 'Learn More',
    enSavoirPlus: 'Learn More',
    
    // Slide titles
    'Excellence en Cuivre': 'Copper Excellence',
    'Cuivre Durable': 'Sustainable Copper',
    'Innovation en Cuivre': 'Copper Innovation',
    'Artisanat du Cuivre': 'Copper Craftsmanship',
    
    // Slide descriptions
    'Solutions en cuivre premium avec une qualité et une durabilité inégalées': 
      'Premium copper solutions with unmatched quality and durability',
    'Approvisionnement et traitement du cuivre écologiquement responsables': 
      'Environmentally responsible copper sourcing and processing',
    'Applications avancées du cuivre pour les besoins industriels modernes': 
      'Advanced copper applications for modern industrial needs',
    'Produits en cuivre de qualité artisanale avec une finition exceptionnelle': 
      'Artisanal quality copper products with exceptional finishing'
  },
  fr: {
    // Navigation
    previousSlide: 'Diapositive précédente',
    nextSlide: 'Diapositive suivante',
    goToSlide: 'Aller à la diapositive',
    
    // Button text
    learnMore: 'En savoir plus',
    enSavoirPlus: 'En savoir plus',
    
    // Slide titles
    'Copper Excellence': 'Excellence en Cuivre',
    'Sustainable Copper': 'Cuivre Durable',
    'Copper Innovation': 'Innovation en Cuivre',
    'Copper Craftsmanship': 'Artisanat du Cuivre',
    
    // Slide descriptions
    'Premium copper solutions with unmatched quality and durability': 
      'Solutions en cuivre premium avec une qualité et une durabilité inégalées',
    'Environmentally responsible copper sourcing and processing': 
      'Approvisionnement et traitement du cuivre écologiquement responsables',
    'Advanced copper applications for modern industrial needs': 
      'Applications avancées du cuivre pour les besoins industriels modernes',
    'Artisanal quality copper products with exceptional finishing': 
      'Produits en cuivre de qualité artisanale avec une finition exceptionnelle'
  }
};

export const getSliderTranslation = (key: string, language: string): string => {
  const lang = language === 'fr' ? 'fr' : 'en';
  return sliderTranslations[lang][key] || key;
};
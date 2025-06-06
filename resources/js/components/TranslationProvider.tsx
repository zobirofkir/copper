import React, { createContext, useContext, ReactNode } from 'react';
import { useLanguage } from './header/useLanguage';
import { t } from '../translations/headerTranslations';

// Create context
interface TranslationContextType {
  language: string;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

// Provider component
interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const { language, toggleLanguage } = useLanguage();
  
  // Translation function that uses the current language
  const translate = (key: string): string => {
    return t(key, language);
  };
  
  return (
    <TranslationContext.Provider value={{ language, toggleLanguage, t: translate }}>
      {children}
    </TranslationContext.Provider>
  );
};

// Custom hook to use the translation context
export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  
  if (context === undefined) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  
  return context;
};

export default TranslationProvider;
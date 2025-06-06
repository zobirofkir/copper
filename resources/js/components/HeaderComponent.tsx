import React, { useEffect } from 'react';
import { useHeaderComponent } from '../hooks/useHeaderComponent';
import { useLanguage } from './header/useLanguage';
import TopBar from './header/TopBar';
import HeaderMain from './header/HeaderMain';
import MobileNav from './header/MobileNav';

const HeaderComponent: React.FC = () => {
  const [state, actions] = useHeaderComponent();
  const { language, toggleLanguage, translate } = useLanguage();
  const { isOpen, isDarkMode, menuItems } = state;
  const { setIsOpen } = actions;
  
  // Update document title based on language
  useEffect(() => {
    document.title = translate('copper') || 'Copper';
  }, [language, translate]);

  return (
    <>
      {/* Top Bar with Contact Info and Social Icons */}
      <TopBar isDarkMode={isDarkMode} />

      {/* Main Header with Navigation */}
      <HeaderMain 
        state={state} 
        actions={actions} 
        language={language} 
        toggleLanguage={toggleLanguage} 
      />

      {/* Mobile Navigation Menu */}
      <MobileNav 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        isDarkMode={isDarkMode} 
        menuItems={menuItems}
        language={language}
      />
    </>
  );
};

export default HeaderComponent;
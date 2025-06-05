export interface MenuItem {
  title: string;
  href: string;
}

export interface SocialIcon {
  icon: React.ReactNode;
  name: string;
  color: string;
}

export interface HeaderComponentState {
  isOpen: boolean;
  isDarkMode: boolean;
  scrolled: boolean;
  menuItems: MenuItem[];
  headerVariants: any;
  mobileMenuVariants: any;
  linkVariants: any;
}

export interface HeaderComponentActions {
  setIsOpen: (isOpen: boolean) => void;
  toggleDarkMode: () => void;
}
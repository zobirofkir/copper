import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ isOpen, setIsOpen }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setIsOpen(!isOpen)}
      className="p-2 rounded-md transition-all duration-300 text-white hover:bg-amber-700/50"
      aria-label="Open menu"
    >
      {isOpen ? <X size={24} /> : <Menu size={24} />}
    </motion.button>
  );
};

export default MobileMenuButton;
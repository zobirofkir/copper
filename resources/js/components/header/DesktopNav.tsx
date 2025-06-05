import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { MenuItem } from './types';
import { navItemVariants } from './animations';

interface DesktopNavProps {
  menuItems: MenuItem[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ menuItems }) => {
  return (
    <div className="hidden md:flex items-center space-x-1 lg:space-x-6">
      {menuItems.map((item, index) => (
        <motion.div 
          key={item.title} 
          custom={index}
          variants={navItemVariants}
          whileHover="hover"
        >
          <Link
            href={item.href}
            className="px-3 py-2 text-sm lg:text-base font-medium transition-all duration-200 relative group"
          >
            {item.title}
            <motion.span 
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300"
            />
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default DesktopNav;
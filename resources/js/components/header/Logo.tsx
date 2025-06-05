import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';
import { logoVariants } from './animations';
import LogoImage from '../../assets/logo/logo.jpg';

const Logo: React.FC = () => {
  return (
    <motion.div
      variants={logoVariants}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="text-2xl font-bold relative"
    >
      <Link href="/" className="flex items-center gap-2">
        <div className="relative group">
          <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-amber-400 to-amber-600 opacity-75 group-hover:opacity-100 blur-sm transition duration-300"></div>
          <img 
            src={LogoImage} 
            className="md:w-16 w-11 md:h-16 h-11 rounded-full object-cover border-2 border-amber-500 shadow-md relative"
            alt="Copper Artistry Logo"
          />
        </div>
        <span className="hidden sm:block font-serif tracking-wide text-lg">
          <span className="text-amber-400 font-bold">Cop</span>
          <span className="font-light">per</span>
        </span>
      </Link>
    </motion.div>
  );
};

export default Logo;
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from '@inertiajs/react';

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 fixed bottom-0 left-0 w-full border-t dark:border-gray-800 dark:bg-black dark:text-white bg-white text-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">          
          <div className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} arraid. Tous droits réservés.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
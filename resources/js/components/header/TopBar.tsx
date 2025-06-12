import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Video, Instagram } from 'lucide-react';
import { SocialIcon } from './types';
import { socialIconVariants } from './animations';

interface TopBarProps {
  isDarkMode: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ isDarkMode }) => {
  const socialIcons: SocialIcon[] = [
    { icon: <Instagram size={16} />, name: 'Instagram', color: 'hover:text-pink-600' },
    { icon: <Phone size={16} />, name: 'WhatsApp', color: 'hover:text-green-500' },
    { icon: <Video size={16} />, name: 'TikTok', color: 'hover:text-blue-400' }
  ];

  return (
    <div className={`w-full py-2 px-4 transition-colors duration-300 overflow-hidden ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-amber-50 text-gray-800'
    }`}>
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Left Side Contact Info */}
        <div className="flex space-x-4 mb-2 sm:mb-0 text-sm">
          <span className="md:flex hidden items-center gap-1">
            <Phone size={14} className="text-amber-600" />
            <span className="hidden sm:inline">+212 664-561079</span>
          </span>
          <span className="md:flex hidden md:flex items-center gap-1">
            <Video size={14} className="text-amber-600" />
            <span>contact@arraid.net</span>
          </span>
        </div>
        
        {/* Right Side Social Icons */}
        <div className="flex items-center space-x-3">
          {socialIcons.map((social, index) => (
            <motion.a
              key={social.name}
              href="#"
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={socialIconVariants}
              className={`p-1.5 rounded-full flex items-center justify-center transition-colors ${
                isDarkMode 
                  ? 'bg-gray-800 hover:bg-gray-700' 
                  : 'bg-white hover:bg-gray-200'
              } ${social.color}`}
              aria-label={social.name}
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
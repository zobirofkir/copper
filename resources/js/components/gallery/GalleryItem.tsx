import React from "react";
import { motion } from "framer-motion";
import { GalleryItem as GalleryItemType } from "./types";
import { itemVariants } from "./animations";

interface GalleryItemProps {
  photo: GalleryItemType;
  index: number;
  isLoaded: boolean;
  onClick: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ 
  photo, 
  index, 
  isLoaded, 
  onClick 
}) => {
  return (
    <motion.div
      custom={index}
      variants={itemVariants}
      className="group relative cursor-pointer overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
      onClick={onClick}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
    >
      <div className="aspect-w-4 aspect-h-3 overflow-hidden">
        <motion.img
          src={photo.src}
          alt={photo.alt || `Photo ${index + 1}`}
          className="w-full h-90 object-cover transform transition-transform duration-700 ease-in-out"
          initial={{ scale: 1.2, filter: "grayscale(100%)" }}
          animate={{ 
            scale: isLoaded ? 1 : 1.2,
            filter: "grayscale(0%)"
          }}
          transition={{ duration: 1.2 }}
          whileHover={{ scale: 1.05 }}
        />
      </div>
    
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Border animation */}
      <motion.div 
        className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <p className="text-white text-lg font-medium tracking-wide">{photo.alt || `Photo ${index + 1}`}</p>
        <div className="w-10 h-0.5 bg-white/70 mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>
    </motion.div>
  );
};

export default GalleryItem;
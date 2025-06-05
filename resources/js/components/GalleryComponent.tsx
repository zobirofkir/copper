import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { GalleryData } from "@/data/GalleryData";

const GalleryComponent = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    setIsLoaded(true);
    controls.start("visible");
  }, [controls]);

  const openPhotoModal = (photo: any, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const navigatePhoto = (direction: number) => {
    const newIndex = (currentIndex + direction + GalleryData.length) % GalleryData.length;
    setSelectedPhoto(GalleryData[newIndex]);
    setCurrentIndex(newIndex);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl relative">
      {/* Decorative elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute inset-0 pointer-events-none overflow-hidden"
      >
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-br from-gray-400 to-transparent opacity-20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-tr from-gray-400 to-transparent opacity-20 blur-3xl" />
      </motion.div>

      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-6"
      />
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center text-gray-900 dark:text-gray-100 tracking-tight"
      >
        Galerie Photos
      </motion.h2>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "120px" }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent mx-auto mb-12"
      />
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
      >
        {GalleryData.map((photo, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={itemVariants}
            className="group relative cursor-pointer overflow-hidden  shadow-xl hover:shadow-2xl transition-all duration-500"
            onClick={() => openPhotoModal(photo, index)}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.3 }
            }}
          >
            <div className="aspect-w-4 aspect-h-3 overflow-hidden">
              <motion.img
                src={photo.src}
                alt={photo.alt}
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
              <p className="text-white text-lg font-medium tracking-wide">{photo.alt}</p>
              <div className="w-10 h-0.5 bg-white/70 mt-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="relative max-w-6xl w-full px-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 25 
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image container with subtle border */}
              <div className="relative overflow-hidden">
                <motion.img
                  src={selectedPhoto.src}
                  alt={selectedPhoto.alt}
                  className="w-full max-h-[85vh] object-contain shadow-2xl"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                />
                
                {/* Subtle border glow */}
                <motion.div 
                  className="absolute inset-0 pointer-events-none border border-white/10 shadow-[0_0_25px_rgba(255,255,255,0.1)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                />
              </div>
              
              {/* Navigation buttons with improved styling */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2 flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-black/40 border border-white/20 text-white transition-all duration-300 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhoto(-1);
                  }}
                  aria-label="Photo précédente"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
              </div>
              
              <div className="absolute top-1/2 right-4 -translate-y-1/2 flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-black/40 border border-white/20 text-white transition-all duration-300 backdrop-blur-sm"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigatePhoto(1);
                  }}
                  aria-label="Photo suivante"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              </div>
              
              {/* Close button with improved styling */}
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 bg-black/40 border border-white/20 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhoto(null);
                }}
                aria-label="Fermer"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </motion.button>
              
              {/* Enhanced caption */}
              <motion.div 
                className="absolute bottom-6 left-0 right-0 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="inline-block backdrop-blur-md bg-black/50 px-6 py-3 rounded-sm border border-white/10">
                  <p className="text-white text-lg font-medium mb-1">{selectedPhoto.alt}</p>
                  <div className="flex items-center justify-center space-x-2 text-white/70 text-sm">
                    <span>{currentIndex + 1}/{GalleryData.length}</span>
                    <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                    <span>Portfolio</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryComponent;

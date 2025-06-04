import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryData } from "@/data/GalleryData";

const GalleryComponent = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openPhotoModal = (photo: any, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const navigatePhoto = (direction: number) => {
    const newIndex = (currentIndex + direction + GalleryData.length) % GalleryData.length;
    setSelectedPhoto(GalleryData[newIndex]);
    setCurrentIndex(newIndex);
  };

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-900 dark:text-gray-100 tracking-tight">
        Galerie Photos
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {GalleryData.map((photo, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => openPhotoModal(photo, index)}
          >
            <div className="aspect-w-4 aspect-h-3 overflow-hidden">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full min-h-[85vh] object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
              />
            </div>
            <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-20 dark:group-hover:bg-opacity-30 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-sm font-medium">{photo.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="relative max-w-5xl w-full px-4"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 30 
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-gray-800/20 dark:border-white/10"
              />
              
              {/* Navigation buttons */}
              <div className="absolute top-1/2 left-4 -translate-y-1/2 flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
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
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors"
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
              
              {/* Close button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition-colors"
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
              
              {/* Caption */}
              <motion.div 
                className="absolute bottom-4 left-0 right-0 text-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-white bg-black/40 inline-block px-4 py-2 rounded-full text-sm">
                  {selectedPhoto.alt} • {currentIndex + 1}/{GalleryData.length}
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryComponent;

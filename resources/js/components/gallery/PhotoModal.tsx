import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryItem } from "./types";

interface PhotoModalProps {
  selectedPhoto: GalleryItem | null;
  currentIndex: number;
  totalPhotos: number;
  onClose: () => void;
  onNavigate: (direction: number) => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({
  selectedPhoto,
  currentIndex,
  totalPhotos,
  onClose,
  onNavigate
}) => {
  if (!selectedPhoto) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={onClose}
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
              alt={selectedPhoto.alt || `Photo ${currentIndex + 1}`}
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
                onNavigate(-1);
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
                onNavigate(1);
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
              onClose();
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
              <p className="text-white text-lg font-medium mb-1">{selectedPhoto.alt || `Photo ${currentIndex + 1}`}</p>
              <div className="flex items-center justify-center space-x-2 text-white/70 text-sm">
                <span>{currentIndex + 1}/{totalPhotos}</span>
                <span className="w-1 h-1 bg-white/50 rounded-full"></span>
                <span>{selectedPhoto.category_title || 'Portfolio'}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PhotoModal;
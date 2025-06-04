import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryData } from "@/data/GalleryData";

const GalleryComponent = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);


  return (
    <div className="container mx-auto mt-10 px-4 py-16">
      <h2 className="text-4xl md:text-5xl  font-extrabold mb-10 text-center text-gray-800 dark:text-white">
        Photo Gallery
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {GalleryData.map((photo, index) => (
          <div
            key={index}
            className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition duration-300"
            onClick={() => setSelectedPhoto(photo)}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="w-full h-60 object-cover transform group-hover:scale-105 transition duration-300"
            />
            <div className="absolute inset-0  bg-opacity-10 group-hover:bg-opacity-30 transition duration-300" />
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full px-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
              />
              <button
                className="absolute top-3 right-3 bg-white/10 md:mr-2 mr-0 text-white hover:bg-white/20 p-2 rounded-full transition"
                onClick={() => setSelectedPhoto(null)}
                aria-label="Close"
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
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryComponent;

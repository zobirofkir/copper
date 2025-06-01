import React from 'react';
import PhotoAlbum from 'react-photo-album';
import { motion } from 'framer-motion';

const photos = [
  { src: '/images/photo1.jpg', width: 800, height: 600 },
  { src: '/images/photo2.jpg', width: 1200, height: 800 },
  { src: '/images/photo3.jpg', width: 600, height: 800 },
  { src: '/images/photo4.jpg', width: 900, height: 600 },
  
];

const GalleryComponent = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <motion.h1
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-8 text-gray-800"
      >
        Our Photo Gallery
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <PhotoAlbum
          layout="masonry"
          photos={photos}
          spacing={10}
          columns={(containerWidth) => {
            if (containerWidth < 640) return 1;
            if (containerWidth < 1024) return 2;
            return 3;
          }}
        />
      </motion.div>
    </div>
  );
};

export default GalleryComponent;

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { GalleryItem as GalleryItemType } from "./types";
import GalleryItem from "./GalleryItem";
import { containerVariants } from "./animations";

interface GalleryGridProps {
  galleries: GalleryItemType[];
  isLoaded: boolean;
  loading: boolean;
  controls: ReturnType<typeof useAnimation>;
  onPhotoClick: (photo: GalleryItemType, index: number) => void;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({
  galleries,
  isLoaded,
  loading,
  controls,
  onPhotoClick
}) => {
  // Reset animation when galleries change
  useEffect(() => {
    controls.set("hidden");
    controls.start("visible");
  }, [galleries, controls]);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-gray-100"></div>
      </div>
    );
  }

  if (galleries.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-xl text-gray-600 dark:text-gray-400">No gallery images found for this category.</p>
      </div>
    );
  }

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
    >
      {galleries.map((photo, index) => (
        <GalleryItem
          key={photo.id}
          photo={photo}
          index={index}
          isLoaded={isLoaded}
          onClick={() => onPhotoClick(photo, index)}
        />
      ))}
    </motion.div>
  );
};

export default GalleryGrid;
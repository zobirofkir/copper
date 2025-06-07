import React, { useState, useEffect, useCallback, useMemo } from "react";
import { useAnimation } from "framer-motion";
import {
  CategoryFilter,
  DecorativeElements,
  GalleryGrid,
  PhotoModal,
  GalleryProps,
  GalleryItem
} from "./gallery";

const GalleryComponent: React.FC<GalleryProps> = ({ galleries, categories = [] }) => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const controls = useAnimation();

  const filteredGalleries = useMemo(() => {
    return selectedCategory
      ? galleries.filter(g => g.category_id === selectedCategory)
      : galleries;
  }, [galleries, selectedCategory]);

  useEffect(() => {
    setIsLoaded(true);
    controls.start("visible");
  }, [controls]);

  const handleCategoryChange = useCallback((categoryId: number | null) => {
    setSelectedCategory(categoryId);
    controls.set("hidden");
    setTimeout(() => {
      controls.start("visible");
    }, 50);
  }, [controls]);

  const openPhotoModal = useCallback((photo: GalleryItem, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  }, []);

  const navigatePhoto = useCallback((direction: number) => {
    setCurrentIndex(prevIndex => {
      const newIndex = (prevIndex + direction + filteredGalleries.length) % filteredGalleries.length;
      setSelectedPhoto(filteredGalleries[newIndex]);
      return newIndex;
    });
  }, [filteredGalleries]);

  const closePhotoModal = useCallback(() => setSelectedPhoto(null), []);

  return (
    <div className="container mx-auto px-4 py-16 max-w-7xl relative">
      <DecorativeElements />
      
      <CategoryFilter 
        categories={categories} 
        selectedCategory={selectedCategory} 
        onCategoryChange={handleCategoryChange} 
      />
      
      <GalleryGrid 
        galleries={filteredGalleries}
        isLoaded={isLoaded}
        loading={loading}
        controls={controls}
        onPhotoClick={openPhotoModal}
      />

      {selectedPhoto && (
        <PhotoModal 
          selectedPhoto={selectedPhoto}
          currentIndex={currentIndex}
          totalPhotos={filteredGalleries.length}
          onClose={closePhotoModal}
          onNavigate={navigatePhoto}
        />
      )}
    </div>
  );
};

export default React.memo(GalleryComponent);
